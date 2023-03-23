import { useState } from 'react';
import Link from 'next/link';
import { HiSearch } from 'react-icons/hi';
import classNames from 'classnames';
import axios from 'axios';
import { useRouter} from 'next/router';



export default function SearchBar(props) {
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();
  const [articles,setArticles] = useState([])
  const handleInputChange = async (e) => {
    const value = e.target.value;
    setSearchValue(value);
    try {
      const response = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_193099036b48062494a68a2dabf0ec7cb9b98&qInTitle=${value}&language=en`);
      const data = response.data;
      setSuggestions(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Search submitted');
    console.log("Search value:",searchValue)
    const response = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_193099036b48062494a68a2dabf0ec7cb9b98&q=${searchValue}&language=en`)
    setArticles(response.data.results)
    console.log("RESULTS",response.data.results)
    props.sendData(response.data.results)
    router.push('/searchresult')
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <HiSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            value={searchValue}
            onChange={handleInputChange}
            autoComplete="off"
            required
          />
          {suggestions.length > 0 && (
            <ul className="absolute z-10 w-full bg-white rounded-lg shadow-lg py-2 mt-1 max-h-80 overflow-auto">
              {suggestions.map((suggestion,i) => (
                <li
                  key={i}
                  className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
                  onClick={() => router.push(`${suggestion.link}`)}
                >
                  {suggestion.title}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          type="submit"
          className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <HiSearch className="w-5 h-5" />
          <span className="sr-only">Search</span>
        </button>
      </form>
    </>
  );
}
