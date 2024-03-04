const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { run } = require('./src/utils/mongodb');
const userRoute = require('./src/routes/user.route');
const authRoute = require('./src/routes/auth.route');

const PORT = 5000;
const app = express();

//body-praser
app.use(bodyParser.json());

//CORS Configuration
const corsOptions = {
  origin: 'https://moviesclone-netflix.netlify.app',
  methods: 'GET,POST,PUT,DELETE,PATCH,HEAD',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());

run();

app.get('/', (req, res) => {
  res.send('Hello World!');
});
//Routes
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
