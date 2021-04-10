<template>
    <div class="login">
        <h1 class="title">Sign In</h1>
        <div v-if="usePrivKey" class="tip">
            <ui-icon class="tip-icon">gpp_maybe</ui-icon>
            Input your
            <b>Private Key</b>
            or upload your
            <vs-button class="pv-btn" transparent @click="usePrivKey = false">
                Mum Code
            </vs-button>
        </div>
        <div v-else class="tip">
            <ui-icon class="tip-icon">gpp_maybe</ui-icon>
            Upload your
            <b>Mum Code</b>
            or input your
            <vs-button class="pv-btn" transparent @click="usePrivKey = true">
                Private Key
            </vs-button>
        </div>
        <div v-if="usePrivKey" class="input-box">
            <ui-textfield outlined input-type="textarea" rows="5" cols="30">
                Private Key
            </ui-textfield>
        </div>
        <div v-else class="upload-box">
            <ui-file accept="image/*" multiple preview @change="onChange">
                <ui-icon class="qrcode-icon">qr_code_scanner</ui-icon>
            </ui-file>
        </div>
        <div class="input-box">
            <vs-input
                v-model="password"
                color="#195bff"
                type="password"
                border
                placeholder="Password"
                class="input"
            >
                <template #icon>
                    <i class="bx bx-lock-open-alt"></i>
                </template>
            </vs-input>
        </div>
        <div class="btn-box">
            <vs-button class="btn">
                <i class="bx bx-log-in">&nbsp;</i>
                Sign In
            </vs-button>
            <vs-button success transparent class="tab-btn" @click="tab">
                Go sign up&nbsp;
                <i class="bx bxs-chevron-right"></i>
            </vs-button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data() {
        return {
            usePrivKey: false,
            iconClass: 'password',
            password: ''
        }
    },
    methods: {
        tab() {
            // 0 is sign in, 1 is sign up
            this.$emit('tab', 1)
        },
        onChange() {}
    }
}
</script>
<style scoped>
.tip-icon {
    color: #f90;
    font-size: 1.1vw;
    line-height: 1.1vw;
}
.tip {
    font-size: 1.1vw;
    line-height: 1.1vw;
    padding: 1.5vh 0;
}
.upload-box {
    width: 10vw;
    height: 10vw;
    margin: 0 auto;
    padding: 2vh;
    transition: all 0.2s linear;
}
.upload-box:hover {
    transform: scale(1.1);
}
.input-box {
    margin: 4vh 0;
}
.input {
    width: 26vw !important;
    margin: 2.5vh auto;
}
.btn {
    width: 26vw;
    height: 3vw;
    margin: 1vh auto;
    border-radius: 100rem;
}
.mdc-file {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    border: 1px solid #ddd;
    border-radius: 3px;
    cursor: pointer;
}
.qrcode-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 6vw;
}
.pv-btn {
    display: inline-block;
    font-weight: bold;
}
</style>
