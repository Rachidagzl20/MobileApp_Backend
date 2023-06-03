const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const loginRouter = require('./routes/login.route');
const clientRouter=require('./routes/Client.route');
const publicationRouter=require('./routes/publicationUser.route');

const app = express();
const port = 3000;
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allowed HTTP methods
  res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'); // Allowed headers
  res.set('Access-Control-Allow-Credentials', 'true'); // Allow credentials (e.g., cookies, authentication headers)

  if (req.method === 'OPTIONS') {
    // Handle preflight requests
    res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    return res.status(200).json({});
  }

  next();
});
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const initMongoDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://rachanour354:rachida00@cluster0.9mrk61v.mongodb.net/sud_gold_start?retryWrites=true&w=majority',
      connectionParams
    );
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log(err);
  }
};

initMongoDB();



// Middleware

app.use(cors());
// Routes

const bodyParser = require('body-parser'); // Enable CORS
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(express.json());
// Routes
app.use('/auth', loginRouter);
app.use('/client', clientRouter);
app.use('/publication', publicationRouter);
// Start the server
 app.listen(port, () => {
  console.log(`Server listening on http://192.168.137.1:${port}`);
}); 


