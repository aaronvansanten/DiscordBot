module.exports = {
    name: "jumbo",
    description: "Send the jumbo image.",
    execute(message, args) {
        const images = "./Jumbo Logo.jpg";
        message.channel.send({ files: [{ attachment: images, name: 'jumbo.png' }] });
    }
}