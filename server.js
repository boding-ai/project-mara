const express = require('express')
const session = require('express-session')
const passport = require('passport');
const cookieParser = require('cookie-parser')
const cors = require('cors');
require('dotenv').config()
const timeout = require('connect-timeout')

const sessionSecret = process.env.SESSION_SECRET
const sessionAge = process.env.SESSION_AGE
const clientURL = process.env.CLIENT_URL

require('./config/passportGoogle')

const app = express()
// parsing the incoming data
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(
    cors({
        origin: clientURL, // <-- location of the react app were connecting to
        credentials: true,
    })
)
// Session Middleware
app.use(session({
  secret: sessionSecret,
  saveUninitialized: true,
  resave: false,
  cookie: {
    httpOnly: true,
    maxAge: parseInt(sessionAge)
  }
}))
// Initialize the passport module and connect it to the session modules
app.use(cookieParser(sessionSecret))
app.use(passport.initialize())
app.use(passport.session())

// -------------- VERSION 1 (V1) Routes Load --------------------
app.use('/api/v1/users', require('./routes/api/v1/users/users'))
app.use('/api/v1/profiles', require('./routes/api/v1/profiles/profiles'))
app.use('/api/v1/clients', require('./routes/api/v1/clients/clients'))
app.use('/api/v1/add', require('./routes/api/v1/add/add'))
app.use('/api/v1/social', require('./routes/api/v1/business/social'))
app.use('/api/v1/communication', require('./routes/api/v1/communication/communication'))
app.use(
    '/api/v1/notifications',
    require('./routes/api/v1/notifications/notifications')
)

// BUSINESS- STORE
app.use('/api/v1/business/store', require('./routes/api/v1/business/store'))
app.use('/api/v1/events', require('./routes/api/v1/events/events'))
app.use(
    '/api/v1/settings/business-details',
    require('./routes/api/v1/settings/business/business-details')
)
app.use(
    '/api/v1/settings/user-details',
    require('./routes/api/v1/settings/user/user-details')
)
app.use(
    '/api/v1/settings/partner-website-details',
    require('./routes/api/v1/settings/partner-website/partner-website-details')
)
app.use(
    '/api/v1/settings/system-details',
    require('./routes/api/v1/settings/system/system-details')
)


// EXTERNAL APIS
app.use('/api/v1/bodinga/external-apis/appointment', require('./routes/api/v1/external-apis/appointment'))

const PORT = process.env.PORT || 9000

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
