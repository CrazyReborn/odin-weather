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

async function getImage () {
    try {
        const gif = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=KrQBTKUAQewMdpvUMjmStSd5z8mAYw4D&weirdness=0&s=${weather}_weather_outside`, {mode: 'cors'});
        const data = await gif.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}


let weather;
//Create a function that tracks for location value
const locationFind = (() => {
    let name = document.querySelector('input[type="search"]').value;
    return name;
});
//On submit display info
document.querySelector('form').addEventListener('submit', e => {
    displayInfo();
    displayImage();
    e.preventDefault();
})

//Change page content
async function displayInfo () {
    const locationNameOnPage = document.querySelector('#location');
    const locationTempOnPage = document.querySelector('#temperature');

    //Reset textcontent to prevent overflow;
    locationNameOnPage.textContent = 'Loading...'
    locationTempOnPage.textContent = '';

    const info = await getLocationData();
    locationNameOnPage.textContent = 'Location: ';
    locationTempOnPage.textContent = 'Temperature: ';
    const infoTemp = info.main.temp;
    const infoName = info.name;
    weather = info.weather[0].main;

    locationNameOnPage.textContent += infoName;
    locationTempOnPage.textContent += infoTemp + ' Cel';
}

//Display image
async function displayImage() {
    const imageOnPage = document.querySelector('img');
    const image = await getImage();
    imageOnPage.src = '';
    imageOnPage.src = image.data.images.downsized_medium.url
}