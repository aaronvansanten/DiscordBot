module.exports = {
    name: "gangpad",
    description: "sends a random gangpad to use for the user.",
    execute(message, args) {
        const paths = new Array("AGF","Panklaar","Slagerij","VVP","Internationaal","Zuivel","Soepen","Groentenconserven","Fruitconserven","Bakken","Zuren & Sausen","Mediteraanse Specialiteiten","Oliën","Wijn","Chips","Bier","Fris","Pakfris & Sappen","Snoep & Chocola","Dierenvoeding","Schoonmaak","Houdbare Zuivel","Papier","Baby Artikelen","Cosmetica","HEMA","Koffie Koek","Ontbijtgranen","Diepvries","Dieet","Vleesconserven","Bakkerij","Versplein","Servicebalie")
        var path = paths[Math.floor(Math.random()*paths.length)];
        message.channel.send("Your path is: " + path);
    }
}

