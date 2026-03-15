function CountryCard({ country }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">

      <img
        src={country.flags.png}
        alt={country.name.common}
        className="w-full h-40 object-cover"
      />

      <div className="p-4 flex flex-col gap-2">

        <h2 className="font-bold text-lg">
          {country.name.common}
        </h2>

        <p className="text-sm">
          Capital: {country.capital?.[0]}
        </p>

        <p className="text-sm">
          Population: {country.population.toLocaleString()}
        </p>

        <p className="text-sm">
          Region: {country.region}
        </p>

      </div>

    </div>
  );
}

export default CountryCard;