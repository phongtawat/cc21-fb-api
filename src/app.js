import express from 'express'
import authRoute from './routes/auth.route.js'
import createHttpError from 'http-errors'
import errorMiddleware from './middlewares/error.middleware.js'
import notfoundMiddleware from './middlewares/notfound.middleware.js'

const app = express()
app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/post', (req, res)=>{ res.send('post service')})
app.use('/api/comment', (req, res)=>{ res.send('comment service')})
app.use('/api/like', (req, res)=>{ res.send('like service')})

app.use(notfoundMiddleware)

app.use(errorMiddleware)

export default app