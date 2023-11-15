/*
   * Created By AdrianDev
   * My Contact https://wa.me/6289513081052
   * Version Rxzy-MD 1.3 ( Free Edition )
   
   * sory kalau banyak error karena lu apikeynya gak ada atau limit abis
   * kalau mau beli Premium Edition Chat Gw Aja Harga Bisi-Bisi Fitur Banyak
*/

const fs = require('fs')
const chalk = require('chalk')

/* ~~~~~~~~~ WEB API ~~~~~~~~~ */
global.lol = '-' // https://api.lolhuman.xyz
global.xzn = '-' // https://xnz.wtf
/* ~~~~~~~~~ SETTINGS OWNER ~~~~~~~~~ */
global.numberowner = '6287770516683' // Owner Utama
global.owner = ['-'] // Owner Lainnya
global.namaowner = 'xtreshe' // Nama Owner
global.premium = ["6283825289775"] // Premium User
/* ~~~~~~~~~ SETTINGS BOT ~~~~~~~~~ */
global.namabot = 'xtreshebot' // NickBot
global.typemenu = 'v2 // 'v1' => 'v6'
global.typereply = 'v1'
global.autoread = false // ReadChat
global.autobio = false // AutoBio
global.autoblok212 = true // AutoBlock Nomer +212
global.onlyindo = false  // AutoBlock Selain Nomer Indo
global.onlygrup = false // onlygroup
global.onlypc = false // onlypece
global.packname = 'xtreshe' // Watermark Sticker
global.author = '' // Watermark Sticker
/* ~~~~~~~~~ MESSAGES ~~~~~~~~~ */
global.mess = {
    limit: '*Limit Anda Habis*',
    done: 'Done ✅',
    prem: 'Fitur Khusus  _*PREMIUM*_',
    admin: 'Fitur Khusus  _*Admin Group*_',
    botAdmin: 'gw bukan admin woyy !',
    owner: 'Fitur Khusus  _*owner*_',
    group: 'Fitur Khusus  _*Group Chat*_',
    private: 'Fitur Khusus  _*Chat pribadi*_',
    wait: 'Wait a Moment, for Process',    
    error: '_*maap lagi eror bg*_',
}
/* ~~~~~~~~~ THUMBNAIL ~~~~~~~~~ */
global.thumb = fs.readFileSync('./media/quoted.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
/* ~~~~~~~~~ EDITS LINK ~~~~~~~~~ */
global.link = '-'
/* ~~~~~~~~~ END SYSTEM ~~~~~~~~~ */
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})