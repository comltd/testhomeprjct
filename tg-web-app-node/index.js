const TelegramBot = require('node-telegram-bot-api');

const token = '8734193399:AAFWsJ4HQfpEVNE4IMMOiUZIdXIwQVjj_68';
const webAppUrl = 'https://yandex.ru';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1]; 

  bot.sendMessage(chatId, resp);
});

bot.on('message', async(msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if(text === '/start'){
    await bot.sendMessage(chatId, 'Ниже появится кнопка, заполни форму', {
        reply_markup: {
            keyboard: [
                [{text: 'Заполнить форму', web_app: {url: webAppUrl}}]
            ]
        }
    })

    await bot.sendMessage(chatId, 'WebApp', {
        reply_markup: {
            inline_keyboard: [
                [{text: 'Перейти', web_app: {url: webAppUrl}}]
            ]
        }
    })



  }
});