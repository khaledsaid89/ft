const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("602085119641124864")
setInterval(function() {
channel.send(`Mostfa mtnq`);
}, 30)
})

client.login(process.env.BOT_TOKEN);