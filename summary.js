var skyColor = 'white';

var phones = [ 'iphone', 'lg', 'samsung', 'htc', 'realme', 'mi'];
console.log(phones.indexOf('mi'));
phones[5] = 'shaomi';
 
// check an element exits in an array
if(phones.indexOf('oppo') == -1){
    console.log('opps amir khan is missing');
}

if(phones.indexOf('lg') != -1){
    console.log('lg is available now');
}

if(phones.indexOf('iphone') >= 0){
    console.log('iphone is available ','That position ',phones.indexOf('iphone')+1);

}