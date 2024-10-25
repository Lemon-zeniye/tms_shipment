import React from "react";
import { drivers, vehicles } from "../../mock-data/shipment";
import DynamicGrid from "../../components/detail-grid";
import { DataTable } from "mantine-datatable";

function VehiclesDetailPage() {
  const vehicle = vehicles[0];
  const detailData = {
    "Vehicle Type": vehicle?.vehicle_type,
    "Vehicle Model": vehicle?.vehicle_model,
    VIN: vehicle?.VIN,
    "Weight Capacity": vehicle?.weight_capacity,
    "Volume Capacity": vehicle?.volume_capacity,
    Insurance: {
      "Insurance Policy Number": vehicle.insurance_policy_number,
      "Insurance Type": vehicle.insurance_type,
      "Insurance Expiry Date": vehicle.insurance_expiry_date,
    },
    status: vehicle.status,
  };
  return (
    <div>
      <DynamicGrid data={detailData} />
      <DataTable
        shadow="lg"
        borderRadius="md"
        withTableBorder
        columns={[
          { accessor: "name" },
          { accessor: "license_number" },
          { accessor: "license_expiry_date" },
          { accessor: "license_class" },
          { accessor: "phone_number" },
          { accessor: "email" },
          { accessor: "status" },
        ]}
        records={drivers.slice(0, 2)}
      />
    </div>
  );
}

export default VehiclesDetailPage;
