/*let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply(`${eg}𝘦𝘭 𝘤𝘩𝘢𝘵 𝘧𝘶𝘦 𝘥𝘦𝘴𝘣𝘢𝘯𝘦𝘢𝘥𝘢, 𝘺𝘢 𝘱𝘶𝘦𝘥𝘦𝘯 𝘶𝘴𝘢𝘳𝘮𝘦.`)
}
handler.help = ['unbanchat2']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
handler.rowner = true
handler.exp = 50

export default handler*/

//PARA GRUPOS

let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply(`${eg}𝙚𝙡 𝙘𝙝𝙖𝙩 𝙛𝙪𝙚 𝙗𝙖𝙣𝙚𝙖𝙙𝙤, 𝙮𝙖 𝙣𝙤 𝙥𝙤𝙙𝙧á𝙣 𝙪𝙨𝙖𝙧𝙢𝙚 𝙝𝙖𝙨𝙩𝙖 𝙚𝙡 𝙢𝙤𝙢𝙚𝙣𝙩𝙤`)
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat|bangata|banchat2$/i
//handler.botAdmin = false
handler.rowner = true
export default handler
