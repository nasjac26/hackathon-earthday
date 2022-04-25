
//create an array that grabs all slider questions because we will append a string after each of them
let sliderDescriptionArr = document.getElementsByClassName('slider-description')

// Steve Range Slider Code
// const slider = document.getElementById("myRange");
// const output = document.getElementById("demo");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//   output.innerHTML = this.value;
// }


function carbonTotal(){
    // let arrayOfCarbonNumbers = document.getElementsByClassName("carbonResult");
    // carbon total location
    let carbonTotal = document.querySelector("#carbontotal");

    //array of slider values
    let arrayOfCarbonNumbers = document.getElementsByClassName("carbonResult");

    //REMINDER, these multipliers are form yearly amount, so the weekly * 52
    //all are in POUNDS by default
    let meat = parseInt(arrayOfCarbonNumbers[0].innerText) * 302;
    let driving = parseInt(arrayOfCarbonNumbers[1].innerText) * 40.56;
    let water = parseInt(arrayOfCarbonNumbers[2].innerText) * .468;
    let flying = parseInt(arrayOfCarbonNumbers[3].innerText) * .1325;
    let bulbs = parseInt(arrayOfCarbonNumbers[4].innerText) * 286.4;
    let yearlyCarbonSaved = Math.ceil(meat + driving + water + flying + bulbs);
    let hiddenResultsLocation = document.getElementById("hiddenResults");
    let shippingMilesLocation = document.getElementById("shippingMiles");
    let jetMilesLocation = document.getElementById("jetMiles");
    
    carbonTotal.innerText = `You have offset ${yearlyCarbonSaved} pounds of CO2`; 
    let hiddenDiv = document.getElementById('comparison');
    
    hiddenDiv.style.display = "block";

    shippingMilesLocation.innerText = parseFloat(yearlyCarbonSaved / 1142.9).toFixed(2);
    jetMilesLocation.innerText = parseFloat(yearlyCarbonSaved / 4431.4).toFixed(2);



    
} 

//create an arr of the sliders
let sliderArr = document.getElementsByClassName('slider')

