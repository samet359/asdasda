const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if (message.channel.type == "dm") return;
  if (message.channel.type !== "text") return;

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`<a:rainbowdikkat:773266040590958632> Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`).then(m => m.delete({ timeout: 10000}));

  message.delete();

  let question = args.join(" ");

  let user = message.author.username;

  if (!question) return message.channel.send(new Discord.MessageEmbed().setTitle(`<a:rainbowdikkat:773266040590958632> yazı yazman gerek <a:rainbowdikkat:773266040590958632>`)).then(m => m.delete(({ timeout: 5000})));

  message.channel.send(new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(client.user.avatarURL())
        .setTimestamp()
        .setFooter("Bot", client.user.avatarURL())
        .addField(`${client.user.username}`, `**${question}**`)
    )
    .then(function(message) {
      message.react("766602801051598889");
      message.react("766603024763453460");
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oylama"],
  permLevel: 0
};

exports.help = {
  name: "oylama",
  description: "Oylama yapmanızı sağlar.",
  usage: "oylama "
};
