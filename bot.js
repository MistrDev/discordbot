require('dotenv').config()



const { Client, MessageAttachment} = require('discord.js');
const Discord = require('discord.js');
const DIG = require("discord-image-generation");

const client = new Discord.Client({
  partials: ["MESSAGE"]
}
);

//node stuff
client.setMaxListeners(Infinity);
client.on('ready', () => {
  console.log(`Logged in! `  + Discord.version);
});

// bot commands

client.on('message', msg => {
  if (msg.content === '!korg') {
    const attachment = new MessageAttachment('https://media.tenor.com/images/0e467ab6c3959ca3b0de995a6a3ad475/tenor.gif');
    const attachment2 = new MessageAttachment('https://media.tenor.com/images/8f9e3fa80f0e9529811ee1a732600e9a/tenor.gif');
    msg.channel.send(attachment);
    msg.channel.send(attachment2);
  }
});

client.on('message', msg => {
  if (msg.content === '!nft') {
    const attachment = new MessageAttachment('photos/nft.png');
    msg.channel.send(attachment)
  }
});

client.on('message', msg => {
  if (msg.content === '!where is cory?') {
    msg.reply('In your moms kitchen prolly');
  }
});

client.on('message', msg => {
  if (msg.content === '!seth') {
    msg.channel.send('Oy seth, I hope you have a good one ol chap');
  }
});

client.on('message', msg => {
  if (msg.content === '!skin') {
    msg.channel.send('thats a big one, ima save it for latah');
  }
});

client.on('message', msg => {
  if (msg.content === '!bo') {
    msg.channel.send('Bo loves jarvis and Cory, my master!');
  }
});


client.on('message', msg => {
  if (msg.content === 'are you working jarvis?') {
    msg.reply('Yes, I seem to be working correctly. Why do you ask?');
  }
});

client.on('message', msg => {
  if (msg.content === 'Just making sure jarvis') {
    msg.reply('Thank you for making me feel wanted..');
    msg.react(':heart_eyes:');
  }
});


client.on('message', msg => {
  if (msg.content === '!eric') {
    msg.channel.send('Eric loves Jarvis!');
  }
});


client.on('message', msg => {
  if (msg.content === '.dc') {
    msg.channel.send('See ya later Hydra!');
  }
});


client.on('message', msg => {
  if (msg.content === 'I love jarvis') {
    msg.react('😍');
  }
});

client.on('message', message => {
  if (message.content === '!balloon') {
    const attachment = new MessageAttachment('https://www.zebrapen.com/wp-content/themes/zebra/js/fullPage/examples/imgs/bg5.jpg');
    message.channel.send(`${message.author},`, attachment);
  }
});

client.on('message', message => {
  if (message.content === '!what is my avatar?') {
    message.reply(message.author.displayAvatarURL());
  }
});


// Copilot Commands //
client.on('message', msg => {
  if (msg.content === '!8ball') {
    const responses = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes - definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy, try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Don\'t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful'];
    msg.reply(responses[Math.floor(Math.random() * responses.length)]);
  }
});

//dice command
client.on('message', msg => {
  if (msg.content === '!dice') {
    const responses = ['1', '2', '3', '4', '5', '6'];
    msg.reply(responses[Math.floor(Math.random() * responses.length)]);
  };
});

// a command that has a full JS example
client.on('message', msg => {
  if (msg.content === '!JS') {
    msg.channel.send('```js\nconsole.log("Hello, world!");\n```');
  }
});


// a command that has a full css example  
client.on('message', msg => {
  if (msg.content === '!css') {
    msg.channel.send('```css\nbody {\n  background-color: #f0f0f0;\n}\n```');
  }
});

//a html command
client.on('message', msg => {
  if (msg.content === '!html') {
    msg.channel.send('```html\n<html>\n  <head>\n    <title>Hello, world!</title>\n  </head>\n  <body>\n    <h1>Hello, world!</h1>\n  </body>\n</html>\n```');
  }
});


//a command that hacks the server
client.on('message', msg => {
  if (msg.content === '!hack') {
    msg.channel.send('```js\nconsole.log("THIS SERVER IS NOW IN CONTROL BY JARVIS");\n```');
  }
});

// a command that plays a game of russian roulette
client.on('message', msg => {
  if (msg.content === '!russian') {
    const attachment = new MessageAttachment('https://media.giphy.com/media/cdNSp4L5vCU7aQrYnV/giphy.gif');
    const responses = ['Click', 'Click', 'Click', 'Click', 'Click', 'BANG! , YOU DIED'];
    msg.reply(responses[Math.floor(Math.random() * responses.length)]);
    msg.channel.send(attachment);
  }
});


// link commands //
client.on('message', message => {
  if (message.content === '!creator') {
    const botInfo = new Discord.MessageEmbed()
    .setDescription('[To Dads House!](https://www.mistrdev.dev/)')
    message.channel.send('Here is Mistr Dev, my creator. Check out his website below!')
    message.channel.send(botInfo);
    
  }
});


client.on('message', message => {
  if (message.content === '!github') {
    const botInfo = new Discord.MessageEmbed()
    .setDescription('[To Dads Code!](https://github.com/MistrDev)')
    message.channel.send('Here is Mistr Devs github! Check out his commits to his projects! Is he even human..?')
    message.channel.send(botInfo);
    
  }
});


client.on('message', message => {
  if (message.content === '!linked') {
    const botInfo = new Discord.MessageEmbed()
    .setDescription('[To Dads Work!](https://www.linkedin.com/in/cory-williams-5672841b0/)')
    message.channel.send('Here is Mistr Devs LinkedIn! Check out how professional he is.. wow')
    message.channel.send(botInfo);
    
  }
});



// command for the DIG images
client.on('message', async (message) => {
  if (message.content === '!meme') {
      const avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      const img = await new DIG.Affect().getImage(avatar)
      const attach = new Discord.MessageAttachment(img, "delete.png");;
      message.channel.send(attach)
  }
});

client.on('message', async (message) => {
  if (message.content === '!beautiful') {
      const avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      const img = await new DIG.Beautiful().getImage(avatar)
      const attach = new Discord.MessageAttachment(img, "delete.png");;
      message.channel.send(attach)
  }
});

client.on('message', async (message) => {
  if (message.content === '!rip') {
      const avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      const img = await new DIG.Rip().getImage(avatar)
      const attach = new Discord.MessageAttachment(img, "delete.png");;
      message.channel.send(attach)
  }
});

client.on('message', async (message) => {
  if (message.content === '!trash') {
      const avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      const img = await new DIG.Trash().getImage(avatar)
      const attach = new Discord.MessageAttachment(img, "delete.png");;
      message.channel.send(attach)
  }
});

client.on('message', async (message) => {
  if (message.content === '!triggered') {
      const avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      const img = await new DIG.Triggered().getImage(avatar)
      const attach = new Discord.MessageAttachment(img, "delete.png");;
      message.channel.send(attach)
  }
});

client.on('message', async (message) => {
  if (message.content === '!lisa') {
      const avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      const img = await new DIG.LisaPresentation().getImage(`Invest Today.    Thank you, Have a good day.`);
      const attach = new Discord.MessageAttachment(img, "delete.png");;
      message.channel.send(attach)
  }
});

client.on('message', async (message) => {
  if (message.content === '!invert') {
      const avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      const img = await new DIG.Invert().getImage(avatar);
      const attach = new Discord.MessageAttachment(img, "delete.png");;
      message.channel.send(attach)
  }
});

client.on('message', async (message) => {
  if (message.content === '!AMC') {
      const avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
      const img = await new DIG.Stonk().getImage(avatar)
      const attach = new Discord.MessageAttachment(img, "delete.png");;
      message.channel.send(attach)
  }
});

//end bot commands


client.login(process.env.DISCORD_TOK);