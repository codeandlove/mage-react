const Magento2 = require('node-magento2');

//Magento

//instantiate the client object
const options ={
    url: 'http://sm2.test',
    store: 'it_it', //set a store to contextualise in
    authentication: {
        login: {
            type: 'admin', //admin or customer
            username: 'restuser',
            password: '3558916Piotr'
        },
        integration: { //from the integrations section in the magento2 backend
            consumer_key: 'vj1whj8psal4wmih7bnn5ovkw1jp4ws6',
            consumer_secret: 'awnyi5bw5b26ukramqg3m9tunr3wrclp',
            access_token: '89b1vahot8sik1470etrbiycrlh57ash',
            access_token_secret: 'dqqmlj9dto60k07m92fv4mgldu2t17at'
        }
    }
};

const mageClient = new Magento2('http://sm2.test', options);

mageClient.init();

module.exports = (app) => {
    app.get('/V1/*', function (req, res) {
        const method = req.method;
        const pathname = req.path;
        const query = req.query;
        let client = null;

        switch(method) {
            case 'GET':
                client = mageClient.get(pathname, {searchCriteria: query}).then(response => {
                    console.log(response);
                    res.json(response);
                });
            break;
            case 'POST':
                client = mageClient.post(pathname, {searchCriteria: query}).then(response => {
                    res.json(response);
                });
            break;
            default:
                console.warn('No method type.');
            break;
        }

        client.catch(err => {
            console.error('error:', err);
        });

    });
};
