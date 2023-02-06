const express = require('express')
const app = express()
const dotenv = require("dotenv").config()
const mongoose = require('mongoose')
const Info = require('./models/extra/info')
const Semester = require('./models/extra/semester')

// Connection to MongoDB Atlas
const MONGODB_URI = `mongodb+srv://${process.env.MONGODB_ATLAS_USERNAME}:${process.env.MONGODB_ATLAS_PASSWORD}@cluster0.dj2l4lk.mongodb.net/${process.env.MONGODB_ATLAS_COLLECTION}`
// Connection to Database
mongoose.set('strictQuery', false);
mongoose.connect(MONGODB_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Serving on port ${process.env.PORT} `)
        })

        console.log("Connected to MongoDB Atlas open")
    })
    .catch((err) => {
        console.log("error found")
        console.log(err)
    })
    // https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80
const updatedInfo = [
    {
        number:1,
        image:"https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=628&q=80"
    },
    {
        number:2,
        image:"https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        number:3,
        image:"https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
    },
    {
        number:4,
        image:"https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        number:5,
        image:"https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=628&q=80"
    },
    {
        number:6,
        image:"https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
    },
    {
        number:7,
        image:"https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        number:8,
        image:"https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
]
app.get('/update',async(req,res)=> {
    const newInfoUpdate = await Semester.insertMany(updatedInfo)
    console.log(newInfoUpdate)
    console.log("New Info added")
})