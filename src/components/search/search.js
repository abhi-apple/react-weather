import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApioptions } from "../api";
import "./search.css"
const Search = ({ onsearchchange }) => {
  const [search, setsearch] = useState(null);
  const handleOnchange = (searchdata) => {
    setsearch(searchdata);
    onsearchchange(searchdata);
  };
  const loadOptions = (inputvalue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputvalue}`,
      geoApioptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="search">

    <AsyncPaginate
    
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnchange}
      loadOptions={loadOptions}
    />
    </div>
  );
};

export default Search;
