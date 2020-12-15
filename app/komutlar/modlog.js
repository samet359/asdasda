const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  
if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("<a:rainbowdikkat:773266040590958632> Bu Komutu Kullanmak İçin **Yönetici** Yetkisine Sahip Olmalısın! <a:rainbowdikkat:773266040590958632>");

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`codeminglog_${message.guild.id}`)
  
if (args[0] === "sıfırla" || args[0] === "kapat") {
if(!logkanal) {
  
let modlog1 = new Discord.MessageEmbed()
.setDescription(`<a:rainbowdikkat:773266040590958632> Modlog Kanalı Zaten ayarlı değil`)
.setColor("RANDOM")

return message.channel.send(modlog1)
}
    
db.delete(`codeminglog_${message.guild.id}`)
  
let modlog2 = new Discord.MessageEmbed()

.setDescription(`<a:evet:766602801051598889> ModLog Kanalı başarıyla sıfırlandı`)
.setColor("RANDOM")

return message.channel.send(modlog2)
}
  
if (!logk) {
  
let modlog3 = new Discord.MessageEmbed()

.setDescription(`<a:rainbowdikkat:773266040590958632> Bir modlog kanalı belirt`)
.setColor("RANDOM")

return message.channel.send(modlog3)
}

db.set(`codeminglog_${message.guild.id}`, logk.id)

let modlog4 = new Discord.MessageEmbed()

.setDescription(`<a:evet:766602801051598889> Mod-Log kanalı başarıyla ${logk} olarak ayarlandı`)
.setColor("RANDOM")

message.channel.send(modlog4);

console.log(`<a:elmas:773266064444096563> Mod-log komutu ${message.author.username} Tarafından kullanıldı`)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mod-log','modlog'],
    permLevel: 0
};

exports.help = {
    name: 'mod-log',
    description: 'Mod-Log kanalını belirler.',
    usage: 'mod-log <#kanal>'
};