function getCount(str) {
    var vowelsCount = 0;
    var char = str.split("");
    // enter your majic here
    for (var i = 0; i < char.length; i++) {
        if (char[i] == 'a' | char[i] == 'e' | char[i] == 'i' | char[i] == 'o' | char[i] == 'u') {
            vowelsCount += 1;
        }
    }

    return vowelsCount;
}
/*
describe("Case 1", function(){
    it ("should be defined", function(){
        Test.assertEquals(getCount("abracadabra"), 5)
    });
});
*/