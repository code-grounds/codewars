function getAverage(marks){
    //TODO : calculate the downwar rounded average of the marks array
    return Math.floor(marks.reduce( ( p, c ) => p + c, 0 ) / marks.length);
  }

/*
Test.assertEquals(getAverage([2,2,2,2]),2);
Test.assertEquals(getAverage([1,2,3,4,5,]),3);
Test.assertEquals(getAverage([1,1,1,1,1,1,1,2]),1);
*/