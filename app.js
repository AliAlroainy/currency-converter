var Cal = document.querySelector('.Cal');
var input1 = document.getElementById('value1');
var input2 = document.getElementById('value2');
var input = document.getElementById('Input');
var FirstCurr = document.querySelector('.first');
var SecontCurr = document.querySelector('.second');
var Amount = document.querySelector('.amount');
var Result = document.querySelector('.result');
var Curr = {
				'US Dollar': {'Saudi Arabian Riyal': 3.75, 'Euro': 0.89 , 'Egyptian Pound': 15.75 , 'Australian Dollar': 1.38 , 'Indian Rupee': 75.08 , 'British Pound': 0.75 , 'Emirati Dirham':3.67 } , 
				'Euro': {'Saudi Arabian Riyal': 4.23, 'US Dollar': 1.13 , 'Egyptian Pound': 17.75 , 'Australian Dollar': 1.56 , 'Indian Rupee': 84.63 , 'British Pound': 0.84 , 'Emirati Dirham':4.14}, 
				'British Pound': {'Saudi Arabian Riyal': 5.03, 'Euro': 1.19 , 'Egyptian Pound': 21.23 , 'Australian Dollar': 1.87 , 'Indian Rupee': 100.66 , 'US Dollar': 1.34 , 'Emirati Dirham':4.93} , 
				'Australian Dollar': {'Saudi Arabian Riyal': 2.71, 'Euro': 0.64 , 'Egyptian Pound': 11.38 , 'US Dollar': 0.73 , 'Indian Rupee': 55.04 , 'British Pound': 0.54 , 'Emirati Dirham':2.66} , 
				'Indian Rupee': {'Saudi Arabian Riyal': 0.050, 'Euro': 0.012 , 'Egyptian Pound': 0.21 , 'Australian Dollar': 0.018 , 'US Dollar': 0.013 , 'British Pound': 0.0099 , 'Emirati Dirham':0.049} , 
				'Saudi Arabian Riyal': {'US Dollar': 0.27, 'Euro': 0.24 , 'Egyptian Pound': 4.20 , 'Australian Dollar': 0.37 , 'Indian Rupee': 20.01 , 'British Pound': 0.20 , 'Emirati Dirham':0.98} ,
				'Egyptian Pound': {'US Dollar': 0.064, 'Euro': 0.056 , 'Saudi Arabian Riyal': 0.24 , 'Australian Dollar': 0.088 , 'Indian Rupee': 4.77 , 'British Pound': 0.047, 'Emirati Dirham':0.23 },	
				'Emirati Dirham': {'US Dollar': 0.27, 'Euro': 0.24 , 'Saudi Arabian Riyal': 1.02 , 'Egyptian Pound':4.29  , 'Australian Dollar': 0.38 , 'Indian Rupee': 20.44 , 'British Pound': 0.20 }	
				}
function convertCurrency(event) {
  event.preventDefault();
  var amount = input.value;
  var from = input1.value;
  var to = input2.value;
  var result = 0;
  
  try{
    if (from == to){
      result = amount;
    } else {
     result = amount * Curr[from][to];
  }
  }
  catch(err) {
    result = amount * (1 / Curr[to][from]);
  }
  
  Amount.innerHTML = amount;
  FirstCurr.innerHTML = from + ' = ';
  SecontCurr.innerHTML = result+' ' +to+'s';
}

Cal.addEventListener('click', convertCurrency);