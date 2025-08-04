const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const registerRoutes = require('./routes/register');
const loginRoutes = require('./routes/login');


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/CarBuddy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.use('/api/register', registerRoutes);

app.use('/api/login', loginRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
