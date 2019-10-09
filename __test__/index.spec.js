const printReceipt = require('../index');

describe('Case 1', () => {

    const id = ['0001', '0003', '0005', '0003']; 
    const answer= "Receipts\n------------------------------------------------------------\n"
    +"Coca Cola                       3          1\n"
    +"Pepsi-Cola                       5          2\n" 
    +"Dr Pepper                       7          1\n"
    + "------------------------------------------------------------\n"
    + "Price: 20";
    
    it('Should print receipt if id is valid', () => {
      const result = printReceipt(id);
      expect(result).toBe(answer);
    });
});

describe('Case 2', () => {

    const id = ['0011']; 
    const answer= "[ERROR]: Id is not valid";
    
    it('Should return error if id is invalid', () => {
      const result = printReceipt(id);
      expect(result).toBe(answer);
    });
});