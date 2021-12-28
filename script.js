const universityName = document.getElementsByClassName("page-vnz-title")[0].innerText;

const educationForms = document.getElementsByClassName("accordion");
const educationPrograms = document.getElementsByClassName("table-of-specs");

const educationTitle = document.querySelector(".page-vnz-selectors > .mobile-320-hide").innerText;

let flagIsShowInfo = false;

console.log(universityName);
for (let i = 0; i < educationPrograms.length; i++) {
    const arrayInfo = educationPrograms[i].innerText.split("\n");
    const specialityText = arrayInfo[0];
    console.log(educationForms[i].innerText);
    console.log(specialityText);
    for (let j = 2; j < arrayInfo.length; j++) {
        if (arrayInfo[j].includes(educationTitle)) {
            flagIsShowInfo = true;
        }
        if (flagIsShowInfo) {
            console.log(arrayInfo[j]);
        }
        // TODO replace on some end element
        if (arrayInfo[j].includes("Обсяг на контракт")) {
            flagIsShowInfo = false;
            console.log("-----------------------------");
        }
    }
}
