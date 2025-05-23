const mongoose = require('mongoose'); 
 const URI = 'mongodb+srv://sergio40andres:YWw1DUsO4ENAeaiO@cluster0.wwi41zu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 
 mongoose.connect(URI)
     .then(db => console.log('DB is connected'))
     .catch(err => console.error(err));  
 module.exports = mongoose; 