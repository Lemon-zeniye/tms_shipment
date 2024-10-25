import React from "react";

function DynamicGrid({ data }) {
  const renderGrid = (obj, nested = false) => {
    return (
      <div
        className={`grid grid-cols-1 md:grid-cols-5 gap-4 p-4 ${
          nested ? "bg-gray-100 p-2 rounded" : ""
        }`}
      >
        {Object.entries(obj).map(([key, value]) => {
          if (
            typeof value === "object" &&
            !Array.isArray(value) &&
            value !== null
          ) {
            return (
              <React.Fragment key={key}>
                <div className="col-span-1 font-bold">{key}:</div>
                <div className="col-span-4">{renderGrid(value, true)}</div>
              </React.Fragment>
            );
          }

          return (
            <React.Fragment key={key}>
              <div className="col-span-1 font-bold">{key}:</div>
              <div className="col-span-4">{value.toString()}</div>
            </React.Fragment>
          );
        })}
      </div>
    );
  };

  return <div>{renderGrid(data)}</div>;
}

export default DynamicGrid;
