import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

const SearchInput = () => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentParams = queryString.parse(location.search);
    const updatedParams = {
      ...currentParams,
      title: debouncedValue || undefined,
    };

    const url = queryString.stringifyUrl({
      url: location.pathname,
      query: updatedParams,
    });

    navigate(url, { replace: true });
  }, [debouncedValue, location.pathname, navigate]);

  return (
    <div className="relative">
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="w-full rounded-full bg-yellow-400 pl-9 focus:ring-blue-700 focus:ring-2 md:w-[300px]"
        placeholder="Search for a course"
      />
    </div>
  );
};

export default SearchInput;