"use client";
import { useRef, useState } from "react";
import { Stepper, Button, Group, Box, Divider, Flex } from "@mantine/core";
import Route from "./route";
import CargoDescription from "./cargo-description";
import ScheduleShipment from "./schedule-shipment";
import AssignShipmentItems from "./assign-shipment";

function AddShipment() {
  const [active, setActive] = useState(0);
  const nextStep = () => {
    setActive((prev) => (prev < 3 ? prev + 1 : prev));
  };
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <Box className="p-5 px-5 sm:px-20">
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step
          label="Set Route"
          description="Define pickup and drop-off locations"
        >
          <Divider my="lg" color="#fff" size="md" />

          <Route nextStep={nextStep} prevStep={prevStep} />
        </Stepper.Step>

        <Stepper.Step
          label="Describe Cargo"
          description="Provide shipment detail"
        >
          <Divider my="lg" color="#fff" size="md" />
          <CargoDescription nextStep={nextStep} prevStep={prevStep} />
        </Stepper.Step>

        <Stepper.Step
          label="Final Step"
          description="Review shipment details and submit"
        >
          <Divider my="lg" color="#fff" size="md" />

          <AssignShipmentItems nextStep={nextStep} prevStep={prevStep} />
        </Stepper.Step>

        {/* <Stepper.Completed>
          <Divider my="lg" color="#fff" size="md" />
          Completed, click back button to get to previous step
        </Stepper.Completed> */}
      </Stepper>
    </Box>
  );
}
export default AddShipment;
