const FakeBand = require("../../models/fakeBandsModel");
const { findByIdAndDelete } = require("../../models/fakeBandsModel");

const deleteFakeBand = async(req, res, next) => {
    const { id } = req.query;
    try {
        const deleteFakeBand = await FakeBand.findByIdAndDelete(id);
        if (deleteFakeBand) return res.status(200).send("Fake Band deleted Successfully.");
        else throw Error("Can't be possible delete the Fake Band. Please try again."); 
    } catch (error) {
        return res.status(200).json({ error: error.message });
    }
}

module.exports = deleteFakeBand;