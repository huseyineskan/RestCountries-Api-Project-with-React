import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  console.log(selectedCountry);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h2>RestCountries Api Project with React</h2>
      <select onChange={handleChange} value={selectedCountry}>
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
    </>
  );
}

export default App;
