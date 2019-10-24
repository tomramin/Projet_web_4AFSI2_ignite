/**
 *
 * entrez la commande suivante:
 * npm install --save express express-session body-parser morgan cors
 * puis node server.js
 * exemple complet à l'adresse https://github.com/Musinux/first-vue-app
 */
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const session = require('express-session')

const app = express()

app.use(session({
  secret: 'blablabla', // changez cette valeur
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // ne changez que si vous avez activé le https
}))
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())
const path = require('path')
app.use(express.static(path.join(__dirname, 'dist/')))

const users = [{
  username: 'admin',
  password: 'admin'
}]

app.get('/api/test', (req, res) => {
  console.log('ce console.log est appelé au bon moment')
  res.json([
    {
      title: 'truc',
      content: 'machin'
    }, {
      title: 'truc2',
      content: 'machin2'
    }
  ])
})

app.post('/api/login', (req, res) => {
  console.log('req.body', req.body)
  console.log('req.query', req.query)
  if (!req.session.userId) {
    const user = users.find(u => u.username === req.body.username && u.password === req.body.password)
    if (!user) {
      // gérez le cas où on n'a pas trouvé d'utilisateur correspondant
      res.json({
        message: "this user doesn't exist"
      })
    } else {
      // connect the user
      req.session.userId = 1000 // connect the user, and change the id
      res.json({
        message: 'connected'
      })
    }
  } else {
    res.status(401)
    res.json({
      message: 'you are already connected'
    })
  }
})

app.post('/api/inscription', (req, res) => {
  const user = users.find(u => u.username === req.body.username && u.password === req.body.password)
  if (!user) {
    users.push({
      username: req.body.username,
      password: req.body.password
    })
    res.json({
      message: 'utilisateur bien crée'
    })
  } else {
    res.json({
      message: 'utilisateur déjà crée'
    })
  }
})
app.post('/api/playing', (req, res) => {
  res.json({
    message: 'playing ...'
  })
})
app.post('/api/playing', (req, res) => {
  res.json({
    message: 'playing ...'
  })
})

app.post('/api/playing', (req, res) => {
  res.json({
    message: 'playing ...'
  })
})

app.post('/api/logout', (req, res) => {
  req.session.destroy()
  if (!req.session) {
    console.log('you are disconnected')
  }
})

app.get('/api/admin', (req, res) => {
  if (!req.session.userId || req.session.isAdmin === false) {
    res.status(401)
    res.json({ message: 'Unauthorized' })
    return
  }

  res.json({
    message: 'congrats, you are connected'
  })
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`listening on ${port}`)
})
