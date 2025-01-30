const Eris = require("eris");
const os = require("os");
const keep_alive = require("./keep_alive.js");

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token, {
  connectionProperties: {
    $os: os.platform(), // Detects platform (Windows, Linux, macOS)
    $browser: "Discord Android", // Makes it appear as a mobile device
    $device: "Discord Android" // Shows as a device instead of a browser
  }
});

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.connect(); // Get the bot to connect to Discord
