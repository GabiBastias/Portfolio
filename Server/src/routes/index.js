const express = require("express");
const router = express.Router();
const createFakeBand = require("../utils/faker");

router.get("/faker", async(req, res, next) => {
    try {
        const fak = await createFakeBand();
        if (fak) return res.status(200).send(fak);
        else throw new Error("Error en la consulta")
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
});

module.exports = router;