"use strict";
let magiciansNames1 = ["Ali", "Mustufa", "Hammad", "Haider", "Sohail"];
let magiciansNamesCopy = [...magiciansNames1];
function show_magicians2(great) {
    let withGreqtings = " ";
    for (let a of magiciansNames1) {
        withGreqtings + -'${great} $ {a}  /n';
    }
    return withGreqtings;
}
;
let myGreating = show_magicians2("Hello");
let myArray = myGreating.split("/n");
console.log(myArray);
console.log(magiciansNames1);
