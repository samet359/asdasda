const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .addField(
          "**Hata**",
          `\`<a:rainbowdikkat:773266040590958632> ax?sa-sa aç/kapat\`Kullanabilmek için , \`Yönetici\` **Yetkisine sahip olmanız gerekir**.`
        )
        
    );

  const codeuniverse = args.join(` `);

  if (!codeuniverse)
    message.channel.send(
      new Discord.MessageEmbed()

        .setTitle(`Doğru Kullanım`)
        .setDescription(
          `<a:rainbowdikkat:773266040590958632> **Sa-As Sistemini Çalıştırmak İçin** ; \n\`ax?sa-as aç\` **Veya** \`ax?sa-as kapat\` **Yazınız**!`
        )
        .setColor("RED")
    );

  if (codeuniverse === "aç") {
    db.set(`sa-as_${message.guild.id}`, `acik`);
    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle(`Başarılı`)
        .setDescription(
          `**<a:evet:766602801051598889> Bundan Sonra** \`sa\` **Yazıldığında** \`as\` **Diye Cevap Vereceğim.**`
        )
        .setColor("GREEN")
    );
  } else if (codeuniverse === "kapat") {
    db.set(`sa-as_${message.guild.id}`, `kapali`);
    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle(`Başarılı`)
        .setDescription(
          `<a:evet:766602801051598889> Bundan Sonra **sa** Yazıldığında **as** Diye Cevap Vermeyeceğim.`
        )
        .setColor("GREEN")
    );
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sa-as","sa-as-sistemi","saas"],
  permLevel: 0
};

exports.help = {
  name: "sa-as"
};