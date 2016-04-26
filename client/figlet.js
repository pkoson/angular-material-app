var figlet = require('figlet');
 
console.log('\n'); 
figlet.text('     SportMatrix     ', {
    font: 'nancyj-underlined',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}, function(err, data) {
    console.log(data);
    console.log('\n');
}); 
