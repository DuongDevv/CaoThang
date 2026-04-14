const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.set('view engine', 'ejs');
app.set('views', './template');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    const user = req.body.username;
    const pass = req.body.password;

    console.log(`Tài khoản: ${user}, Mật khẩu: ${pass}`);
    
    res.send(`Chào ${user}, bạn đã gửi dữ liệu thành công!`);
});

app.get('/',(req,res)=>{
    // let data = {
    //     title : 'Hello World',
    //     message : 'Duong dep trai'
    // }
    // res.render('demo',data)
})

app.listen(port,()=>{
    console.log(`run on port: ${port}`)
})

