function checkbyCity() {
    let cityName = city.value
    let apiKey =`4a1dceb911e1e55c77c968a7e6563612`;
    url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    fetch(url).then(res=>res.json()).then(data=>populate(data))
}
function populate(data){
    let cityName=data.name
    let temp=data.main.temp
    let weatherType=data.weather[0].main
    let windSpeed=data.wind.speed
    let lati=data.coord.lat
    let longi=data.coord.lon
    let icon=data.weather[0].icon

    let htmlData=`
    <div class="card" style="width: 18rem;">
    <div><img src="https://openweathermap.org/img/wn/${icon}@2x.png"><div>
    <div class="card-header">
      ${cityName}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Temp : ${temp}</li>
      <li class="list-group-item">Type: ${weatherType}</li>
      <li class="list-group-item">Speed: ${windSpeed}</li>
      <li class="list-group-item">Latitude: ${lati}</li>
      <li class="list-group-item">Longitude: ${longi}</li>
    </ul>
  </div>

    `
    pop.innerHTML=htmlData
}
