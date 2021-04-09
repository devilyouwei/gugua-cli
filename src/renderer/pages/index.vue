<template>
    <div class="container">
        <div class="bg">
            <img src="~assets/imgs/background2.jpeg" alt="" />
        </div>
        <div class="head-icon">
            <HeadIcon />
        </div>
        <div class="sign-box">
            <Login v-show="active === 0" @tab="tab" />
            <Register v-show="active === 1" @tab="tab" />
        </div>
        <div class="info-box">
            <vs-row>
                <vs-col w="6"></vs-col>
                <vs-col
                    vs-type="flex"
                    vs-justify="center"
                    vs-align="right"
                    w="6"
                    class="version"
                >
                    Version: {{ version }}
                </vs-col>
            </vs-row>
        </div>
    </div>
</template>

<script>
import plus from '../plus'
export default {
    name: 'Index',
    data() {
        return {
            active: 0,
            version: ''
        }
    },
    mounted() {
        const version = plus.version
        console.log(version)
        this.version = `${version.os}, node:${version.nodeVersion}, electron:${version.electronVersion}`
    },
    methods: {
        tab(v) {
            this.active = v
        }
    }
}
</script>

<style>
@keyframes appear {
    0% {
        opacity: 0;
    }
}

.bg {
    background: #cad3d2;
    position: fixed;
    left: 0;
    right: 50vw;
    bottom: 0;
    top: 0;
    overflow: hidden;
}
.bg img {
    animation: 1s appear;
    margin: auto;
    height: 100%;
}
.sign-box {
    padding-top: 1.5vh;
    text-align: center;
    position: fixed;
    left: 50vw;
    right: 0;
    top: 0;
    bottom: 0;
}
.container {
    min-height: 100vh;
    max-width: 100vw;
    text-align: center;
    overflow: hidden;
}

.title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 2rem;
    color: #35495e;
    letter-spacing: 1px;
}

.head-icon {
    text-align: right;
    z-index: 99;
    width: 10rem;
    position: fixed;
    top: 1rem;
    right: 1rem;
}
.btn-box {
    padding: 1rem 0;
}
.tab-btn {
    margin: 1rem 3rem auto auto;
}
.info-box {
    position: fixed;
    width: 50vw;
    right: 0;
    bottom: 0;
}
.version {
    padding-right: 1%;
    text-align: right;
    font-size: 0.9rem;
    color: #a9a9a9;
    font-style: italic;
}
</style>
