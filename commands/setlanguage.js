const Discord = require("discord.js");
const db =require("quick.db");
const fetch = require("node-fetch");
const Color = "RANDOM";

exports.run = async (client, message, args) => {

// Credit to Supreme#2401
  

    if(!args[0]) return message.reply(`Please give me valid language!`)

let lang = db.get(`lang_${message.author.id}`);
   let speak = db.get(`speak_${message.author.id}`, args[1]);
db.set(`lang_${message.author.id}`, args[0])

    
if(args[1] == "text")
{
     db.set(`speak_${message.author.id}`, "text")
}

    if(args[1] == "pronunciation")
{
     db.set(`speak_${message.author.id}`, "pronunciation")
}

  message.reply(`Chatbot language is now \`${args[0]}\``)

    
};
exports.conf = {
  aliases: ["setlang"]
};

exports.help = {
  name: "setlanguage"
};
