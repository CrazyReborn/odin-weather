//Create a function that fetches name and temperature about a location
async function getLocationData() {
    try {
        const locationName = locationFind();
        const locationData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationName}&units=metric&appid=052797962918a845d445305c6b4b4a78`, {mode: 'cors'});
        const locationInfo = await locationData.json();
        return locationInfo;
        } catch (error){
            console.log(error);
        }
}

//Create a function that tracks for location value
const locationFind = (() => {
    let name = document.querySelector('input[type="search"]').value;
    return name;
});
//On submit display info
document.querySelector('form').addEventListener('submit', e => {
    getLocationData();
    displayInfo();
    e.preventDefault();
})

//Change page content
async function displayInfo () {
    const locationNameOnPage = document.querySelector('#location');
    const locationTempOnPage = document.querySelector('#temperature');

    //Reset textcontent to prevent overflow;
    locationNameOnPage.textContent = 'Location: '
    locationTempOnPage.textContent = 'Temperature: ';

    const info = await getLocationData();
    const infoTemp = info.main.temp;
    const infoName = info.name;

    locationNameOnPage.textContent += infoName;
    locationTempOnPage.textContent += infoTemp + ' Cel';
}