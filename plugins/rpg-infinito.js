//let { MessageType } = require('@adiwajshing/baileys')
let { MessageType } = (await import(global.baileys)).default
//SOLO USA SI ERES EL/LA PROPIETARIO(A) DEL BOT PARA TENER TODO ILIMITADO O USA EL COMANDO PREMIUM Jajaj
let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*𝘿𝙞𝙛𝙧𝙪𝙩𝙖 𝙏𝙪𝙨 𝙍𝙚𝙘𝙪𝙧𝙨𝙤𝙨 𝘼𝙝𝙤𝙧𝙖 𝙎𝙤𝙣 𝙄𝙇𝙄𝙈𝙄𝙏𝘼𝘿𝙊𝙎!!*`, m)
        global.db.data.users[m.sender].money = Infinity
        global.db.data.users[m.sender].limit = Infinity
        global.db.data.users[m.sender].level = Infinity
        
}
handler.help = ['cheat']
handler.tags = ['owner']
handler.command = /^(chetar|infiniy)$/i
handler.rowner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
//handler.money = 0

export default handler
