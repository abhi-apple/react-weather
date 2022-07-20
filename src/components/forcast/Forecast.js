import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./Forecast.css";
const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const Forecast = ({ data }) => {
  const dayinweek = new Date().getDay();
  const forecastdays = WEEK_DAYS.slice(dayinweek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayinweek)
  );
  console.log(forecastdays)
  return (
    <>
      <label className="title">Daily </label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, indx) => (
          <AccordionItem key={indx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0]?.icon}.png`}
                  ></img>
                  {/* {console.log(item.weather[0])} */}
                  <label className="day"> {forecastdays[indx]}</label>
                  <label className="desc"> {item.weather[0]?.description}</label>
                  <label className="min-max"> {Math.round(item?.main?.temp_max)}°c / {Math.round(item?.main?.temp_min)}°c</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <div className="daily-det-gr">
                    <div className="daily-det-gr-it">
                        <label>Wind speed</label>
                        <label>{item.wind.speed} m/s</label>
                    </div>
                    <div className="daily-det-gr-it">
                        <label>Feels Like</label>
                        <label>{item.main.feels_like} m/s</label>
                    </div>
                    <div className="daily-det-gr-it">
                        <label>Pressure</label>
                        <label>{item.main.pressure}Pa</label>
                    </div>
                    <div className="daily-det-gr-it">
                        <label>Humidity</label>
                        <label>{item.main.humidity}</label>
                    </div>
                    <div className="daily-det-gr-it">
                        <label>clouds</label>
                        <label>{item.clouds.all}%</label>
                    </div>
                </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};
export default Forecast;
