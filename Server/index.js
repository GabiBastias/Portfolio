require('dotenv').config();
const app = require('./src/app');
const { PORT, URL } = process.env;

app.listen(PORT, () => {
    console.log(`Server: ${URL}`);
})