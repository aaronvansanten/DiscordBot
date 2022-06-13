const { request } = require('undici');
const { prototype } = require('ws');

module.exports = 
{
    name: 'test',
    description: 'This is a new function that i did not know existed',
    async execute(message, args)
    {
        const voiceChannel = message.channel.get(976569091001319514);
        console.log(voiceChannel.members);

    }
}

// if(!args[1]) {
//     const voiceChannel = await getChannel(message, 'CS-GO', true)
//     if (!voiceChannel) {
//       message.channel.send('ERROR: Voice1 channel not found')
//     } else {
//       await getCurrentChannelMembers(message, voiceChannel)
//     }
//   }

// function getChannel(message, channel, voiceChannel = false) {
//   return message.guild.channels.cache.find(c => c.name === channel && (!voiceChannel || c.isVoice()))
// }

// async function getCurrentChannelMembers (message, channel) {
//   const fetchedChannel = await channel.fetch(true)
//   const members = fetchedChannel.members
//   console.log('Members: ', members)
// }