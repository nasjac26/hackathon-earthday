
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
    
    // for (let i = 0; i < arrayOfCarbonNumbers.length; i++){
    // sumTotalOfCarbonValues += parseInt(arrayOfCarbonNumbers[i].innerText);
    // }

    carbonTotal.innerText = `You have offset ${yearlyCarbonSaved} pounds of CO2`; 

} 

//create an arr of the sliders
let sliderArr = document.getElementsByClassName('slider')

//Script to add h1 value to each TODO: Right now it is hardcoded to starting value need ONCHANGE
// function addText(arr){
//     for (let i = 0; i < arr.length; i++){
//         let newH1 = document.createElement("h1");
//         newH1.setAttribute('id', `sliderArr${[i]}Value`);
//         newH1.setAttribute('class', `carbonResult`);
//         newH1.textContent = sliderArr[i].value;
//         sliderArr[i].appendChild(newH1);
//     }
// }


// updates value string above slider on change
function addEventListenerToSliders(arr){
    for (let i = 0; i < arr.length; i++){
        sliderArr[i].addEventListener('change', function() {
            let value = document.getElementById(`sliderArr${[i]}Value`)
            value.innerText = sliderArr[i].value
        })
    }
}



//DOES NOT APPEND OUTSIDE OF CONSOLE CHECK LOOM
addText(sliderDescriptionArr)
addEventListenerToSliders(sliderArr)
