import express from 'express'
import cors from 'cors'

import { router } from './routes/index.js'

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', router)

app.listen(process.env.PORT || PORT, HOST, () => console.log("Server is running! 🚀"))