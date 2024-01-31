const express = require('express');
const mongodb = require('mongodb');
const usersRouter = require('./routes/userRoutes');


const app = express();
app.use('/users', usersRouter);

   // Define your routes here
   app.get('/', (req, res) => {
     res.send('Hello, world!');
   });

   // Start the server
   const port = process.env.PORT || 3000;
   app.listen(port, () => {
     console.log(`Server running on port ${port}`);
   });
   