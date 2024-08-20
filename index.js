const { Client, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const userProfiles = {
    "Client_Id": {
        profileImage: "https://github.com/asimar007/Cross-Region-Migration-of-AWS-EBS-Volumes/blob/main/Screenshot/20210515_172237.jpg?raw=true",
        instagram: "https://www.instagram.com/btf_deadpool/",
        bgmiId: "558262384",
    },
};

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'noim') {
        const userId = "Client_Id";

        const profile = userProfiles[userId];

        if (profile) {
            await interaction.reply({
                content: `**Profile Information**\n\n**Profile Image:** ${profile.profileImage}\n**Instagram:** ${profile.instagram}\n**BGMI ID:** ${profile.bgmiId}`
            });
        } else {
            await interaction.reply({
                content: `No profile information found for you.`,
                ephemeral: true
            });
        }
    }
});

// Login to Discord with your app's token
client.login("Your_Discord_Token");
