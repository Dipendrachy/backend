const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-Parser');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/public',express.static(__dirname + "/public"));   
// app.use(express.static((__dirname, 'images')));
app.use(cors());
const db = require('./database/db');
const user = require('./routes/user');
const bookingRoutes = require('./routes/bookingRoutes');
const hotelRoutes = require('./routes/hotelRoutes');
const addFlightRoutes = require('./routes/addFlightRoutes');
const addHotelRoutes = require('./routes/addHotelRoutes');
const contactRoutes = require('./routes/contactRoutes');

app.use(user);
app.use(bookingRoutes);
app.use(hotelRoutes);
app.use(addFlightRoutes);
app.use(addHotelRoutes);
app.use(contactRoutes);
// app.use(express.json());     

app.listen(90, () => {
    console.log("Server running at 90.")
});
