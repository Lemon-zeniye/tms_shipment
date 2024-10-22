import {
  ActionIcon,
  Button,
  Flex,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { DataTable } from "mantine-datatable";
import React from "react";

function AssignShipmentItems({ nextStep, prevStep }) {
  const shipmentItems = [
    {
      id: "1",
      itemDescription: "Item A",
      packagingType: "Box",
      quantity: 10,
      weight: 2, // Weight per item
      totalWeight: 20, // Calculated as quantity * weight
      pickUpLocations: [
        {
          id: 1,
          locationName: "Warehouse A",
          address: "123 Industrial Park, City A",
          contactPerson: "John Doe",
          contactNumber: "123-456-7890",
          pickupTime: "2024-10-21T09:00:00", // ISO date format for time
          quantity: 5,
        },
        {
          id: 2,
          locationName: "Supplier B",
          address: "456 Market Street, City B",
          contactPerson: "Jane Smith",
          contactNumber: "987-654-3210",
          pickupTime: "2024-10-21T12:00:00",
          quantity: 5,
        },
      ],
      dropoffLocations: [
        {
          id: 1,
          locationName: "Customer C",
          address: "789 Retail Plaza, City C",
          contactPerson: "Alice Johnson",
          contactNumber: "321-654-0987",
          dropoffTime: "2024-10-21T15:00:00",
          quantity: 5,
        },
        {
          id: 2,
          locationName: "Store D",
          address: "321 Commercial Blvd, City D",
          contactPerson: "Bob Martin",
          contactNumber: "654-321-7890",
          dropoffTime: "2024-10-21T18:00:00",
          quantity: 5,
        },
      ],
    },
    {
      id: "2",
      itemDescription: "Item B",
      packagingType: "Pallet",
      quantity: 5,
      weight: 10, // Weight per item
      totalWeight: 50, // Calculated as quantity * weight
      pickUpLocations: [
        {
          id: 1,
          locationName: "Warehouse A",
          address: "123 Industrial Park, City A",
          contactPerson: "John Doe",
          contactNumber: "123-456-7890",
          pickupTime: "2024-10-21T09:00:00", // ISO date format for time
          quantity: 5,
        },
      ],
      dropoffLocations: [
        {
          id: 1,
          locationName: "Customer C",
          address: "789 Retail Plaza, City C",
          contactPerson: "Alice Johnson",
          contactNumber: "321-654-0987",
          dropoffTime: "2024-10-21T15:00:00",
          quantity: 5,
        },
      ],
    },
    {
      id: "3",
      itemDescription: "Item C",
      packagingType: "Crate",
      quantity: 3,
      weight: 15,
      totalWeight: 45,
      pickUpLocations: [
        {
          id: 1,
          locationName: "Warehouse A",
          address: "123 Industrial Park, City A",
          contactPerson: "John Doe",
          contactNumber: "123-456-7890",
          pickupTime: "2024-10-21T09:00:00", // ISO date format for time
          quantity: 3,
        },
      ],
      dropoffLocations: [
        {
          id: 1,
          locationName: "Customer C",
          address: "789 Retail Plaza, City C",
          contactPerson: "Alice Johnson",
          contactNumber: "321-654-0987",
          dropoffTime: "2024-10-21T15:00:00",
          quantity: 3,
        },
      ],
    },
  ];

  const pickupLocations = [];

  return (
    <div>
      <div className="mt-5">
        <DataTable
          //   striped
          withTableBorder
          borderRadius="md"
          // height={150}
          columns={[
            {
              accessor: "no",
              title: "No.",
              render: (records, index) => <>{index + 1}</>,
            },
            { accessor: "itemDescription", title: "Item Description" },
            //   { accessor: "itemCategory", title: "Item Category" },
            { accessor: "packagingType", title: "Packaging Type" },
            { accessor: "quantity" },
            //   { accessor: "weight" },
            { accessor: "totalWeight" },
          ]}
          records={shipmentItems ?? []}
          rowExpansion={{
            content: ({ record }) => (
              <Grid p="xs" gap={10} className="bg-gray-200">
                <GridCol span={12}>
                  <Text className="font-semibold underline">
                    Pickup Locations
                  </Text>
                  <div>
                    <DataTable
                      withTableBorder
                      borderRadius="md"
                      // height={150}
                      columns={[
                        // {
                        //   accessor: "no",
                        //   title: "No.",
                        //   render: (records, index) => <>{index + 1}</>,
                        // },
                        {
                          accessor: "locationName",
                        },
                        { accessor: "address" },
                        { accessor: "contactPerson" },
                        { accessor: "quantity" },
                        // { accessor: "quantity" },
                        // { accessor: "totalWeight" },
                      ]}
                      records={record?.pickUpLocations ?? []}
                    />
                  </div>
                </GridCol>
              </Grid>
            ),
          }}
        />
      </div>
      <Flex justify="center" gap={10} mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button>Next</Button>
      </Flex>
    </div>
  );
}

export default AssignShipmentItems;
