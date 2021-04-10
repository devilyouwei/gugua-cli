import BrowserWinHandler from './BrowserWinHandler'

// width=1920 * 0.618, height=width * 0.618
const winHandler = new BrowserWinHandler({
    height: 733,
    width: 1186
})

winHandler.onCreated(() => {
    winHandler.loadPage('/')
    // Or load custom url
    // _browserWindow.loadURL('https://google.com')
})

export default winHandler
