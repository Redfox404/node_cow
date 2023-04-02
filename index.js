const userinfo = require(`./information`);

const cowsay = require("cowsay");

console.log (cowsay.say({
    text :`Hi, my name is ${userinfo.user.name} and i'm from ${userinfo.user.campus}`,
    e : "**",
    T : "U"
}))