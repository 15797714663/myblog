const express = require('express')
const app = express()

// 设置 默认采用的模板引擎名称
app.set('view engine', 'ejs')
// 设置模板页面的存放路径
app.set('views', './views')

app.use('/node_modules', express.static('node_modules'))
//注册
app.get('/register',(req,res)=>{
  res.render('./user/register.ejs',{})
})
//登录
app.get('/login',(req,res) =>{
    res.render('./user/login.ejs',{})
})
app.get('/', (req, res) => {
  res.render('index', {})
})
app.post('/')

app.listen(3000, () => {
  console.log("服务器运行成功……")
})