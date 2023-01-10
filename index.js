const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '821a0e15admsh2b7ff1947129300p1c49f8jsn979d2594dd1a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

// Created it as Function which help in getting the weather details whenever clicked on search and also if not clicked then by default delhi weather details will be shown
const getWeather = (city) =>{
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp1.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity1.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed1.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		// sunset.innerHTML = response.sunset
	}
	)
	.catch(err => console.error(err));
}

submitbtn.addEventListener("click",(e)=>{
	e.preventDefault() // it will prevent the page from reload whenever clicked on search
	getWeather(city.value)
})
getWeather("Delhi")

// Mumbai Weather
const getWeather_Mumbai = (city) =>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lon=Delhi&city=' + city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		Mumbai_loud_pct.innerHTML = response.cloud_pct
		Mumbai_temp.innerHTML = response.temp
		Mumbai_feels_like.innerHTML = response.feels_like
		Mumbai_humidity.innerHTML = response.humidity
		Mumbai_min_temp.innerHTML = response.min_temp
		Mumbai_max_temp.innerHTML = response.max_temp
		Mumbai_wind_speed.innerHTML = response.wind_speed
		Mumbai_wind_degrees.innerHTML = response.wind_degrees
		Mumbai_sunrise.innerHTML = response.sunrise
		Mumbai_sunset.innerHTML = response.sunset
	}
	)
	.catch(err => console.error(err));
}
getWeather_Mumbai("Mumbai")

// banglore Weather
const getWeather_Bangalore = (city) =>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lon=Delhi&city=' + city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		Bangalore_loud_pct.innerHTML = response.cloud_pct
		Bangalore_temp.innerHTML = response.temp
		Bangalore_feels_like.innerHTML = response.feels_like
		Bangalore_humidity.innerHTML = response.humidity
		Bangalore_min_temp.innerHTML = response.min_temp
		Bangalore_max_temp.innerHTML = response.max_temp
		Bangalore_wind_speed.innerHTML = response.wind_speed
		Bangalore_wind_degrees.innerHTML = response.wind_degrees
		Bangalore_sunrise.innerHTML = response.sunrise
		Bangalore_sunset.innerHTML = response.sunset
	}
	)
	.catch(err => console.error(err));
}
getWeather_Bangalore("Bangalore")

// chandigarh weather

const getWeather_Chandigarh = (city) =>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lon=Delhi&city=' + city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		Chandigarh_loud_pct.innerHTML = response.cloud_pct
		Chandigarh_temp.innerHTML = response.temp
		Chandigarh_feels_like.innerHTML = response.feels_like
		Chandigarh_humidity.innerHTML = response.humidity
		Chandigarh_min_temp.innerHTML = response.min_temp
		Chandigarh_max_temp.innerHTML = response.max_temp
		Chandigarh_wind_speed.innerHTML = response.wind_speed
		Chandigarh_wind_degrees.innerHTML = response.wind_degrees
		Chandigarh_sunrise.innerHTML = response.sunrise
		Chandigarh_sunset.innerHTML = response.sunset
	}
	)
	.catch(err => console.error(err));
}
getWeather_Chandigarh("Chandigarh")

// uttar pradesh Weather
const getWeather_UttarPradesh = (city) =>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lon=Delhi&city=' + city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		UttarPradesh_loud_pct.innerHTML = response.cloud_pct
		UttarPradesh_temp.innerHTML = response.temp
		UttarPradesh_feels_like.innerHTML = response.feels_like
		UttarPradesh_humidity.innerHTML = response.humidity
		UttarPradesh_min_temp.innerHTML = response.min_temp
		UttarPradesh_max_temp.innerHTML = response.max_temp
		UttarPradesh_wind_speed.innerHTML = response.wind_speed
		UttarPradesh_wind_degrees.innerHTML = response.wind_degrees
		UttarPradesh_sunrise.innerHTML = response.sunrise
		UttarPradesh_sunset.innerHTML = response.sunset
	}
	)
	.catch(err => console.error(err));
}
getWeather_UttarPradesh("Uttar Pradesh")

// himachal Weather 
const getWeather_Himachal = (city) =>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lon=Delhi&city=' + city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		Himachal_loud_pct.innerHTML = response.cloud_pct
		Himachal_temp.innerHTML = response.temp
		Himachal_feels_like.innerHTML = response.feels_like
		Himachal_humidity.innerHTML = response.humidity
		Himachal_min_temp.innerHTML = response.min_temp
		Himachal_max_temp.innerHTML = response.max_temp
		Himachal_wind_speed.innerHTML = response.wind_speed
		Himachal_wind_degrees.innerHTML = response.wind_degrees
		Himachal_sunrise.innerHTML = response.sunrise
		Himachal_sunset.innerHTML = response.sunset
	}
	)
	.catch(err => console.error(err));
}
getWeather_Himachal("Himachal Pradesh")


// rajasthan Weather
const getWeather_Rajasthan = (city) =>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?lon=Delhi&city=' + city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		Rajasthan_loud_pct.innerHTML = response.cloud_pct
		Rajasthan_temp.innerHTML = response.temp
		Rajasthan_feels_like.innerHTML = response.feels_like
		Rajasthan_humidity.innerHTML = response.humidity
		Rajasthan_min_temp.innerHTML = response.min_temp
		Rajasthan_max_temp.innerHTML = response.max_temp
		Rajasthan_wind_speed.innerHTML = response.wind_speed
		Rajasthan_wind_degrees.innerHTML = response.wind_degrees
		Rajasthan_sunrise.innerHTML = response.sunrise
		Rajasthan_sunset.innerHTML = response.sunset
	}
	)
	.catch(err => console.error(err));
}
getWeather_Rajasthan("Rajasthan")