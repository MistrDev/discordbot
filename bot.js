require("dotenv").config()

const { Client, MessageAttachment} = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in!`);
});

// bot commands
client.on('message', msg => {
  if (msg.content === '!hi') {
    msg.reply('Sup bruh!');
  }
});

client.on('message', msg => {
  if (msg.content === '!corg') {
    msg.channel.send('Hi im made of rocks, but dont let that scare you unless your a pair of scissors haha.. little rock, paper, scissors joke for yah');
  }
});

client.on('message', msg => {
  if (msg.content === '!where is cory?') {
    msg.reply('In your moms kitchen prolly');
  }
});

client.on('message', msg => {
  if (msg.content === '!seth') {
    msg.reply('Hi, my name is Seth, Im the leader of this place..');
  }
});

client.on('message', msg => {
  if (msg.content === '!skin') {
    msg.channel.send('thats a big one, ima save it for latah');
  }
});

client.on('message', msg => {
  if (msg.content === '!ape') {
    msg.reply('AMC TO THE MF MOON!');
  }
});

client.on('message', msg => {
  if (msg.content === '!mod-me') {
    msg.member.roles.add('790702092863537153');
  }
});

client.on('message', msg => {
  if (msg.content === '!eric') {
    msg.channel.send(`Eric likes to sniff hambos butt!`);
  }
});

client.on('message', message => {
  if (message.content === '!balloon') {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://www.zebrapen.com/wp-content/themes/zebra/js/fullPage/examples/imgs/bg5.jpg');
    // Send the attachment in the message channel with a content
    message.channel.send(`${message.author},`, attachment);
  }
});
// end bot commands



client.login(process.env.DISCORD_TOK);