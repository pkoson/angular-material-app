var figlet = require('figlet');

console.log('\n');
figlet.text('MyApp', {
    font: 'doom',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}, function(err, data) {
    console.log(data);
    console.log('\n');
});
