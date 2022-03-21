let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌〔 Donasi • support 〕
├ Pulsa : 082259123873
├ Shopeepay : 082259123873
├ Saweria : saweria.co/mursid25
└────
`.trim(), '© LiaBot', 'Owner Bot', '.owner', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
