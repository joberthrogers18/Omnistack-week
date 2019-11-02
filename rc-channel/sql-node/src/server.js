 const express = require('express');
 const app = express();
 const routes =  require('./routes');

 require('./database/index');

 const PORT = 3333 || process.env.PORT;

app.use(express.json()); 
app.use(routes);

 app.listen(PORT, () => {
     console.log(`Server is runing in port: ${PORT}`);
 })