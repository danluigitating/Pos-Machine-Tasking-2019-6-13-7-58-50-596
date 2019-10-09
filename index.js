const items= [
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];

function printReceipt (id) {
    const valid= isValid(id);
    let count;
    let receipt;

    if(valid){
        count= computeItems(id);
        receipt= formatReceipt(count);
    }
    else
        return "[ERROR]: Id is not valid";
       
    return receipt;
}

function isValid(id){
    const allItemId= items.map(items => items.id);
    const check = id.every(id => allItemId.includes(id));
    return check;
}

function computeItems(id){
    let itemCount = new Object();

    for(let i = 0; i < id.length; i++) {
        if(itemCount[id[i]] != null) {
        itemCount[id[i]] += 1;
       } else {
        itemCount[id[i]] = 1;
       }
    }

    return itemCount;
}

function formatReceipt(recordedItems){
    let prize=0;
    let stringReceipt= 'Receipts\n' +
    '------------------------------------------------------------\n';

    for(let i = 0; i < Object.keys(recordedItems).length; i++) {
        for (let j = 0; j < Object.values(items).length; j++){
            if(Object.keys(recordedItems)[i]===Object.values(items)[j].id){
            stringReceipt += items[j].name +'                       '+ items[j].price 
            +'          '+Object.values(recordedItems)[i]+'\n';
            prize+= (items[j].price) * (Object.values(recordedItems)[i]);
            }
        }
    }

    stringReceipt += '------------------------------------------------------------\nPrice: ' 
    + prize;

    return stringReceipt;
}

module.exports = printReceipt;
