
const { Client } = require('discord.js');
const { readdir } = require('fs'); 

const client = new Client();
client.commands = new Map();

readdir(__dirname + '/comandos', (error, arquivos) => {
    if (error) throw error;
    arquivos.filter(arquivo => arquivo.endsWith('.js')).forEach(arquivo => {
        const comando = require('./comandos/' + arquivo);
        comando.name.forEach(name => client.commands.set(name, comando.run));
    });
});

readdir(__dirname + '/eventos', (error, arquivos) => {
    if (error) throw error;
    arquivos.filter(arquivo => arquivo.endsWith('.js')).forEach(arquivo => {
        require('./eventos/' + arquivo)(client);
    });
});

client.login('IUHZhykIUkUd3zE3vQdUHTv8yR9cJ5dp');
