import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import VertexShader from './shaders/vertex.glsl'
import FragmentShader from './shaders/fragment.glsl'

document.addEventListener('DOMContentLoaded', function() {



    THREE.ColorManagement.enabled = false

    /**
     * Base
     */
    // Debug
    //const gui = new dat.GUI()



    // Canvas
    const canvas = document.querySelector('canvas.webgl')

    const canvasEnter = document.querySelector('canvas.enter')

    // Scene
    const scene = new THREE.Scene()

    const scene2 = new THREE.Scene()

    scene.fog = new THREE.Fog(0xcccccc, 10, 15)

    window.addEventListener('scroll', () => {
            const fromColor = new THREE.Color('#4c5c75')
            const toColor = new THREE.Color('#06337a')

            const scrollPercantage = window.scrollY / (document.body.scrollHeight - window.innerHeight)
            const newColor = fromColor.clone().lerp(toColor, scrollPercantage)
            scene.background = newColor
                //console.log(scene.background)
                //console.log(newColor)

            // Update camera position based on scroll
            camera.position.y = window.scrollY * 0.01;
        })
        /**
         * Textures
         */
    const textureLoader = new THREE.TextureLoader()
    const matcapTexture = textureLoader.load('textures/matcaps/2.png')
    const texture = textureLoader.load('/textures/texture.jpg')
    const alpha = textureLoader.load('/textures/alpha.jpg')
    const alpha1 = textureLoader.load('/textures/alpha1.jpg')
    const alpha2 = textureLoader.load('/textures/alpha2.jpg')
    const height1 = textureLoader.load('HeightMaps/HM1.jpg')
    const height = textureLoader.load('/textures/height1.jpg')
    const height2 = textureLoader.load('/HeightMaps/HM4.jpg')


    //Lenis smooth scroll

    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    })

    function raf(time) {
        lenis.raf(time)
        ScrollTrigger.update
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    gsap.registerPlugin(ScrollTrigger)

    //Horizontal Scroll

    const container = document.querySelector('.horizontal_content')
    const sections = gsap.utils.toArray('.horizontal_item')

    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            start: '20% center',
            trigger: container,
            markers: false,
            pin: true,
            scrub: 3,
            snap: false,
            end: "+=" + 3000
        }
    })









    /**
     * Fonts
     */
    //Angus MacMinn text
    const fontLoader = new FontLoader()
    fontLoader.load(
        '/fonts/Unnamed_Light_Regular.json',
        (font) => {
            // Material
            const material = new THREE.MeshMatcapMaterial({ matcap: matcapTexture })

            // Text
            const AngustextGeometry = new TextGeometry(
                'Angus MacMinn', {
                    font: font,
                    size: 0.5,
                    height: 0.2,
                    curveSegments: 12,
                    bevelEnabled: true,
                    bevelThickness: 0.03,
                    bevelSize: 0.02,
                    bevelOffset: 0,
                    bevelSegments: 5
                }
            )
            AngustextGeometry.center()
            const text = new THREE.Mesh(AngustextGeometry, material)
            scene.add(text)
            text.position.z = -3
            text.position.y = 0.5
            text.material.opacity = 0.5

            // text.scale.set(0.2, 0.2, 0.2)
            // textResize(text)
            // text.geometry.parameters.options.size = 2
            // console.log(text.geometry.parameters.options.size);
        }
    )

    //Welcome Text

    fontLoader.load(
        '/fonts/helvetiker_regular.typeface.json',
        (font) => {
            // Text
            const WelcomeGeometry = new TextGeometry(
                'welcome', {
                    font: font,
                    size: 0.2,
                    height: 0.02,
                    curveSegments: 12,
                    bevelEnabled: true,
                    bevelThickness: 0.03,
                    bevelSize: 0.02,
                    bevelOffset: 0,
                    bevelSegments: 5
                }
            )
            const WelcomeMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTexture })


            WelcomeGeometry.center()
            const welcomeMesh = new THREE.Mesh(WelcomeGeometry, WelcomeMaterial)
            scene.add(welcomeMesh)
            welcomeMesh.position.z = -3
            welcomeMesh.position.y = -0.2
        })






    //About Me text
    fontLoader.load(
        '/fonts/helvetiker_regular.typeface.json',
        (font) => {
            // Text
            const AboutMeTextGeometry = new TextGeometry(
                'about me', {
                    font: font,
                    size: 0.3,
                    height: 0.05,
                    curveSegments: 12,
                    bevelEnabled: true,
                    bevelThickness: 0.03,
                    bevelSize: 0.02,
                    bevelOffset: 0,
                    bevelSegments: 5
                }
            )
            AboutMeTextGeometry.center()

            const AboutMeText = new THREE.Mesh(AboutMeTextGeometry, AboutMeMaterial)
            scene.add(AboutMeText)
            AboutMeText.position.z = -3
            AboutMeText.position.y = -8
        }
    )
    const AboutMeMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTexture })
    AboutMeMaterial.transparent = true






    //Projects Text
    fontLoader.load(
        '/fonts/helvetiker_regular.typeface.json',
        (font) => {
            // Text
            const ProjectsTextGeometry = new TextGeometry(
                'projects', {
                    font: font,
                    size: 0.3,
                    height: 0.05,
                    curveSegments: 12,
                    bevelEnabled: true,
                    bevelThickness: 0.03,
                    bevelSize: 0.02,
                    bevelOffset: 0,
                    bevelSegments: 5
                }
            )
            ProjectsTextGeometry.center()

            const AboutMeText = new THREE.Mesh(ProjectsTextGeometry, ProjectsMaterial)
            scene.add(AboutMeText)
            AboutMeText.position.z = -3
            AboutMeText.position.y = -17
        })

    // Material
    const ProjectsMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTexture })
    ProjectsMaterial.transparent = true

    //Contact me Text
    fontLoader.load(
        '/fonts/helvetiker_regular.typeface.json',
        (font) => {
            // Text
            const ContactTextGeometry = new TextGeometry(
                'Contact Me', {
                    font: font,
                    size: 0.3,
                    height: 0.05,
                    curveSegments: 12,
                    bevelEnabled: true,
                    bevelThickness: 0.03,
                    bevelSize: 0.02,
                    bevelOffset: 0,
                    bevelSegments: 5
                }
            )
            ContactTextGeometry.center()

            const ContactMeText = new THREE.Mesh(ContactTextGeometry, ContactMeMaterial)
            scene.add(ContactMeText)
            ContactMeText.position.z = -3
            ContactMeText.position.y = -38
        })
    const ContactMeMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTexture })
    ContactMeMaterial.transparent = true


    const MIN_OPACITY = 0
    const MAX_OPACITY = 1

    window.addEventListener('scroll', updateTextOpacity)

    function updateTextOpacity() {
        const scrollPercantage = window.scrollY / (document.body.scrollHeight - window.innerHeight)
            // console.log(scrollPercantage)
        const newOpacity = MIN_OPACITY + scrollPercantage * 3 * (MAX_OPACITY - MIN_OPACITY)
            //console.log(newOpacity)

        AboutMeMaterial.opacity = newOpacity
        ProjectsMaterial.opacity = newOpacity
        if (newOpacity < 0.1) {
            AboutMeMaterial.opacity = 0
        }
        if (newOpacity < 0.7) {
            ProjectsMaterial.opacity = 0
        }
    }




    //Geometries 
    //first wave
    const geometry = new THREE.PlaneGeometry(100, 100, 100, 100);
    const material = new THREE.MeshStandardMaterial({
        color: 'gray',
        map: height,
        displacementMap: height,
        displacementScale: 4,
        alphaMap: alpha,
        transparent: true,
        depthTest: false,

    });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);
    plane.rotation.x = -Math.PI / 2
    plane.position.y = -7
    plane.position.z = -15





    //Waves
    const wavesGeo = new THREE.PlaneGeometry(50, 20, 100, 100)
    const wavesMat = new THREE.MeshStandardMaterial({
        color: 'gray',
        map: height1,
        displacementMap: height1,
        displacementScale: 1,
        alphaMap: alpha,
        transparent: true,
        depthTest: false,
    })
    const wavesMesh = new THREE.Mesh(wavesGeo, wavesMat)
    scene.add(wavesMesh)
    wavesMesh.rotation.x = Math.PI / 2
    wavesMesh.position.y = -20
    wavesMesh.position.z = -20


    //Shader 
    const ShaderGeo = new THREE.PlaneGeometry(50, 20, 50, 50)
    const count = ShaderGeo.attributes.position.count
    const randoms = new Float32Array(count)

    for (let i = 0; i < count; i++) {
        randoms[i] = Math.random()
    }

    ShaderGeo.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1))


    const ShaderMat = new THREE.RawShaderMaterial({
        vertexShader: VertexShader,
        fragmentShader: FragmentShader,

    })

    const ShaderMesh = new THREE.Mesh(ShaderGeo, ShaderMat)
        //scene.add(ShaderMesh)
        //ShaderMesh.rotation.x = Math.PI/2
    ShaderMesh.position.y = -10
    ShaderMesh.position.z = -20




    //Animate waves
    function moveWaves() {
        const a = document.body.getBoundingClientRect().top
        wavesMat.displacementScale = a * 0.001
    }
    document.body.onscroll = moveWaves




    /**
     * Sizes
     */
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    let device;
    window.addEventListener('resize', () => {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight



        // Update camera
        camera.aspect = sizes.width / sizes.height
        resizeCamera()
        camera.updateProjectionMatrix()
            //camera2.aspect = sizes.width / sizes.height
            //camera2.updateProjectionMatrix()


        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))



    })


    // function textResize(text) {

    //     if (text) {
    //         text.scale.x = 0.5
    //         text.scale.y = 0.5
    //     }
    // }


    //Cursor
    const cursor = {
        x: 0,
        y: 0
    }



    //Camera Move X axis
    window.addEventListener('mousemove', (event) => {
        cursor.x = event.clientX / sizes.width - 0.5
        cursor.y = -(event.clientY / sizes.height - 0.5)

    })

    // Base camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000)

    function resizeCamera() { // display initial z position based on window width
        if (window.innerWidth <= 700 && window.innerWidth > 510) {
            camera.position.z = 2.2
        } else if (window.innerWidth <= 510 && window.innerWidth > 390) {
            camera.position.z = 3.5
        } else if (window.innerWidth <= 390) {
            camera.position.z = 4.5
        } else {
            camera.position.z = 0
        }
    }
    resizeCamera()

    function moveCamera() {
        const t = document.body.getBoundingClientRect().top
        camera.position.y = t * 0.005

    }
    window.addEventListener('scroll', moveCamera)

    //Second Camera
    //const camera2 = new THREE.PerspectiveCamera (75, window.innerWidth / window.innerHeight, 1, 10000 )



    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true
    })

    //Second Renderer
    //const renderer2 = new THREE.WebGLRenderer({
    //    canvas: canvasEnter,
    //    alpha: true
    //})
    //renderer2.setClearColor(0xffffff, 1)

    renderer.outputColorSpace = THREE.LinearSRGBColorSpace
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


    //EnterRender.outputColorSpace = THREE.LinearSRGBColorSpace
    //EnterRender.setSize(sizes.width, sizes.height)
    //EnterRender.setPixelRatio(Math.min(window.devicePixelRatio, 2))







    //Animate terrain
    document.addEventListener('mousemove', animateTerrain)
    let mouseY = 0

    function animateTerrain(event) {
        mouseY = event.clientY
    }

    //Light
    const pointLight = new THREE.PointLight('#3e4f65', 5)
    pointLight.position.x = 0.2
    pointLight.position.y = 10
    pointLight.position.z = 4.4
    scene.add(pointLight)

    const pointLightHelper = new THREE.PointLightHelper(pointLight, 1);
    scene.add(pointLightHelper);

    const pointLight1 = new THREE.PointLight('#3e4f65', 5)
    pointLight1.position.x = 0.2
    pointLight1.position.y = 80
    pointLight1.position.z = 50
    scene.add(pointLight1)

    //gui.add(pointLight1.position, 'x')
    //gui.add(pointLight1.position, 'y')
    //gui.add(pointLight1.position, 'z')
    //
    //const col = { color: '#00ff00'}
    //gui.addColor(col, 'color').onChange(() =>{
    //    pointLight1.color.set(col.color)
    //})

    // Disable the lights
    //pointLight.visible = false;
    pointLight1.visible = false;
    //Noise





    /**
     * Animate
     */
    const clock = new THREE.Clock()
    let previousTime = 0

    const animate = () => {
        const elapsedTime = clock.getElapsedTime()
        const deltaTime = elapsedTime - previousTime
        previousTime = elapsedTime

        //update objects
        plane.material.displacementScale = 5 + mouseY * -0.006

        //Paralax
        const paralaxX = cursor.x * 0.5
        camera.position.x += (paralaxX - camera.position.x) * 5 * deltaTime

        //update camera
        //camera.position.x = cursor.x * 3
        //camera.position.y = cursor.y * 3


        // Call tick again on the next frame
        window.requestAnimationFrame(animate)

        const time = Date.now() * 0.001 // use time for animation

        for (let i = 0; i < wavesMesh.vertices; i++) {
            const vertex = wavesMesh.vertices[i]
            const noiseValue = simplex.noise3D(vertex.x * 0.1, vertex.y * 0.1, time * 0.5); // Adjust the scale and speed as needed
            vertex.z = noiseValue * 2; // Adjust the amplitude as needed
        }

        wavesMesh.verticesNeedUpdate = true

        // Render
        renderer.render(scene, camera)



        // Update controls
        //controls.update(10.0)
    }

    animate()

    //const animate2 = () => {
    //        // Update scene2 elements
    //        renderer2.render(scene2, camera2);
    //}
    //animate2()
})