const set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add({});
set.add({});
set.add(true);
set.add(2);


console.log(set, set.size);
let arr = Array.from(set);
console.log(arr);
