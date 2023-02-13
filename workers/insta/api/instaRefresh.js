const instaRefresh = () => {
    try {
        console.log('RUN')
        let oldAccessToken = 'XXXXX' // get from DB
        let resp = await axios.get(
            `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${oldAccessToken}`
        )
        if (resp.data.access_token) {
            let newAccessToken = resp.data.access_token
            // save newAccessToken to DB
        }
    } catch (e) {
        console.log('Error=====', e.response.data)
    }
}

module.exports = {
    instaRefresh
}
