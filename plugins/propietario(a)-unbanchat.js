const handler = async (m) => {
m.reply(`${eg}𝘦𝘭 𝘤𝘩𝘢𝘵 𝘧𝘶𝘦 𝘥𝘦𝘴𝘣𝘢𝘯𝘦𝘢𝘥𝘢, 𝘺𝘢 𝘱𝘶𝘦𝘥𝘦𝘯 𝘶𝘴𝘢𝘳𝘮𝘦.`)
global.db.data.chats[m.chat].isBanned = false 
}
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = /^unbanchat$/i;
handler.botAdmin = false
handler.admin = true
export default handler;
