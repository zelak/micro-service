const app = require('./app');

const port = 3000;

async function run() {
    // express listen
    const server = app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
};

run();
