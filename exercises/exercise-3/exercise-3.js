let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function printReceipt(orderArr) {
  let totalForEachItemArr = []
  console.log(`QTY   ITEM                 TOTAL`);
  for (let order of orderArr) {
    const {itemName, quantity, unitPrice} = order;
    
    console.log(`${quantity}     ${itemName}          ${unitPrice}`)
    let totalForEachItem = quantity * unitPrice;
    totalForEachItemArr.push(totalForEachItem)
  }
  const totalOfTotals = totalForEachItemArr.reduce((item1, item2) => item1+item2);
  console.log('Total: ', totalOfTotals)
}
printReceipt(order)
