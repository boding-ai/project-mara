const router = require('express').Router()
const { check, validationResult } = require('express-validator')

const { isAuth } = require('../../../../lib/authMiddleware')
const { pool } = require('../../../../config/db')

// ------------- OWNER --------------------
router.post(
    '/edit-owner-profile',
    isAuth,
    check('ownerID', 'Owner ID is required').notEmpty(),
    check('ownerName', 'Owner name is required').notEmpty(),
    check('ownerName', 'Mobile number is required').notEmpty(),
    check('ownerName', 'Email is required').notEmpty(),
    check('ownerEmail', 'Invalid email').isEmail(),
    async (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const userID = req.user.user_id

        const { ownerName, ownerMobileNo, ownerAddress, ownerEmail, ownerID } =
            req.body

        try {
            let ans = await pool.query(
                `SELECT * FROM private.owners WHERE user_id = $1 AND mobile_no = $2 AND owner_id != $3`,
                [userID, ownerMobileNo, ownerID]
            )

            if (ans.rows.length > 0) {
                return res
                    .status(400)
                    .send({ errors: [{ msg: 'Owner already exists' }] })
            } else {
                await pool.query(
                    `UPDATE private.owners SET owner_name = $1, email_id = $2, mobile_no = $3, address = $4 WHERE user_id = $5 AND owner_id = $6`,
                    [
                        ownerName,
                        ownerEmail,
                        ownerMobileNo,
                        ownerAddress,
                        userID,
                        ownerID
                    ]
                )

                return res.status(200).send('Owner Profile Edited!')
            }
        } catch (error) {
            return res
                .status(400)
                .send({ errors: [{ msg: 'Cannot Edit Owner' }] })
        }
    }
)

router.post(
    '/add-new-owner',
    isAuth,
    check('ownerName', 'Owner name is required').notEmpty(),
    check('ownerName', 'Mobile number is required').notEmpty(),
    check('ownerName', 'Email is required').notEmpty(),
    check('ownerEmail', 'Invalid email').isEmail(),
    async (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const userID = req.user.user_id
        const profileType = 'owner'

        const { ownerName, ownerMobileNo, ownerAddress, ownerEmail } = req.body

        try {

            let ans = await pool.query(
                `SELECT * FROM private.owners WHERE user_id = $1 AND mobile_no = $2`, [userID, ownerMobileNo]
            )

            if(ans.rows.length > 0) {
                return res.status(400).send({ errors: [ {  msg: 'Owner already exists' } ] })
            } else {
                await pool.query(
                    `INSERT INTO private.owners (owner_name, email_id, mobile_no, address, profile_type, user_id) VALUES (LOWER($1), LOWER($2), $3, LOWER($4), $5, $6)`,
                    [
                        ownerName,
                        ownerEmail,
                        ownerMobileNo,
                        ownerAddress,
                        profileType,
                        userID,
                    ]
                )

                return res.status(200).send('Owner Added!')
            }
        } catch (error) {
            return res
                .status(400)
                .send({ errors: [{ msg: 'Cannot Add Owner' }] })
        }
    }
)

// Search Owner
router.post(
    '/search-owner',
    isAuth,
    async (req, res, next) => {

        const userID = req.user.user_id

        const {searchQuery}  = req.body

        try {
            let ans = await pool.query(
                `SELECT * FROM private.owners WHERE (owner_name LIKE '%' || $1 || '%'  OR email_id LIKE '%' || $1 || '%' OR mobile_no LIKE '%' || $1 || '%') AND user_id = $2`,
                [searchQuery, userID]
            )

            return res.status(200).send(ans.rows)
        } catch (error) {
            return res.status(400).send({ errors: [{ msg: 'Server Error. Try again after sometime.' }] })
        }
    }
)

// --------------PET---------------------
router.post(
    '/edit-pet-profile',
    isAuth,
    check('petNameNew', 'Pet Name is required').notEmpty(),
    check('petSpeciesNew', 'Pet species is required').notEmpty(),
    check('petStatusNew', 'Pet status is required').notEmpty(),
    check('petID', 'Pet ID is required').notEmpty(),
    check('ownerIdNew', 'Owner ID is required').notEmpty(),
    async (req, res, next) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const userID = req.user.user_id
        const profileType = 'pet'

        const {
            petID,
            petNameNew,
            petSpeciesNew,
            petBreedNew,
            petAgeNew,
            petAgeTimeNew,
            petPhysicalFeaturesNew,
            petStatusNew,
            petEstimatedBirthDate,
            petSpeciesDetailsStateNew,
            ownerIdNew,
            ownerIdOld,
        } = req.body

        let totalAgeNew = petAgeNew + ' ' + petAgeTimeNew

        try {
            let ans = await pool.query(
                `UPDATE private.pets SET pet_name = LOWER($1), pet_age = $2, pet_species = LOWER($3), pet_breed = LOWER($4), pet_status = $5, pet_physical_features = $6, profile_type = $7, pet_estimated_birth_date = $8, pet_details_state = $9, owner_id = $10 WHERE user_id = $11 AND pet_id = $12`,

                [
                    petNameNew,
                    totalAgeNew,
                    petSpeciesNew,
                    petBreedNew,
                    petStatusNew,
                    petPhysicalFeaturesNew,
                    profileType,
                    petEstimatedBirthDate,
                    petSpeciesDetailsStateNew,
                    ownerIdNew,
                    userID,
                    petID,
                ]
            )

            return res.status(200).send('Pet Profile Edited!')
        } catch (error) {
            return res
                .status(400)
                .send({ errors: [{ msg: 'Cannot Edit Owner' }] })
        }
    }
)

router.post(
    '/add-new-pet',
    check('petName', 'Pet Name is required').notEmpty(),
    check('petSpecies', 'Pet species is required').notEmpty(),
    check('petStatus', 'Pet status is required').notEmpty(),
    check('ownerId', 'Owner ID is required').notEmpty(),
    isAuth,
    async (req, res, next) => {

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const userID = req.user.user_id
        const profileType = 'pet'

        const {
            petName,
            petSpecies,
            petBreed,
            petAge,
            petAgeTime,
            petPhysicalFeatures,
            petStatus,
            ownerId,
            petEstimatedBirthDate,
            petSpeciesDetailsState,
        } = req.body

        let totalAge = petAge + ' ' + petAgeTime

        try {
            let ans = await pool.query(
                `INSERT INTO private.pets (pet_name, pet_age, pet_species, pet_breed, pet_status, pet_physical_features, profile_type, pet_estimated_birth_date, pet_details_state, user_id, owner_id) VALUES (LOWER($1), $2, LOWER($3), LOWER($4), $5, $6,$7, $8, $9, $10, $11)`,

                [
                    petName,
                    totalAge,
                    petSpecies,
                    petBreed,
                    petStatus,
                    petPhysicalFeatures,
                    profileType,
                    petEstimatedBirthDate,
                    petSpeciesDetailsState,
                    userID,
                    ownerId,
                ]
            )
            return res.status(200).send(ans.rows[0])
        } catch (error) {
            return res.status(400).send({ errors: [{ msg: 'Bad Request' }] })
        }
    }
)

module.exports = router
