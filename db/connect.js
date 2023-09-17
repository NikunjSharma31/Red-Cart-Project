const mongoose = require("mongoose");

mongoose.connect("http://localhost:5000/hello", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log(`connection successful`);
}).catch((error) => {
    console.log(`connection failed: ${error} `);
});