import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCountryDetails, setSelectedCountryDetails] = useState(null);

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
    const countryDetails = data.find(
      (country) => country.name.common === e.target.value
    );
    setSelectedCountryDetails(countryDetails);
    console.log(countryDetails);
  };

  console.log(selectedCountry);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  function GetAllCountries() {
    return (
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col col-md-6 col-lg-4 my-3">
            <select
              className="custom-select"
              onChange={handleChange}
              value={selectedCountry}
            >
              <option value="">Please Select One Country</option>
              {data.length > 0 ? (
                data.map((country, index) => (
                  <option key={index} value={country.name.common}>
                    {country.name.common}
                  </option>
                ))
              ) : (
                <option>Loading...</option>
              )}
            </select>
          </div>
        </div>
        <div className="country-details">
          {selectedCountryDetails && (
            <div>
              <div className="col text-center my-4 country-img">
                <img
                  src={selectedCountryDetails.flags.png}
                  alt={selectedCountryDetails.name.common + " flag"}
                />
              </div>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4 form-group d-flex m-0 ">
                  <label htmlFor="population">Capital:</label>
                  <p>{selectedCountryDetails.capital}</p>
                </div>
                <div className="col-12 col-md-6 col-lg-4 form-group d-flex m-0 ">
                  <label htmlFor="population">Region:</label>
                  <p>{selectedCountryDetails.region}</p>
                </div>
                <div className="col-12 col-md-6 col-lg-4 form-group d-flex m-0 ">
                  <label htmlFor="population">Population:</label>
                  <p>
                    {new Intl.NumberFormat().format(
                      selectedCountryDetails.population
                    )}
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-4 form-group d-flex m-0 ">
                  <label htmlFor="population">languages:</label>
                  <p>
                    {selectedCountryDetails.languages ? (
                      Object.values(selectedCountryDetails.languages).map(
                        (language, index) => (
                          <span key={index}>{language + ", "}</span>
                        )
                      )
                    ) : (
                      <p>Loading...</p>
                    )}
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-4 form-group d-flex m-0 ">
                  <label htmlFor="nativeName">Native Names:</label>
                  <p>
                    {selectedCountryDetails.name.nativeName ? (
                      Object.values(selectedCountryDetails.name.nativeName).map(
                        (native, index) => (
                          <span key={index}>{native.common + ", "}</span>
                        )
                      )
                    ) : (
                      <p>Loading...</p>
                    )}
                  </p>
                </div>
                <div className="col-12">
                  <label>Maps:</label>
                  <div>
                    <div>
                      <a
                        href={selectedCountryDetails.maps.googleMaps}
                        target="_blank"
                      >
                        Google Maps
                      </a>
                    </div>
                    <div>
                      <a
                        href={selectedCountryDetails.maps.openStreetMaps}
                        target="_blank"
                      >
                        Open Street Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-center h1 border-bottom pb-2">
        RestCountries Api Project with React
      </h1>
      <GetAllCountries />
    </>
  );
}

export default App;
