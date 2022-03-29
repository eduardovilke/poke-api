import express from 'express'
import cors from 'cors'

import { router } from './routes/index.js'

const PORT = 3333
const HOST = '0.0.0.0'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', router)

app.listen(PORT, HOST, () => console.log("Server is running! 🚀"))