import "./current-weather.css";
const Currentweatehr = ({data}) => {
  console.log(data)
  return (
    <div className="weather">
      <br />
      <div className="top">
        <div>
          <p className="city"> {data?.city}</p>
          <p className="des">{data?.weather[0]?.description}</p>
        </div>
        <img alt="weather" className="weather-icon" src={`icons/${data?.weather[0]?.icon}.png`} />
      </div>
      <div className="bottom">
          <p className="temp">{Math.round(data?.main?.temp)}°c</p>
          
          <div className="details" >
              <div className="parameter-row">
                  <span className="label-top"> Details</span>
              </div>
              <div className="parameter-row">
                  <span className="param-label"> Feels Like</span>
                  <span className="param-value"> {Math.round(data?.main?.feels_like)}</span>
              </div>
              <div className="parameter-row">
                  <span className="param-label"> Wind </span>
                  <span className="param-value">  {Math.round(data?.wind?.speed)} m/s </span>
              </div>
              <div className="parameter-row">
                  <span className="param-label"> Humidity </span>
                  <span className="param-value"> {Math.round(data?.main?.humidity)}%</span>
              </div>
              <div className="parameter-row">
                  <span className="param-label"> Pressure </span>
                  <span className="param-value"> {Math.round(data?.main?.pressure)} </span>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Currentweatehr;
