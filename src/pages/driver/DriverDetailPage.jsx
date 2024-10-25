import React from "react";
import DynamicGrid from "../../components/detail-grid";
import { drivers, vehicles } from "../../mock-data/shipment";
import { DataTable } from "mantine-datatable";

function DriverDetailPage() {
  const driver = drivers[0];
  const detailData = {
    "Driver Name": driver.name,
    "License Number": driver.license_number,
    "License Expiry Date": driver.license_expiry_date,
    "License Expiry Date": driver.license_expiry_date,
    "Phone Number": driver.phone_number,
    Email: driver.email,
    "Experience Years": driver.experience_years,
    Address: {
      Street: driver.address.street,
      City: driver.address.city,
      State: driver.address.state,
      Zip: driver.address.zip,
    },
    Status: driver.status,
  };
  return (
    <div>
      <DynamicGrid data={detailData} />
      <DataTable
        shadow="lg"
        borderRadius="md"
        withTableBorder
        columns={[
          { accessor: "vehicle_type" },
          { accessor: "vehicle_model" },
          { accessor: "license_plate_number" },
          { accessor: "VIN" },
          { accessor: "weight_capacity" },
          { accessor: "volume_capacity" },
          { accessor: "status" },
        ]}
        records={vehicles.slice(0, 3)}
      />
    </div>
  );
}

export default DriverDetailPage;
