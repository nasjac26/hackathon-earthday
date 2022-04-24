
//create an array that grabs all slider questions because we will append a string after each of them
let sliderDescriptionArr = document.getElementsByClassName('slider-description')

//create an arr of the sliders
let sliderArr = document.querySelectorAll('input')

//Script to add h1 value to each TODO: Right now it is hardcoded to starting value need ONCHANGE
function addText(arr){
    for (let i = 0; i < arr.length; i++){
        let h = document.createElement("h1")
        h.setAttribute('id', `sliderArr${[i]}Value`)
        h.textContent = sliderArr[i].value
        arr[i].append(h)
    }
}


//updates value string above sider on change
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
