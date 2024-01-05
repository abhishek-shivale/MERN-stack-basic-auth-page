const zod = require('zod')
const registerZod = zod.object({
    username: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(8)
})
const loginZod = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8)
})
module.exports={
    registerZod: registerZod,
    loginZod: loginZod
}