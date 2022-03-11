import {FC, useEffect, useState} from 'react';

const WEATHER_KEY = process.env.WEATHER_KEY;

// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

export const SearchBar: FC = () => {

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (Number.isInteger(Number(searchTerm)) && searchTerm.length === 5) {

    }
  }, [searchTerm])

  return (
    <input
      type="text"
      placeholder="Enter search term..."
      pattern='^[0-9]{5}$'
      maxLength={5}
      value={searchTerm}
      onChange={event => setSearchTerm(event.currentTarget.value)}
      className="mt-8 p-3 rounded-lg w-full outline-none"
    />
  );
};