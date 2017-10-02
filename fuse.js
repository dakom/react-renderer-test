/*
 * Imports
 */
const path = require('path');
const express = require('express');
const { FuseBox, RawPlugin, CSSPlugin, QuantumPlugin, WebIndexPlugin, EnvPlugin, Sparky } = require("fuse-box");
/*
 * Config
 */

const projectName = "react-renderer-test";
const PageTitle = "React Renderer Test";
const sourceMapStyle = { inline: false };

/*
 * No need to adjust anything below this line
 */



const BUILD = {
    PRODUCTION: "production",
    TEST: "test",
    DEV: "dev",
    DEV_PRODUCTION: "dev:production",
    BUILD_DEBUG: "build-debug"
}

const buildType = process.env.BUILD_TYPE;

if(Object.keys(BUILD).map(key => BUILD[key]).indexOf(buildType) === -1) {
    console.error(`unknown build type! [${buildType}]`);
    process.exit();
}
console.log(`----------- building [${buildType}] --------`);

const isProduction = (buildType === BUILD.PRODUCTION || buildType === BUILD.DEV_PRODUCTION); 
if(isProduction) {
    process.env.NODE_ENV = "production";
}

/*
 * Main Producer
 */
const mainProducer = FuseBox.init({
    homeDir: "src",
    useTypescriptCompiler : true,
    modulesFolder: "temp_modules",
    cache: false,
    sourceMaps: (isProduction) ? undefined : sourceMapStyle,
    output: (isProduction) ? `dist/$name.min.js` : `dist/$name.js`,
    plugins: [
        RawPlugin([".glsl"]),
        
        WebIndexPlugin({
            title: PageTitle,
            template: "./src/webpage/index.html",
            path: "."
        }),

        CSSPlugin(),

        EnvPlugin({ BUILD_TYPE: buildType, NODE_ENV: isProduction ? "production" : process.env.NODE_ENV}),

        (isProduction) && QuantumPlugin({
            removeUseStrict: false,
            bakeApiIntoBundle: projectName,
            treeshake: true,
            uglify: true,
            target: "browser"
        })    
    ],
    target: "browser",
});

const mainBundle = mainProducer.bundle(projectName);

switch(buildType) {
    case BUILD.TEST:
        mainBundle.test("[tests/**/**.test.ts]");
        break;
    default:
        mainBundle.instructions(`> app/Main.ts`);
        break;
}

/*
 * Run Fuse
 */


if (buildType === BUILD.DEV || buildType === BUILD.DEV_PRODUCTION) {
    mainBundle.watch();
    

    mainProducer.dev({ open: true }, server => {
        const app = server.httpServer.app;
        app.use("/static/", express.static(path.resolve("./src/webpage/static")));
    });
}

mainProducer.run();
