const express = require("express");
const { asyncHandler, handleValidationErrors } = require("../utils");
const { checkJwt } = require("../auth")
const router = express.Router();
const db = require("../db/models");

const { User } = db;


router.post(
    "/register",
    checkJwt,
    asyncHandler(async (req, res) => {
        const { name, email } = req.body;
        const user = await User.create({ name, email });

        res.status(201).json({
            user: { id: user.id },
        });
    })
);

router.patch(
    '/login',
    checkJwt,
    asyncHandler(async (req, res) => {
        const { name, email } = req.body;
        const user = await User.findOne({
            where: {
                email,
            },
        });
        if (!user) {
            const newUser = await User.create({ email, name })
            res.status(201).json({ newUser })
        } else {
            const loggedUser = await User.update({ email, name }, { where: { email } })
            res.status(201).json({
                user
            })
        }

    })
);

module.exports = router;