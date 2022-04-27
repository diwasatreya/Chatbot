const Discord = require("discord.js");
const db =require("quick.db");
const fetch = require("node-fetch");
// Credit to Supreme#2401
exports.run = async (client, message, args) => {


let channel = message.mentions.channels.first();

if(!channel) {
  return message.channel.send(`Mention a channel`)
}

db.set(`chat_${message.guild.id}`, channel.id)

message.channel.send(`Chatbot channel will be ${channel}.`)
    // return message.reply({embeds : [embed]});

};
exports.conf = {
  aliases: ["setchannel"]
};

exports.help = {
  name: "setchat"
};
