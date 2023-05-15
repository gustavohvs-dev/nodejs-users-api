import express from 'express'
import bodyParser from 'body-parser'
import {router, secureRouter} from './routes/routes'

const app = express()

app.use(bodyParser.urlencoded({ extended : false}))
app.use(bodyParser.json())
app.use(express.json())

app.use(router)
app.use(secureRouter)

app.listen(3333, () => 'server running on port 3333')