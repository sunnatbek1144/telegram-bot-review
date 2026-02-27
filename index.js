import dotenv from 'dotenv'
import TelegramBot from 'node-telegram-bot-api'
dotenv.config()
const TOKEN = process.env.TOKEN
const bot = new TelegramBot(TOKEN, { polling: true })

// 1-chi Qadam

// bot.getMe().then(me => {
// 	console.log(me)
// })

// 2-chi qadam

bot.onText(/\/start/, message => {
	bot.sendMessage(
		message.chat.id,
		`assolomu aleykum ${message.from.first_name} aka , Iltimos pastdagi tugmalardan birini tanlang 😎 `,
		{
			reply_markup: {
				inline_keyboard: [
					[
						{ text: 'Google', url: 'https://google.com' },
						{ text: 'YouTube', url: 'https://youtube.com' },
						{ text: 'Ma`lumot uchun', callback_data: 'data' },
					],
				],
			},
		},
	)
})

// CAllback query
bot.on('callback_query', query => {
	const chatId = query.message.chat.id
	const first_name = query.message.chat.first_name
	if (query.data === 'data') {
		bot.sendMessage(
			chatId,
			`UShbu botning egasi ${first_name}ga salom aytdi 😁`,
		)
	}
})
