import { Divider, Text } from "@mantine/core";
import React from "react";
import { companyData } from "../mock-data/shipment";
import { IconPencil } from "@tabler/icons-react";

const ContactDetails = ({ data }) => {
  if (!data || typeof data !== "object") {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {Object.entries(data).map(([key, value]) =>
        typeof value !== "object" ? (
          <div key={key}>
            <div className="font-semibold text-gray-600 text-sm">{key}</div>
            <div className="text-gray-800">{value}</div>
          </div>
        ) : null
      )}
    </div>
  );
};

function Profile() {
  return (
    <div className="p-6 rounded-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-4">{companyData.companyName}</h1>
        <IconPencil stroke={1} />
      </div>

      <div>
        <Text className="font-semibold underline pb-1 mb-2">
          Basic Information
        </Text>
        <ContactDetails data={companyData} />
      </div>
      <Divider my="lg" />

      <div>
        <Text className="font-semibold underline pb-1 mb-2">
          Operational Details
        </Text>
        <ContactDetails data={companyData.operationalDetails} />
      </div>
      <Divider my="lg" />

      <div>
        <Text className="font-semibold underline pb-1 mb-2">
          Contact Details
        </Text>
        <ContactDetails data={companyData.contactDetails} />
      </div>
      <Divider my="lg" />

      <div>
        <Text className="font-semibold underline pb-1 mb-2">
          Headquarters/Office Address
        </Text>
        <ContactDetails data={companyData.address} />
      </div>
    </div>
  );
}

export default Profile;
