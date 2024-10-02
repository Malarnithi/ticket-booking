const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;


app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/travelapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Import Routes
const eventRoutes = require('./routes/eventRoutes');
app.use('/api/events', eventRoutes);

const userRoutes = require('./routes/userRouter');
app.use('/api/users', userRoutes);

const bookingRoutes = require('./routes/bookingRoutes'); 
app.use('/api/bookings', bookingRoutes); 

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
