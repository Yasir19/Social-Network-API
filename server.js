const express = require('express');
const mongoose = require('mongoose');

const app = express()
const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/social-network',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// log mongo queries being executed!
mongoose.set('debug', true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));