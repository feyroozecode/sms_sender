const { Vonage } = require('@vonage/server-sdk')
require('dotenv').config()
const express = require('express')

const app = express();
const PORT= process.env.PORT 

// init vonage api
const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY,
  apiSecret: process.env.VONAGE_API_SECRET
})
console.log(`Vonage API = ${vonage.apiKey} and Vonage Api Secret = ${vonage.apiSecret}`);

// server
app.get('/', (req, res) => {
res.send(`Hi all is work fine , API KEY vonage = ${vonage.apiKey} and key = ${vonage.apiSecret} , port = ${PORT}`);
})

// send sms 
const from = "Ibrahim Ahmad"
const to = "22799463594"
const text = "Mi yetti Allah"

async function sendSms(){
    await vonage.sms.send({ to, from, text })
        .then(resp => {
            console.log('Message sent sycessfully');
            console.log(resp);
        }).catch(err => {
            console.log('There was an error sending message');
            console.log(err);
        })
}

sendSms();
app.listen(PORT, () => {
    console.log(`Server listen on localhost:${PORT}`);
})