const { REST, Routes, SlashCommandBuilder } = require('discord.js');

// /noim command
const commands = [
    new SlashCommandBuilder()
        .setName('noim')
        .setDescription('Shows your profile information including image, Instagram, and BGMI ID.')
        .toJSON()
];

const rest = new REST({ version: '10' }).setToken("Your_Discord_Token");

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands("Client_Id"),
            { body: commands }
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();