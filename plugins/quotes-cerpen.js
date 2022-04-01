import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = await axios.get(API('lolhuman', '/api/cerpen', {}, 'apikey'))
    let json = res.data
    let hasil = `*Title:* ${json.result.title}\n*Author:* ${json.result.creator}`
    conn.sendButton(m.chat, hasil, json.result.cerpen, [
    ['Next', `${usedPrefix + command}`]
], m)
}
handler.help = ['cerpen']
handler.tags = ['quotes']
handler.command = /^(cerpen)$/i

export default handler
