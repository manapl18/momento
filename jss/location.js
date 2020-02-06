const COORDS = 'coords';
const API_KEY = "800f3c3ceb5e531afb6cc45028c833ce";
const weather = document.querySelector(".js-footer"),
    change_img = weather.querySelector(".changeImg");

const weather_list =[];

function saveCoords(Obj){
    localStorage.setItem(COORDS,JSON.stringify(Obj));
}

function getIcon(text){
    let icon_name="";
    switch(text){
        case 'Haze':
            icon_name =`weather_icon-01.png`;
            break;
        case 'Clouds':
            icon_name =`weather_icon-02.png`;
            break;
    }

    return icon_name;
}

function getWeather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`
    ).then(function(response){
        return response.json();
    }).then(function(result){
        
        const new_div = document.createElement("div");
        const new_li_country = document.createElement("li");
        const new_li_temperature = document.createElement("li");
       
        new_div.classList.add("CN_city");
        weather.appendChild(new_div);
      
        new_div.appendChild(new_li_temperature);
        new_div.appendChild(new_li_country);
        let state = result.weather[0].main;
        
        const icon = getIcon(state);
        change_img.src=`imgs/${icon}`;
        
        const country = result.sys.country;
        const city = result.name;
        const temp = result.main.temp;

        new_li_temperature.innerText = `${temp}℃`;
        new_li_country.innerText = `${city} ${country}`;
    })
}

function getGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,latitude);
}

function getGeoFail(){
    console.log("cant execute");
}

function askCoord(){
    navigator.geolocation.getCurrentPosition(getGeoSucces,getGeoFail)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
   if(loadedCoords ===null){
        askCoord();
    }else{
        const parse = JSON.parse(loadedCoords);
        getWeather(parse.latitude,parse.longitude);
    }
}   

function init(){
    loadCoords();
}

init();