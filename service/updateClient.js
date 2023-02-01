const config = require('ebased/util/config');
const dynamo = require('ebased/service/storage/dynamo');
const TABLE_NAME = config.get('clients')

const updateClient = async (result) => {
    const params = {
        TableName:  TABLE_NAME,
        Key:{
            pk:result.dni
        },
        UpdateExpression:'set dni = :x, name = :a, lastname = :b, birth = :c',
        ExpresionAttributeValues:{
            ':x' :result.dni,
            ':a' :result.name,
            ':b':result.lastname,
            ':c':result.birth,
        },
    };
    await dynamo.updateItem(params)
}

module.exports = {updateClient}