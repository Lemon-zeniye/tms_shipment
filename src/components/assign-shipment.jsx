import {
  ActionIcon,
  Button,
  Divider,
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
import { useSelector } from "react-redux";
import {
  selectDropOffLocations,
  selectPickUpLocations,
  selectShipmentItems,
} from "../store/shipment";

function AssignShipmentItems({ nextStep, prevStep }) {
  const shipmentItems = useSelector(selectShipmentItems);
  const dropOffLocations = useSelector(selectDropOffLocations);
  const pickupLocations = useSelector(selectPickUpLocations);

  console.log(
    "33333333333333333",
    shipmentItems,
    dropOffLocations,
    pickupLocations
  );

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
                  <div>
                    <DataTable
                      withTableBorder
                      borderRadius="md"
                      columns={[
                        {
                          accessor: "pickup_location",
                        },
                        {
                          accessor: "contact_person",
                          render: (record) =>
                            record.contact_person?.full_name || "N/A",
                        },
                        {
                          accessor: "pickup_date",
                          render: (record) =>
                            new Date(record?.pickup_date)?.toLocaleDateString(),
                        },
                      ]}
                      records={pickupLocations ?? []}
                    />
                  </div>
                  <Divider my={10} color="white" size="md" />
                  <div>
                    <DataTable
                      withTableBorder
                      borderRadius="md"
                      // height={150}
                      columns={[
                        {
                          accessor: "dropoff_location",
                        },
                        { accessor: "full_name" },
                        { accessor: "quantity" },
                      ]}
                      records={
                        record?.dropOffLocations?.map((dropOffLocation) => {
                          const locationDetails = dropOffLocations.find(
                            (loc) => loc.id === dropOffLocation.id
                          );

                          return {
                            dropoff_location: locationDetails?.dropoff_location,
                            full_name: locationDetails?.reciver?.full_name,
                            quantity: dropOffLocation.quantity,
                          };
                        }) ?? []
                      }
                      // departments.filter((department) => department.company.id === company.record.id)
                    />
                  </div>
                </GridCol>
              </Grid>
            ),
          }}
        />
      </div>
      <Flex justify="center" gap={10} mt="xl">
        <Button
          className="rounded-full px-10"
          variant="default"
          onClick={prevStep}
        >
          Back
        </Button>
        <Button className="rounded-full px-10 bg-gradient-to-r from-sky-300 to-blue-500">
          Submit
        </Button>
      </Flex>
    </div>
  );
}

export default AssignShipmentItems;
