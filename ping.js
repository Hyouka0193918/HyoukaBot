module.exports = {
    run: function(client, message, args){
        message.reply(`PONG! ${client.ws.ping}ms de ping`);
    },
    name: ['ping']
}
