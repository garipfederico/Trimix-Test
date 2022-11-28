require('dotenv').config();
const app = require('./app')
require('./database');

// app.listen(4000, () => console.log('Server on port 4000'))

async function main() {
    await app.listen(app.get('port'));
    console.log('Server on port ', app.get('port'))
}

main();