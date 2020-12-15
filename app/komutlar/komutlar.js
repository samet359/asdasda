const Discord = require("discord.js");
const a = require("../ayarlar.json")
//Dcs Ekibi
module.exports.run = async (client, message, args) => {
    try {
        await message.channel.send(`Komutlar: \n${client.commands.map(props => `\`ax?${props.help.name}\``).join(" <a:siyah:766608845816332288> ")}`);
    } catch (e) { //Dcs Ekibi
        throw e;
    }
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["commands"],
  permLevel: 0
};

module.exports.help = {
  name: 'komutlar',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};