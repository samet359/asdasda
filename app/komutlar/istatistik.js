const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const seksizaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter("AsluTehx", client.user.avatarURL())
    .addField("»<a:star:786140451375415336> **Botun Sahibi**", "<@647864293525815297>","<@443422066692063242>","<@698849343406473346>")
    .addField("»<a:star:786140451375415336> **Gecikme süreleri**","Mesaj Gecikmesi: {ping1} ms \nBot Gecikmesi: {ping2} ms"
        .replace("{ping1}", new Date().getTime() - message.createdTimestamp)
        .replace("{ping2}", client.ws.ping),true)
    .addField("<a:star:786140451375415336> » **Bellek kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
    .addField("<a:star:786140451375415336> » **Çalışma süresi**", seksizaman, true)
    .addField("<a:star:786140451375415336> » **Kullanıcılar**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("<a:star:786140451375415336> » **Sunucular**", client.guilds.cache.size.toLocaleString(), true)
    .addField("<a:star:786140451375415336> » **Kanallar**", client.channels.cache.size.toLocaleString(), true)
    .addField("<a:star:786140451375415336> » **Discord.JS sürüm**", "v" + Discord.version, true)
    .addField("<a:star:786140451375415336> » **Node.JS sürüm**", `${process.version}`, true)
    .addField("<a:star:786140451375415336> » **Müzik Çalınan Sunucu Sayısı**", client.voice.connections.size, true)
    .addField("<a:star:786140451375415336> » **CPU**",`\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,true)
    .addField("<a:star:786140451375415336> » **Bit**", `\`${os.arch()}\``, true)
    .addField("<a:star:786140451375415336> » **İşletim Sistemi**", `\`\`${os.platform()}\`\``, true)
    .addField(" <a:star:786140451375415336>**» Bot Davet**"," [Davet Et](https://discordapp.com/oauth2/authorize?client_id=" + client.user.id + "&scope=bot&permissions=8)");
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Botun istatistiklerini gösterir",
  usage: "istatistik"
};