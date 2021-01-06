function invert(array) {
  
    return array.map(x=>{return -(x)});
 }

 /*
     Test.assertDeepEquals(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5]);
    Test.assertDeepEquals(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]);
    Test.assertDeepEquals(invert([]), []);
    Test.assertDeepEquals(invert([0]), [0]);
*/