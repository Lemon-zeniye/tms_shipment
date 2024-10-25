import { ActionIcon, Box, Button, Flex, Text, TextInput } from "@mantine/core";
import {
  IconChevronRight,
  IconSearch,
  IconSignLeft,
} from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import React, { useState } from "react";
import { shipments } from "../../mock-data/shipment";
import { useNavigate } from "react-router-dom";

function TrackShipment() {
  const [page, setPage] = useState(1);
  const PAGE_SIZES = [10, 20, 50, 100];
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  const navigate = useNavigate();

  const onPaginationChange = (page, perPage) => {
    setPage(page);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <Text className="text-lg">Shipments</Text>

        <TextInput
          size="md"
          radius="xl"
          placeholder="Search"
          rightSection={<IconSearch />}
        />
      </div>
      <div className="mt-5">
        <DataTable
          shadow="lg"
          borderRadius="md"
          withTableBorder
          columns={[
            { accessor: "shipmentNumber", title: "Shipment Number" },
            {
              accessor: "pickup_date",
              title: "Pickup Date",
              render: (records) => (
                <>
                  <Box>{records.pickupLocations.pickup_date}</Box>
                </>
              ),
            },
            {
              accessor: "pickup_location",
              render: (records) => (
                <>
                  <Box>{records.pickupLocations.pickup_location}</Box>
                </>
              ),
              title: "Pickup Location",
            },
            {
              accessor: "vehicle",
              render: (records) => (
                <>
                  <Box>{records.vehicle.vehicleNumber}</Box>
                  <Box>{records.vehicle.vehicleType}</Box>
                </>
              ),
            },
            {
              accessor: "contact_person",
              title: "Contact Person",
              render: (records) => (
                <>
                  <Box>{records.pickupLocations.contact_person.full_name}</Box>
                </>
              ),
            },
            {
              accessor: "driver",
              render: (records) => (
                <>
                  <Flex direction="column">
                    <Box>{records.driver.full_name}</Box>
                    <Box>{records.driver.contact_number}</Box>
                  </Flex>
                </>
              ),
            },
            {
              accessor: "status",
            },
            {
              accessor: "",
              render: (records) => (
                <Box
                  className="cursor-pointer"
                  onClick={() => navigate(`/track/${records.id}`)}
                >
                  <IconChevronRight stroke={1} />
                </Box>
              ),
            },
          ]}
          records={shipments}
          //   pagination
          totalRecords={shipments?.length ?? 0}
          recordsPerPage={pageSize}
          page={page}
          onPageChange={(p) => {
            setPage(p);
            onPaginationChange(p, pageSize);
          }}
          recordsPerPageOptions={PAGE_SIZES}
          onRecordsPerPageChange={(p) => {
            setPageSize(p);
            onPaginationChange(page, p);
          }}
        />
      </div>
    </div>
  );
}

export default TrackShipment;
