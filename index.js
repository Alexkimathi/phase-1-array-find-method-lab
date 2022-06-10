// code your solution here
const  superbowlWin=(Array)=>{
    for (const item of Array){
        if (item.result === "W")
        return item.year
    } 

    for (const item of Array){
        if (item.result === "")
        return item.year
      
    } 


}

// const record = [
//     { year: "2015", result: "W"},
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "L"},
//     //...
//   ]

//   function  superbowlWin(record){
//       return type.record === 'W'
//   }
//   console.log(record.find(superbowlWin))

// const inventory = [
//     {name: 'apples', quantity: 2},
//     {name: 'bananas', quantity: 0},
//     {name: 'cherries', quantity: 5}
//   ];
  
//   function isCherries(fruit) {
//     return fruit.name === 'cherries';
//   }
  
//   console.log(inventory.find(isCherries));
 