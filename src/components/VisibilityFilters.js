import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/actions";
import { VISIBILITY_FILTERS } from "../constants";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const VisibilityFilters = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      className="visibility-filters"
      indicatorColor="primary"
      textColor="primary"
      value={value}
      onChange={handleChange}
    >
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <Tab
            key={`visibility-filter-${currentFilter}`}
            onClick={() => dispatch(setFilter(currentFilter))}
            label={currentFilter}
          />
        );
      })}
    </Tabs>
  );
};

export default VisibilityFilters;
