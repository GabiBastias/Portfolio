const FakeBand = require("../../models/fakeBandsModel");

const patchFakeBand = async(req, res, next) => {
    const { id } = req.query
    const { body } = req;
    try {
        if (!body) throw Error("Nothing to patch here.");
        if (body.activeYears) throw Error("If you want to update the active years only need to patch the start date.");
        
        if (body.startDate) {
            const dateNowYear = new Date().getFullYear();
            const yearStartDate = Number(body.startDate.split("/").splice(2, 1).join());
            if (yearStartDate > dateNowYear) throw Error("The Starting Date of the Fake Band can't be in the futere.");
            const maxYear = dateNowYear - yearStartDate;
            body.activeYears = maxYear;
        }

        const patchFakeBand = await FakeBand.findByIdAndUpdate(id, body, { new: true });

        if (patchFakeBand) return res.status(200).json({ message: "Successfully Patched the Fake Band.", band: patchFakeBand});
        else throw Error("Can't be possible to Patch the Fake Band.");
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = patchFakeBand;