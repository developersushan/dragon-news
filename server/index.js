const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
app.use(cors())

const category = require('./data/categories.json') 
const news  =require('./data/data.json')
app.get('/', (req,res)=>{
    res.send('welcome backend server')
})
app.get('/category-news', (req, res)=>{
    res.send(category)
})
app.get('/category/:id' , (req,res)=>{
    const id = req.params.id
    if(id ==="8"){
        res.send(news)
    }
    else{
        const categoryNews = news.filter(n => n.category_id === id)
        res.send(categoryNews)
    }

})
app.get('/news', (req,res)=>{
    res.send(news)
})
app.get('/news/:id', (req,res)=>{
    const id = req.params.id
    const selectedNews = news.find(n =>n._id === id)
    res.send(selectedNews)
    
})

app.listen(port, ()=>{
    console.log(`port ,listening on ${port}`)
})