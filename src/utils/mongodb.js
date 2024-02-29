const mongoose = require('mongoose');
const uri =
  'mongodb+srv://akilanpalani2001:mongodb123@cluster0.mxlfkc3.mongodb.net/?retryWrites=true&w=majority';

// const uri = process.env.URI_LINK;

async function run() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected successfully to MongoDB');
  } catch (error) {
    console.error('Error to connect', error.message);
  }
}

module.exports = { run };
