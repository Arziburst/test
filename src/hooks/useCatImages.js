// Core
import {useState, useEffect, useCallback} from 'react';

export const useCatImages = () => {
  const [ cats, setCats ] = useState([]);

  const fetchHandler = useCallback(async () => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=30");
      const result = await response.json();

      setCats(result);
    } catch (error) {
      console.error("fetch failed!");
      console.error(error);
    }
  }, [ setCats ])


  useEffect(() => {
    fetchHandler()
  }, [ fetchHandler ])

  return cats;
}
