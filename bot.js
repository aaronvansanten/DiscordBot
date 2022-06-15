const {Client, Intents, Collection, VoiceChannel} = require('discord.js')
const {token} = require('./config.json')
const fs = require('fs');
const ytdl = require('ytdl-core');

const client = new Client({ 
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES, 
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_VOICE_STATES
  ] 
})

client.commands = new Collection();
const queue = new Map();


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`)
  client.commands.set(command.name, command);
}

const prefix = '!';

client.once('ready', () => {
  console.log("Larry is activated")
})

client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  
  const serverQueue = queue.get(message.guild.id);
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  

  switch (command) {
    case "ping":
      client.commands.get('ping').execute(message, args);
      break;
    case "jumbo":
      client.commands.get('jumbo').execute(message, args);
      break;
    case "gangpad":
      client.commands.get('gangpad').execute(message, args);
      break;
    case "test":
        client.commands.get('test').execute(message, args);
        break;
    case "ace":
        client.commands.get('ace').execute(message, args);
        break;
    case "clear":
      if(!message.member.roles.cache.has('974027415493935194')) {
        message.channel.send("You do not have the permissions");
        setTimeout(() => {message.channel.bulkDelete(2); }, 2000);
        return;
      } 
      client.commands.get('clear').execute(message, args);
      break;
      case "igl":
        if(!message.member.roles.cache.has('974027415493935194')) {
          message.channel.send("You do not have the permissions");
          setTimeout(() => {message.channel.bulkDelete(2); }, 2000);
          return;
        } 
        client.commands.get('igl').execute(message, args);
        break;
    default:
      message.channel.send("Your command is not yet known or implemented"); 
      break; 
  }
})

client.login(token)


/*  
Kill display      ==> Zeus, Negev, Knife
JumboRadio        ==> PRIORITEIT
ModerationBot     ==> AH,
InKlok Systeem    ==> Timen hoelaat je er bent
*/