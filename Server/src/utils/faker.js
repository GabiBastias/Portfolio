const { faker } = require('@faker-js/faker');
const fs = require("node:fs/promises");
const path = require("path")

const createDisc = async () => {
    try {
        let data = [];
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

        const filePath = path.join(__dirname, "../assets/json/artist.json");
        const fileData = await fs.readFile(filePath, "utf-8");
        console.log(fileData.length);
        if (fileData.length === 0) {
            console.log("hola");
            const jsonData = JSON.stringify(randomDisc, null, 2);
            await fs.writeFile(filePath, `[\n${jsonData}\n]`);
            if (jsonData) return jsonData;
        } else {
            console.log("chau");
            data = JSON.parse(fileData);
            data.push(randomDisc);
            const jsonData = JSON.stringify(data, null, 2);
            // await fs.appendFile(filePath, `,${jsonData}\n`);
            await fs.writeFile(filePath, data.length === 0 ? `[${jsonData}]`: jsonData)
            if (jsonData) return jsonData;
        }
        throw Error("Can't be possible writte the file.")
    } catch (error) {
        return error.message;
    }
}

module.exports = createDisc;