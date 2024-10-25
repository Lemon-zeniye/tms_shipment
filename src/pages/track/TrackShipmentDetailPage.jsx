import React, { useState } from "react";
import { shipment, vehicles } from "../../mock-data/shipment";
import {
  Box,
  Button,
  Divider,
  Image,
  Modal,
  Select,
  Text,
} from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { IconChevronRight } from "@tabler/icons-react";
import classes from "../../shared/components/row-expantion-icon.module.css";
import clsx from "clsx";
import { useDisclosure } from "@mantine/hooks";
import googleMapImg from "../../assets/50Xta.png";
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
  "Assigned Driver": {
    "Full Name": shipment.driver.full_name,
    "Phone Number": shipment.driver.contact_number,
  },
  "Assigned Vehicle": {
    "Vehicle Type": shipment.vehicle.vehicleType,
    "Vehicle Number": shipment.vehicle.vehicleNumber,
  },
};

function TrackShipmentDetail() {
  const [expandedIds, setExpandedIds] = useState([]);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <div className="flex items-center justify-end">
        <div className="flex gap-4">
          <Button onClick={open}>Track on Map</Button>
        </div>
      </div>
      <div>
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
      <Modal opened={opened} onClose={close} size="70%" centered>
        <Image radius="md" h={400} src={googleMapImg} />
      </Modal>
    </div>
  );
}

export default TrackShipmentDetail;
