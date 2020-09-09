const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "-";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : **عدد الاعضاء المستلمين**`); 
 message.delete(); 
};     
});
 
 

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`BY: SHA2AWA `);
        console.log(`----------------`);
      console.log(`nt.gds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`help-` ,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});



client.login("NzQwNjc3MDM3MDg1NDI1NzA1.XysfPg.gO4JTKiFq1QF4QPUrpmHQG1okV8");
