import React, { useState } from "react";
import { DataTable } from "mantine-datatable";
import { Box, Button, Flex, TextInput } from "@mantine/core";
import { drivers, vehicles } from "../../mock-data/shipment";
import { useNavigate } from "react-router-dom";
import { IconChevronRight, IconSearch } from "@tabler/icons-react";

function VehiclesPage() {
  const [page, setPage] = useState(1);
  const PAGE_SIZES = [10, 20, 50, 100];
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  const navigate = useNavigate();

  const onPaginationChange = (page, perPage) => {
    setPage(page);
  };

  return (
    <div>
      <Flex className="mb-4" justify="space-between">
        <Button onClick={() => navigate("/vehicle/new")}>New Vehicles</Button>
        <TextInput
          size="md"
          radius="xl"
          placeholder="Search"
          rightSection={<IconSearch />}
        />
      </Flex>
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
          {
            accessor: "",
            render: (records) => (
              <Box
                className="cursor-pointer"
                onClick={() => navigate(`/vehicle/${records.id}`)}
              >
                <IconChevronRight stroke={1} />
              </Box>
            ),
          },
        ]}
        records={vehicles}
        //   pagination
        totalRecords={vehicles?.length ?? 0}
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
  );
}

export default VehiclesPage;
