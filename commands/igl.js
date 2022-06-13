module.exports = {
    name: "igl",
    description: "sets the igl for the game.",
    execute(message, args) {
        const names = new Array("Olaf", "Aaron", "Job")
        var name = names[Math.floor(Math.random()*names.length)];
        message.channel.send("The in game leader for this game is " + name);
    }
}

