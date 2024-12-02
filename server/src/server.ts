import express from 'express';
import mongoose from 'mongoose'
const cors = require('cors')
const dotenv = require('dotenv')

const app = express();

dotenv.config()
app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello, MERN with TypeScript!');
});
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const mongoURI = process.env.MONGO_URI || '';
// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log('MongoDB connection error:', err));

