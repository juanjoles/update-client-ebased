const { UpdateClient } = require('../schema/input/updateClient');
const { getClientByDni } = require('../service/getClient');
const {updateGift} = require('../helper/updateGift');
const { updateCard } = require('../helper/updateCard');
const { updateClient } = require('../service/updateClient');


module.exports = async (commandPayload, commandMeta) => {
    new UpdateClient(commandPayload, commandMeta); 
    const {dni, name, lastname, birth} = commandPayload;
    const clientBd = getClientByDni(dni);
    const newGift = updateGift(birth);
    //const dbParams = updateCard(birth);
    const clientUpdate = {
        dni,
        name,
        lastname,
        birth:clientBd.birth,
        newGift     
    }
    const result = {clientUpdate}
    await updateClient(result)
    return {status: 200, body: result};
};
