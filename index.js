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
		`assolomu aleykum ${message.from.first_name} qori aka boling`,
	)
})
