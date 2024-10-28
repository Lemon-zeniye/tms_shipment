import React, { useState } from "react";
import { DataTable } from "mantine-datatable";
import { Box, Button, Flex, TextInput } from "@mantine/core";
import { drivers } from "../../mock-data/shipment";
import { useNavigate } from "react-router-dom";
import { IconChevronRight, IconSearch } from "@tabler/icons-react";

function DriversPage() {
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
        <Button onClick={() => navigate("/driver/new")}>New Drivers</Button>
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
          { accessor: "name" },
          { accessor: "license_number" },
          { accessor: "license_expiry_date" },
          { accessor: "license_class" },
          { accessor: "phone_number" },
          { accessor: "email" },
          { accessor: "status" },
          {
            accessor: "",
            render: (records) => (
              <Box
                className="cursor-pointer"
                onClick={() => navigate(`/driver/${records.id}`)}
              >
                <IconChevronRight stroke={1} />
              </Box>
            ),
          },
        ]}
        records={drivers}
        //   pagination
        totalRecords={drivers?.length ?? 0}
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

export default DriversPage;
