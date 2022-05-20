const { MessageButton, MessageEmbed, MessageActionRow } = require('discord.js');
const db = require("croxydb");

module.exports.exe = async (client, message, args) => {

  const user = message.mentions.users.first();
  if (!user) return message.reply(':x: Lütfen kayıt edecedğiniz kişiyi belirtin!');

var kız = db.fetch(`kız_${message.guild.id}`)
var erkek = db.fetch(`erkek_${message.guild.id}`)
var kayıtsız = db.fetch(`kaytsız_${message.guild.id}`)


const embed = new MessageEmbed()
.setColor("#5555dd")
.setDescription(`💚 İşte **${user.tag}** için kayıt menüsü!`)
.setFooter("Adelicia 💚 Rencia")


var btn = new MessageButton()
.setStyle("PRIMARY")
.setLabel(`Erkek`)
.setCustomId("erkek")

var btn1 = new MessageButton()
.setStyle("DANGER")
.setLabel(`Kız`)
.setCustomId("kız")


var btn2 = new MessageButton()
.setStyle("SECONDARY")
.setLabel(`Kayıtsız`)
.setCustomId("kaytsz")

const row = new MessageActionRow()
  .addComponents([ btn, btn1, btn2 ]);
  
   return message.reply({ 
    embeds: [ embed ],
    components: [ row ]
  }).then(async (d) => {
    const filter = i => i.user.id == message.author.id;
    d.createMessageComponentCollector({ filter }).on('collect', async (i) => {
      if (!i.isButton()) return;
      if (i.user.id !== message.author.id) return;
      if (i.customId == "erkek") {
        try {
          i.reply({ content: `:+1: **${user.tag}** adlı kullanıcı başarıyla kayıt edildi.`, ephemeral: true });
        i.guild.members.cache.get(user.id).roles.add(erkek)
        } catch (e) {
          return i.reply({ content: `:x: **${user.tag}** adlı kullanıcıya rol verilemiyor.`, ephemeral: true })
        }
      }
      if (i.customId == "kız") {
        i.reply({ content: `:+1: **${user.tag}** adlı kullanıcı kayıt edildi.`, ephemeral: true });
        i.guild.members.cache.get(user.id).roles.add(kız)
      }
      if (i.customId == "kaytsz") {
        try {
          i.reply({ content: `:+1: **${user.tag}** adlı kullanıcıya kayıtsız edildi.`, ephemeral: true });
          i.guild.members.cache.get(user.id).roles.add(kayıtsız)
        } catch (e) {
          return i.reply({ content: `:x: **${user.tag}** adlı kullanıcı atılamıyor.`, ephemeral: true })
        }
      }
    });
    
  });
}
  

