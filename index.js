const { Client, Message, MessageEmbed, Collection } = require("discord.js");
const db =require("quick.db");
const fs = require("fs");
const config = require("./config.json");
const dotenv = require("dotenv").config();
const token = process.env.TOKEN;
// Credit to Supreme#2401
const client = new Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  shards: "auto",
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: 32767,
});
module.exports = client;

require("./events/message.js")
require("./events/ready.js")

client.commands = new Collection();
client.aliases = new Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  console.log(`${files.length} Total Command!`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    console.log(`${props.help.name} command is loaded!`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

// Do not change anything here
require('http').createServer((req, res) => res.end(`
 |-----------------------------------------|
 |              Informations               |
 |-----------------------------------------|
 |• Alive: 24/7                            |
 |-----------------------------------------|
 |• Author: Supreme#2401                   |
 |-----------------------------------------|
 |• Server: https://discord.gg/gU7XAxTpX5  |
 |-----------------------------------------|
 |• Github: https://github.com/diwasatreya |
 |-----------------------------------------|
 |• License: Apache License 2.0            |
 |-----------------------------------------|
`)).listen(3000) //Dont remove this 

client.login(token); 
