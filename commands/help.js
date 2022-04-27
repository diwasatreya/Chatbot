const Discord = require("discord.js");
// Credit to Supreme#2401
exports.run = async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setTitle("Help Command")
    .setDescription(`
__**Commands**__
\`setchat\`: Set the chatbot channel
\`setlanguage\`: Set the chatbot language

__**Usage**__
\`setchat <#channel>\`
\`setlang <valid language name> <text/pronunciation>\`

__**Aliases**__
\`setchannel\`, \`setlang \`
`)
    .setColor("BLUE")
    .setTimestamp()
    return message.reply({embeds : [embed]});

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "help"
};
