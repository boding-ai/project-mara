const passport = require('passport')
const { Strategy: GoogleStrategy } = require('passport-google-oauth20')
const { pool } = require('./db')

require('dotenv').config()

console.log('Initialized')
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
            passReqToCallback: true,
        },
        async (req, accessToken, refreshToken, profile, done) => {
            const defaultUser = {
                fullName: `${profile.name.givenName} ${profile.name.familyName}`,
                email: profile.emails[0].value,
                picture: profile.photos[0].value,
                googleId: profile.id,
                user_id: 0
            }

            try {
                let currentUserQuery = await pool.query(
                    `SELECT * FROM private.users WHERE google_id = $1`,
                    [profile.id]
                )

                if (currentUserQuery.rows.length === 0) {
                    await pool.query(
                        `INSERT INTO private.users (full_name, email_id, google_id, profile_pic) VALUES (LOWER($1), $2, $3, $4)`,
                        [
                            defaultUser.fullName,
                            defaultUser.email,
                            defaultUser.googleId,
                            defaultUser.picture,
                        ]
                    )

                    const ans = await pool.query(
                        `SELECT * from private.users WHERE google_id = $1`,
                        [defaultUser.googleId]
                    )

                    // ? Adding user personal details
                    defaultUser.user_id = ans.rows[0].user_id
                    // We have already added google_id and full_name
                    defaultUser.mobileNo =
                        ans.rows[0].mobile_no
                    defaultUser.dateOfBirth =
                        ans.rows[0].date_of_birth
                    // We have profile pic
                    defaultUser.address =
                        ans.rows[0].address
                    defaultUser.city = ans.rows[0].city
                    defaultUser.state = ans.rows[0].state
                    defaultUser.country =
                        ans.rows[0].country
                    defaultUser.pinCode =
                        ans.rows[0].pin_code

                    // ? Adding system settings details 
                    defaultUser.sidebarLock =
                        ans.rows[0].sidebar_lock_settings
                    defaultUser.systemNotifications =
                        ans.rows[0].system_notifications_settings
                    defaultUser.allNotifications =
                        ans.rows[0].all_notifications_settings

                    // ? Adding business details
                    defaultUser.businessName = ans.rows[0].name_business
                    defaultUser.businessEmailId = ans.rows[0].email_id_business
                    defaultUser.businessContactNo = ans.rows[0].contact_no_business
                    defaultUser.businessAddress =
                        ans.rows[0].address_business
                    defaultUser.businessProfilePic =
                    ans.rows[0].profile_pic_business
                    defaultUser.apiKey = ans.rows[0].api_key_business

                    // ? Adding other states 
                    defaultUser.isNew = ans.rows[0].is_new;

                } else {

                    // ? Adding user personal details
                    defaultUser.user_id = currentUserQuery.rows[0].user_id
                    // We have already added google_id and full_name
                    defaultUser.mobileNo = currentUserQuery.rows[0].mobile_no
                    defaultUser.dateOfBirth = currentUserQuery.rows[0].date_of_birth
                    // We have profile pic
                    defaultUser.address = currentUserQuery.rows[0].address
                    defaultUser.city = currentUserQuery.rows[0].city
                    defaultUser.state = currentUserQuery.rows[0].state
                    defaultUser.country = currentUserQuery.rows[0].country
                    defaultUser.pinCode = currentUserQuery.rows[0].pin_code

                    // ? Adding system settings details
                    defaultUser.sidebarLock = currentUserQuery.rows[0].sidebar_lock_settings
                    defaultUser.systemNotifications =
                        currentUserQuery.rows[0].system_notifications_settings
                    defaultUser.allNotifications =
                        currentUserQuery.rows[0].all_notifications_settings

                    // ? Adding business details
                    defaultUser.businessName = currentUserQuery.rows[0].name_business
                    defaultUser.businessEmailId = currentUserQuery.rows[0].email_id_business
                    defaultUser.businessContactNo =
                        currentUserQuery.rows[0].contact_no_business
                    defaultUser.businessAddress = currentUserQuery.rows[0].address_business
                    defaultUser.businessProfilePic =
                        currentUserQuery.rows[0].profile_pic_business
                    defaultUser.apiKey = currentUserQuery.rows[0].api_key_business

                    // ? Adding other states
                    defaultUser.isNew = currentUserQuery.rows[0].is_new
                }
                done(null, defaultUser)
            } catch(err) {
                done(err)
            }
        }
    )
)

passport.serializeUser((user, done) => {
    // loads into req.session.passport.user
    done(null, user)
})

passport.deserializeUser((user, done) => {
    // loads into req.user
    done(null, user)
})
