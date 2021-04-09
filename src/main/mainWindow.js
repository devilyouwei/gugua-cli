import BrowserWinHandler from './BrowserWinHandler'

const winHandler = new BrowserWinHandler({
    height: 700,
    width: 1100
})

winHandler.onCreated(() => {
    winHandler.loadPage('/')
    // Or load custom url
    // _browserWindow.loadURL('https://google.com')
})

export default winHandler
