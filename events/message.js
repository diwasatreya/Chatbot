const { MessageEmbed, Collection } = require("discord.js");
var config = require("../config.json");

const client = require("../index.js");
const prefix = config.prefix;

const db =require("quick.db");
const fetch = require("node-fetch");
client.on("messageCreate", async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    cmd.run(client, message, params);
  }
    

});

client.on("messageCreate", async (message) => {

let cbot = db.get(`chat_${message.guild.id}`);
  let lang = db.get(`lang_${message.author.id}`);
   let speak = db.get(`speak_${message.author.id}`);
  if(lang === null) lang = "auto";
 if(speak === null) speak = "text";
  const chatb = client.channels.cache.get(cbot);
  if (message.channel.id == chatb) {
    if (message.author.bot) return;
    message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
    
    if (!message.content) return message.channel.send("Please say something.");
    if (message.content.includes(`@`)) {
return message.channel.send(`${message.author.username} don't ping anyone!`);}

      if(speak == "text")
     {
     fetch(`https://daf77201-23c8-45cb-bd77-863f0007afdc.id.repl.co/chatbot/?message=${encodeURIComponent(message.content)}&name=${client.user.username}&gender=${config.gender}&developer_name=${config.developer_name}`, {
    }).then(res => res.json())
        .then(async (data) => {
        
await fetch(`https://translate-api.ml/translate?text=${encodeURIComponent(data.message)}&lang=${lang}`, {
}).then(res => res.json()).then(dataa => {
    message.reply(dataa.translated.text);
})
        })
  }
// Credit to Supreme#2401
       if(speak == "pronunciation")
     { //Our official chatbot will release soon 
     fetch(`https://daf77201-23c8-45cb-bd77-863f0007afdc.id.repl.co/chatbot/?message=${encodeURIComponent(message.content)}&name=${client.user.username}&gender=${config.gender}&developer_name=${config.developer_name}`, {
    }).then(res => res.json())
        .then(async (data) => {
        
await fetch(`https://translate-api.ml/translate?text=${encodeURIComponent(data.message)}&lang=${lang}`, {
}).then(res => res.json()).then(dataa => {
    message.reply(dataa.translated.pronunciation);
})
        })
  }
  }
});
