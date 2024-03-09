import React from "react";

const Filter = (props) => {
  let filterdata = props.filterdata;

  return (
    <div className="flex justify-center ">
      {filterdata.map((data) => {
        return (
          <button className="m-4 border px-2 hover:bg-blue-800 hover:text-white " key={data.id}>
            {data.title}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
