const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const path = require('path');
const fs = require('fs');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async message => {
 if (message.body === '!Horário6') {   // HORARIO DAS  06 - 07 // 

    const chat = await message.getChat();
    const media = MessageMedia.fromFilePath(path.join(__dirname, 'img', 'logo1.png'));

    await chat.sendMessage(media);
    message.reply('⚠ *Tigre* ⚠\n\n06:04\n06:07\n06:09\n06:11\n06:17\n06:21\n06:24\n06:33\n06:47\n06:49\n06:51\n06:54\n\n⚠ *Touro* ⚠\n\n06:03\n06:13\n06:15\n06:19\n06:23\n06:31\n06:35\n06:41\n06:53\n06:56\n\n⚠ *Rato* ⚠\n\n06:05\n06:09\n06:11\n06:13\n06:15\n06:19\n06:24\n06:25\n06:31\n06:35\n06:39\n06:44\n06:49\n06:55\n\n⚠ *Coelho* 🐇🐰⚠\n\n06:10\n06:11\n06:13\n06:15\n06:17\n06:19\n06:30\n06:31\n06:33\n06:35\n06:37\n06:39\n06:40\n06:41\n06:43\n06:45\n06:47\n06:49');

}  else if (message.body === '!Horário7') { // HORARIO DAS 07-08 //

    const chat = await message.getChat();
    const media = MessageMedia.fromFilePath(path.join(__dirname, 'img', 'logo2.png'));

    await chat.sendMessage(media);
    message.reply('FORTUNE TIGER 🐯🐯\n\n07:04\n07:09\n07:12\n07:17\n07:21\n07:26\n07:33\n07:40\n07:48\n07:55\n\nFORTUNE OX🐂🐂\n\n07:01\n07:09\n07:20\n07:29\n07:30\n07:39\n07:40\n07:49\n07:50\n07:59\n\nFORTUNE RABBIT🐰🐰\n\n07:00\n07:02\n07:06\n07:13\n07:16\n07:23\n07:36\n07:43\n07:56\n\nFORTUNE MOUSE🐭🐭\n\n07:05\n07:09\n07:15\n07:19\n07:25\n07:29\n07:35\n07:39\n07:45\n07:49\n07:55\n07:59');

} else if (message.body === '!Hórario8') {  // HORARIOS DAS 08 - 09 //

    const chat = await message.getChat();
    const media = MessageMedia.fromFilePath(path.join(__dirname, 'img', 'logo1.png'));

    await chat.sendMessage(media);
    message.reply('✰  𝐒𝐈𝐍𝐀𝐈𝐒 𝐋𝐈𝐁𝐄𝐑𝐀𝐃𝐎 ✰\n\n➡ CIRCUS DELIGHT\n\n08:05\n08:07\n08:09\n08:15\n08:17\n08:19\n08:27\n08:35\n08:39\n08:45\n08:57\n08:59\n\n➡ GANESHA GOLD\n\n08:01\n08:05\n08:08\n08:15\n08:16\n08:21\n08:25\n08:31\n08:38\n08:47\n08:48\n08:51\n\n➡ JUNGLE DELIGHT\n\n08:05\n08:09\n08:12\n08:19\n08:23\n08:25\n08:28\n08:32\n08:39\n08:43\n08:45\n08:58\n\n➡ MUAY THAY\n\n08:00\n08:05\n08:09\n08:11\n08:15\n08:19\n08:25\n08:31\n08:35\n08:39\n08:49\n08:55\n\n➡ DRAGON HATCH\n\n08:00\n08:04\n08:14\n08:19\n08:22\n08:29\n08:34\n08:40\n08:44\n08:49\n08:52\n\n➡ FORTUNE RABBIT\n\n08:00\n08:03\n08:09\n08:15\n08:20\n08:23\n08:31\n08:36\n08:39\n08:42\n08:50\n08:54\n\n➡ FORTUNE TIGER\n\n08:04\n08:07\n08:09\n08:11\n08:18\n08:21\n08:24\n08:33\n08:47\n08:49\n08:51\n08:54\n\n➡ FORTUNE MOUSE\n\n08:05\n08:09\n08:11\n08:13\n08:15\n08:19\n08:25\n08:31\n08:35\n08:44\n08:49\n08:51\n\n➡ FORTUNE OX\n\n08:08\n08:09\n08:11\n08:14\n08:17\n08:23\n08:26\n08:29\n08:37\n08:39\n08:59\n08:54\n\n➡ DRAGON TIGER\n\n08:03\n08:05\n08:09\n08:22\n08:26\n08:28\n08:41\n08:43\n08:49\n08:52\n08:55\n\n➡  SINAIS SERVE PARA TODAS PLATAFORMAS OK ! 🚀\n\nNÃO JOGUEM TODOS HORÁRIOS,ENTREM UNS 20 OU 10 SEGUNDOS ANTES DO MINUTO,E VÁ ATÉ 1 MINUTO DEPOIS\n\n🍀 Boa Sorte 🍀');

} else if (message.body === '!Horário9') { // HORARIOS DAS 09 - 10 //

    const chat = await message.getChat();
    const media = MessageMedia.fromFilePath(path.join(__dirname, 'img', 'logo.png'));

    await chat.sendMessage(media);
    message.reply('𝐄𝐪𝐮𝐢𝐩𝐞 𝐝𝐞 𝐛𝐥𝐨𝐠𝐮𝐞𝐢𝐫𝐨𝐬 𝐩𝐚𝐫𝐚 𝐨 𝐥𝐚𝐧𝐜̧𝐚𝐦𝐞𝐧𝐭𝐨 ❤\n\n🎯 Estratégia no fim da lista! 💰\n\n🐯 Jogo Fortune Tiger\n🐯 09:15\n🐯 09:19\n🐯 09:29\n🐯 09:34\n🐯 09:40\n🐯 09:49\n\n💑 Jogo Double Fortune (Casal)\n💑 09:17\n💑 09:20\n💑 09:26\n💑 09:31\n💑 09:38\n💑 09:51\n\n🐰 Jogo Fortune Rabbit\n🐰 09:15\n🐰 09:23\n🐰 09:30\n🐰 09:38\n🐰 09:43\n🐰 09:52\n\n🐂 Jogo Fortune OX\n🐂 09:19\n🐂 09:20\n🐂 09:30\n🐂 09:31\n🐂 09:45\n🐂 09:47\n\n🐘 Jogo Fortune Ganesha\n🐘 09:17\n🐘 09:26\n🐘 09:29\n🐘 09:37\n🐘 09:38\n🐘 09:51\n\n👙 Jogo Bikini Paradise\n👙 09:15\n👙 09:17\n👙 09:31\n👙 09:37\n👙 09:49\n👙 09:54\n\n🐍 Jogo Dragon Hatch\n🐍 09:20\n🐍 09:23\n🐍 09:30\n🐍 09:40\n🐍 09:43\n🐍 09:52\n\n🐭 Jogo Fortune Mouse\n🐭 09:17\n🐭 09:20\n🐭 09:29\n🐭 09:37\n🐭 09:34\n🐭 09:38\n\n🐧 The Great Icescape (pinguim)\n🐧 09:19\n🐧 09:26\n🐧 09:31\n🐧 09:45\n🐧 09:47\n🐧 09:54\n\n💎 Jogo Fortune Gems (jili)\n💎 09:20\n💎 09:29\n💎 09:30\n💎 09:43\n💎 09:45\n💎 09:52\n\n🐲 Jogo Dragon Tiger Luck\n🐲 09:15\n🐲 09:17\n🐲 09:23\n🐲 09:30\n🐲 09:34\n🐲 09:43\n\nJOGAR EM CADA HORARIO:\n👉 2x Normal\n⚡ 4x Turbo\n\n💡 Dica: Alterne os giros entre normal e turbo, se vier um Grande Ganho, PARE e espere a próxima brecha!\n\n🔞 NÃO INDICADO PARA MENORES 🔞\n\nLembrando a todos!\n\nHorários de probabilidades aumentam muito sua chance de lucrar, mas lembrando que não anula a chance de perca, por mais que seja baixa jogue com responsabilidade.');

}
 else if (message.body === '!Horário10') { // HORARIO DAS 10 - 11  //

    const chat = await message.getChat();
    const media = MessageMedia.fromFilePath(path.join(__dirname, 'img', 'logo2.png'));

    await chat.sendMessage(media);

    message.reply('touro ♉\n10:00:58\n10:02:23\n10:03:51\n10:05:37\n10:07:00\n10:09:19\n10:10:57\n\nTigre 🐯\n10:10:49\n10:13:55\n10:15:03\n10:16:37\n10:18:06\n10:22:44\n10:23:47\n10:25:49\n10:26:37\n10:28:48\n\nRato 🐭\n10:33:38\n10:35:20\n10:37:03\n10:39:08\n10:41:29\n10:42:59\n10:43:48\n10:45:45\n10:49:05\n\ngênio 👻\n10:33:46\n10:35:31\n10:37:27\n10:38:25\n10:43:46\n10:44:58\n10:48:25\n\nDouble Fortune👩‍❤‍👨\n10:52:58\n10:59:15');


} else if (message.body === '!Horário11') { // HORARIO DAS 11 - 12 // 

    const chat = await message.getChat();
    const media = MessageMedia.fromFilePath(path.join(__dirname, 'img', 'logo1.png'));

    await chat.sendMessage(media);
    message.reply('Horário atualizado\n\nFortune Rabit 🐰\n11:00:24\n11:02:05\n11:10:16\n11:16:01\n11:18:19\n\nTigre 🐯\n11:00:11\n11:03:15\n11:05:57\n11:07:52\n11:10:08\n\nMidas Fortune 🍀\n11:03:02\n11:06:19\n11:08:25\n11:22:30\n11:25:52\n11:34:24\n\nTouro ♉\n11:10:42\n11:19:43\n11:26:10\n11:28:40\n11:30:05\n\nBikini Paradize 👙\n11:06:42\n11:07:20\n11:12:54\n11:14:24\n11:16:06\n\nTigre 🐯\n11:32:46\n11:47:02\n11:55:49\n11:59:17\n\nRato 🐭\n11:48:20\n11:50:00\n11:51:00\n11:58:55\n\nSupermarket 🛒\n11:30:48\n11:41:05\n11:44:51\n11:50:32\n11:55:54\n\nFortune Rabit 🐰\n11:47:53\n11:54:34\n11:57:59\n11:59:11');
}

 else if (message.body === '!Horário12') { // HORARIO DAS 12 - 13 // 

    const chat = await message.getChat();
    const media = MessageMedia.fromFilePath(path.join(__dirname, 'img', 'logo.png'));

    await chat.sendMessage(media);

    message.reply('Horário atualizado\n\nRato 🐭\n12:00:02\n12:04:07\n12:05:45\n12:06:13\n12:09:50\n\nTouro ♉\n12:00:07\n12:02:08\n12:09:14\n12:10:42\n12:15:05\n12:19:43\n\nFortune Rabit 🐰\n12:00:24\n12:02:05\n12:04:44\n12:10:16\n\nTigre 🐯\n12:00:11\n12:03:15\n12:05:57\n12:07:52\n12:10:08\n12:14:17\n\nFortune Doublle\n12:07:19\n12:25:17\n12:37:02\n12:38:44\n12:40:12\n12:56:08\n\nIce scape 🐧\n12:04:01\n12:06:05\n12:10:29\n12:14:05\n12:15:51\n\nWill Bandito\n12:07:59\n12:27:33\n\nGênio 🧞‍♂\n12:01:35\n12:08:02\n12:32:04\n12:37:31\n\nTigre 🐯\n12:38:33\n12:47:02\n12:56:51\n12:59:17');
   
}

 else if (message.body === '!Horário13') { // HORARIO DAS 13 - 14 //

    const chat = await message.getChat();
    const media = MessageMedia.fromFilePath(path.join(__dirname, 'img', 'logo1.png'));

    await chat.sendMessage(media);
    message.reply('Horário atualizado\nPossíveis minutos pagantes.\n\nTigre 🐯\n13:03:15\n13:07:52\n13:14:17\n13:16:26\n13:24:04\n\nSong Kran Splish 💧\n13:11:50\n13:23:58\n13:31:37\n13:43:57\n13:59:33\n\nSun e Moon 🌞\n13:32:52\n13:34:31\n13:37:56\n13:43:49\n\nCircus 🎪\n13:05:03\n13:09:03\n13:13:50\n13:17:20\n13:20:34\n\nTouro ♉\n13:00:07\n13:02:08\n13:10:42\n13:28:40\n13:35:33\n13:40:31\n13:46:55\n13:55:39\n\nRato 🐭\n13:04:07\n13:09:50\n13:11:38\n13:15:24\n13:20:49\n13:26:48\n\nFortune Gold 🐘\n13:42:25\n13:45:13\n13:49:41\n13:52:56\n13:55:06\n\nBasckery Bonanza\n13:00:41\n13:15:15\n13:19:38\n\nTigre 🐯\n13:49:36\n13:55:49\n13:56:51\n13:59:17');

} else if (message.body === '!Horário14') { // HORARIO DAS 14 - 15 //

    const chat = await message.getChat();
    const media = MessageMedia.fromFilePath(path.join(__dirname, 'img', 'logo2.png'));

    await chat.sendMessage(media);
    message.reply('Horário atualizado\nPossíveis minutos pagantes\n\nTouro ♉\n14:01:04\n14:02:08\n14:05:37\n14:15:22\n14:17:44\n14:20:52\n\nHeist Stakes\n14:03:00\n14:04:50\n14:17:21\n14:31:42\n14:45:24\n14:54:55\n\nTigre 🐯\n14:00:13\n14:08:13\n14:13:46\n14:15:06\n14:25:17\n14:27:14\n\nRato 🐭\n14:04:07\n14:05:45\n14:06:13\n14:09:50\n14:10:50\n\nFortune Rabit 🐰\n14:02:05\n14:04:44\n14:10:16\n14:16:01\n\nMedusa\n14:10:25\n14:19:49\n14:28:30\n14:35:23\n\nTigre 🐯\n14:45:08\n14:46:28\n14:49:52\n14:55:08\n14:56:35\n14:59:25\n\nSong Kran Splish 💧\n14:31:37\n14:43:57\n14:59:33\n\nTouro ♉\n14:40:26\n14:41:13\n14:44:54\n14:59:05');

 }

 else if (message.body === '!Horário15') { // HORARIO DAS 15 - 16 //

    const chat = await message.getChat();
    const media = MessageMedia.fromFilePath(path.join(__dirname, 'img', 'logo2.png'));

    await chat.sendMessage(media);
    message.reply('Horário atualizado\nPossível minuto pagante.\n\nFortune Rabit 🐰\n15:02:05\n15:04:44\n15:10:16\n15:16:01\n15:18:19\n15:19:57\n\nTigre 🐯\n15:00:11\n15:03:15\n15:05:57\n15:07:52\n15:09:49\n15:10:08\n\nRato 🐭\n15:04:07\n15:09:50\n15:11:38\n15:15:24\n15:20:49\n\nTouro ♉\n15:00:07\n15:02:08\n15:09:14\n15:10:42\n15:19:43\n\nHawaiian Tiki 🌺\n15:11:26\n15:27:38\n15:33:32\n15:43:52\n15:50:33\n\nGanesha Gold 🐘\n15:53:33\n15:54:37\n15:56:46\n15:58:47\n\nGanesha Fortune\n15:19:14\n15:41:28\n15:43:29\n15:52:27\n\nTigre 🐯\n15:32:46\n15:38:33\n15:46:20\n15:49:36\n15:56:51\n\nFortune Rabit 🐰\n15:41:28\n15:47:53\n15:54:34\n15:57:59\n15:59:11');
}

 else if (message.body === '!Horário16') { // HORARIO DAS 16 - 17 // 

    const chat = await message.getChat();
    const media = MessageMedia.fromFilePath(path.join(__dirname, 'img', 'logo1.png'));

    await chat.sendMessage(media);
    message.reply('Horário atualizado\nPossível minuto pagante\n\nTigre 🐯\n16:00:11\n16:03:15\n16:05:57\n16:07:52\n16:14:00\n\nMidas Fortune 🍀\n16:06:19\n16:22:30\n16:34:24\n16:49:27\n16:54:50\n\nMuay Thal\n16:23:20\n16:35:58\n16:44:12\n\nRider Jane Crypt\n16:05:09\n16:51:01\n\nBikini Paradize 👙\n16:12:56\n16:16:06\n16:41:14\n16:53:15\n16:55:23\n\nGênio 🧞‍♂\n16:32:04\n16:37:31\n16:45:30\n16:51:05\n\nTouro ♉\n16:30:05\n16:37:29\n16:40:31\n16:46:55\n16:51:35\n16:55:39\n\nRato 🐭\n16:04:07\n16:09:50\n16:14:43\n16:20:49\n\nTigre 🐯\n16:38:33\n16:49:36\n16:55:49\n16:56:51\n16:59:17');
}

 else if (message.body === '!Horário17') { // HORARIO DAS 17 - 18 //

    const chat = await message.getChat();
    const media = MessageMedia.fromFilePath(path.join(__dirname, 'img', 'logo2.png'));

    await chat.sendMessage(media);
    message.reply('Horário atualizado.\nPossível minuto pagante\n\nRato 🐭\n17:10:50\n17:15:24\n17:22:19\n17:28:03\n17:30:57\n\nTigre 🐯\n17:24:04\n17:26:28\n17:28:12\n17:32:46\n17:37:07\n17:38:33\n\nFortune Rabit 🐰\n17:00:24\n17:02:05\n17:04:44\n17:10:16\n17:16:01\n\nSupermarket 🛒\n17:30:48\n17:41:05\n17:44:51\n17:50:32\n17:55:54\n\nTouro ♉\n17:00:07\n17:02:08\n17:09:14\n17:10:42\n17:19:43\n17:26:10\n\nIce scape 🐧\n17:15:51\n17:31:07\n17:39:35\n17:43:18\n17:55:13\n\nTree Fortune\n17:30:35\n17:38:22\n17:37:32\n\nCircus 🎪\n17:09:33\n17:10:32\n17:11:05\n17:17:54\n\nQuem of Bounty\n17:03:58\n17:09:11\n17:24:59\n17:41:26\n\nTigre 🐯\n17:49:36\n17:55:49\n17:56:51\n17:59:17');
}

 else if (message.body === '!Horário18') { // HORARIO DAS 18 - 19 //    
    const chat = await message.getChat();
    const media = MessageMedia.fromFilePath(path.join(__dirname, 'img', 'logo.png'));

    await chat.sendMessage(media);
    message.reply('Horário atualizado\nPossível minuto pagante\n\nTouro ♉\n18:01:04\n18:08:12\n18:10:42\n18:15:22\n18:17:44\n\nTigre 🐯\n18:00:13\n18:01:10\n18:05:46\n18:10:20\n18:15:06\n18:20:07\n\nFortune Rabit 🐰\n18:02:05\n18:04:44\n18:10:16\n18:16:01\n18:18:19\n\nMedusa m. de Athena\n18:10:25\n18:19:49\n18:28:30\n18:35:23\n18:47:35\n\nCapitans Bounty\n18:31:29\n18:44:03\n18:54:41\n\nGanesha Fortune\n18:41:28\n18:43:29\n18:52:27\n\nSong Kran Splish 💧\n18:31:37\n18:43:57\n18:59:33\n\nWill Bandito\n18:07:59\n18:27:33\n\nHeist Stakes\n18:31:42\n18:33:09\n18:45:24\n18:54:55\n\nTouro ♉\n18:40:26\n18:41:13\n18:44:54\n18:59:05');
}

 else if (message.body === '!Horário19') { // HORARIO DAS 19 - 20 // 
    const chat = await message.getChat();
    const media = MessageMedia.fromFilePath(path.join(__dirname, 'img', 'logo1.png'));

    await chat.sendMessage(media);
    message.reply('Horário atualizado\nPossível minuto pagante\n\nFortune Rabit 🐰\n19:00:24\n19:02:05\n19:10:16\n19:16:01\n19:18:19\n\nTigre 🐯\n19:00:11\n19:14:17\n19:16:27\n19:19:20\n19:22:28\n19:30:44\n\nHeist Stakes\n19:03:00\n19:04:50\n19:17:21\n19:31:42\n\nFortune Doublle\n19:07:10\n19:25:17\n19:37:02\n19:38:44\n19:40:12\n\nBasckery Bonanza 🥯\n19:00:41\n19:15:15\n19:17:15\n19:19:38\n\nTouro ♉\n19:00:04\n19:08:12\n19:10:42\n19:19:43\n19:26:10\n\nRato 🐭\n19:14:43\n19:17:06\n19:25:32\n19:28:35\n19:35:05\n19:39:45\n\nFortune Gold\n19:30:19\n19:35:38\n19:38:36\n19:47:26\n19:53:33\n19:58:47\n\nTigre 🐯\n19:49:36\n19:55:49\n19:56:51\n19:59:17');
}

 else if (message.body === '!Horário20') { // HORARIOS DAS 20 - 21 //

    const chat = await message.getChat();
    const media = MessageMedia.fromFilePath(path.join(__dirname, 'img', 'logo2.png'));

    await chat.sendMessage(media);
    message.reply('Horário atualizado\nPossível minuto pagante.\n\nTigre 🐯\n20:24:04\n20:26:28\n20:28:12\n20:28:50\n20:32:46\n20:37:07\n\nTouro ♉\n20:00:07\n20:08:12\n20:10:42\n20:19:49\n20:26:10\n\nFortune Rabit 🐰\n20:10:16\n20:18:19\n20:19:57\n20:29:50\n20:34:01\n\nRato 🐭\n20:35:05\n20:39:45\n20:43:43\n20:51:16\n20:58:55\n\nMedusa m. de Athena\n20:10:25\n20:19:49\n20:28:30\n20:35:23\n20:47:35\n\nIce scape 🐧\n20:04:01\n20:06:05\n20:10:29\n20:14:05\n\nCapitans Bounty\n20:15:37\n20:31:29\n20:44:03\n20:54:41\n\nMidas Fortune 🍀\n20:22:30\n20:34:24\n20:49:27\n20:54:50\n\nRider Janes Crypt\n20:05:09\n20:09:17\n20:45:13\n20:51:01\n20:53:28\n\nTigre 🐯\n20:46:20\n20:47:02\n20:49:36\n20:55:49\n20:56:51\n20:59:17');
}

 else if (message.body === '!Horário21') { // HORARIO DAS 21 - 22 //

    const chat = await message.getChat();
    const media = MessageMedia.fromFilePath(path.join(__dirname, 'img', 'logo1.png'));

    await chat.sendMessage(media);
    message.reply('🍀SINAIS DAS 21:00 LIBERADOS🍀⚡⚡\n\n🐁FORTUNE MOUSE🐁\n\n🐭21:15🍀\n🐭21:27🍀\n🐭21:29🍀\n🐭21:30🍀\n🐭21:33🍀\n🐭21:42🍀\n🐭21:45🍀\n🐭21:57🍀\n🐭21:49🍀\n\n👙BIKINI PARADISE🌊\n\n🌊21:17👙\n🌊21:21👙\n🌊21:26👙\n🌊21:35👙\n🌊21:39👙\n🌊21:42👙\n🌊21:47👙\n🌊21:55👙\n🌊21:58👙\n\nFORTUNE OX♉\n\n🍀21:13🐂\n🍀21:26🐂\n🍀21:28🐂\n🍀21:30🐂\n🍀21:33🐂\n🍀21:45🐂\n🍀21:47🐂\n🍀21:53🐂\n🍀21:58🐂\n\n🎠RISE OF APOLO 🤺\n\n☑21:12‼\n☑21:15‼\n☑21:23‼\n☑21:29‼\n☑21:34‼\n☑21:38‼\n☑21:42‼\n☑21:45‼\n☑21:53‼\n☑21:59‼\n\n🎪CIRCUS DELIGHT🎪\n\n🤡21:13⚡\n🤡21:18⚡\n🤡21:20⚡\n🤡21:24⚡\n🤡21:35⚡\n🤡21:37⚡\n🤡21:44⚡\n🤡21:49⚡\n🤡21:52⚡\n🤡21:54⚡\n\n⚡FORTUNE TIGER🐯\n\n☑21:17🐯\n☑21:19🐯\n☑21:22🐯\n☑21:24🐯\n☑21:35🐯\n☑21:39🐯\n☑21:43🐯\n☑21:47🐯\n☑21:52🐯\n☑21:54🐯\n\nCAPITAIN’S BOUNTY⚔♠\n\n🏴‍☠21:12💣\n🏴‍☠21:24💣\n🏴‍☠21:27💣\n🏴‍☠21:39💣\n🏴‍☠21:47💣\n🏴‍☠21:58💣');
}

 else if (message.body === '!Horário22') { // HORARIO DAS 22 - 23 //
    const chat = await message.getChat();
    const media = MessageMedia.fromFilePath(path.join(__dirname, 'img', 'logo.png'));

    await chat.sendMessage(media);
    message.reply('Horário atualizado\nPossível minuto pagante.\n\nDragon legend 🐉\n22:02:17\n22:05:51\n22:12:21\n22:15:51\n\nMidas fortune 👑\n22:11:49\n22:13:41\n22:18:58\n22:28:53\n22:29:37\n\nTouro 🐂\n22:21:51\n22:23:53\n22:24:09\n22:26:35\n22:28:00\n22:29:38\n\nCoelho 🐇\n22:30:02\n22:32:06\n22:37:52\n22:38:07\n22:40:33\n\nGanesha 🐘\n22:50:38\n22:53:31\n22:55:24\n22:58:08\n22:59:00\n\nTigre 🐅\n22:50:40\n22:51:15\n22:52:32\n22:53:29\n22:53:52\n22:54:35\n22:57:26\n22:58:25\n22:59:47');
}

 else if (message.body === '!Horário23') { // HORARIO DAS 23 - 00 //
    const chat = await message.getChat();
    const media = MessageMedia.fromFilePath(path.join(__dirname, 'img', 'logo2.png'));

    await chat.sendMessage(media);
    message.reply('FORTUNE TIGER🐯\n\n✅23:06✅23:19✅23:26\n✅23:39✅23:43✅23:59\n\nFORTUNE MOUSE🐭\n\n✅23:08✅23:11✅23:28\n✅23:38✅23:41✅23:58\n\n🐂 FORTUNE OX 🐂\n\n✅23:09✅23:20✅23:22\n✅23:26✅23:29✅23:32\n✅23:43✅23:46✅23:52\n✅23:59\n\n🐲 DRAGON HATCH🐲\n\n✅23:07✅23:28✅23:32\n✅23:39✅23:55\n\n👩‍❤‍👨DOUBLE FORTUNE💰 👩‍❤‍👨\n\n✅23:12✅22:17✅23:21\n✅23:27✅23:33✅23:47\n\n🚨 LUCKY PIGGY 🐷\n\n✅23:09✅23:14✅23:21\n✅23:27✅23:33✅23:39\n✅23:45✅23:57\n\n🐰Fortune Rabbit 🐰\n\n✅23:15✅23:20✅23:23\n✅23:31✅23:36✅23:39\n✅23:42✅23:50\n\nJUNGLE DELINGHT 🐵\n\n✅23:06✅23:11✅23:14\n✅23:18✅23:23✅23:25\n\nCAPITAN BOUNTY👨‍✈\n\n✅23:07✅23:09\n✅23:13✅23:16✅23:20\n\nSUPER MARKT 🛒\n\n✅23:34✅23:38✅23:41\n✅23:44✅23:49✅23:52\n\nWILD BANDITO 💀\n\n✅23:05✅23:07✅23:09\n✅23:13✅23:16✅23:20\n\n🟢🟢🟢\n\nHALLOWEEN 🎃\n\n✅23:07✅23:10✅23:13\n✅23:17✅23:21✅23:26\n✅23:29✅23:33✅23:38\n\nLEPRECHAUNS 🍀\n\n✅23:16✅23:21✅23:23\n✅23:26✅23:28✅23:31\n✅23:35✅23:39\n\nCUIDAA BORA FATURAR🥰');
}

 else if (message.body === '!Horário0') { // MADRUGADÃO // 
    message.reply('MADRUGÃO\nHORÁRIOS ATE AMANHÃ ♦😍😍😍\n\nFORTUNE TIGER 🐯\n\n⏰00:11⏰00:14\n⏰00:20⏰00:22\n⏰00:29⏰00:32\n⏰00:38⏰00:54\n\n🐰FORTUNE RABBIT\n\n⏰00:15⏰00:20\n⏰00:23⏰00:31\n⏰00:36⏰00:39\n⏰00:42⏰00:50\n\n🐭FORTUNE MOUSE\n\n⏰00:15⏰00:24\n⏰00:25⏰00:31\n⏰00:35⏰00:39\n⏰00:44⏰00:49\n\n🐯FORTUNE TIGER\n⏰01:04⏰01:07\n⏰01:09⏰01:11\n⏰01:17⏰01:21\n⏰01:24⏰01:33\n⏰01:47⏰01:49\n⏰01:51⏰01:54\n\n🐉DRAGON LUCK\n⏰01:04⏰01:05\n⏰01:12⏰01:14\n⏰01:20⏰01:25\n⏰01:30⏰01:34\n⏰01:40⏰01:55\n\n🐰FORTUNE RABBIT\n⏰01:15⏰01:20\n⏰01:23⏰01:31\n⏰01:36⏰01:39\n⏰01:42⏰01:50\n\n🐭FORTUNE MOUSE\n⏰01:05⏰01:09\n⏰01:11⏰01:13\n⏰01:15⏰01:24\n⏰01:25⏰01:31\n⏰01:35⏰01:39\n\n🐯FORTUNE TIGER\n⏰02:04⏰02:07\n⏰02:13⏰02:16\n⏰02:19⏰02:25\n⏰02:28⏰02:31\n⏰02:34⏰02:37\n⏰02:48⏰02:55\n\n🐘Ganesha gold\n⏰02:03⏰02:07\n⏰02:15⏰02:21\n⏰02:27⏰02:39\n⏰02:45⏰02:49\n\n👙BIKINI\n⏰02:00⏰02:09\n⏰02:12⏰02:15\n⏰02:22⏰02:25\n⏰02:29⏰02:33\n⏰02:42⏰02:55\n\n🥊 MUAI THAY 🥊\n⏰02:00⏰02:05\n⏰02:09⏰02:11\n⏰02:19⏰02:25\n⏰02:31⏰02:35\n⏰02:39⏰02:44\n\n🐉DRAGON LUCK\n⏰02:12⏰02:14\n⏰02:20⏰02:25\n⏰02:30⏰02:34\n\n🎪CIRCUS\n⏰03:09⏰03:15\n⏰03:19⏰03:27\n⏰03:35⏰03:39\n\n🐂 FORTUNE OX\n⏰03:08⏰03:09\n⏰03:11⏰03:14\n⏰03:17⏰03:20\n⏰03:23⏰03:26\n⏰03:32⏰03:37\n⏰03:43⏰03:46\n\n🐯FORTUNE TIGER\n⏰03:04⏰03:07\n⏰03:09⏰03:11\n⏰03:17⏰03:21\n⏰03:24⏰03:33\n⏰03:49⏰03:51\n\n🐭 FORTUNE MOUSE\n⏰03:05⏰03:09\n⏰03:11⏰03:13\n⏰03:15⏰03:19\n⏰03:24⏰03:25\n⏰03:31⏰03:35\n⏰03:39⏰03:44\n⏰03:49⏰03:55\n\n🐉DRAGON LUCK\n⏰03:12⏰03:14\n⏰03:20⏰03:25\n⏰03:30⏰03:34\n\n🐘Ganesha gold\n⏰03:03⏰03:07\n⏰03:19⏰03:21\n⏰03:33⏰03:39\n⏰03:50⏰03:55\n\n🐂 FORTUNE OX\n⏰04:08⏰04:11\n⏰04:14⏰04:17\n⏰04:23⏰04:26\n⏰04:37⏰04:43\n⏰04:46⏰04:52\n\n🎪 CIRCUS\n⏰04:09⏰04:15\n⏰04:19⏰04:27\n⏰04:35⏰04:39\n\n🐭 FORTUNE MOUSE\n⏰04:08⏰04:11\n⏰04:15⏰04:19\n⏰04:24⏰04:31\n⏰04:35⏰04:39\n⏰04:44⏰04:49\n\n🐯 FORTUNE TIGER\n⏰04:11⏰04:13\n⏰04:16⏰04:19\n⏰04:22⏰04:28\n⏰04:34⏰04:43\n⏰04:46⏰04:55\n\n🐘GANESHA GOLD\n⏰04:09⏰04:19\n⏰04:21⏰04:33\n⏰04:39⏰04:41\n⏰04:49⏰04:55\n\n🐂 FORTUNE OX\n⏰05:08⏰05:11\n⏰05:14⏰05:17\n⏰05:20⏰05:23\n⏰05:26⏰05:29\n⏰05:32⏰05:37\n⏰05:39⏰05:43\n⏰05:46⏰05:52\n\n🐭 FORTUNE MOUSE\n⏰05:05⏰05:09\n⏰05:11⏰05:15\n⏰05:19⏰05:25\n⏰05:31⏰05:35\n⏰05:39⏰05:44\n\n🐘 GANESHA GOLD\n⏰05:07⏰05:15\n⏰05:25⏰05:31\n⏰05:47⏰05:48\n\n🥊MUAI THAY\n⏰05:00⏰05:05\n⏰05:09⏰05:11\n⏰05:25⏰05:31\n⏰05:35⏰05:44\n\n🐯 FORTUNE TIGER\n⏰05:01⏰05:04\n⏰05:07⏰05:09\n⏰05:16⏰05:19\n\n🐯 FORTUNE TIGER\n⏰06:00⏰06:03\n⏰06:09⏰06:12\n⏰06:18⏰06:21\n⏰06:27⏰06:30\n⏰06:36⏰06:39\n⏰06:42⏰06:48\n⏰06:51⏰06:57\n FORTUNE TIGER\n⏰06:00⏰06:03\n⏰06:09⏰06:12\n⏰06:18⏰06:21\n⏰06:27⏰06:30\n⏰06:36⏰06:39\n⏰06:42⏰06:48\n⏰06:51⏰06:57\n\n🐂 Fortune OX\n⏰06:00⏰06:06\n⏰06:17⏰06:23\n⏰06:29⏰06:33\n⏰06:44⏰06:47\n⏰06:49⏰06:51\n⏰06:53⏰06:57\n\n🐯FORTUNE TIGER\n⏰07:18⏰07:21\n⏰07:27⏰07:30\n⏰07:32⏰07:41\n⏰07:48⏰07:56\n\n🐘GANESHA GOLD\n⏰07:17⏰07:20\n⏰07:25⏰07:32\n⏰07:37⏰07:40\n⏰07:45⏰07:52\n\n🐭FORTUNE MOUSE\n⏰07:19⏰07:25\n⏰07:29⏰07:31\n⏰07:37⏰07:39\n⏰07:40⏰07:49');
}

else if (message.body === '!Mencionar') {   // MENCIONAR TODOS NO GRUPO  // 
    const chat = await message.getChat();
    if (chat.isGroup) {
        let mentions = [];
        let text = '⚠ * POSSIVEL HORÁRIO BONUS * ⚠\n';

        for (let participant of chat.participants) {
            const contact = await client.getContactById(participant.id._serialized);
            mentions.push(contact);
            text += `@ `;
        }

        const sentMessage = await chat.sendMessage(text, { mentions });

        // Apagar a mensagem após 10 segundos
        setTimeout(async () => {
            await sentMessage.delete(true);
        }, 10000);
    } else {
        message.reply('Este comando só pode ser usado em grupos.');
    }

    // DIVULGAÇÃO // 

   

} else if (message.body === '!Divulga') { // DIVULGAÇÃO
    const chat = await message.getChat();

    const text = `
🔥 *DEIA SLOTS: A FESTA É AQUI! 🔥*

*💖 Se liga na vibe: 💖*

*🤑 Links bombásticos que te levam direto pro jackpot! 🤑*
*🎉 Sorteios que vão te deixar rico! 🎉*
*🤪 Momentos épicos e zoeiras que você não vai ver em outro lugar! 🤪*
*⏰ Horários top pra você testar sua sorte! ⏰*

*💥 Joga junto com a gente! 💥*

*🔥 Link do Grupo: 🔥*

https://chat.whatsapp.com/IJ6ZKtrwdQA5t3xaq5DPZP

*Se liga na galera e vem ser feliz! 🎉*

*DEIA SLOTS, a zoeira não tem limites! 🤪*
    `;

    await chat.sendMessage(text);
} else if (message.body === '!Img') { // Enviar imagem
    const chat = await message.getChat();
    const media = MessageMedia.fromFilePath(path.join(__dirname, 'img', 'logo.png'));

    await chat.sendMessage(media);
}

else if (message.body === '!Img1') { // Enviar imagem
    const chat = await message.getChat();
    const media = MessageMedia.fromFilePath(path.join(__dirname, 'img', 'logo1.png'));

    await chat.sendMessage(media);
}

else if (message.body === '!Img2') { // Enviar imagem
    const chat = await message.getChat();
    const media = MessageMedia.fromFilePath(path.join(__dirname, 'img', 'logo2.png'));

    await chat.sendMessage(media);
}

else if (message.body === '!Novidade') {
    const chat = await message.getChat();

    const text = `
🍀𝗣𝗔𝗚𝗔𝗡𝗧𝗘𝗦 🍀

🦜𝗜𝗚𝗨𝗔𝗖𝗨𝟳𝟳𝟳 (𝗦𝗢𝗥𝗧𝗘𝗜𝗢)

https://m.iguacu777bet.com?iguacu=ad7

•𝗠𝗶𝗻𝗶𝗺𝗼 𝟭𝟬, 𝗦𝗮𝗾𝘂𝗲 𝟭𝟬

🌹𝗦𝗛𝗢𝗢𝗧𝗜𝗡𝗚 (𝗚𝗥𝗨𝗣𝗢 𝗪𝟭 𝗦𝗼𝗿𝘁𝗲𝗶𝗼)

https://w1-shootingpg.bet/?id=710259461&currency=BRL&type=2

•𝗠𝗶𝗻𝗶𝗺𝗼 𝟭𝟬, 𝗦𝗮𝗾𝘂𝗲 𝟭𝟬

𝗦𝗶𝘁𝗲 𝗱𝗲 𝗽𝗼𝗿𝗰𝗲𝗻𝘁𝗮𝗴𝗲𝗻𝘀 𝗱𝗮 𝗽𝗽👇🏻
https://slot-pragmatic-play.prodevreal.com/

𝗦𝗶𝘁𝗲 𝗱𝗲 𝗽𝗼𝗿𝗰𝗲𝗻𝘁𝗮𝗴𝗲𝗻𝘀 𝗱𝗮 𝗽𝗴👇🏻
https://slot-pg-soft.prodevreal.com/

✅𝗜𝗗 𝗘 𝗖𝗢𝗠𝗣𝗥𝗢𝗩𝗔𝗡𝗧𝗘 𝗡𝗢 𝗣𝗩
🔞𝗝𝗢𝗚𝗨𝗘 𝗖𝗢𝗠 𝗥𝗘𝗦𝗣𝗢𝗡𝗦𝗔𝗕𝗜𝗟𝗜𝗗𝗔𝗗𝗘
    `;

    await chat.sendMessage(text);
}




});

client.initialize();
