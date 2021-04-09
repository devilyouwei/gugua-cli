<template>
    <div class="register">
        <h1 class="title">Sign Up</h1>
        <div class="generate-box">
            <p v-show="!loading && !privKey.text" class="tip">
                Now, enter a password, generate an account in minutes!
            </p>
            <ui-spinner v-show="loading" active></ui-spinner>
            <div class="qrcode">
                <VueQrcode
                    v-if="privKey.text"
                    :value="privKey.text"
                ></VueQrcode>
            </div>
            <ui-textfield
                v-if="privKey.text"
                v-model="privKey.text"
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
            <ui-textfield outlined with-leading-icon class="input">
                Enter Your Password
                <template #before>
                    <ui-textfield-icon>vpn_key</ui-textfield-icon>
                </template>
            </ui-textfield>
        </div>

        <div class="btn-box">
            <ui-button
                v-if="!privKey.text"
                class="generate-btn"
                :disabled="loading"
                @click="genPrivKey"
            >
                {{ btnMsg }}
                <template #after>
                    <ui-textfield-icon>person_add_alt</ui-textfield-icon>
                </template>
            </ui-button>
            <ui-button v-else class="btn" outlined>Sign Up</ui-button>
            <vs-button transparent class="tab-btn" @click="tab">
                <i class="bx bxs-chevron-left">&nbsp;</i>
                Go sign in
            </vs-button>
        </div>
    </div>
</template>
<script>
import VueQrcode from 'vue-qrcode'
export default {
    name: 'Register',
    components: {
        VueQrcode
    },
    data() {
        return {
            loading: false,
            privKey: {
                text: '',
                success: () => {
                    this.$toast('Copied!')
                }
            },
            btnMsg: 'Genreate a new Account'
        }
    },
    methods: {
        tab() {
            // 0 is sign in, 1 is sign up
            this.$emit('tab', 0)
        },
        genPrivKey() {
            this.loading = true
            this.btnMsg = 'Generating...'
            setTimeout(() => {
                this.privKey.text = `n3jsqStWtssuAdXUkiQrlbpnz9RxFahMEDk7PlTZlWQnEb2IvmARir9oBfgQaTJp5s8SCwAttazfbM7Wi1o61M872vPP8TJzpnuJ5nD+x6s4 hxTcFUMX6M0gcNyEHZub+zK2goXSrPaGDRpWk44fmA`
                this.loading = false
            }, 1000)
        }
    }
}
</script>
<style scoped>
.tip {
    line-height: 1.05cm;
    color: #f90;
}
.generate-box {
    padding: 1rem;
    text-align: center;
    min-height: 5rem;
}
.qrcode {
    padding: 1rem 0;
}
.generate-btn {
    margin: 2rem 0;
}
.input-box {
    padding-bottom: 1rem;
}
.btn {
    width: 18rem;
    height: 3.2rem;
}
</style>
