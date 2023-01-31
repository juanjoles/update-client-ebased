const config = require('ebased/util/config');
const dynamo = require ('ebased/service/storage/dynamo');
const { ErrorHandled } = require('ebased/util/error');
const TABLE_NAME = config.get('Clients')

const getClientByDni = async (dni) => {
    const {Item} = await dynamo.getItem({
        TableName: TABLE_NAME,
        Key: {pk: client.dni},
    });
    if (!Item) throw new ErrorHandled('Missing DNI', {status:404, code:'NOT_FOUND'});
    return Item;
}

 module.exports = {getClientByDni};