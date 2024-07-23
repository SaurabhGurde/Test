const facingSeat = {
    1: 12,  2: 11,  3: 10,  4: 9,  5: 8,  6: 7,
    12: 1,  11: 2,  10: 3,  9: 4,  8: 5,  7: 6,        
  };
const seatType = {
    1:  'WS',   2: 'MS',  3:  'AS',  4: 'AS',  5: 'MS',  6: 'WS',
    12: 'WS',  11: 'MS',  10: 'AS',  9: 'AS',  8: 'MS',  7: 'WS',     
  };

function findFacingSeatNumber (seat){
  let seatRangeNumber = Math.ceil(seat / 12)
  // console.log(((12 * seatRangeNumber) - 11) + (12 * seatRangeNumber ))

   let facingSeatNumber = (((12 * seatRangeNumber) - 11) + (12 * seatRangeNumber )) - seat 
   
         return facingSeatNumber
}  

function findFacingSeatType (facingSeat){

  let seatIndexInRange = (facingSeat % 12) + 1

  let facingSeatType = seatType[seatIndexInRange]

        return facingSeatType
}

  
function main() {

  const inputFile = require('fs');
  const input = inputFile.readFileSync('./inputfile.txt', 'utf8').trim().split('\n');
  let TestCases = parseInt(input[0], 10);
  let result = [];

  for (let i = 1; i <= TestCases; i++) {
    let seat = parseInt(input[i], 10);
    let facingSeatNumber = findFacingSeatNumber(seat);
    let facingSeatType = findFacingSeatType(facingSeatNumber)
    result.push(`${facingSeatNumber} ${facingSeatType}`);
  }

  console.log(result.join('\n'));
}

main();

