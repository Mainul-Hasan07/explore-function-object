// variable
var favouriteBook = '4 Hour Work Week';

// array
var bookList = ['positioning', 'hooked', 'start with why', 'shoe dog'];
var shoeDogIndex = bookList.indexOf('shoe dog');
bookList[1] = 'story Brand';
bookList.push('small Giant');
bookList.pop();

// conditional
if(bookList[1] == 'hooked'){
    console.log('I am Hooked');
}
else{
    console.log('I am not hooked');
}


// while loop
var i= 0;
while(i < 15){
    console.log(i);
    console.log('looping looping looping')
    i++;
}

// for loop

for(i = 0; i<15; i++){
    console.log(i);
}