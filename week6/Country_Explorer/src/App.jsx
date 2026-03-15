import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";

function App() {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region"
        );

        const data = await res.json();

        setCountries(data);
        setFiltered(data);
      } catch (err) {
        setError("Failed to fetch countries");
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();
  }, []);

  const handleSearch = (query) => {
    const result = countries.filter((c) =>
      c.name.common.toLowerCase().includes(query.toLowerCase())
    );

    setFiltered(result);
  };

  if (loading) return <p className="text-center text-xl mt-10">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6 text-center">
         Country Explorer
      </h1>

      <SearchBar onSearch={handleSearch} />

      <CountryList countries={filtered} />

    </div>
  );
}

export default App;