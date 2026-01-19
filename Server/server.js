import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import doctorRouter from './routes/doctorRoute.js'
import adminRouter from './routes/adminRoute.js'

// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})

// api endpoints
app.use('/api/user', userRouter)
app.use('/api/admin', adminRouter)
app.use('/api/doctor', doctorRouter)

app.get('/', (req, res) => {
    res.send('API Working')
})

app.get('/api/health', (req, res) => {
    res.status(200).json({ success: true, message: 'Server is healthy' })
})

app.listen(port, () => console.log('Server started on PORT ' + port))

export default app
