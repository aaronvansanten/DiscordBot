module.exports = {
    name: "ace",
    description: "DISPLAY aces",
    execute(message, args) {
        var aces = {
            6585:   "2",    // Aaron
            7236:   "5",    // Job
            4865:   "0",    // Olaf
            6887:   "0",    // Sander
            6602:   "2"     // Joran
        }

        
        var name = message.member.user.tag;
        var nameParts = name.split('#')

        const number = aces[nameParts[1]];
        message.channel.send("Your amount of aces is: " + number);
    }
}