console.log('1 - Init program')

setTimeout(function() {
    console.log('5 ----- First timeout');
}, 3000)

setTimeout(function(){
    console.log('3 --- Second  timeout');
}, 0)

setTimeout(function(){
    console.log('4 ---- Third timeout');
}, 0)

console.log('2 -- End program')