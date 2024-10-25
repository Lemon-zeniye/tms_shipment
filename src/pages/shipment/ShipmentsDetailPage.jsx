import React, { useState } from "react";
import { shipment, vehicles } from "../../mock-data/shipment";
import { Box, Button, Divider, Select, Text } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { IconBuilding, IconChevronRight } from "@tabler/icons-react";
import classes from "../../shared/components/row-expantion-icon.module.css";
import clsx from "clsx";
import DynamicGrid from "../../components/detail-grid";

const detailData = {
  "Shipment No.": shipment.shipmentNumber,
  "Pickup Location": shipment.pickupLocations.pickup_location,
  "Pickup Date": shipment.pickupLocations.pickup_date,
  From: shipment.pickupLocations.from + " AM",
  To: shipment.pickupLocations.to + " AM",
  "Contact Person": {
    "Full Name": shipment.pickupLocations.contact_person.full_name,
    Email: shipment.pickupLocations.contact_person.email,
    "Phone Number": shipment.pickupLocations.contact_person.phone_number,
  },
  "Total Weight (kg)": "792 kg",
  "Total Dimension (m3)": "10 m3",
};

function ShipmentsDetailPage() {
  const [expandedIds, setExpandedIds] = useState([]);
  const [accept, setAccept] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-end">
        <div className="flex gap-4">
          {!accept && (
            <Button color="green" onClick={() => setAccept(true)}>
              Accept
            </Button>
          )}
        </div>
      </div>
      <div>
        {accept && (
          <div className="p-4">
            <Text className="text-lg font-semibold">Assign Vehicle</Text>
            <div className="flex items-end gap-4">
              <Select
                placeholder="Search For Vehicle"
                data={vehicles?.map((vehicle) => ({
                  value: vehicle?.id?.toString(),
                  label: `${vehicle?.license_plate_number} - ${vehicle?.vehicle_type} - ${vehicle?.volume_capacity} - ${vehicle?.weight_capacity}`,
                }))}
                className="w-full"
              />
              <Button className="flex-none">Assign</Button>
            </div>
            <Divider mt="md" size="md" />
          </div>
        )}
        <DynamicGrid data={detailData} />
        <div className="p-4">
          <DataTable
            shadow="lg"
            borderRadius="md"
            withTableBorder
            columns={[
              {
                accessor: "",
                noWrap: true,
                render: ({ id }) => (
                  <>
                    <IconChevronRight
                      className={clsx(classes.icon, classes.expandIcon, {
                        [classes.expandIconRotated]: expandedIds.includes(id),
                      })}
                    />
                    {/* <IconBuilding className={classes.icon} /> */}
                  </>
                ),
              },
              { accessor: "itemDescription", title: "Item Description" },
              { accessor: "itemCategory", title: "Item Category" },
              {
                accessor: "packagingType",
                title: "Packaging Type",
              },
              { accessor: "quantity" },

              {
                accessor: "dimension",
                title: "Dimension (m3)",
                render: (records) => (
                  <>
                    <Box>{`${records?.dimension.length}  X ${records?.dimension.width} X ${records?.dimension.height} `}</Box>
                  </>
                ),
              },
              { accessor: "weight", title: "Weight (kg)" },

              { accessor: "totalWeight", title: "Total Weight (kg)" },
            ]}
            records={shipment.items}
            rowExpansion={{
              allowMultiple: true,
              expanded: {
                recordIds: expandedIds,
                onRecordIdsChange: setExpandedIds,
              },
              content: ({ record }) => (
                <Box p="xs" gap={10} className="bg-gray-100">
                  <DataTable
                    withTableBorder
                    borderRadius="md"
                    columns={[
                      {
                        accessor: "dropoff_location",
                      },
                      //   { accessor: "full_name" },
                      { accessor: "quantity" },
                    ]}
                    records={record?.dropOffLocations ?? []}
                  />
                </Box>
              ),
            }}
            //   pagination
            // totalRecords={shipments?.length ?? 0}
            // recordsPerPage={pageSize}
            // page={page}
            // onPageChange={(p) => {
            //   setPage(p);
            //   onPaginationChange(p, pageSize);
            // }}
            // recordsPerPageOptions={PAGE_SIZES}
            // onRecordsPerPageChange={(p) => {
            //   setPageSize(p);
            //   onPaginationChange(page, p);
            // }}
          />
        </div>
      </div>
    </div>
  );
}

export default ShipmentsDetailPage;
