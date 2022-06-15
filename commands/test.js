const { Client, Intents, DiscordAPIError, Collection } = require('discord.js');
const { request } = require('undici');
const { prototype } = require('ws');

module.exports = 
{
    name: 'test',
    description: 'This is a new function that i did not know existed',
    async execute(message, args)
    {
        if(!args[1]) {
            const voiceChannel = await getChannel(message, 'CS-GO', true).fetch()
            if (!voiceChannel) {
                message.channel.send('ERROR: Channel not found')
            } else {
              await getCurrentChannelMembers(message, voiceChannel)
            }
          }
    }
}

function getChannel(message, channel, voiceChannel = false) {
    return message.guild.channels.cache.find(c => c.name === channel && (!voiceChannel || c.isVoice()))
  }

  async function getCurrentChannelMembers (message, channel) {
    const fetchedChannel = await channel.fetch(true)
    console.log(fetchedChannel.members);
  }