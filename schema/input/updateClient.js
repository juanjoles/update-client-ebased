const {InputValidation} = require('ebased/schema/inputValidation');

class UpdateClient extends InputValidation {
    constructor(payload, meta) {
        super({
           type:'CLIENT.MODIFIED',
           specversion:'v1.0.0',
           source:meta.source,
           payload,
            schema:{
                id: { type: 'uuid/v4', required: true },
                dni:{type:Number, required:true},
                name:{type: String, required:true},
                lastname:{type: String, required:true},
                birth:{type:Date, required:true}
            },
        });
    }
}

module.exports = {UpdateClient}