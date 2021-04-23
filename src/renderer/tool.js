import axios from 'axios'
const URL = 'http://localhost'
const PORT = '3000'
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
    })(),
    async post(ctl, act, data = {}, load = false) {
        try {
            const url = `${URL}:${PORT}/${ctl}/${act}`
            const form = new FormData()
            for (const i in data) form.append(i, data[i])
            if (load) this.loading(true)
            let res = await axios({
                method: 'post',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                url,
                data: form,
                responseType: 'json',
                changeOrigin: true // 允许跨域
            })
            res = res.data
            res.status = parseInt(res.status) || 0
            if (!res.status) throw new Error(res.msg)
            return res
        } catch (e) {
            console.error(e)
            return {
                status: 0,
                data: null,
                msg: e.message
            }
        } finally {
            if (load) this.loading(false) // 用户发起请求时可以提示一个loading 可有可无
        }
    },
    loading() {}
}
