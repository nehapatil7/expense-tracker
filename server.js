const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors')
const connectDb = require('./config/connectDb')

dotenv.config();

connectDb();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/users', require('./routes/userRoute'))

app.use('/api/transactions', require('./routes/transactionRoute'))

const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
});