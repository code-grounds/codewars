function getMiddle(s) {
    //Code goes here!
    var arr = s.split("");
    let len = arr.length;
    let middle = (len / 2);
    return (len % 2 == 0) ? arr[middle - 1] + arr[middle] : arr[middle - 0.5];
}
/*
Test.describe("GetMiddle", function() {
    Test.it("Tests", function() {
        Test.assertEquals(getMiddle("test"),"es");
        Test.assertEquals(getMiddle("testing"),"t");
        Test.assertEquals(getMiddle("middle"),"dd");
        Test.assertEquals(getMiddle("A"),"A");
    });
});
*/