const { MessageButton, MessageActionRow, MessageEmbed } = require("discord.js")

module.exports.exe = async (client, message, args) => {

var embed = new MessageEmbed()
.setColor("#5555dd")
.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
.setTimestamp()
.setDescription(`Eternal Yardım Menüsüne Hoşgeldin **${message.author.tag}**!\n 😋 Toplam Komut Sayım: **${client.commands.size}** \n\n - **Komutlar** \n .erkek-rol-ayarla rol @roles \n .kız-rol-ayarla rol @roles \n .kayıtsız-rol-ayarla rol @roles`)

var button = new MessageButton()
.setStyle("LINK")
.setURL("https://discord.gg/kreNHDWjZW")
.setLabel("Discord")
.setEmoji('977219716861009950')

var row = new MessageActionRow()
 .addComponents([button]); 

message.channel.send({ embeds: [embed], 
components: [row] }) 


}
