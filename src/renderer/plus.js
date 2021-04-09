export default {
    process,
    version: (() => {
        return {
            os: process.platform,
            arch: process.arch,
            nodeVersion: process.versions.node,
            chromeVersion: process.versions.chrome,
            electronVersion: process.versions.electron
        }
    })()
}
