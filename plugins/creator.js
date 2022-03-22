function handler(m) {
  m.reply('Chat jika penting, harap tidak spam.')
  this.sendContact(m.chat, '6281938613895@s.whatsapp.net', 'Fauzan', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
