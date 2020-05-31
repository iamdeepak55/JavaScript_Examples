// Find the most frequent item of an array

var arr1 = [3, 'c', 'c', 'c', 2, 3, 'c', 3, 'c', 2, 4, 3, true];









var mf = 1;
var m = 0;
var item;
for (var i = 0; i < arr1.length; i++) {
    for (var j = i; j < arr1.length; j++) {
        if (arr1[i] == arr1[j])
            m++;
        if (mf < m) {
            mf = m;
            item = arr1[i];
        }
    }
    m = 0;
}
console.log(item + " ( " + mf + " times ) ");
