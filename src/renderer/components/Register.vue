<template>
    <div class="register">
        <h1 class="title">Sign Up</h1>
        <div class="generate-box">
            <p v-show="!loading" class="tip">{{ message }}</p>
            <ui-spinner
                v-show="loading"
                class="spinner"
                active
                four-colored
            ></ui-spinner>
            <div
                v-if="privKey.text"
                ref="qrcode"
                class="qrcode"
                @click="download"
            >
                <VueQrcode
                    :value="privKey.text"
                    error-correction-level="high"
                    :quality="1"
                ></VueQrcode>
            </div>
            <ui-textfield
                v-if="privKey.text"
                v-model="privKey.text"
                class="input"
                outlined
                :attrs="{ readonly: true }"
            >
                <template #after>
                    <ui-textfield-icon v-copy="privKey">
                        content_copy
                    </ui-textfield-icon>
                </template>
            </ui-textfield>
        </div>

        <div v-if="!loading && !privKey.text" class="input-box">
            <vs-input
                v-model="password"
                color="#3BDEC8"
                type="password"
                border
                placeholder="Enter a password"
                class="input"
            >
                <template #icon>
                    <i class="bx bx-lock-open-alt"></i>
                </template>
            </vs-input>
        </div>

        <div class="btn-box">
            <vs-button
                v-if="!privKey.text"
                class="btn"
                :disabled="loading || !password"
                color="rgb(59,222,200)"
                gradient
                @click="genPrivKey"
            >
                <i class="bx bxs-purchase-tag">&nbsp;</i>
                {{ btnMsg }}
            </vs-button>
            <vs-button
                v-else
                flat
                animation-type="vertical"
                class="btn"
                success
            >
                Confirm
                <template #animate>
                    <i class="bx bx-mail-send">&nbsp;</i>
                    Sign Up
                </template>
            </vs-button>
            <vs-button transparent class="tab-btn" @click="tab">
                <i class="bx bxs-chevron-left">&nbsp;</i>
                Go sign in
            </vs-button>
        </div>
    </div>
</template>
<script>
import VueQrcode from 'vue-qrcode'
import crypto from 'libp2p-crypto'
import { ipcRenderer as ipc } from 'electron'

export default {
    name: 'Register',
    components: {
        VueQrcode
    },
    data() {
        return {
            tips: [
                'Now, enter a password, generate an account in minutes!',
                'Click the QR code to save and copy the private key string!'
            ],
            message: '',
            loading: false,
            privKey: {
                text: '',
                success: () => {
                    this.$toast('Copied!')
                }
            },
            btnMsg: 'Genreate a new Account',
            password: ''
        }
    },
    mounted() {
        this.message = this.tips[0]
    },
    methods: {
        tab() {
            // 0 is sign in, 1 is sign up
            this.$emit('tab', 0)
        },
        async genPrivKey() {
            this.loading = true
            this.btnMsg = 'Generating...'
            // generate a key pair
            const kp = await crypto.keys.generateKeyPair('ed25519', 1024)
            this.privKey.text = await kp.export(this.password, 'libp2p-key')
            this.message = this.tips[1]
            this.loading = false
        },
        download() {
            const qrcode = this.$refs.qrcode.childNodes[0].src
            const opt = {
                color: 'success',
                position: 'top-left',
                title: 'Succeed to save',
                text: ''
            }
            ipc.invoke('download-image', { url: qrcode })
                .then(res => {
                    opt.text = res.msg
                })
                .catch(e => {
                    opt.color = 'danger'
                    opt.title = 'Fail to save'
                    opt.text = e.message
                })
                .finally(() => {
                    this.$vs.notification(opt)
                })
        }
    }
}
</script>
<style scoped>
.tip {
    color: #f90;
}
.generate-box {
    padding: 2vh 0;
    text-align: center;
    min-height: 5vh;
}
.qrcode {
    padding: 1vw 0;
}
.qrcode img {
    width: 18vw;
    margin: 0 auto;
}
.qrcode img:hover {
    cursor: pointer;
}
.btn {
    margin: 3vh auto;
    width: 18vw;
    height: 3vw;
    border-radius: 10rem;
}
.input-box {
    margin: 2vh 0;
    margin-top: 15vh;
}
.input {
    width: 24vw;
    margin: 0 auto;
}
.spinner {
    margin-top: 5vh;
}
</style>
