const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;

app.get("/", (request, response) => {
    response.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`The server is on in port ${PORT}`);
});
