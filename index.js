import app from './app.js'
const port = process.env.PORT || 8800

app.listen(port, () => console.log(`Server has been started on ${port}`))