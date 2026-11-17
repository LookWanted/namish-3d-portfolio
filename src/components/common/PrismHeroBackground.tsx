import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Accurate visible spectrum color mapping (nm -> RGB)
function wavelengthToRGB(nm: number): [number, number, number] {
  let r = 0, g = 0, b = 0;
  if (nm >= 390 && nm < 440) {
    r = -(nm - 440) / (440 - 390);
    g = 0;
    b = 1.0;
  } else if (nm >= 440 && nm < 490) {
    r = 0;
    g = (nm - 440) / (490 - 440);
    b = 1.0;
  } else if (nm >= 490 && nm < 510) {
    r = 0;
    g = 1.0;
    b = -(nm - 510) / (510 - 490);
  } else if (nm >= 510 && nm < 580) {
    r = (nm - 510) / (580 - 510);
    g = 1.0;
    b = 0;
  } else if (nm >= 580 && nm < 645) {
    r = 1.0;
    g = -(nm - 645) / (645 - 580);
    b = 0;
  } else if (nm >= 645 && nm <= 750) {
    r = 1.0;
    g = 0;
    b = 0;
  }

  // Smooth spectral envelope
  let factor = 1.0;
  if (nm < 420) factor = 0.4 + 0.6 * (nm - 390) / 30;
  else if (nm > 660) factor = 0.4 + 0.6 * (750 - nm) / 90;

  return [
    Math.round(Math.min(255, Math.max(0, r * factor * 255))),
    Math.round(Math.min(255, Math.max(0, g * factor * 255))),
    Math.round(Math.min(255, Math.max(0, b * factor * 255)))
  ];
}

interface DustMote {
  t: number;
  offset: number;
  radius: number;
  alpha: number;
  speed: number;
  twinklePhase: number;
}

export const PrismHeroBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glCanvasRef = useRef<HTMLCanvasElement>(null);
  const fxCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const glCanvas = glCanvasRef.current;
    const fxCanvas = fxCanvasRef.current;
    if (!container || !glCanvas || !fxCanvas) return;

    let animId: number;
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Pointer state with smooth interpolation
    const pointer = {
      x: 0.65,
      y: 0.55,
      targetX: 0.65,
      targetY: 0.55,
      lastInteraction: Date.now()
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      const rect = container.getBoundingClientRect();
      const cx = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const cy = 'touches' in e ? e.touches[0].clientY : e.clientY;
      pointer.targetX = Math.max(0.02, Math.min(0.98, (cx - rect.left) / rect.width));
      pointer.targetY = Math.max(0.02, Math.min(0.98, (cy - rect.top) / rect.height));
      pointer.lastInteraction = Date.now();
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });

    // --- THREE.JS PHOTOREALISTIC GLASS PRISM SETUP ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 2000);
    camera.position.set(0, 0, 750);

    const renderer = new THREE.WebGLRenderer({
      canvas: glCanvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    // Studio lighting vertex & fragment shaders for photorealistic crystal glass
    const glassVertexShader = `
      varying vec3 vWorldPosition;
      varying vec3 vNormal;
      varying vec3 vViewDir;

      void main() {
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPos.xyz;
        vNormal = normalize(mat3(modelMatrix) * normal);
        vViewDir = normalize(cameraPosition - worldPos.xyz);
        gl_Position = projectionMatrix * viewMatrix * worldPos;
      }
    `;

    const glassFragmentShader = `
      varying vec3 vWorldPosition;
      varying vec3 vNormal;
      varying vec3 vViewDir;

      // Studio environment lights (mathematically aligned to catch beveled chamfers)
      vec3 sampleStudio(vec3 R) {
        // 1. Dominant right key panel: aligned to right chamfer reflection (0.814, 0.470, -0.342)
        vec3 keyDir = normalize(vec3(0.814, 0.470, -0.342));
        float keyDot = dot(R, keyDir);
        float keyHighlight = 0.0;
        if (keyDot > 0.0) {
          keyHighlight = pow(keyDot, 50.0) * 16.0 + pow(keyDot, 14.0) * 5.0;
        }

        // 2. Soft left fill panel: aligned to left chamfer reflection (-0.814, 0.470, -0.342)
        vec3 rimDir = normalize(vec3(-0.814, 0.470, -0.342));
        float rimDot = dot(R, rimDir);
        float rimHighlight = 0.0;
        if (rimDot > 0.0) {
          rimHighlight = pow(rimDot, 22.0) * 3.5 + pow(rimDot, 8.0) * 1.5;
        }

        // 3. Crisp bottom floor panel: aligned to base chamfer reflection (0.0, -0.939, -0.343)
        vec3 btmDir = normalize(vec3(0.0, -0.939, -0.343));
        float btmDot = dot(R, btmDir);
        float btmHighlight = 0.0;
        if (btmDot > 0.0) {
          btmHighlight = pow(btmDot, 30.0) * 4.0;
        }

        // 4. Overhead strip
        vec3 topDir = normalize(vec3(0.0, 0.70, -0.71));
        float topDot = max(0.0, dot(R, topDir));
        float topHighlight = pow(topDot, 24.0) * 2.5;

        // Dark ambient room reflection
        vec3 room = mix(vec3(0.02, 0.025, 0.035), vec3(0.045, 0.055, 0.075), R.y * 0.5 + 0.5);

        return room + 
               vec3(0.85, 0.94, 1.0) * keyHighlight + 
               vec3(0.75, 0.85, 0.95) * rimHighlight + 
               vec3(0.90, 0.92, 0.96) * btmHighlight +
               vec3(1.0, 1.0, 1.0) * topHighlight;
      }

      void main() {
        vec3 N = normalize(vNormal);
        vec3 V = normalize(vViewDir);
        vec3 R = reflect(-V, N);

        float facing = clamp(dot(V, N), 0.0, 1.0);
        // Dielectric Fresnel for dense flint crystal glass (IOR 1.645)
        float F0 = 0.0593;
        float fresnel = F0 + (1.0 - F0) * pow(1.0 - facing, 3.8);

        vec3 studioRadiance = sampleStudio(R);

        // Dark smoky crystal body
        vec3 glassBody = vec3(0.025, 0.035, 0.050);

        // Chamfer edge glint
        float edgeGlint = pow(1.0 - facing, 2.5);

        // Combine crystal transmission + specular reflection
        vec3 finalColor = glassBody * (1.0 - fresnel * 0.75) + 
                          studioRadiance * fresnel * 0.85 + 
                          vec3(0.92, 0.96, 1.0) * edgeGlint * 0.32;

        // Soft filmic shoulder
        finalColor = finalColor / (1.0 + finalColor * 0.5);

        // Alpha: front inner window is translucent so light shines through;
        // beveled facets and sides are denser with brilliant specular gleam
        float alpha = clamp(0.24 + fresnel * 0.68 + length(studioRadiance) * 0.09 + edgeGlint * 0.35, 0.20, 0.98);

        gl_FragColor = vec4(finalColor, alpha);
      }
    `;

    const glassMaterial = new THREE.ShaderMaterial({
      vertexShader: glassVertexShader,
      fragmentShader: glassFragmentShader,
      transparent: true,
      depthWrite: true,
      side: THREE.DoubleSide
    });

    let prismMesh: THREE.Mesh;

    // Build faceted equilateral triangular prism with precision chamfered bevels & inner depth
    function buildFacetedPrismGeometry(side: number, depth: number) {
      const geo = new THREE.BufferGeometry();
      const R = side / Math.sqrt(3);

      // Outer equilateral triangle vertices (apex up)
      const A = new THREE.Vector2(0, R);
      const B = new THREE.Vector2(side / 2, -R / 2);
      const C = new THREE.Vector2(-side / 2, -R / 2);

      // Inset scale for inner face (creates the prominent ~7.5% chamfer bevel border)
      const bevelRatio = 0.075;
      const k = 1.0 - bevelRatio * (2 * Math.sqrt(3)); // ~0.74
      const Ain = new THREE.Vector2(0, k * R);
      const Bin = new THREE.Vector2(k * side / 2, -k * R / 2);
      const Cin = new THREE.Vector2(-k * side / 2, -k * R / 2);

      const halfDepth = depth / 2;
      const bevelDepth = depth * 0.22;

      const zFrontInner = halfDepth;
      const zFrontOuter = halfDepth - bevelDepth;
      const zBackOuter = -halfDepth + bevelDepth;
      const zBackInner = -halfDepth;

      const positions: number[] = [];
      const normals: number[] = [];

      function addTri(
        p1: [number, number, number],
        p2: [number, number, number],
        p3: [number, number, number],
        n?: [number, number, number]
      ) {
        let norm = n;
        if (!norm) {
          const vA = new THREE.Vector3(...p1);
          const vB = new THREE.Vector3(...p2);
          const vC = new THREE.Vector3(...p3);
          const ab = new THREE.Vector3().subVectors(vB, vA);
          const ac = new THREE.Vector3().subVectors(vC, vA);
          const cross = new THREE.Vector3().crossVectors(ab, ac).normalize();
          norm = [cross.x, cross.y, cross.z];
        }

        positions.push(...p1, ...p2, ...p3);
        normals.push(...norm, ...norm, ...norm);
      }

      // 1. FRONT INNER FACE (Flat transparent crystal window, normal = 0, 0, 1)
      addTri(
        [Ain.x, Ain.y, zFrontInner],
        [Cin.x, Cin.y, zFrontInner],
        [Bin.x, Bin.y, zFrontInner],
        [0, 0, 1]
      );

      // 2. FRONT BEVEL CHAMFERS (Outward-facing trapezoids, 2 triangles each)
      // Right Front Chamfer
      addTri(
        [Ain.x, Ain.y, zFrontInner],
        [B.x, B.y, zFrontOuter],
        [A.x, A.y, zFrontOuter]
      );
      addTri(
        [Ain.x, Ain.y, zFrontInner],
        [Bin.x, Bin.y, zFrontInner],
        [B.x, B.y, zFrontOuter]
      );

      // Base Front Chamfer
      addTri(
        [Bin.x, Bin.y, zFrontInner],
        [C.x, C.y, zFrontOuter],
        [B.x, B.y, zFrontOuter]
      );
      addTri(
        [Bin.x, Bin.y, zFrontInner],
        [Cin.x, Cin.y, zFrontInner],
        [C.x, C.y, zFrontOuter]
      );

      // Left Front Chamfer
      addTri(
        [Cin.x, Cin.y, zFrontInner],
        [A.x, A.y, zFrontOuter],
        [C.x, C.y, zFrontOuter]
      );
      addTri(
        [Cin.x, Cin.y, zFrontInner],
        [Ain.x, Ain.y, zFrontInner],
        [A.x, A.y, zFrontOuter]
      );

      // 3. THREE SIDE FACES (Between front outer rim and back outer rim)
      // Right Side Face
      addTri(
        [A.x, A.y, zFrontOuter],
        [B.x, B.y, zFrontOuter],
        [B.x, B.y, zBackOuter]
      );
      addTri(
        [A.x, A.y, zFrontOuter],
        [B.x, B.y, zBackOuter],
        [A.x, A.y, zBackOuter]
      );

      // Base Side Face
      addTri(
        [B.x, B.y, zFrontOuter],
        [C.x, C.y, zFrontOuter],
        [C.x, C.y, zBackOuter]
      );
      addTri(
        [B.x, B.y, zFrontOuter],
        [C.x, C.y, zBackOuter],
        [B.x, B.y, zBackOuter]
      );

      // Left Side Face
      addTri(
        [C.x, C.y, zFrontOuter],
        [A.x, A.y, zFrontOuter],
        [A.x, A.y, zBackOuter]
      );
      addTri(
        [C.x, C.y, zFrontOuter],
        [A.x, A.y, zBackOuter],
        [C.x, C.y, zBackOuter]
      );

      // 4. BACK BEVEL CHAMFERS
      // Right Back Chamfer
      addTri(
        [Ain.x, Ain.y, zBackInner],
        [A.x, A.y, zBackOuter],
        [B.x, B.y, zBackOuter]
      );
      addTri(
        [Ain.x, Ain.y, zBackInner],
        [B.x, B.y, zBackOuter],
        [Bin.x, Bin.y, zBackInner]
      );

      // Base Back Chamfer
      addTri(
        [Bin.x, Bin.y, zBackInner],
        [B.x, B.y, zBackOuter],
        [C.x, C.y, zBackOuter]
      );
      addTri(
        [Bin.x, Bin.y, zBackInner],
        [C.x, C.y, zBackOuter],
        [Cin.x, Cin.y, zBackInner]
      );

      // Left Back Chamfer
      addTri(
        [Cin.x, Cin.y, zBackInner],
        [C.x, C.y, zBackOuter],
        [A.x, A.y, zBackOuter]
      );
      addTri(
        [Cin.x, Cin.y, zBackInner],
        [A.x, A.y, zBackOuter],
        [Ain.x, Ain.y, zBackInner]
      );

      // 5. BACK INNER FACE (normal = 0, 0, -1)
      addTri(
        [Ain.x, Ain.y, zBackInner],
        [Bin.x, Bin.y, zBackInner],
        [Cin.x, Cin.y, zBackInner],
        [0, 0, -1]
      );

      geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geo.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
      return geo;
    }

    // Dust motes floating along incoming beam
    const dustMotes: DustMote[] = Array.from({ length: 65 }, () => ({
      t: Math.random(),
      offset: (Math.random() - 0.5) * 22,
      radius: 0.6 + Math.random() * 1.4,
      alpha: 0.25 + Math.random() * 0.65,
      speed: 0.0016 + Math.random() * 0.0022,
      twinklePhase: Math.random() * Math.PI * 2
    }));

    // Precompute 72 spectral wavelengths (415nm -> 685nm)
    const NUM_WAVELENGTHS = 72;
    const wavelengths: { nm: number; rgb: [number, number, number]; ior: number }[] = [];
    for (let i = 0; i < NUM_WAVELENGTHS; i++) {
      const nm = 415 + (i / (NUM_WAVELENGTHS - 1)) * (685 - 415);
      const um = nm * 1e-3;
      // High dispersion formula: n(λ) = 1.20 + 0.095 / λ²
      const ior = 1.20 + 0.095 / (um * um);
      wavelengths.push({
        nm,
        rgb: wavelengthToRGB(nm),
        ior
      });
    }

    // Geometry layout parameters (compact, elegant sizing)
    let sidePx = 280;
    let centroidX = width * 0.65;
    let centroidY = height * 0.50;

    function updateLayout() {
      width = container?.clientWidth || window.innerWidth;
      height = container?.clientHeight || window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      fxCanvas!.width = width;
      fxCanvas!.height = height;

      const isMobile = width < 820;
      if (isMobile) {
        sidePx = Math.min(width * 0.50, height * 0.26, 210);
        centroidX = width * 0.50;
        centroidY = height * 0.54;
      } else {
        // Desktop: Compact, perfectly proportioned sharp 3D crystal prism
        sidePx = Math.min(width * 0.21, height * 0.40, 280);
        centroidX = width * 0.65;
        centroidY = height * 0.50;
      }

      if (prismMesh) scene.remove(prismMesh);

      const prismDepth = sidePx * 0.45;
      const geo = buildFacetedPrismGeometry(sidePx, prismDepth);
      prismMesh = new THREE.Mesh(geo, glassMaterial);
      scene.add(prismMesh);

      // Map 2D pixel centroid into 3D world space at z = 0
      const vec = new THREE.Vector3(
        (centroidX / width) * 2 - 1,
        -(centroidY / height) * 2 + 1,
        0.5
      );
      vec.unproject(camera);
      const dir = vec.sub(camera.position).normalize();
      const dist = -camera.position.z / dir.z;
      const worldPos = camera.position.clone().add(dir.multiplyScalar(dist));

      prismMesh.position.set(worldPos.x, worldPos.y, 0);
    }

    updateLayout();

    const resizeObserver = new ResizeObserver(() => updateLayout());
    resizeObserver.observe(container);

    // --- ANIMATION & OPTICS SIMULATION LOOP ---
    const fxCtx = fxCanvas.getContext('2d');
    let startTime = performance.now();

    const render = (time: number) => {
      animId = requestAnimationFrame(render);
      const elapsed = (time - startTime) * 0.001;

      // Subtle idle breathing if user hasn't moved mouse for 3 seconds
      const isIdle = Date.now() - pointer.lastInteraction > 3000;
      if (isIdle) {
        pointer.targetX = 0.65 + Math.sin(elapsed * 0.35) * 0.07;
        pointer.targetY = 0.55 + Math.cos(elapsed * 0.28) * 0.08;
      }

      // Smooth pointer response
      pointer.x += (pointer.targetX - pointer.x) * 0.09;
      pointer.y += (pointer.targetY - pointer.y) * 0.09;

      // 3D Glass tilt & parallax rotation driven by cursor
      if (prismMesh) {
        prismMesh.rotation.y = (pointer.x - 0.65) * 0.25 + (isIdle ? Math.sin(elapsed * 0.4) * 0.012 : 0);
        prismMesh.rotation.x = -(pointer.y - 0.50) * 0.18 + (isIdle ? Math.cos(elapsed * 0.3) * 0.010 : 0);
        prismMesh.rotation.z = (pointer.x - 0.5) * 0.03;
      }

      // Render 3D WebGL Glass Scene
      renderer.render(scene, camera);

      // --- 2D DISPERSION RAY TRACING ON FX CANVAS ---
      if (!fxCtx) return;
      fxCtx.clearRect(0, 0, width, height);

      // 2D Triangle geometry (sharp equilateral triangle, apex up)
      const R = sidePx / Math.sqrt(3);
      const A: [number, number] = [centroidX, centroidY - R];
      const B: [number, number] = [centroidX + sidePx / 2, centroidY + R / 2];
      const C: [number, number] = [centroidX - sidePx / 2, centroidY + R / 2];

      // Right Face (A -> B)
      const rightEdge: [number, number] = [B[0] - A[0], B[1] - A[1]];
      const rightLen = Math.hypot(rightEdge[0], rightEdge[1]);
      const rightUnit: [number, number] = [rightEdge[0] / rightLen, rightEdge[1] / rightLen];
      const normalRight: [number, number] = [rightUnit[1], -rightUnit[0]]; // Unit outward normal
      const normalInward: [number, number] = [-normalRight[0], -normalRight[1]];

      // Left Face (C -> A)
      const leftEdge: [number, number] = [A[0] - C[0], A[1] - C[1]];
      const leftLen = Math.hypot(leftEdge[0], leftEdge[1]);
      const leftUnit: [number, number] = [leftEdge[0] / leftLen, leftEdge[1] / leftLen];
      const normalLeft: [number, number] = [leftUnit[1], -leftUnit[0]]; // Unit outward normal

      // Base Face (B -> C)
      const baseEdge: [number, number] = [C[0] - B[0], C[1] - B[1]];
      const baseLen = Math.hypot(baseEdge[0], baseEdge[1]);
      const baseUnit: [number, number] = [baseEdge[0] / baseLen, baseEdge[1] / baseLen];
      const normalBase: [number, number] = [baseUnit[1], -baseUnit[0]]; // Outward pointing down

      // Collimated beam width
      const beamThickness = sidePx * 0.055;
      const beamHalfWidth = beamThickness / 2;

      // FULL CURSOR INTERACTIVITY & PHYSICAL DISPERSION WINDOW:
      // Pointer X dynamically slides entry point up and down the right face (0.15 to 0.85)
      const centerT = 0.15 + pointer.x * 0.70;

      // Pointer Y controls incidence angle:
      // Top of screen (pointer.y < 0.38): incidence < 22° -> Total Internal Reflection at left face -> NO rainbow!
      // Bottom of screen (pointer.y >= 0.40): incidence 44° to 72° -> Full chromatic dispersion fan!
      const incidenceDeg = -10 + pointer.y * 82;
      const incRad = incidenceDeg * (Math.PI / 180);

      // Beam direction entering inwards: rotate inward normal by +incRad
      const cosI = Math.cos(incRad);
      const sinI = Math.sin(incRad);
      const beamDir: [number, number] = [
        normalInward[0] * cosI - normalInward[1] * sinI,
        normalInward[0] * sinI + normalInward[1] * cosI
      ];
      const beamNormal: [number, number] = [-beamDir[1], beamDir[0]];

      // Helper: Line-line intersection
      function lineIntersect(
        p1: [number, number],
        d: [number, number],
        q1: [number, number],
        q2: [number, number]
      ): { t: number; u: number; point: [number, number] } | null {
        const dx = q2[0] - q1[0];
        const dy = q2[1] - q1[1];
        const denom = d[0] * dy - d[1] * dx;
        if (Math.abs(denom) < 1e-6) return null;
        const t = ((q1[0] - p1[0]) * dy - (q1[1] - p1[1]) * dx) / denom;
        const u = ((q1[0] - p1[0]) * d[1] - (q1[1] - p1[1]) * d[0]) / denom;
        if (t > 0.01 && u >= 0 && u <= 1) {
          return { t, u, point: [p1[0] + d[0] * t, p1[1] + d[1] * t] };
        }
        return null;
      }

      // Helper: Snell's Law refraction into glass
      function refractIntoGlass(
        dir: [number, number],
        normal: [number, number],
        ior: number
      ): [number, number] | null {
        const c1 = -(dir[0] * normal[0] + dir[1] * normal[1]);
        const eta = 1 / ior;
        const sinT2 = eta * eta * (1 - c1 * c1);
        if (sinT2 > 1) return null;
        const c2 = Math.sqrt(1 - sinT2);
        return [
          eta * dir[0] + (eta * c1 - c2) * normal[0],
          eta * dir[1] + (eta * c1 - c2) * normal[1]
        ];
      }

      // Helper: Snell's Law refraction out of glass into air
      function refractOutOfGlass(
        dir: [number, number],
        outNormal: [number, number],
        ior: number
      ): { tir: boolean; outDir: [number, number] } {
        const c1 = dir[0] * outNormal[0] + dir[1] * outNormal[1];
        if (c1 <= 0) {
          return { tir: true, outDir: dir };
        }
        const eta = ior;
        const sinT2 = eta * eta * (1 - c1 * c1);
        if (sinT2 > 1) {
          // Total Internal Reflection
          const refl: [number, number] = [
            dir[0] - 2 * c1 * outNormal[0],
            dir[1] - 2 * c1 * outNormal[1]
          ];
          return { tir: true, outDir: refl };
        }
        const c2 = Math.sqrt(1 - sinT2);
        const out: [number, number] = [
          eta * dir[0] + (c2 - eta * c1) * outNormal[0],
          eta * dir[1] + (c2 - eta * c1) * outNormal[1]
        ];
        const len = Math.hypot(out[0], out[1]) || 1;
        return { tir: false, outDir: [out[0] / len, out[1] / len] };
      }

      // Sample 7 slices across finite beam thickness
      const NUM_SLICES = 7;
      const sliceOffsets = Array.from(
        { length: NUM_SLICES },
        (_, idx) => -beamHalfWidth + (idx / (NUM_SLICES - 1)) * beamThickness
      );

      // Central beam entry point on right face
      const entryCenter: [number, number] = [
        A[0] + rightEdge[0] * centerT,
        A[1] + rightEdge[1] * centerT
      ];
      const throwLen = Math.max(width, height) * 1.5;
      const lampSource: [number, number] = [
        entryCenter[0] - beamDir[0] * throwLen,
        entryCenter[1] - beamDir[1] * throwLen
      ];

      fxCtx.save();
      fxCtx.globalCompositeOperation = 'lighter';

      // --- 1. DRAW INCOMING COLLIMATED WHITE LIGHT BEAM ---
      // Outer ambient soft glow
      const beamGlow = fxCtx.createLinearGradient(lampSource[0], lampSource[1], entryCenter[0], entryCenter[1]);
      beamGlow.addColorStop(0, 'rgba(255, 255, 255, 0.01)');
      beamGlow.addColorStop(0.5, 'rgba(235, 245, 255, 0.18)');
      beamGlow.addColorStop(1, 'rgba(255, 255, 255, 0.45)');
      fxCtx.strokeStyle = beamGlow;
      fxCtx.lineWidth = beamThickness + 14;
      fxCtx.lineCap = 'round';
      fxCtx.beginPath();
      fxCtx.moveTo(lampSource[0], lampSource[1]);
      fxCtx.lineTo(entryCenter[0], entryCenter[1]);
      fxCtx.stroke();

      // Main thick white beam
      const beamMain = fxCtx.createLinearGradient(lampSource[0], lampSource[1], entryCenter[0], entryCenter[1]);
      beamMain.addColorStop(0, 'rgba(255, 255, 255, 0.25)');
      beamMain.addColorStop(0.6, 'rgba(255, 255, 255, 0.75)');
      beamMain.addColorStop(1, 'rgba(255, 255, 255, 0.98)');
      fxCtx.strokeStyle = beamMain;
      fxCtx.lineWidth = beamThickness;
      fxCtx.lineCap = 'round';
      fxCtx.beginPath();
      fxCtx.moveTo(lampSource[0], lampSource[1]);
      fxCtx.lineTo(entryCenter[0], entryCenter[1]);
      fxCtx.stroke();

      // Sharp hot laser core
      fxCtx.strokeStyle = '#ffffff';
      fxCtx.lineWidth = 2.8;
      fxCtx.lineCap = 'round';
      fxCtx.beginPath();
      fxCtx.moveTo(lampSource[0], lampSource[1]);
      fxCtx.lineTo(entryCenter[0], entryCenter[1]);
      fxCtx.stroke();

      // Floating dust motes along incoming beam
      for (const mote of dustMotes) {
        mote.t += mote.speed;
        if (mote.t > 1) mote.t = 0;

        const mx = lampSource[0] + (entryCenter[0] - lampSource[0]) * mote.t + beamNormal[0] * mote.offset;
        const my = lampSource[1] + (entryCenter[1] - lampSource[1]) * mote.t + beamNormal[1] * mote.offset;

        const twinkle = 0.5 + 0.5 * Math.sin(elapsed * 4 + mote.twinklePhase);
        const moteAlpha = mote.alpha * twinkle * Math.sin(mote.t * Math.PI);

        fxCtx.fillStyle = `rgba(255, 255, 255, ${moteAlpha.toFixed(3)})`;
        fxCtx.beginPath();
        fxCtx.arc(mx, my, mote.radius, 0, Math.PI * 2);
        fxCtx.fill();
      }

      // --- 2. TRACE RAYS & DRAW INTERNAL SPECTRAL BEAM INSIDE PRISM ---
      interface SpectralRay {
        entry: [number, number];
        exit: [number, number];
        outDir: [number, number];
        tir: boolean;
        tirExit?: [number, number];
        tirOutDir?: [number, number];
      }

      const rayMatrix: SpectralRay[][] = [];

      for (let s = 0; s < NUM_SLICES; s++) {
        const offset = sliceOffsets[s];
        const sliceEntry: [number, number] = [
          entryCenter[0] + beamNormal[0] * offset,
          entryCenter[1] + beamNormal[1] * offset
        ];

        const sliceRays: SpectralRay[] = [];

        for (let w = 0; w < NUM_WAVELENGTHS; w++) {
          const { ior } = wavelengths[w];

          // 1. Refract into glass at right face
          const insideDir = refractIntoGlass(beamDir, normalRight, ior);
          if (!insideDir) continue;
          const insideLen = Math.hypot(insideDir[0], insideDir[1]) || 1;
          const insideUnit: [number, number] = [insideDir[0] / insideLen, insideDir[1] / insideLen];

          // 2. Intersect with Left Face (C -> A) or Base Face (B -> C)
          const hitLeft = lineIntersect(sliceEntry, insideUnit, C, A);
          const hitBase = lineIntersect(sliceEntry, insideUnit, B, C);

          // Find actual intersection face
          let hit = hitLeft;
          let hitNormal = normalLeft;
          if (!hit || (hitBase && hitBase.t < hit.t)) {
            hit = hitBase;
            hitNormal = normalBase;
          }

          if (!hit) continue;

          // 3. Refract out of that face
          const exitResult = refractOutOfGlass(insideUnit, hitNormal, ior);

          let tirExit: [number, number] | undefined;
          let tirOutDir: [number, number] | undefined;

          if (exitResult.tir) {
            // Secondary bounce inside prism to base face
            const bounceHit = lineIntersect(hit.point, exitResult.outDir, B, C);
            if (bounceHit) {
              tirExit = bounceHit.point;
              const baseResult = refractOutOfGlass(exitResult.outDir, normalBase, ior);
              tirOutDir = baseResult.outDir;
            }
          }

          sliceRays.push({
            entry: sliceEntry,
            exit: hit.point,
            outDir: exitResult.outDir,
            tir: exitResult.tir,
            tirExit,
            tirOutDir
          });
        }

        rayMatrix.push(sliceRays);
      }

      // Draw the illuminated spectral beam INSIDE the crystal body
      const topSlice = rayMatrix[0];
      const btmSlice = rayMatrix[rayMatrix.length - 1];

      if (topSlice && btmSlice && topSlice.length === btmSlice.length) {
        for (let w = 0; w < topSlice.length - 1; w++) {
          const rayT1 = topSlice[w];
          const rayT2 = topSlice[w + 1];
          const rayB1 = btmSlice[w];
          const rayB2 = btmSlice[w + 1];
          if (!rayT1 || !rayT2 || !rayB1 || !rayB2) continue;

          const [r, g, b] = wavelengths[w].rgb;
          fxCtx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.55)`;
          fxCtx.beginPath();
          fxCtx.moveTo(rayT1.entry[0], rayT1.entry[1]);
          fxCtx.lineTo(rayT2.entry[0], rayT2.entry[1]);
          fxCtx.lineTo(rayB2.exit[0], rayB2.exit[1]);
          fxCtx.lineTo(rayB1.exit[0], rayB1.exit[1]);
          fxCtx.closePath();
          fxCtx.fill();
        }
      }

      // --- 3. DRAW OUTGOING CONTINUOUS CHROMATIC SPECTRUM FAN ---
      // (Only exists when light refracts out through the left face!)
      const validBands: {
        wIdx: number;
        topExit: [number, number];
        topDir: [number, number];
        btmExit: [number, number];
        btmDir: [number, number];
      }[] = [];

      for (let w = 0; w < NUM_WAVELENGTHS; w++) {
        const topRay = topSlice ? topSlice[w] : null;
        const btmRay = btmSlice ? btmSlice[w] : null;

        if (topRay && btmRay && !topRay.tir && !btmRay.tir) {
          validBands.push({
            wIdx: w,
            topExit: topRay.exit,
            topDir: topRay.outDir,
            btmExit: btmRay.exit,
            btmDir: btmRay.outDir
          });
        }
      }

      if (validBands.length > 2) {
        // Draw continuous filled chromatic quads across the spectrum
        for (let i = 0; i < validBands.length - 1; i++) {
          const b1 = validBands[i];
          const b2 = validBands[i + 1];
          const [r, g, b] = wavelengths[b1.wIdx].rgb;

          const p1 = b1.topExit;
          const p2 = b2.btmExit;
          const end1: [number, number] = [
            p1[0] + b1.topDir[0] * throwLen,
            p1[1] + b1.topDir[1] * throwLen
          ];
          const end2: [number, number] = [
            p2[0] + b2.btmDir[0] * throwLen,
            p2[1] + b2.btmDir[1] * throwLen
          ];

          // Multi-stop gradient along beam throw
          const grad = fxCtx.createLinearGradient(p1[0], p1[1], end1[0], end1[1]);
          grad.addColorStop(0.0, `rgba(${r}, ${g}, ${b}, 0.98)`);
          grad.addColorStop(0.2, `rgba(${r}, ${g}, ${b}, 0.90)`);
          grad.addColorStop(0.55, `rgba(${r}, ${g}, ${b}, 0.55)`);
          grad.addColorStop(0.85, `rgba(${r}, ${g}, ${b}, 0.20)`);
          grad.addColorStop(1.0, `rgba(${r}, ${g}, ${b}, 0.0)`);

          fxCtx.fillStyle = grad;
          fxCtx.beginPath();
          fxCtx.moveTo(p1[0], p1[1]);
          fxCtx.lineTo(p2[0], p2[1]);
          fxCtx.lineTo(end2[0], end2[1]);
          fxCtx.lineTo(end1[0], end1[1]);
          fxCtx.closePath();
          fxCtx.fill();
        }

        // Luminous Core Laser Spectral Lines for brilliant optical texture
        for (let i = 0; i < validBands.length; i += 2) {
          const band = validBands[i];
          const [r, g, b] = wavelengths[band.wIdx].rgb;
          const midExit: [number, number] = [
            (band.topExit[0] + band.btmExit[0]) / 2,
            (band.topExit[1] + band.btmExit[1]) / 2
          ];
          const midDir: [number, number] = [
            (band.topDir[0] + band.btmDir[0]) / 2,
            (band.topDir[1] + band.btmDir[1]) / 2
          ];

          const lineGrad = fxCtx.createLinearGradient(
            midExit[0],
            midExit[1],
            midExit[0] + midDir[0] * throwLen,
            midExit[1] + midDir[1] * throwLen
          );
          lineGrad.addColorStop(0.0, `rgba(${r}, ${g}, ${b}, 0.95)`);
          lineGrad.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, 0.75)`);
          lineGrad.addColorStop(0.7, `rgba(${r}, ${g}, ${b}, 0.25)`);
          lineGrad.addColorStop(1.0, `rgba(${r}, ${g}, ${b}, 0.0)`);

          fxCtx.strokeStyle = lineGrad;
          fxCtx.lineWidth = 2.0;
          fxCtx.beginPath();
          fxCtx.moveTo(midExit[0], midExit[1]);
          fxCtx.lineTo(midExit[0] + midDir[0] * throwLen, midExit[1] + midDir[1] * throwLen);
          fxCtx.stroke();
        }
      }

      // --- 4. DRAW INTERNAL REFLECTION BOUNCE (Downward secondary beam for TIR) ---
      // Collect valid TIR exit rays and draw a single elegant beam
      const tirRays: { exit: [number, number]; dir: [number, number] }[] = [];
      const midSlice = rayMatrix[Math.floor(NUM_SLICES / 2)] || [];
      for (const ray of midSlice) {
        if (ray.tir && ray.tirExit && ray.tirOutDir) {
          tirRays.push({ exit: ray.tirExit, dir: ray.tirOutDir });
        }
      }

      if (tirRays.length > 0) {
        const midTir = tirRays[Math.floor(tirRays.length / 2)];
        const tirGrad = fxCtx.createLinearGradient(
          midTir.exit[0],
          midTir.exit[1],
          midTir.exit[0] + midTir.dir[0] * 320,
          midTir.exit[1] + midTir.dir[1] * 320
        );
        tirGrad.addColorStop(0, 'rgba(180, 220, 255, 0.75)');
        tirGrad.addColorStop(0.35, 'rgba(230, 200, 140, 0.40)');
        tirGrad.addColorStop(0.75, 'rgba(100, 160, 240, 0.15)');
        tirGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        fxCtx.strokeStyle = tirGrad;
        fxCtx.lineWidth = beamThickness * 0.85;
        fxCtx.lineCap = 'round';
        fxCtx.beginPath();
        fxCtx.moveTo(midTir.exit[0], midTir.exit[1]);
        fxCtx.lineTo(
          midTir.exit[0] + midTir.dir[0] * 320,
          midTir.exit[1] + midTir.dir[1] * 320
        );
        fxCtx.stroke();
      }

      // --- 5. SURFACE SPECULAR FLARES & GLINTS ---
      // Bright white beam entry flare on the right face
      const entryGlint = fxCtx.createRadialGradient(
        entryCenter[0],
        entryCenter[1],
        0,
        entryCenter[0],
        entryCenter[1],
        30
      );
      entryGlint.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
      entryGlint.addColorStop(0.25, 'rgba(240, 250, 255, 0.75)');
      entryGlint.addColorStop(0.65, 'rgba(180, 220, 255, 0.2)');
      entryGlint.addColorStop(1, 'rgba(0, 0, 0, 0)');
      fxCtx.fillStyle = entryGlint;
      fxCtx.beginPath();
      fxCtx.arc(entryCenter[0], entryCenter[1], 30, 0, Math.PI * 2);
      fxCtx.fill();

      // Spectral exit face bloom (active only when light refracts through)
      if (validBands.length > 0) {
        const midB = validBands[Math.floor(validBands.length / 2)];
        const exitBloom = fxCtx.createRadialGradient(
          midB.topExit[0],
          midB.topExit[1],
          0,
          midB.topExit[0],
          midB.topExit[1],
          40
        );
        exitBloom.addColorStop(0, 'rgba(255, 255, 255, 0.85)');
        exitBloom.addColorStop(0.3, 'rgba(255, 220, 100, 0.45)');
        exitBloom.addColorStop(0.7, 'rgba(100, 180, 255, 0.2)');
        exitBloom.addColorStop(1, 'rgba(0, 0, 0, 0)');
        fxCtx.fillStyle = exitBloom;
        fxCtx.beginPath();
        fxCtx.arc(midB.topExit[0], midB.topExit[1], 40, 0, Math.PI * 2);
        fxCtx.fill();
      }

      fxCtx.restore();
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('touchmove', onPointerMove);
      resizeObserver.disconnect();
      renderer.dispose();
      glassMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      {/* 3D WebGL Photorealistic Glass Prism */}
      <canvas
        ref={glCanvasRef}
        className="absolute inset-0 w-full h-full block"
      />

      {/* 2D Chromatic Spectrum Dispersion & Light Ray-Tracing */}
      <canvas
        ref={fxCanvasRef}
        className="absolute inset-0 w-full h-full block pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
      />
    </div>
  );
};
