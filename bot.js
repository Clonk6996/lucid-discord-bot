const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json")

bot.on("ready", ()=> {
  console.log("we droppin bois");
});
//some stuff for setting up the bot below
const prefix = "d!";

//message event
bot.on("message", (message) => {
    var args = ["arg1", "arg2", "arg3"];
    const args = message.content.slice(prefix.length).trim();
    const command = args.shift().toLowerCase();
    //exits and stops if the prefix isn't there
    if (!message.content.startsWith(prefix || message.author.bot)) return;

    switch(command)
    {
        case "yo":
            message.channel.send("whats good my dude");
            break;
        case "angery":
            message.channel.send("why do you have to be angery my friend? :c no need to be Angery c: \n https://www.youtube.com/watch?v=DeO4QyS5fdQ");
            break;
        case "coolandgood":
            message.channel.send("https://www.youtube.com/watch?v=AaWPhfKe0V8");
            break;
        case "eightballlite":
            var eightball =  Math.random() * 100; //variable for determining the different 8 ball responses
            if(eightball < 50)
            {
                message.channel.send(":8ball: *Rolls* \n yup, you got this boi :ok_hand: :triumph:");
            }
        
            else if(eightball < 75)
            {
                message.channel.send(":8ball: *Rolls* \n uhhh idk bro, try again");
            }

            else if(eightball < 100)
            {
                message.channel.send(":8ball: *Rolls* \n nopelol xd");
            }
            break;
        //8ball ends
        default: //error msg
            message.channel.send("That is not a valid command, please try again"); 
    }
});

bot.login(config.token);
