//RUN THIS IN CONSOLE => node index.js

/*const fs = require('fs');
fs.readFile('customer.json','utf-8',(err,jsonString) => {
    if (err) {
        console.log(err);
    } else {
        try {
            const data = JSON.parse(jsonString);
            console.log(data.adress);
        } catch (err) {
            console.log(err);
        }
    }    
});*/

/*try {
    const jsonString = fs.readFileSync('customer.json','utf-8');                    read existing file 
    const customer = JSON.parse(jsonString);
    console.log(customer.adress);
} catch (err) {
    console.log(err);
}*/

/*const fs = require('fs');

function jsonReader(filePath, cb){
    fs.readFile(filePath,'utf-8',(err,fileData)=>{
        if (err) {
            return cb && cb(err);
        }
        try {
            const object = JSON.parse(fileData);
            return cb && cb(null,object);
        } catch (err) {
            return cb && cb(err);
        }
    });
}*/

/*jsonReader('customer.json',(err,data)=> {         NON stringifyed section
    if (err) {
        console.log(err);
    } else {
        console.log(data.address);
    }
});*/

/*const newObject = {                   write a new file
    name: 'Newbie Corp',
    order_count: 0,
    address: 'Po Box City',
};

fs.writeFile('./newCustomer.json', JSON.stringify(newObject, null, 2), err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Scritto con successo');
    }
});*/