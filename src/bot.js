require("dotenv").config();

const { Client, WebhookClient } = require("discord.js");

const client = new Client({
  partials: ["MESSAGE", "REACTION"],
});

const webhookClient = new WebhookClient(
  process.env.WEBHOOK_ID,
  process.env.WEBHOOK_TOKEN
);

client.on("ready", () => {
  console.log(`${client.user.tag} s'est connecté`);
});

client.on("message", (message) => {
  if (message.channel.name === "général") {
    console.log(
      `${message.author.username} a écrit un message dans ${message.channel.name}`
    );
  } else {
    console.log(
      `Le message ne vient pas de général mais du channel ${message.channel.name}`
    );
  }
});

client.on("messageReactionAdd", (messageReaction, user) => {
  console.log(`${user.username} a réagi à un message`);
});

client.on("messageReactionRemove", (messageReaction, user) => {
  console.log(`${user.username} a enlevé sa réaction à un message`);
});

client.on("messageUpdate", (oldMessage, newMessage) => {
  console.log(`Un message a été modifié en ${newMessage.content}`);
});

client.on("presenceUpdate", (oldPresence, newPresence) => {
  console.log(
    `L'utilisateur ${newPresence.userID} a été modifié son statut de ${oldPresence.status} à ${newPresence.status}`
  );
});

client.on("typingStart", (channel, user) => {
  console.log(
    `L'utilisateur ${user.username}#${user.discriminator} est en train d'écrire...`
  );
});

client.login(process.env.VERSIFIXION_BOT_TOKEN);
