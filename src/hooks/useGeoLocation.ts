import { useState, useEffect } from 'react';

export interface GeoLocation {
  coords: {
    latitude: number;
    longitude: number;
  };
}

const useGeoLocation = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState({});

  const showPosition = (position: GeoLocation) => {
    const { longitude, latitude } = position.coords;

    setPosition({ longitude, latitude });
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      setError('Geolocation is not supported.');
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return [position, error];
};

export default useGeoLocation;
