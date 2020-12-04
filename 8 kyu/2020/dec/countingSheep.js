function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    var sum = 0;
    for (var i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] == null || arrayOfSheep[i] == undefined) sum;
        arrayOfSheep[i] == true ? sum += 1 : sum;
    }
    return sum;
}

/*
var array1 = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];
              
Test.expect(countSheeps(array1) == 17, "There are 17 sheeps in total")
*/