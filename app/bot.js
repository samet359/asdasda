const Discord = require("discord.js");

const client = new Discord.Client();

const ayarlar = require("./ayarlar.json");

const chalk = require("chalk");

const moment = require("moment");

var Jimp = require("jimp");

const { Client, Util } = require("discord.js");

const fs = require("fs");

const db = require("quick.db");

const http = require("http");

const express = require("express");

require("./util/eventLoader.js")(client);

const path = require("path");

const snekfetch = require("snekfetch");

var prefix = ayarlar.prefix;

const log = message => {

  console.log(`${message}`);

};

client.commands = new Discord.Collection();

client.aliases = new Discord.Collection();

fs.readdir("./komutlar/", (err, files) => {

  if (err) console.error(err);

  log(`${files.length} komut yüklenecek.`);

  files.forEach(f => {

    let props = require(`./komutlar/${f}`);

    log(`Yüklenen komut: ${props.help.name}.`);

    client.commands.set(props.help.name, props);

    props.conf.aliases.forEach(alias => {

      client.aliases.set(alias, props.help.name);

    });

  });

});

client.reload = command => {

  return new Promise((resolve, reject) => {

    try {

      delete require.cache[require.resolve(`./komutlar/${command}`)];

      let cmd = require(`./komutlar/${command}`);

      client.commands.delete(command);

      client.aliases.forEach((cmd, alias) => {

        if (cmd === command) client.aliases.delete(alias);

      });

      client.commands.set(command, cmd);

      cmd.conf.aliases.forEach(alias => {

        client.aliases.set(alias, cmd.help.name);

      });

      resolve();

    } catch (e) {

      reject(e);

    }

  });

};

client.load = command => {

  return new Promise((resolve, reject) => {

    try {

      let cmd = require(`./komutlar/${command}`);

      client.commands.set(command, cmd);

      cmd.conf.aliases.forEach(alias => {

        client.aliases.set(alias, cmd.help.name);

      });

      resolve();

    } catch (e) {

      reject(e);

    }

  });

};

client.unload = command => {

  return new Promise((resolve, reject) => {

    try {

      delete require.cache[require.resolve(`./komutlar/${command}`)];

      let cmd = require(`./komutlar/${command}`);

      client.commands.delete(command);

      client.aliases.forEach((cmd, alias) => {

        if (cmd === command) client.aliases.delete(alias);

      });

      resolve();

    } catch (e) {

      reject(e);

    }

  });

};

client.elevation = message => {

  if (!message.guild) {

    return;

  }

  let permlvl = 0;

  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;

  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;

  if (message.author.id === ayarlar.sahip) permlvl = 4;

  return permlvl;

};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

// client.on('debug', e => {

//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));

// });

client.on("warn", e => {

  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));

});

client.on("error", e => {

  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));

});

client.login(ayarlar.token);

////////////////////////////KOMUTLAR BURDAN SONRA\\\\\\\\\\\\\\\\\\\\\\\\\\\\
client.on("message", msg => {
var dm = client.channels.cache.get("783787170850668635")
if(msg.channel.type === "dm") {
if(msg.author.id === client.user.id) return;
const botdm = new Discord.MessageEmbed()
.setTitle(`${client.user.username} Dm`)
.setTimestamp()
.setColor("RED")
.setThumbnail(`${msg.author.avatarURL()}`)
.addField("<a:star:786140451375415336> Gönderen", msg.author.tag)
.addField("<a:star:786140451375415336> Gönderen ID", msg.author.id)
.addField("<a:star:786140451375415336> Gönderilen Mesaj", msg.content)

dm.send(botdm)

}
if(msg.channel.bot) return;
});
client.on("message", async msg => {
  
  
 const i = await db.fetch(`kufur_${msg.guild.id}`)
    if (i == "acik") {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                          
                      return msg.reply('<a:rainbowdikkat:773266040590958632>   Bu Sunucuda Küfür Filtresi Aktiftir.')
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});

client.on("messageUpdate", (oldMessage, newMessage) => {
  
  
 const i = db.fetch(`${oldMessage.guild.id}.kufur`)
    if (i) {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
        if (kufur.some(word => newMessage.content.includes(word))) {
          try {
            if (!oldMessage.member.hasPermission("BAN_MEMBERS")) {
                  oldMessage.delete();
                          
                      return oldMessage.reply('<a:rainbowdikkat:773266040590958632> Bu Sunucuda Küfür Filtresi Aktiftir.')
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});
client.on("message", msg => {
 if(!db.has(`reklam_${msg.guild.id}`)) return;
        const reklam = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
        if (reklam.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                    return msg.reply('<a:rainbowdikkat:773266040590958632> **Bu Sunucuda** `Reklam Engelle`** Aktif Reklam Yapmana İzin Vermem İzin Vermem ? ! <a:rainbowdikkat:773266040590958632>**').then(msg => msg.delete(3000));
   
 
  msg.delete(3000);                              
 
            }              
          } catch(err) {
            console.log(err);
          }
        }
    });
client.on("ready", async () => {
client.channels.cache.get("766610978594357248").join()
})
client.on("message", async (msg, user) => {
  const request = require("node-superfetch");
  const db = require("quick.db");
  const ms = require("parse-ms");
  let zaman = db.fetch(`${msg.guild.id}.slowmode`);
  if (zaman === undefined) zaman = 0;
  let timeout = zaman;
  let darkcode = await db.fetch(`slowmodee_${msg.author.id}`);

  if (darkcode !== null && timeout - (Date.now() - darkcode) > 0) {
    let time = ms(timeout - (Date.now() - dakdest));
    msg.delete();
    msg.channel
      .send("**Bu kanalda yavaş mod açık mesaj atmadan beklemen gerek!**")
      .then(message => message.delete(2000));
  } else {
    if (msg.content.length > 0) {
      db.set(`slowmodee_${msg.author.id}`, Date.now());
    }
  }
});
client.on('guildMemberAdd', async member => {
  let kanal1 = await db.fetch(`otorolkanal_${member.guild.id}`);
    let rol1 = await db.fetch(`otorolrol_${member.guild.id}`);
  let kanal = member.guild.channels.cache.get(kanal1)
  let rol = member.guild.roles.cache.get(rol1)
  if (!kanal) return;
  if (!rol) return;
  kanal.send(`<a:discordrozet:770564707836231680> ${member} adlı kullanıcıya başarıyla **@${rol.name}** rolü verildi. <a:discordrozet:770564707836231680>`)
  member.roles.add(rol)
});
client.on("guildCreate", guild => {
  let dcs_kanal = client.channels.cache.get("784152493969375342")

 const dcs = new Discord.MessageEmbed()
.setTitle("SUNUCUYA EKLENDİM")
.setColor("GREEN")
.addField('▪️ Sunucu İsmi', `\`${guild.name}\``)
.addField('▪️ Üye Sayısı', `\`${guild.members.cache.size}\``)
.addField('▪️ Kurucu', `\`${guild.owner.user.tag}\``)
dcs_kanal.send(dcs)
});
//DarkCODES
client.on("guildDelete", guild => {
  let dcs_kanal = client.channels.cache.get("784152493969375342")

 const dcs = new Discord.MessageEmbed()
.setTitle("SUNUCUDAN AYRILDIM")
.setColor("RED")
.addField('▪️ Sunucu İsmi', `\`${guild.name}\``)
.addField('▪️ Üye Sayısı', `\`${guild.members.cache.size}\``)
.addField('▪️ Kurucu', `\`${guild.owner.user.tag}\``)
dcs_kanal.send(dcs)
});
client.on("message", async message => {
  const codeuniverse = message.content.toLocaleLowerCase();

  if (
    codeuniverse === "selam" ||
    codeuniverse === "sa" ||
    codeuniverse === "selamün aleyküm" ||
    codeuniverse === "selamun aleyküm" ||
    codeuniverse === "slm" ||
    codeuniverse === "sea"
  ) {
    let e = await db.fetch(`sa-as_${message.guild.id}`);
    if (e === "acik") {
      message.reply(
      new Discord.MessageEmbed()

          .setDescription(
            
          `<a:discordrozet:770564707836231680> ${message.author} Ve Aleyküm Selam Hoşgeldin`
          )
          .setColor("RANDOM")
     );

      
    }
  }
});
client.on("message", async message => { 
const kanal = client.channels.cache.get("773266789425217556")

setInterval(() => {
  const dcse = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTimestamp()
.setImage(client.emojis.cache.random().url)
  kanal.send(dcse)
}, 10000)
})