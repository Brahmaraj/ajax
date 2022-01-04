console.log(fetch(`https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=39e5d25a7f4b04ff8cf8765063c71efc`))
function fetchData(){
    var selectedCity = document.getElementById('city').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=39e5d25a7f4b04ff8cf8765063c71efc`)
    .then(response => response.json())
    .then(weatherdata => {document.getElementById("data").innerHTML = JSON.stringify(weatherdata);
                console.log(weatherdata)})}