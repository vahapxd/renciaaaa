const { MessageEmbed } = require("discord.js");
const db = require("croxydb");

module.exports.exe = async (client, message, args) => {

 var rol = message.mentions.roles.first();

	if (!message.member.permissions.has("ADMINISTRATOR")) {
var permyok = new MessageEmbed()
.setColor("#5555dd")
.setFooter("Adelicia 💚 Rencia")
.setDescription("Yeterli Perm Yok.. :( ")  
   return message.reply({  embeds: [ permyok ] }) 
  }



var yanlıs = new MessageEmbed()
.setColor("#5555dd")
.setFooter("Adelicia 💚 Rencia")
.setDescription(":x: Yanlış Kullanım.. \n :star: Doğru Kullanım: .erkek-rol-ayarla rol @role :( ")  
   if (!args[0])  return message.reply({  embeds: [ yanlıs ] }) 


if(args[0] == "rol") {
    if (!rol) return message.channel.send("**:x: Lütfen bir Rol etiketleyip tekrar deneyin.**")
     db.set(`erkek_${message.guild.id}`, rol.id)
  var basarılı = new MessageEmbed()
  .setColor("#5555dd")
.setFooter("Adelicia 💚 Rencia")
.setDescription(":white_check_mark: Erkek Rol Başarıyla Ayarlandı.")  
    return message.reply({embeds: [ basarılı ] }) 
  }
  

    }