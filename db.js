const mongoose = require('mongoose');

//mongodb+srv://root:<password>@cluster0.llg2x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//mongodb+srv://root:<root>@cluster0.llg2x.mongodb.net/TrainingProjectDb

mongoose.connect('mongodb://localhost:27017/TrainingProjectDb', {useNewUrlParser: true}, (err) => {
    if (!err) {
        console.log('Successfully Established Connection with MongoDB')
    }
    else {
        console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
    }
});
module.exports = mongoose;