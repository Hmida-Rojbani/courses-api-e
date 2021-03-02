const mongoose = require('mongoose');
            
mongoose.connect('mongodb+srv://user:1234@db.mhbax.mongodb.net/test-e?retryWrites=true&w=majority',
{ useNewUrlParser : true, useUnifiedTopology : true})
            .then(()=> console.log('Mongo is UP.'))
            .catch( err => console.log('Mongo is Down. Raison :', err));