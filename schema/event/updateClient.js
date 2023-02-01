const {DownstreamEvent} = require('ebased/schema/downstreamEvent');

class ClientUpdateEvent extends DownstreamEvent {
    constructor(payload, meta){
        super({
            type:'CLIENT.UPDATE',
            specversion:'v1.0.0',
            payload,
            meta,
            schema:{
                strict:false,
                dni:{type:Number, required:true},
                name:{type:String, required:true},
                lastname:{type:String, required:true},
                birth:{type:Date, required:true},
                age:{type:Number, required:true},    
            },
        })
    }
}

module.exports = {ClientUpdateEvent}