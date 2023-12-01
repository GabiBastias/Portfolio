const FakeBand = require("../../models/fakeBandsModel");

const updateAllFakeBand = async(req, res, next) => {
    const { id } = req.query;
    const { band, discs, genres, startDate, numbOfMembers } = req.body;
    try {
        if (!band || !discs || !genres || !startDate || !numbOfMembers) throw Error("The Fake Band does not have any params, rememeber this is a complete update of a Fake fakeBand.")
        if (req.body.activeYears) throw Error("The active years are automatically update.");
        
        const dateNowYear = new Date().getFullYear();
        const yearStartDate = Number(startDate.split("/").splice(2, 1).join());
        if (yearStartDate > dateNowYear) throw Error("The Starting Date of the Fake Band can't be in the futere.");
        const maxYear = dateNowYear - yearStartDate;

        const fakeBand = {band, discs, genres, startDate, activeYears: maxYear, numbOfMembers}

        const findFakeBand = await FakeBand.findByIdAndUpdate(id, fakeBand, { new: true });
        if (findFakeBand) return res.status(200).json(findFakeBand);
        else throw Error("Can't be possible to update the Fake Band.")
    } catch (error){
        return res.status(500).json({ error: error.message });
    }
}

module.exports = updateAllFakeBand;