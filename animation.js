let fps = 30;

function createResizableCube(cubeSize, faceColor, idContainer) {
    // Initialisation de la scène, de la caméra et du rendu
    const containerWidth = 200;
    const containerHeight = 200;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/screen.width, 0.1, 1000);
    let renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(containerWidth, containerHeight);
    document.getElementById(idContainer).appendChild(renderer.domElement);

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth/screen.width*containerWidth,window.innerWidth/screen.width*containerWidth);
    });

    const faceMaterial = new THREE.MeshBasicMaterial({ color: faceColor });

    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });

    const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
    const cube = new THREE.Mesh(geometry, faceMaterial);
    scene.add(cube);

    const edges = new THREE.EdgesGeometry(geometry);
    const edgeLines = new THREE.LineSegments(edges, edgeMaterial);
    cube.add(edgeLines);

    geometry.vertices.forEach(vertex => {
        const vertexSphere = new THREE.Mesh(new THREE.SphereGeometry(0.05), edgeMaterial);
        vertexSphere.position.copy(vertex);
        cube.add(vertexSphere);
    });

    camera.position.z = 3;
    const animate = () => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        const interval = 1000 / fps;
        setTimeout(animate, interval);
        renderer.render(scene, camera);
    };
    animate();
}


function createCube(taille, couleur, containerName){   
        // Dimensions du conteneur
        const containerWidth = 200;
        const containerHeight = 200;

        // Scène Three.js
        const scene = new THREE.Scene();

        // Caméra
        const camera = new THREE.PerspectiveCamera(100/taille, containerWidth / containerHeight, 0.1, 10);
        camera.position.z = 3;

        // Rendu WebGL
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(containerWidth, containerHeight);
        document.getElementById(containerName).appendChild(renderer.domElement);
       

        

        // Création d'un matériau pour les faces blanches transparentes
        const transparentFaceMaterial = new THREE.MeshBasicMaterial({ color: couleur, transparent: true, opacity: 0.5 });

        // Création d'un matériau pour les arêtes et les sommets blancs
        const edgeMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });

        // Cube
        const initialCubeSize = 1;
        const geometry = new THREE.BoxGeometry(initialCubeSize, initialCubeSize, initialCubeSize);
        const cube = new THREE.Mesh(geometry, transparentFaceMaterial);
        scene.add(cube);

        // Création des arêtes du cube
        const edges = new THREE.EdgesGeometry(geometry);
        const edgeLines = new THREE.LineSegments(edges, edgeMaterial);
        cube.add(edgeLines);

        // Création des sommets du cube
        geometry.vertices.forEach(vertex => {
            const vertexSphere = new THREE.Mesh(new THREE.SphereGeometry(0.05), edgeMaterial);
            vertexSphere.position.copy(vertex);
            cube.add(vertexSphere);
        });
        

        // Animation de rotation
        const animate = () => {
            const interval = 1000 / fps;
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
            setTimeout(animate, interval);
        };

        animate();

        
}

function createTetrahedron(taille, couleur, containerName){
    // Dimensions du conteneur
    const containerWidth = 200;
    const containerHeight = 200;

    // Scène Three.js
    const scene = new THREE.Scene();

    // Caméra
    const camera = new THREE.PerspectiveCamera(100 / taille, containerWidth / containerHeight, 0.1, 10);
    camera.position.z = 3;

    // Rendu WebGL
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(containerWidth, containerHeight);
    document.getElementById(containerName).appendChild(renderer.domElement);

    // Création d'un matériau pour les faces blanches transparentes
    const transparentFaceMaterial = new THREE.MeshBasicMaterial({ color: couleur, transparent: true, opacity: 0.5 });

    // Création d'un matériau pour les arêtes et les sommets blancs
    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });

    // Tétraèdre
    const tetrahedronGeometry = new THREE.TetrahedronGeometry(taille, 0);
    const tetrahedron = new THREE.Mesh(tetrahedronGeometry, transparentFaceMaterial);
    scene.add(tetrahedron);

    // Création des arêtes du tétraèdre
    const tetrahedronEdges = new THREE.EdgesGeometry(tetrahedronGeometry);
    const tetrahedronEdgeLines = new THREE.LineSegments(tetrahedronEdges, edgeMaterial);
    tetrahedron.add(tetrahedronEdgeLines);

    // Création des sommets du tétraèdre
    tetrahedronGeometry.vertices.forEach(vertex => {
        const vertexSphere = new THREE.Mesh(new THREE.SphereGeometry(0.05), edgeMaterial);
        vertexSphere.position.copy(vertex);
        tetrahedron.add(vertexSphere);
    });

    // Animation de rotation
    const animate = () => {
        const interval = 1000 / fps;
        tetrahedron.rotation.x += 0.01;
        tetrahedron.rotation.y -= 0.01;
        renderer.render(scene, camera);
        setTimeout(animate, interval);
    };
    animate();
    
}

function createDodecahedron(taille, couleur, containerName) {
    // Dimensions du conteneur
    const containerWidth = 200;
    const containerHeight = 200;

    // Scène Three.js
    const scene = new THREE.Scene();

    // Caméra
    const camera = new THREE.PerspectiveCamera(100 / taille, containerWidth / containerHeight, 0.1, 10);
    camera.position.z = 3;

    // Rendu WebGL
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(containerWidth, containerHeight);
    document.getElementById(containerName).appendChild(renderer.domElement);

    // Création d'un matériau pour les faces blanches transparentes
    const transparentFaceMaterial = new THREE.MeshBasicMaterial({ color: couleur, transparent: true, opacity: 0.5 });

    // Création d'un matériau pour les arêtes et les sommets blancs
    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });

    // Dodécaèdre
    const dodecahedronGeometry = new THREE.DodecahedronGeometry(taille, 0);
    const dodecahedron = new THREE.Mesh(dodecahedronGeometry, transparentFaceMaterial);
    scene.add(dodecahedron);

    // Création des arêtes du dodécaèdre
    const dodecahedronEdges = new THREE.EdgesGeometry(dodecahedronGeometry);
    const dodecahedronEdgeLines = new THREE.LineSegments(dodecahedronEdges, edgeMaterial);
    dodecahedron.add(dodecahedronEdgeLines);

    // Création des sommets du dodécaèdre
    dodecahedronGeometry.vertices.forEach(vertex => {
        const vertexSphere = new THREE.Mesh(new THREE.SphereGeometry(0.035), edgeMaterial);
        vertexSphere.position.copy(vertex);
        dodecahedron.add(vertexSphere);
    });

    // Animation de rotation
    const animate = () => {
        const interval = 1000 / fps;
        dodecahedron.rotation.x -= 0.01;
        dodecahedron.rotation.y += 0.01;
        renderer.render(scene, camera);
        setTimeout(animate, interval);
    };

    animate();
}

function createResizableDodecahedron(dodecahedronSize, faceColor, idContainer) {
    // Initialisation de la scène, de la caméra et du rendu
    const containerWidth = 200;
    const containerHeight = 200;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerWidth / containerHeight, 0.1, 1000);
    let renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(containerWidth, containerHeight);
    document.getElementById(idContainer).appendChild(renderer.domElement);

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth/screen.width*containerWidth,window.innerWidth/screen.width*containerWidth);
    });

    const faceMaterial = new THREE.MeshBasicMaterial({ color: faceColor });

    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });

    const dodecahedronGeometry = new THREE.DodecahedronGeometry(dodecahedronSize);
    const dodecahedron = new THREE.Mesh(dodecahedronGeometry, faceMaterial);
    scene.add(dodecahedron);

    const edges = new THREE.EdgesGeometry(dodecahedronGeometry);
    const edgeLines = new THREE.LineSegments(edges, edgeMaterial);
    dodecahedron.add(edgeLines);

    dodecahedronGeometry.vertices.forEach(vertex => {
        const vertexSphere = new THREE.Mesh(new THREE.SphereGeometry(0.05), edgeMaterial);
        vertexSphere.position.copy(vertex);
        dodecahedron.add(vertexSphere);
    });

    camera.position.z = 3;
    const animate = () => {
        dodecahedron.rotation.x += 0.01;
        dodecahedron.rotation.y += 0.01;
        const interval = 1000 / fps;
        setTimeout(animate, interval);
        renderer.render(scene, camera);
    };
    animate();
}

function createResizableIcosahedron(icosahedronSize, faceColor, idContainer) {
    // Initialisation de la scène, de la caméra et du rendu
    const containerWidth = 200;
    const containerHeight = 200;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerWidth / containerHeight, 0.1, 1000);
    let renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(containerWidth, containerHeight);
    document.getElementById(idContainer).appendChild(renderer.domElement);

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth / screen.width * containerWidth, window.innerWidth / screen.width * containerWidth);
    });

    const faceMaterial = new THREE.MeshBasicMaterial({ color: faceColor });

    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });

    const icosahedronGeometry = new THREE.IcosahedronGeometry(icosahedronSize); // Utilisation de la géométrie d'icosaèdre
    const icosahedron = new THREE.Mesh(icosahedronGeometry, faceMaterial);
    scene.add(icosahedron);

    const edges = new THREE.EdgesGeometry(icosahedronGeometry);
    const edgeLines = new THREE.LineSegments(edges, edgeMaterial);
    icosahedron.add(edgeLines);

    icosahedronGeometry.vertices.forEach(vertex => {
        const vertexSphere = new THREE.Mesh(new THREE.SphereGeometry(0.05), edgeMaterial);
        vertexSphere.position.copy(vertex);
        icosahedron.add(vertexSphere);
    });

    camera.position.z = 3;
    const animate = () => {
        icosahedron.rotation.x += 0.01;
        icosahedron.rotation.y += 0.01;
        const interval = 1000 / fps;
        setTimeout(animate, interval);
        renderer.render(scene, camera);
    };
    animate();
}

