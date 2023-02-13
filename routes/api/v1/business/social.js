const router = require('express').Router()
const { check, validationResult } = require('express-validator')
const request = require('request')

const { isAuth, isAdmin } = require('../../../../lib/authMiddleware')
const { pool } = require('../../../../config/db')
const { default: axios } = require('axios')

require('dotenv').config()

// Edit caption of post
router.post('/check-website-status', isAuth, async (req, res) => {
    const { domain } = req.body
    const userID = req.user.user_id

    try {
        let ans = await axios.get(`https://${domain}`)

        return res.status(200).send('Website Live')
    } catch (error) {
        console.log(error)
        return res
            .status(400)
            .send({ errors: [{ msg: 'Cannot process request' }] })
    }
})

// Edit caption of post
router.post('/edit-post-caption', isAuth, async (req,res) => {
    const { postID, caption } = req.body
    const userID = req.user.user_id

    try {
        let changeShow = await pool.query(
            `UPDATE private.instagram_posts SET caption = $1 WHERE user_id = $2 AND post_id = $3`, [caption, userID, postID]
        )

        return res.status(200).send('Caption updated!')
    } catch (error) {
        console.log(error)
        return res
            .status(400)
            .send({ errors: [{ msg: 'Cannot process request' }] })
    }

})

// Enable NSFW Warning
router.post('/enable-post-nsfw-warning', isAuth, async (req, res) => {
    const { postID } = req.body
    const userID = req.user.user_id

    try {
        let changeShow = await pool.query(
            `UPDATE private.instagram_posts SET nsfw_warning = $1 WHERE user_id = $2 AND post_id = $3`,
            [true, userID, postID]
        )

        return res.status(200).send('NSFW warning active!')
    } catch (error) {
        console.log(error)
        return res
            .status(400)
            .send({ errors: [{ msg: 'Cannot process request' }] })
    }
})

// Disable NSFW Warning
router.post('/disable-post-nsfw-warning', isAuth, async (req, res) => {
    const { postID } = req.body
    const userID = req.user.user_id

    try {
        let changeShow = await pool.query(
            `UPDATE private.instagram_posts SET nsfw_warning = $1 WHERE user_id = $2 AND post_id = $3`,
            [false, userID, postID]
        )

        return res.status(200).send('NSFW warning active!')
    } catch (error) {
        console.log(error)
        return res
            .status(400)
            .send({ errors: [{ msg: 'Cannot process request' }] })
    }
})

// Make post Live 
router.post('/make-post-live', isAuth, async (req,res) => {
    const { postID } = req.body
    const userID = req.user.user_id

    try {
        let changeShow = await pool.query(
            `UPDATE private.instagram_posts SET show = $1 WHERE user_id = $2 AND post_id = $3`, [true, userID, postID]
        )

        return res.status(200).send('Status updated!')
    } catch (error) {
        console.log(error)
        return res
            .status(400)
            .send({ errors: [{ msg: 'Cannot process request' }] })
    }

})

// Make post Unlive 
router.post('/make-post-not-live', isAuth, async (req,res) => {
    const { postID } = req.body
    const userID = req.user.user_id

    try {
        let changeShow = await pool.query(
            `UPDATE private.instagram_posts SET show = $1 WHERE user_id = $2 AND post_id = $3`, [false, userID, postID]
        )

        return res.status(200).send('Status updated!')
    } catch (error) {
        return res
            .status(400)
            .send({ errors: [{ msg: 'Cannot process request' }] })
    }

})

// Get Insta posts from db
router.get('/get-insta-posts-from-db', isAuth, async (req, res) => {

    const userID = req.user.user_id

    let ans = []

    try {
        let mainPosts = await pool.query(
            `SELECT * FROM private.instagram_posts WHERE user_id = $1 ORDER BY timestamp DESC`, [userID]
        )

        for(let i=0; i<mainPosts.rows.length; i++){
            let subPosts = await pool.query(
                `SELECT media_url, media_type, post_id FROM private.instagram_posts_children WHERE post_id = $1`, [mainPosts.rows[i].post_id]
            )
            ans.push({
                elements: subPosts.rows,
                caption: mainPosts.rows[i].caption,
                timestamp: mainPosts.rows[i].timestamp,
                post_id: mainPosts.rows[i].post_id,
                show: mainPosts.rows[i].show,
                nsfw_warning: mainPosts.rows[i].nsfw_warning
            })
        }

        return res.status(200).send(ans)
        
    } catch (error) {
        console.log(error)
         return res
             .status(400)
             .send({ errors: [{ msg: 'Cannot process request' }] })
    }
})

// Check if instagram is connected
router.get('/check-if-insta-connected', isAuth, async (req, res) => {
    try {
        let ans = await pool.query(
            `SELECT * FROM private.instagram_auth WHERE user_id = $1`,
            [req.user.user_id]
        )

        if (ans.rows.length > 0) {
            return res.status(200).send(ans.rows[0])
        } else {
            return res.status(200).send('0')
        }
    } catch (error) {
        return res
            .status(400)
            .send({ errors: [{ msg: 'Cannot process request' }] })
    }
})                                                                               

//Save posts from Instagram
router.post('/save-posts-from-instagram', isAuth, async (req, res, next) => {

    const userID = req.user.user_id

    const { accessToken } = req.body

        console.log(userID, accessToken)

    try {
        let resp = await axios.get(
            `https://graph.instagram.com/me/media?fields=media_type,permalink,media_url,caption,username,timestamp&access_token=${accessToken}`
        )

        console.log(resp.data.data)

        for (let i=0; i< resp.data.data.length; i++){
            let checkPost = await pool.query(
                `SELECT * FROM private.instagram_posts WHERE post_id = $1 AND user_id  = $2`, [resp.data.data[i].id, userID]
            )

            if(checkPost.rows.length === 0) {
               let savePost = await pool.query(
                   `INSERT INTO private.instagram_posts (post_id, caption, media_type, timestamp, user_id) VALUES ($1, $2, $3, $4, $5)`,
                   [
                       resp.data.data[i].id,
                       resp.data.data[i].caption,
                       resp.data.data[i].media_type,
                       resp.data.data[i].timestamp,
                       userID,
                   ]
               )

               if (resp.data.data[i].media_type === 'CAROUSEL_ALBUM') {
                   let resp2 = await axios.get(
                       `https://graph.instagram.com/${resp.data.data[i].id}/children?fields=media_type,permalink,media_url&access_token=${accessToken}`
                   )

                   for (let j = 0; j < resp2.data.data.length; j++) {
                       let savePostTwo = await pool.query(
                           `INSERT INTO private.instagram_posts_children (post_id, media_type, media_url, child_id) VALUES ($1, $2, $3, $4)`,
                           [
                               resp.data.data[i].id,
                               resp2.data.data[j].media_type,
                               resp2.data.data[j].media_url,
                               resp2.data.data[j].id,
                           ]
                       )
                   }

               } else {
                   let savePostTwo = await pool.query(
                       `INSERT INTO private.instagram_posts_children (post_id, media_type, media_url) VALUES ($1, $2, $3)`,
                       [
                           resp.data.data[i].id,
                           resp.data.data[i].media_type,
                           resp.data.data[i].media_url,
                       ]
                   )
               }
            }
            
        }

        return res.status(200).send('Insta Main Posts Fetched!')
    } catch (e) {
        console.log(e)
        return res
            .status(400)
            .send({ errors: [{ msg: 'Could not save posts' }] })
    }
})

// Get Long access Token from Insta
router.get('/insta', isAuth, async (req, res, next) => {

    let redirectURI = 'https://localhost:8080/api/social/insta'

    let accessToken = null
    let instaID = null

    const userID = req.user.user_id

    try {

    const insta_form = new URLSearchParams()
        insta_form.append('client_id', process.env.INSTA_APP_ID)
        insta_form.append('client_secret', process.env.INSTA_APP_SECRET)
        insta_form.append('grant_type', 'authorization_code')
        insta_form.append('redirect_uri', redirectURI)
        insta_form.append('code', req.query.code)

        let result = await axios({
            method: 'POST',
            url: 'https://api.instagram.com/oauth/access_token',
            data: insta_form,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })

        accessToken = result.data.access_token
        instaID = result.data.user_id
        
    } catch (error) {
        return res.status(400).send({ errors: [{ msg: 'Bad Request' }] })
    }

    try {
        let resp = await axios.get(
            `https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${process.env.INSTA_APP_SECRET}&access_token=${accessToken}`
        )
        accessToken = resp.data.access_token

        let ans = pool.query(
            `INSERT INTO private.instagram_auth (user_id, insta_id, token) VALUES ($1, $2, $3)`, [userID, instaID, accessToken]
        )

        return res.status(200).send('Instagram has been connected')
    } catch (e) {
        return res.status(400).send({ errors: [{ msg: 'Could not connect IG account' }] })
    }

})

router.post('/get-pets-from-owner', isAuth, async (req, res, next) => {
    const { ownerID } = req.body
    const userID = req.user.user_id
    try {
        let ans = await pool.query(
            `SELECT pet_name from private.pets WHERE owner_id = $1 AND user_id = $2`,
            [ownerID, userID]
        )
        return res.status(200).send(ans.rows)
    } catch (error) {
        return res.status(400).send({ errors: [{ msg: 'No Pets Found' }] })
    }
})

module.exports = router
