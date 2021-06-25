const Discord = require("discord.js");
const client = new Discord.Client({
    restTimeOffset: 0,
    disableEveryone: true,
    partials: ["MESSAGE", "CHANNEL", "REACTION"]
})
const Distube = require("distube");
client.playcmd = false;
client.distube = new Distube(client, {
    searchSongs: false,
    emitNewSongOnly: false,
    highWaterMark: 1024 * 1024 * 64,
    leaveOnEmpty: false,
    leaveOnFinish: false,
    leaveOnStop: true,
    youtubeDL: true,
    updateYoutubeDL: true,
    // youtubeCookie: "", --> Prevents the error code 429
})
client.on('ready', () => {
    console.log(`${client.user.username}`);
    client.user.setActivity(`Listing With You`, {type : "LISTENING"})
})
const embedsettings = {
    color: "BLUE",
    wrongcolor: "RED",
    footertext: "Coded By Tech Boy Gaming",
}

require("./distube-handler")(client, Discord, embedsettings)
require("./events")(client, Discord, embedsettings)

const enmap = require("enmap");
client.db = new enmap({ name: "mydatabase" })

client.login(require("./config.json").token)