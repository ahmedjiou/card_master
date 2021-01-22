// importing the helping functions 

// Adding the discord bot token from a .env file 
require('dotenv').config()

// Bringing in the discord.js and a new instance of the Discord object 
const Discord = require('discord.js');
const client = new Discord.Client();

// Importing the useful and helping functions 
const helpFunction= require('./help_functions');

// The welcome message 
const welcome_message = 'Welcome to the guess card game \n You need to guess which card suit it will be ';


// Event listener to know if the bot is operational 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Event listener on message channel 
client.on('message', msg => {

    // This indicates that the game is starting 
    if(msg.content.slice(0,6) == '!guess') {


        // printing a card randomly 
        let card = helpFunction.createRandomNum();
        // Adding an emoji to make it more beautiful 
        console.log(msg.content.slice(7));
            switch(msg.content.slice(7)) {
              case '1':
                  msg.react('♣️') 
                  break;
          
              case '2':
                  msg.react('♦️')
                  break;
              
              case '3': 
                  msg.react('♥️')
                  break;
          
              case '4': 
                  msg.react('♠️')
                  break;
            
            default: 
                    msg.react('🤡')
          }         
          
        // End of the reaction function        
        let card_image = new Discord.MessageAttachment(`DECK/${card.card_num}.png`) ;
        msg.reply(card_image);


        // Comparing the number in the guess with the actual number 
        if (msg.content.slice(7) == card.style_num.toString() ) {
                
            msg.reply('Bravo you guessed it right');
            
        }
        else {

            msg.reply('Better luck next time');
            
        }   
        // End of comparison between the nums 

    }
    // End of the first if 
    else if (msg.content.slice(0,5) == '!help') {

    }

});

// inserting the bot token using a .env file
client.login(process.env.BOT_TOKEN);

