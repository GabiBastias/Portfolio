const { faker } = require('@faker-js/faker');
const fs = require("node:fs/promises");
const path = require("path")

const createDisc = async () => {
    try {
        const startingYear = faker.number.int({ min: 1920, max: 1998})
        const dateNowYear = new Date().getFullYear();
        const fakeGenres = [];
        const discName = `${faker.word.adjective()} ${faker.person.jobDescriptor()}`
        const bandName = `${faker.vehicle.model()} ${faker.animal.snake()}`
        const startingDate = faker.date.birthdate({ min: startingYear, max: dateNowYear - 1, mode: 'year' });
        const startDate = `${startingDate.getDate()}/${startingDate.getMonth()}/${startingDate.getFullYear()} `
        for (let i = 0; i < faker.number.int({ min: 1, max: 10}); i++) {
            fakeGenres.push(faker.music.genre());
        }

        const maxYear = dateNowYear - startingDate.getFullYear();
        
        const randomDisc = {
            disc: discName,
            band: bandName,
            genres: fakeGenres,
            startDate: startDate,
            activeYears: faker.number.int({ min: 1, max: maxYear }),
            numbOfMembers: faker.number.int({ min: 1, max: 10 })    
        }

        const jsonData = JSON.stringify(randomDisc, null, 2);

        const filePath = path.join(__dirname, "../assets/json/artist.json");
        
        await fs.appendFile(filePath, `,${jsonData}\n`);
        if (jsonData) return jsonData;
        else throw Error("Can't be possible writte the file.")
    } catch (error) {
        return error.message;
    }
}

module.exports = createDisc;