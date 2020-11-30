// multiplication of numbers
function multiTable(number) {
    // good luck
    var  multi_table= ''
    for (let i = 1; i<=10; i++){
       multi_table =  multi_table + `${i} * ${number} = ${i*number}` + (i == 10 ? '' : '\n');
    }
    return  multi_table;
}