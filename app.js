let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let ext = ['.com','.es'];
var emptyString = [];

function domainGenerator(array1, array2, array3, array4) {
    for (let i = 0; i < array1.length; i++){
        var param1 = array1[i];
        for (let j = 0; j < array2.length; j++) {
            var param2 = array2[j];
            for (let k = 0; k < array1.length; k++) {
                var param3 = array3[k];
                for (let l = 0; l < array1.length; l++)  {
                    var param4 = array4[l];
                    var total = emptyString.push(param1+param2+param3+param4);
                }
            }
        }
    }
return emptyString;
}
console.log(domainGenerator(pronoun,adj,noun,ext));