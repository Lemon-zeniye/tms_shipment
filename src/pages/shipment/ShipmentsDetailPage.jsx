import React, { useState } from "react";
import { shipment, vehicles } from "../../mock-data/shipment";
import { Box, Button, Divider, Grid, Select, Text } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { IconBuilding, IconChevronRight } from "@tabler/icons-react";
import classes from "../../shared/components/row-expantion-icon.module.css";
import clsx from "clsx";
import DynamicGrid from "../../components/detail-grid";
import { useNavigate, useParams } from "react-router-dom";

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

const detailData2 = {
  "Dropoff Location": "Yeka, Agago, Northern Region, Uganda",
  "Delivery Date": "10/23/2024",
  Reciver: {
    "Full Name": "Nati Tolosa Gadi",
    "Phone Number": 987654321,
    Email: "nati@gmail.com",
  },
};

function ShipmentsDetailPage() {
  const [expandedIds, setExpandedIds] = useState([]);
  const [accept, setAccept] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center justify-end">
        <div className="flex gap-4">
          {!accept ? (
            <Button color="green" onClick={() => setAccept(true)}>
              Accept
            </Button>
          ) : (
            <Button
              color="green"
              onClick={() => navigate(`/shipment/assign/${id}`)}
            >
              Assign
            </Button>
          )}
        </div>
      </div>
      <div>
        {id == 1 ? (
          <Grid>
            <Grid.Col span={{ sm: 12, md: 6 }}>
              <DynamicGrid data={detailData} />
            </Grid.Col>
            <Grid.Col span={{ sm: 12, md: 6 }}>
              <DynamicGrid data={detailData2} />
            </Grid.Col>
          </Grid>
        ) : (
          <DynamicGrid data={detailData} />
        )}

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
