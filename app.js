// // base
// let indianRupee = 74.6,
//     chineseYuan = 6.32,
//     BahrianiDinar = 0.37,
//     JapaneseYen = 114.9,
//     BritishPound = 0.73,
//     Euro = 0.88,
//     SaudiArabia = 3.75,
//     EmiratiDirham = 3.67;

// inputs

let input = document.getElementById("input");
let from = document.getElementById("from");
let to = document.getElementById("to");
let convert = document.getElementById("convert");
let output = document.getElementById("output");
let resultFrom , resultTo , resultin;



// هذا الحدث من اجل استقبال قيم العملات من الخيارات وحفظ التغير عند كل خيار
from.addEventListener('change', (event) => {
    resultFrom = `${event.target.value}`;
});

to.addEventListener('change', (event) => {
    resultTo = `${event.target.value}`;
});

// هذا الحدث لحفظ تغيرات المدخل
input.addEventListener('input', updateValue);

function updateValue(e) {
    resultin = e.target.value;
}


// هذا الحدث لتفيل الدالة الحساب عند النقر
convert.addEventListener("click", getResults);


// دالة الحساب 
function getResults(){
    let convFrom = resultin/resultFrom;
    let convTo = (convFrom * resultTo).toFixed(2); ;
    //return convTo;
    output.innerHTML = convTo;
    console.log(convTo);
};




