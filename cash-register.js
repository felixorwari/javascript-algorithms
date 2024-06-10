const CURRENCY = {
  "ONE HUNDRED": 100,
  "TWENTY": 20,
  "TEN": 10,
  "FIVE": 5,
  "ONE": 1,
  "QUARTER": 0.25,
  "DIME": 0.1,
  "NICKEL": 0.05,
  "PENNY": 0.01,
}
const UNITS = Object.keys(CURRENCY); // Currency unit names

function checkCashRegister(price, cash, cid) {
  let totalCash = 0; // total cash held in register

  let changeOwed = cash - price; // amount to return as change
  changeOwed = parseFloat(changeOwed.toFixed(2)); //set precision to two decimal places

  console.log("Item Price: $" + price);
  console.log("Total paid: $" + cash);
  console.log("\nChange owed: $" + changeOwed);

  //compute total cash in drawer
  cid.forEach(drawer => totalCash += drawer[1]);
  totalCash = parseFloat(totalCash.toFixed(2)); //set precision to two decimal places
  console.log("Cash in drawer: $" + totalCash);

  // Status and change given object
  let changeGiven = {
    status: "",
    change: []
  };

  // Check if cash in drawer is sufficient
  if (changeOwed > totalCash) {
    changeGiven.status = "INSUFFICIENT_FUNDS";
    return changeGiven;
  } else if (changeOwed === totalCash) {
    changeGiven.status = "CLOSED";
    changeGiven.change = cid;
    return changeGiven;
  }

  console.log("\nChange you can give:")

  for (const unit of UNITS) {
    //check if currency unit can be used to offset some change
    if (changeOwed >= CURRENCY[unit]) {
      // compute number of currency units required
      const requiredUnits = Math.floor(changeOwed / CURRENCY[unit])
      const changeRequired = requiredUnits * CURRENCY[unit];

      //check how many units can be used from cash in drawer for current currency unit
      for (const drawer in cid) {
        if (cid[drawer][0] === unit) {

          // check amount held in drawer for this unit
          const cidValue = cid[drawer][1];

          // check amount of currency unit usable 
          if (cidValue <= changeRequired) {
            // use full amount in drawer to offset change
            changeOwed -= cidValue;
            changeOwed = parseFloat(changeOwed.toFixed(2));
            changeGiven.change.push([unit, cidValue]);
            console.log("\tGive $" + cidValue + " in " + unit + "s");
          } else {
            // use only required amount to offset change
            changeOwed -= changeRequired;
            changeOwed = parseFloat(changeOwed.toFixed(2));
            changeGiven.change.push([unit, changeRequired]);
            console.log("\tGive $" + changeRequired + " in " + unit + "s");
          }
        }
      }
    }
  }

  // check if exact change was returned
  if (changeOwed === 0) {
    changeGiven.status = "OPEN";
  } else {
    changeGiven.status = "INSUFFICIENT_FUNDS";
    changeGiven.change = [];
  }

  console.log("\nDrawer status: " + changeGiven.status);
  console.log("Change given: \n");
  console.log(...changeGiven.change);

  console.log("\nChange owed: " + changeOwed.toFixed(2));

  return changeGiven;
}
