let weather = {
  apiKey: "4e789bb38da0da9e1cb95c0cd817c7c2",
  fetchWeather: function (city) {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
      )
      .then((response) => response.json())
      .then((data) => this.Weather(data));
  },

  Weather: function (data) {
    const {name} = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".description").innerText = temp + "°C";
    
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
  },

  search: function() {
   this.fetchWeather(document.querySelector(".search-bar").value);
  }, 
};

document.querySelector(".search button").addEventListener("click",function(){
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
  if(event.key == "Enter") {
   weather.search(); 
  }
});

weather.fetchWeather("Azerbaijan");