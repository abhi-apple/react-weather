import { useState } from "react";
import "./App.css";
import { FORCAST_API, WEATHER_API, WEATHER_KEY } from "./components/api";
import Currentweatehr from "./components/current-weather/current-weather";
import Forecast from "./components/forcast/Forecast";
import Search from "./components/search/search";

function App() {
  const [currentweth, setcurrentweth] = useState(null);
  const [forcast, setforcast] = useState(null);
  const handleonsearchchange = (searchdata) => {
    // console.log(searchdata)

    const [lat, lon] = searchdata.value.split(" ");
    const currnetweatherfetech = fetch(
      `${WEATHER_API}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&units=metric`
    );

    const forecastfetch = fetch(
      `${WEATHER_API}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&units=metric`
    );

    Promise.all([currnetweatherfetech, forecastfetch])
      .then(async (res) => {
        const wethres = await res[0].json();
        const forcres = await res[1].json();

        setcurrentweth({ city: searchdata.label, ...wethres });
        setforcast({ city: searchdata.label, ...forcres });
      })
      .catch((err) => console.log(err));
  };

  // console.log(currentweth);
  console.log(forcast);
  return (
    <div className="container ">
      <Search onsearchchange={handleonsearchchange} />
      {currentweth && <Currentweatehr data={currentweth} />}
      {forcast && <Forecast data={forcast}/>}
    </div>
    
  );
}

export default App;
