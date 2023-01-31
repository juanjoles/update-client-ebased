const config = require('ebased/util/config');
const dynamo = require('ebased/service/storage/dynamo');
const TABLE_NAME = config.get('clients')

const updateClient = async (result) => {
    const params = {
        TableName:  TABLE_NAME,
        Key:{
            pk:result.dni
        },
        UpdateExpression:'set name = :a, lastname = :b, birth = :c, gift = :d',
        ExpresionAttributeValues:{
            ':a' :result.name,
            ':b':result.lastname,
            ':c':result.birth,
            ':d':result.newGift
        },
    };
    await dynamo.updateItem(params)
}

module.exports = {updateClient}