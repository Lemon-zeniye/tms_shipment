import React, { useEffect, useState } from "react";
import { useLazyGetLocationQuery } from "../../store/api/sample-api";
import { Loader, Select } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";

const LocationPicker = ({ label, value, onChange, errorMessage }) => {
  const [position, setPosition] = useState([]);
  const [searchValue, setSearchValue] = useState(value);
  const [debouncedQuery] = useDebouncedValue(searchValue, 350);

  useEffect(() => {
    setSearchValue(value);
  }, [value]);

  const [triggerGetLocation, { data: locaitons, error, isLoading }] =
    useLazyGetLocationQuery();

  useEffect(() => {
    handleSearch(debouncedQuery);
  }, [debouncedQuery]);

  const handleSearch = async (query) => {
    if (!query) return;

    try {
      const response = await triggerGetLocation(query).unwrap();

      if (response.length > 0) {
        // const { lat, lon } = response[0];
        setPosition([lat, lon]);
      } else {
        alert("Location not found");
      }
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  return (
    <Select
      label={label}
      placeholder={label}
      className="w-full"
      searchable
      value={value}
      onChange={onChange}
      searchValue={searchValue}
      onSearchChange={setSearchValue}
      data={locaitons?.map((location) => ({
        value: `${location?.display_name?.toString()}`,
        label: `${location?.display_name}`,
      }))}
      rightSection={isLoading ? <Loader color="blue" size="xs" /> : null}
      error={errorMessage}
    />
  );
};

export default LocationPicker;
