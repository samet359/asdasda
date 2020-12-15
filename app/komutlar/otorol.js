const db = require('quick.db');
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
let rol = message.mentions.roles.first()
let kanal = message.mentions.channels.first()
if(!rol) return message.channel.send(`<a:hayr:766603024763453460> Lütfen rol etiketle`)
if(!kanal) return message.channel.send(`<a:hayr:766603024763453460> Lütfen kanal etiketle`)
db.set(`otorolrol_${message.guild.id}`, rol.id)
db.set(`otorolkanal_${message.guild.id}` ,kanal.id)
message.channel.send(`<a:evet:766602801051598889> Otorol rol **@${rol.name}** olarak, bildirimin gideceği kanal ise **#${kanal.name}** olarak ayarlandı.:tik: \n **Not: Botun Rolu en üste olmazsa Çalışmaz**`)
};
    
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};
exports.help = {
 name: 'oto-rol',
};