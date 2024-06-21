import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import todoRoute from './routes/todos.js'

const app = express()
dotenv.config()

app.use(cors())
app.use(bodyParser.json({ limit: '1mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }))
app.use('/todos', todoRoute)

app.get('/', (req, res) => {
  res.send('APP IS RUNNING')
})

const PORT = 3000

mongoose.set('strictQuery', false)
mongoose
  .connect("mongodb+srv://nuicoder:coder123@cluster0.emxawoq.mongodb.net/todo")
  .then(() => app.listen(PORT, "0.0.0.0", () => console.log(`Server running: ${PORT}`)))
  .catch((error) => console.log(error))
