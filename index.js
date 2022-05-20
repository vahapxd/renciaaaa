const { Client, Collection } = require('discord.js');
const db = require("croxydb");
const { readdirSync } = require('fs');
const path = require('path');
const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });
client.commands = new Collection();


const commands = readdirSync(path.resolve(process.cwd(), "commands"));
commands.filter(file => file.endsWith('.js')).forEach(async (command) => {
  const cmd = require(`./commands/${command}`);
  client.commands.set(command.split('.js')[0], {
    name: command.split('.js')[0],
    exe: cmd.exe
  });
});

client.on('ready', () => { 
    console.log('bot hazır.');
})

client.on('ready', () => { 
client.user.setActivity("Adelicia 💚 Rencia")
})


const events = readdirSync(path.resolve(process.cwd(), "events"));
events.filter(file => file.endsWith('.js')).forEach(async (event) => {
  client.on(event.split('.js')[0], (x, y) => require(`./events/${event}`)(client, x, y));
});


client.login(process.env.token);