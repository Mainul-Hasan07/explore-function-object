var color= 'yellow';
if(color == 'blue'){
    console.log('color is blue');
}
else if (color == 'red'){
    console.log('color is red');
}
else if(color == 'white'){
    console.log('color is white');
}
else if (color == 'yellow'){
    console.log('color is yellow')
}
else{
    console.log('color is black');
}

switch(color){
    case 'blue':
        console.log('color is blue');
        break;
        case 'red':
            console.log('color is red');
            break;
        case 'white':
            console.log('color is white');
            break;
        case 'yellow':
            console.log('color is yellow');
            break;
        default:
            console.log('color is black');
}

var foo = 1;
var output = 'Output: ';
switch (foo) {
  case 0:
    output += 'So ';
  case 1:
    output += 'What ';
    output += 'Is ';
  case 2:
    output += 'Your ';
  case 3:
    output += 'Name';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
}

var exr = 'blue';
switch(exr){
    case 'blue':
        console.log('The sky is sunshine');
        default:
            console.log('everything is normal');
            break;
    case 'black-white':
        console.log('The sky is cloud');
        break;
    case 'red':
        console.log('The sun is down or rise');
    case 'white':
        console.log('This rainy day');
        break;
        
}