let selectingCurrencyClass= document.querySelectorAll('.currency');//selecting classes of name "currency"
fetch('https://api.frankfurter.app/currencies')//fetching all currency units
.then(result=>result.json())
.then(result=>displayDropDown(result))

function displayDropDown(result){
    let currencies = Object.entries(result);//will get ['AUD', 'Australian Dollar']['BGN', 'Bulgarian Lev']['MXN', 'Mexican Peso']
    for (let index = 0; index < currencies.length; index++) 
    {
       let eachOption = `<option value="${currencies[index][0]}">${currencies[index][0]}</option>`;
       selectingCurrencyClass[0].innerHTML += eachOption;//giving currency codes as options AUD,MXN,etc
       selectingCurrencyClass[1].innerHTML += eachOption;//giving currency codes as options AUD,MXN,etc
    }
}

function convertion(){
    let curr1=selectingCurrencyClass[0].value;//selected value
    let curr2=selectingCurrencyClass[1].value;//selected value
    let inputValue=document.getElementById('input').value;//getting value from Input Box 
    if(curr1==curr2){
        alert("Choose Different Currencies!!!!!");
    }
    else{
        const host = 'api.frankfurter.app';//copy from internet
        fetch(`https://${host}/latest?amount=${inputValue}&from=${curr1}&to=${curr2}`)//copy from internet
        .then(resp => resp.json())//copy from internet
        .then((data) => {
            let outputValue=Object.values(data.rates)[0];//to get exact rate
            document.getElementById('result').value=outputValue;//print value in result box
        });  
    }
}