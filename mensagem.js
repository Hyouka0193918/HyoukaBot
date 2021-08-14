module.exports = function(client){
    const prefix = 'h!' 
    client.on('message', message => {
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        
        const cmd = message.content.split(' ')[0].replace(prefix, '');
        const args = message.content.split(' ').slice(1);
        
        const comando = client.commands.get(cmd);
        if (comando) comando(client, message, args);
        else message.reply('Esse comando não existe.');
    })
}
