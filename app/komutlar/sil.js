const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
   let silmek = args[0]
   if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('<a:rainbowdikkat:773266040590958632> Bu komutu kullancak yetkiye sahip değilsiniz.');
   if (!silmek) {
     const sa = new Discord.MessageEmbed()
    .setDescription('<a:rainbowdikkat:773266040590958632> Rakam Belirt')
    .setTimestamp()
return message.channel.send(sa)  
  }
  if (isNaN(silmek)) {
 const sa3 = new Discord.MessageEmbed()
    .setDescription('<a:rainbowdikkat:773266040590958632> Silme Değeri Sadece Rakamlardan Oluşabilir')
    .setTimestamp()
return message.channel.send(sa3)  
  }
if (silmek > 100) {
 const sa2 = new Discord.MessageEmbed()
    .setDescription('<a:rainbowdikkat:773266040590958632> 100 Den Fazla Silemem')
    .setTimestamp()
return message.channel.send(sa2)  
  }  
  
  message.channel.bulkDelete(silmek).then(() =>  {
   message.channel.send(`<a:evet:766602801051598889> ${silmek} Kadar Mesaj ${message.author.tag} Tarafından Silindi`).then(a => a.delete({timeout:3000}))

message.delete()

  })
  
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
 aliases: ['temizle','sil'],
  permLevel: 1
};

exports.help = {
  name: "Sil",
  description: "Wolf Bot List",
  usage: "temizle"
};