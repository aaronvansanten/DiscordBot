module.exports = {
    name: "ping",
    description: "This is a simple ping command",
    execute(message, args) {
        message.channel.send("pong");
    }
}