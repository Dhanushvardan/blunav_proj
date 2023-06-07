import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateTimeFilter = ({ column, api }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const applyFilter = () => {
    const filterModel = {
      filterType: "datetime",
      field: column.field,
      date: selectedDate,
    };
    api.setFilterModel(filterModel);
    api.onFilterChanged();
  };

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="yyyy-MM-dd HH:mm"
        placeholderText="Select date and time"
      />
      <button onClick={applyFilter}>Apply</button>
    </div>
  );
};

export default DateTimeFilter;
