const Discord = require('discord.js');

exports.run = async (client , message, args ) => {

const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`<a:yeilkristal:770565242836615200> Beni Sunucuna Davet Etmek İçin [Tıkla!](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)`)
message.channel.send(embed)
};
exports.conf = {

enabled: true,

guildOnly: true,
aliases: [],
permLevel: 0
}
exports.help = {
name: 'davet'
};