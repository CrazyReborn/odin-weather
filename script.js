//Create a function that fetches name and temperature about a location
async function getLocationData() {
    try {
        const locationData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Poznan&units=metric&appid=052797962918a845d445305c6b4b4a78`, {mode: 'cors'});
        const locationInfo = await locationData.json();
        const locationTemp = locationInfo.main.temp;
        return locationTemp;
        } catch (error){
            console.log(error);
        }
}

//Create a function that tracks for location value

//On submit display info