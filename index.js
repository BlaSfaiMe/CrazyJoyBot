let { Client } = require("discord.js")
let client = new Client()

client.on("ready", () => {
    console.log("lancé")
})

client.on("message", msg => {
    msg.react(client.emojis.cache.get("808652740472471572"))
})

setTimeout(() => {
    setInterval(() => {
        let timestamp = Date.now()
        let date = new Date(timestamp)
        let hours = date.getHours()
        if(23 >= hours >= 4){
            client.channels.cache.get("748822324471660607").send("<:crazy_joy_night:808744062039359568>")
        } else {
            client.channels.cache.get("748822324471660607").send("<:crazy_joy:808652740472471572>")
        }
    }, 60*15*1000)
}, 10)



client.login("ODA4NzI4ODcxNTkwOTUzMDAy.YCKxdA.xgFlRgmCm1yCC3mBeJxxqO-h3H8")