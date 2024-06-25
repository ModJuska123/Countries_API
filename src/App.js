import { Region } from "./components/region/Region";
import style from './App.module.css';
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(err));
  }, []);

  const regions = [];

  for (const country of data) {
    if (country && country.region && !regions.includes(country.region)) {
      regions.push(country.region);
    }
  }

  return (
    <div className={style.App}>
      <h1 className={style.mainTitle}>Country list</h1>
      {regions.map(region => (
        <Region key={region} title={region}
          list={data.filter(country => country.region === region)} />))}
    </div>
  );
}

export default App;
