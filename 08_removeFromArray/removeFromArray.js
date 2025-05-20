const removeFromArray = function(array, ...removal) {
    for(let i = 0; i<removal.length; i++){
        for(let g = 0; g<array.length; g++) {
            console.log(removal[i] + ", " + array[g]);
            if(array[g] == removal[i] && typeof array[g] == typeof removal[i]){
                array.splice(g, 1);
                i--;
            }
        }
    }
    return array
};



// Do not edit below this line
module.exports = removeFromArray;
