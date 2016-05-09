var figlet = require('figlet');
 
console.log('\n'); 
figlet.text('AkraPeople2', {
    font: 'doom',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}, function(err, data) {
    console.log(data);
    console.log('\n');
}); 
