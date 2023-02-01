const { UpdateClient } = require('../schema/input/updateClient');
const { getClientByDni } = require('../service/getClient');
const { updateClientEvent, updateClient } = require('../service/updateClient');
const { emitClientUpdate } = require('../service/emitClientUpdate');


module.exports = async (commandPayload, commandMeta) => {
    new UpdateClient(commandPayload, commandMeta); 
    const {dni, name, lastname, birth} = commandPayload;
    const clientDb = getClientByDni(dni);
    if(clientDb.birth !== birth){
        const updateCardandGift = {
            dni,
            name,
            lastname,
            birth,
        }
       await emitClientUpdate(new updateClientEvent(updateCardandGift, commandMeta))
    }
    const newClient = {
        dni,
        name,
        lastname,
        birth,
    }
    await updateClient(newClient);

    return {status: 200, body: newClient};
};
