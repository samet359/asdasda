const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 
  
  const ottoman = new Discord.MessageEmbed()
  .setColor("BLACK")
  .setTitle('AsluTehx Bot')
  .setDescription(`\n**${prefix}sil**\nİstediğiniz miktarda mesaj silersiniz.\n\n**${prefix}av**\nAvatar  profilinizi atar.\n\n**${prefix}istatistik**\nBot hakkında bilgi verir.\n\n**${prefix}davet**\nBotun davet linkini atar.\n\n**${prefix}küfür**\nKüfür Engel Distemini Açar-Kapatırsınız.\n\n**${prefix}reklam-engelle**\nReklam-Engel Açar-Kapatırsınız.\n\n**${prefix}yavaş-mod**\nYavaş Modu Açarsınız.\n\n**${prefix}otorol**\nSunucuya Girenlere Otomatik Rol Vermesi İçin Bota Emir Verirsiniz.\n\n**${prefix}oylama**\nOylama Başlatırsınız.\n\n**${prefix}roles**\nSunucudaki Rolleri Gösterir\n\n**${prefix}modlog**\nModerasyon Log Kanalı Belirlersiniz **ax?modlog sıfırla komuduyla logu sıfırlarsınız**\n\n**${prefix}sa-as**\nSa-as Açarsanız Bot Sa Yazana Otomatik As Yazar\n\n**${prefix}1v1**\nArkadaşlarınızla 1v1 Atarsınız`)
  
 message.channel.send(ottoman)
}

exports.conf = {
  enabled: false,
  guildOnly: false,
  permLevel: 0,
  aliases: ['help', 'h', 'y', 'yardım']
}

exports.help = {
  name: 'yardım',
  description: 'Yardım Menüsünü Açar',
  usage: 'yardım'
}