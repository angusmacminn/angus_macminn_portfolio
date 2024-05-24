import glsl from 'vite-plugin-glsl'
import { resolve } from 'path'
// import { defineConfig } from 'vite'

const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env

export default {
    root: 'src/',
    publicDir: '../static/',
    base: './',
    server: {
        host: true,
        open: !isCodeSandbox // Open if it's not a CodeSandbox
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true,
        assetsInlineLimit: 204096,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                enter: resolve(__dirname, 'src/Enter_Page/enter.html'),
                human_nature: resolve(__dirname, 'src/Human_Nature_Page/human_nature.html'),
                weather: resolve(__dirname, 'src/Weather_Page/weather_visualisation.html'),
                intractive_art: resolve(__dirname, 'src/Interactive_Art_Page/interactive.html'),
                generative: resolve(__dirname, 'src/Generative_Page/generative.html'),
                audio: resolve(__dirname, 'src/Audio_Page/audio.html')
            },
        },
    },

    plugins: [
        glsl()
    ]
}
