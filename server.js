const app = require('./app');
const connectDB = require('./config/database');

// Connect to database
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});