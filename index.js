const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  
//PING  
});

client.on('message', msg => {
  if (msg.content === 'm!ping') {
    msg.channel.send(':ping_pong:Pong!');
  }
});

//STREAMERMODE
client.on('ready', () => {
client.user.setGame('Type m!help', 'https://www.youtube.com');
})

//SERVERINFO
client.on('message', message => {
if (message.content === 'm!serverinfo') {
    Promise.all([
        message.react(':sunglasses:'),
        message.react(':money_mouth:'),
    ])
        .catch(() => console.error('One of the emojis failed to react.'))
    var embedserverinfo = new Discord.RichEmbed()
    .setTitle("")
    .setThumbnail(message.guild.iconURL)
        .setThumbnail(message.guild.iconURL)
        .addField("Name:", message.guild.name)
        .addField("ID:", message.guild.id)
        .addField("Verification Level:", message.guild.verificationLevel)
        .addField("Owner:", message.guild.owner)
        .addField("Created On:", message.guild.createdAt)
        .addField("Members:", message.guild.memberCount)
        .addField("Channels:", message.guild.channels.size)
        .addField("Region:", message.guild.region)
        .setColor('#026bff')
    message.channel.send(embedserverinfo);
}
})

//SAY
client.on('message', message => {
  let args = message.content.split(" ").slice(1);
  if(message.content.startsWith("m!say"))  {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("» | You do not have permission!");		  
         message.delete()
         const embed = new Discord.RichEmbed()
         .setDescription(args.join(" "))
         .setColor(0xff0000)
    message.channel.sendEmbed(embed);
 
     }
 
});

//AVATAR
client.on('message', message => {
  if (message.content === 'm!avatar') {
    message.reply(message.author.avatarURL);
  }
});

//HELP  
client.on('message', msg => {
  if (msg.content === 'm!help') {
    msg.channel.send('Command List: \n\ \n\MEMBER ACCES: \n\serverinfo , ping , avatar , invite \n\ \n\MOD ACCES: \n\say , anunt \n\ \n\Example m!(command)');
  }
});

//ANUNT
client.on('message', message => {
  let args = message.content.split(" ").slice(1);
  if(message.content.startsWith("m!anunt"))  {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("» | You do not have permission!");		  
         message.delete()
         const embed = new Discord.RichEmbed()
         .setDescription(args.join(" "))
         .setColor(0xff0000)
    message.channel.sendEmbed(embed);
 
     }
 
});

//WELCOME
client.on('guildMemberAdd' , member => {               //You can Change The Name
  const channel = member.guild.channels.find('off-topic', 'chatbox');
  if (!channel) return;
 channel.send(`Hey ${member}, welcome to server :tada::hugging: !`);
});

//INVITE
client.on('message', msg => {
  if (msg.content === 'm!invite') {	  
    msg.channel.send('**Invite MagicLand Community »** https://bit.ly/2GRDJy1');	
  }
});

client.login('NDQ5OTcwMTUwMTQyMjQ2OTEy.DescKA.M4fYysV4jkca5ekI0cAnzti2WYo');
