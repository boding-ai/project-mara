const router = require('express').Router()
const passport = require('passport')

const {isAuth} = require('../../../../lib/authMiddleware')
const { pool } = require('../../../../config/db')

router.get(
    '/google/login',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    }),
    (req, res, next) => {
        res.status(200).send({ msg: 'Logged in' })
    }
)

router.get(
    '/google/callback',
    passport.authenticate('google', {
        successRedirect: "http://localhost:3000/",
        failureRedirect: "http://localhost:3000/sign-in",
        session: true
    }),
    async (req, res) => {
        return res.send(req.user)
    }
)

router.get('/get-data', isAuth, (req, res, next) => {
    console.log("AA")
    try {
        let userInfo = {
            id: req.user.user_id,
            email: req.user.email,
            name: req.user.fullName,
            mobileNo: req.user.mobileNo,
            dateOfBirth: req.user.dateOfBirth,

            address: req.user.address,
            city: req.user.city,
            state: req.user.state,
            country: req.user.country,
            pinCode: req.user.pinCode,

            sidebarLock: req.user.sidebarLock,
            systemNotifications: req.user.systemNotifications,
            allNotifications: req.user.allNotifications,

            apiKey: req.user.apiKey,
            businessName: req.user.businessName,
            businessEmailId: req.user.businessEmailId,
            businessAddress: req.user.businessAddress,
            businessContactNo: req.user.businessContactNo,
            businessProfilePic: req.user.businessProfilePic,

            isNew: req.user.isNew
        }

        return res.status(200).send(userInfo)
    } catch (error) {
        return res.status(400).send({ errors: [{ msg: 'Server Error' }] })
    }
})


// Visiting this route logs the user outline
router.get('/logout', (req, res, next) => {
    req.logout()
    res.redirect('/')
})

module.exports = router
