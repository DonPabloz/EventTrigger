module.exports = async function (context, eventGridEvent) {
    context.bindings.outputDocument = JSON.stringify({
        // create a random ID
        //id: new Date().toISOString() + Math.random().toString().substr(2, 8),
        id: eventGridEvent.id,
        data: eventGridEvent.data
    });
};