import dotenv from 'dotenv'
import TelegramBot from 'node-telegram-bot-api'
dotenv.config()
const TOKEN = process.env.TOKEN
const bot = new TelegramBot(TOKEN, { polling: true })

// 1-chi Qadam
// bot.getMe().then(me => {
// 	console.log(me)
// })
