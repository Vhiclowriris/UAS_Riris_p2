const express = require('express')
const app = express()
const port = 3000

// import body parses
const bodyParser = require('body-parser')





// ini untuk cek website
app.get('/', (req,res) =>{
    res.send(' Halo Riris') 
})
// Insert Edit Delete
app.use(bodyParser.urlencoded({extended: false})) 
app.use(bodyParser.json())  



// Import route posts
const postsRouter = require('./Routes/posts')
// untuk menggunakan route post di express
app.use('/api/posts',postsRouter)



// ini untuk akses halaman web
app.listen(port, ()=> {
    console.log(`aplikasi berjalan di http://localhost:${port}`)
})

