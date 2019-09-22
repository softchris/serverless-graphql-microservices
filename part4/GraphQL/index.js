const server = require('./API/app');

module.exports = async function (context, req) {
    if (req.query.query || (req.body && req.body.query)) {
        const query = (req.query.query || req.body.query);
        try {
            const result = await server.executeOperation({
                query
            });

            context.res = {
                // status: 200, /* Defaults to 200 */
                contentType: 'application/json',
                body: result
            };
        } catch(err) {
           context.res = {
               status: 500,
               body: "We messed up" + err
           };
        }
        
    } else {
        context.res = {
            status: 400,
            body: "Please pass a `query` on the query string or in the request body"
        };
    }
};