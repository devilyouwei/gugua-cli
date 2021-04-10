/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */

module.exports = {
    ssr: false,
    target: 'static',
    head: {
        title: 'gugua-cli',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content:
                    'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'
            }
        ]
    },
    loading: false,
    components: true,
    css: [
        'vuesax/dist/vuesax.css',
        'boxicons/css/boxicons.min.css',
        'balm-ui/dist/balm-ui.css'
    ],
    plugins: [
        { ssr: true, src: '@/plugins/vuesax' },
        { ssr: true, src: '@/plugins/balm-ui' }
    ],
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module'
    ],
    modules: []
}
