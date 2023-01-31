const updateCard = (birth) => {
   const age = calculateAge(birth);
   if (age > 65) throw new Error ('Client must be under 65 years old')
   const creditCardNumber = `${randomNumber(0000,9999)}-${randomNumber(0000,9999)}-${randomNumber(0000,9999)}-${randomNumber(0000,9999)}`
   const expirationDate = `${randomNumber(01,12)}/${randomNumber(21,35)}`
   const securityCode = `${randomNumber(000,999)}`
   let type = age > 45 ? 'Gold' : 'Classic'
   const dbParams = {
    ExpressionAttributeNames: {
      "#C": "creditCard",
    },
    ExpressionAttributeValues: {
      ":c": {
        M: {
          "number": {
            S: creditCardNumber,
          },
          "expiration": {
            S: expirationDate,
          },
          "ccv": {
            S: securityCode,
          },
          "type":{
            S: type
          }
        },
      },
    },
    Key: {
      dni: {
        S: body.dni,
      },
    },
    ReturnValues: "ALL_NEW",
    TableName: "clients",
    UpdateExpression: "SET #C = :c",
  };
   return dbParams
}

function calculateAge(birth) {
    const birthDate = new Date(birth.substring(0,4), birth.substring(4,6), birth.substring(6,8))
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    return age;
}

module.exports = {updateCard}