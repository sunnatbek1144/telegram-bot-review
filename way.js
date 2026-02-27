//1-qadam:  O'rnatiladigan narsalar:
// 1- git init: package.json ni ornatadi.
// 2- node-telegram-bot-api ni ornatish.
// 3- nodemon ozi run kilip turadi.
// 4 dotenv: malumotlar bazasini saqlash uchun.
//
// 5- prettier : qodlarni format qilish uchun.

// 2-qadam package.json ni tertibga keltirish:
// scripts bolimiga
// "dev": "nodemon index.js"
// "start": "node index.js"
// "format": "prettier --ignore-uknown --write."-bu bizga faqat qodlarni format qilishuchun kerak bo'ladi   .-ta esdan chiqmasligi kerak

// 3-QADAM env paket yaratish:
// .env - bu senga malumotlarni git hubga yubrmaslik uchun kerak masalan tokenni
// .env.example - bu esa sen agarda birga dosting bilan ishlayootganingda envdagi TOKEN unga korinmaydi shuning uchun TOKEN= yani envda nimalar borligini bilish uchun

// bu sizga bot uchun kerak va bot sizni ismingizni aytip assolomu laeykum deysdi
// bot.onText(/\/start/, message =>
// bot.sendMessage(
// 		message.chat.id,
// 		`assolomu aleykum ${message.from.first_name} qori aka boling`,
// 	)
// })
