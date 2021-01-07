function digitize(n) {
    //code here
    var arr =  String(n).split("").reverse().map(Number);
    return arr;
  }

/*
Test.assertDeepEquals(digitize(35231),[1,3,2,5,3]);
*/