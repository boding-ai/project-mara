const router = require('express').Router()
const open = require('open')
const { isAuth } = require('../../../../lib/authMiddleware')

/* ----------------- POST ROUTES--------------------- */

// @route    POST api/communication/send-message-whatsapp
// @desc     Send message to client on whatsapp
// @access   Private
router.post('/send-message-whatsapp', isAuth, async (req, res, next) => {

    const { browserName, mobileNumber, message } = req.body 
    const userID = req.user.id

    function delay(time) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time)
        })
    }

    try {
        
        // Regex expression to remove all characters which are NOT alphanumeric
        let number = mobileNumber.replace(/[^\w\s]/gi, '').replace(/ /g, '')

        // Appending the phone number to the URL
        let url = `https://web.whatsapp.com/send?phone=${number}`

        // Appending the message to the URL by encoding it
        url += `&text=${encodeURI(message)}&app_absent=0`

        // Open our newly created URL in a new tab to send the message
        let a = await open(url, { app: { name: `${browserName}` } })

        return res.status(200).send('Window is open')

    } catch (error) {
        console.log(error)
        return res
            .status(400)
            .send({ errors: [{ msg: 'Cannot process request' }] })
    }
})

module.exports = router

