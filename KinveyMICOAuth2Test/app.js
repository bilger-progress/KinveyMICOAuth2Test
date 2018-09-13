const serve = require('serve');

serve(__dirname, {
    port: 5000,
    ignore: ['node_modules']
});
