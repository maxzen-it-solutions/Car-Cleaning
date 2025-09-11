const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const registerRoutes = require('./routes/register');
const loginRoutes = require('./routes/login');
const customersRoute = require('./routes/customers'); // ✅
const contactRoutes = require("./routes/contact");
const leadsRoutes = require("./routes/leads");
const profileRoutes=require("./routes/profile")
const checkoutBasic = require("./routes/checkoutBasic");
const checkoutPremium = require("./routes/checkoutPremium");
const checkoutUltimate = require("./routes/checkoutUltimate");
const allOrders=require("./routes/ordersAll");
const forgotRoute = require("./routes/forgotRoute");
const planRoutes = require('./routes/plans');
const checkoutRoutes = require("./routes/checkout");

// server.js

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://hackerpratap7:Pratap%402345@cluster0.6mmtkxm.mongodb.net/Carbuddy?retryWrites=true&w=majority', {  // lowercase 'b'
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));
app.use((req, res, next) => {
  console.log("👉 Incoming:", req.method, req.url);
  next();
});
app.use('/api/register', registerRoutes);
app.use('/api/login', loginRoutes);

app.use('/api/customers', require('./routes/customers'));
app.use("/api/contact", contactRoutes);
app.use("/api/leads", leadsRoutes);
app.use('/api/profile',profileRoutes);
app.use('/api/plans', planRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/checkoutUltimate", checkoutUltimate);
app.use("/api/checkoutBasic", checkoutBasic);
app.use("/api/checkoutPremium", checkoutPremium);

app.use("/api/allOrders",allOrders);
app.use("/api/auth", forgotRoute);


const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
