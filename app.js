const express = require('express')
const app = express()
//解析中间件
const bodyparser = require('body-parser')
const mysql = require('mysql')
const conn= mysql.createConnection({
    host:'localhost',
    database:'mysql_001',
    user:'root',
    password:'root'
})
// 设置 默认采用的模板引擎名称
app.set('view engine', 'ejs')
// 设置模板页面的存放路径
app.set('views', './views')
//不静态托管的话，index.ejs中会出现css和js文件请求失败,第二个文件路径要加.
app.use('/node_modules', express.static('./node_modules'))
//注册用户请求的是注册页面./针对的是views目录下而言的
app.get('/register',(req,res)=>{
  res.render('./user/register.ejs',{})
})
//登录用户请求的是登录页面
app.get('/login',(req,res) =>{
  //渲染页面
    res.render('./user/login.ejs',{})
})
//这个就代表127.0.0.1::3000
app.get('/', (req, res) => {
  //使用render函数之前，一定要保证安装和配置了ejs
  res.render('index.ejs', {name:'zs',age:22})
})
//要注册新用户了
app.post('/register',(req,res) =>{
  //视频中演示用postman发送http://127.0.0.1/register无应答应该改为http://127.0.0.1:3000/register
   //完成用户注册时的业务逻辑
  //  const body =req.body
  //  //判断用户输入的数据是否完整
  //  if(body.username.trim().length <= 0 ||body.password.trim().length <= 0||body.nickname.trim().length <= 0){
  //   return res.send({ msg:'请填写完整的表单数据后再注册用户!',status:501 })
  //  }
  //  //查询用户名是否重复
  //  const sql1='select const(*) as count from users where username=?'
  //  conn.query(sql1,body.username,(err,res)=>{
  //   //如果查询失败 则告知客户端失败
  //    if(err) return res.send({msg:'用户名查询失败!',status:502})
  //    console.log(res)
  //  })
    res.send({msg:'注册新用户成功!',status:200})
})

app.listen(3000, () => {
  console.log("服务器运行成功……http://127.0.0.1:3000")
})