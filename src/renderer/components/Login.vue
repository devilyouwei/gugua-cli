<template>
    <div class="login">
        <h1 class="title">Sign In</h1>
        <div v-if="usePrivKey" class="tip">
            <ui-icon class="tip-icon">gpp_maybe</ui-icon>
            Input your
            <b>Private Key</b>
            or upload your
            <ui-button @click="usePrivKey = false">Mum Code</ui-button>
        </div>
        <div v-else class="tip">
            <ui-icon class="tip-icon">gpp_maybe</ui-icon>
            Upload your
            <b>Mum Code</b>
            or input your
            <ui-button @click="usePrivKey = true">Private Key</ui-button>
        </div>
        <div v-if="usePrivKey" class="input-box">
            <ui-textfield input-type="textarea" rows="8" cols="40">
                Your Private Key
            </ui-textfield>
        </div>
        <div v-else class="upload-box">
            <ui-file accept="image/*" multiple preview @change="onChange">
                <ui-icon class="qrcode-icon">qr_code_scanner</ui-icon>
            </ui-file>
        </div>
        <div class="input-box">
            <ui-textfield outlined with-leading-icon class="input">
                Your Password
                <template #before>
                    <ui-textfield-icon>vpn_lock</ui-textfield-icon>
                </template>
            </ui-textfield>
        </div>
        <div class="btn-box">
            <ui-button se raised class="btn">Sign In</ui-button>
            <vs-button transparent class="tab-btn" @click="tab">
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
            iconClass: 'password'
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
.login {
    text-align: center;
}
.tip-icon {
    color: #f90;
}
.tip {
    font-size: 1rem;
    padding: 1rem 0;
}
.upload-box {
    width: 12rem;
    margin: 0 auto;
    padding: 1rem;
}
.input-box {
    padding: 1.5rem 0;
}
.input {
    width: 20rem;
}
.btn {
    width: 20rem;
    height: 3.2rem;
}
.mdc-file {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    border: 1px solid #ddd;
    border-radius: 3px;
    cursor: pointer;
    background-color: #fff;
}
.qrcode-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 70px;
}
</style>
