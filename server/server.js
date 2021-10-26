require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 5000;
const cors = require('cors');

require(`./config/mongoose.config`)();



const app = express();


app.use(express.json());


const allMyPropertiesRoutes = require('./routes/properties.routes');

allMyPropertiesRoutes(app);

app.listen(PORT, () => console.log(`1/2 El servidor está en PORT: ${PORT}`));











// const express = require('express');
// const app = express();
// const port = 8000; 
// const cors = require('cors');
// const cookieParser = require('cookie-parser');

// require('./server/config/mongoose.config');

// app.use(cookieParser())
// app.use(cors({credentials: true, origin: 'http://localhost:3001'}));

// app.use(express.json(), express.urlencoded({extended: true}));

// const allMyPropertiesRoutes = require('./server/routes/properties.routes');

// allMyPropertiesRoutes(app);

// app.listen(port, () => console.log(`Ey ninjas the server is running in the port ${port}`))