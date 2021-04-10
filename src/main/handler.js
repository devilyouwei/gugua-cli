import fs from 'fs'
import { ipcMain as ipc, dialog } from 'electron'
ipc.handle('download-image', (event, data) => {
    const url = data.url
    if (url.includes('http')) {
        // http url
    } else {
        // base64
        const base64 = url.replace(/^data:image\/\w+;base64,/, '')
        const dataBuffer = Buffer.from(base64, 'base64')
        const dia = dialog.showSaveDialogSync({
            title: 'Download Image',
            defaultPath: 'qrcode-private-key.png'
        })
        if (dia) {
            fs.writeFileSync(dia, dataBuffer)
            return { msg: `Save QR code to ${dia}`, data: dia }
        } else throw new Error('Fail to save the qrcode')
    }
})
