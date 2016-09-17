var express = require('express');
var app = express();

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With, Content-Type,Accept');
    next();
});


var profiles = [
    {
        name: 'phil',
        age: 37,
        bio: 'enjoys swimming and biking',
        hobbies: ['swimming', 'biking']
    },
    {
        name: 'sophie',
        age: 33,
        bio: 'enjoys long walk on the beach',
        hobbies: ['gardening', 'walk']
    },
    {
        name: 'tom',
        age: 23,
        bio: 'enjoys run on the beach',
        hobbies: ['gardening', 'walk']

    }
];


app.get('/profiles', (req, res) => {
    res.json(profiles);
})



var server = app.listen(3000, function() {
   console.log('listening on port %d', server.address().port);

});


