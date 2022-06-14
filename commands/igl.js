module.exports = {
    name: "igl",
    description: "sets the igl for the game.",
    execute(message, args) {
        const names = new Array("Olaf", "Aaron", "Job")
        var chosen = Math.floor(Math.random()*names.length)
        var name = names[chosen];
        console.log(chosen)
        message.channel.send("The in game leader for this game is " + name);
    }
}

