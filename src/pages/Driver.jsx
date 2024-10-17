import React from "react";
import { DataTable } from "mantine-datatable";
import { Box, Button, Flex } from "@mantine/core";

function Driver() {
  const companies = [
    {
      id: "1",
      company_name: "Transport Co.",
      operational_area: "North America",
      fleet_size: 50,
      contact_person: {
        name: "John Doe",
        email: "john.doe@example.com",
        phone_number: "+1234567890",
      },
      status: "Active",
    },
    {
      id: "2",
      company_name: "Logistics Solutions",
      operational_area: "Europe",
      fleet_size: 100,
      contact_person: {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone_number: "+9876543210",
      },
      status: "Inactive",
    },
  ];

  return (
    <div>
      <Flex className="mb-4">
        <Button>New Transporter</Button>
      </Flex>
      <DataTable
        shadow="lg"
        borderRadius="md"
        withTableBorder
        columns={[
          { accessor: "company_name", title: "Company Name" },
          { accessor: "operational_area", title: "Operational Area" },
          { accessor: "fleet_size", title: "Fleet Size" },
          {
            accessor: "contact_person",
            title: "Contact Person",
            render: (records) => (
              <>
                <Box>{records.contact_person.name}</Box>
              </>
            ),
          },
          {
            accessor: "contact_phone_email",
            title: "Contact Phone/Email",
            render: (records) => (
              <>
                <Flex direction="column">
                  <Box>{records.contact_person.email}</Box>
                  <Box>{records.contact_person.phone_number}</Box>
                </Flex>
              </>
            ),
          },

          { accessor: "status" },
        ]}
        records={companies}
      />
    </div>
  );
}

export default Driver;
