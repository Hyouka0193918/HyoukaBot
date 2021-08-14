var msg = args.join(' ')
if(!msg) return message.reply('Forneça algo para eu repetir!')

message.channel.send(msg) 
