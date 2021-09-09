import express from 'express'
import cors from 'cors'
import chalkAnimation from 'chalk-animation'
import articleRouter from './articles/routes/articleRouter'

const PORT = 8080

const app = express()

app.use(cors())
app.use("/articles", articleRouter)

app.listen(PORT, () => {
  chalkAnimation.rainbow(`Server running at port ${PORT}`)
})
