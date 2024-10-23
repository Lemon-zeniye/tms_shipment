import {
  ActionIcon,
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  Group,
  NumberInput,
  rem,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import React, {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import LocationPicker from "../shared/components/location-picker";
import { DateInput, TimeInput } from "@mantine/dates";
import { IconClock, IconEdit, IconTrash } from "@tabler/icons-react";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { parseDate } from "../util/util";
import { useDispatch, useSelector } from "react-redux";
import {
  addDropOffLocation,
  addPickUpLocation,
  selectDropOffLocations,
} from "../store/shipment";
import { DataTable } from "mantine-datatable";

function Route({ nextStep, prevStep }) {
  const refFrom = useRef(null);
  const refTo = useRef(null);
  const [pickUpstore, setPickUpStore] = useState(false);
  const [dropOffstore, setDropOffStore] = useState(false);

  const [multiplePickUpLoc, setMultiplePickUpLoc] = useState(false);
  const [multipleDropOfloc, setMultipleDropOfloc] = useState(false);

  const dispatch = useDispatch();
  const dropOffLocations = useSelector(selectDropOffLocations);

  const pickerControl = (ref) => {
    return (
      <ActionIcon
        variant="subtle"
        color="gray"
        onClick={() => ref.current?.showPicker()}
      >
        <IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
      </ActionIcon>
    );
  };

  // For Pick Up Location
  const pickUpSchema = z.object({
    id: z.string().default(uuidv4()),
    multiple_pickup_location: z.boolean().default(false),
    pickup_location: z.string("Item category is required"),
    pickup_date: z.date("Packaging type is required"),
    from: z.string("Item description is required"),
    to: z.string("Item description is required"),
    contact_person: z.object({
      full_name: z.string().nonempty("Full Name is required"),
      phone_number: z.number().min(1, "Phone Number is required"),
      email: z
        .string()
        .nonempty("Email is required")
        .email("Invalid email format"),
    }),
    // include_store: z.boolean().default(false).optional(),
    store: z
      .object({
        store_number: z.string(),
        store_keeper_name: z.string(),
        phone_number: z.string(),
      })
      .optional(),
  });

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    getValues,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(pickUpSchema),
  });

  const onSubmitPickUp = (data) => {
    dispatch(addPickUpLocation(data));
  };

  const onErrorPickUp = (errors) => {
    console.log("33333", errors);
  };

  // For Drop of Location
  const dropOffSchema = z.object({
    id: z.string().default(uuidv4()),
    multiple_pickup_location: z.boolean().default(false),
    dropoff_location: z.string("Item category is required"),
    delivery_date: z.date("Packaging type is required"),
    reciver: z.object({
      full_name: z.string().nonempty("Full Name is required"),
      phone_number: z.number().min(1, "Phone Number is required"),
      email: z
        .string()
        .nonempty("Email is required")
        .email("Invalid email format"),
    }),
    // include_store: z.boolean().default(false).optional(),
    store: z
      .object({
        store_number: z.string(),
        store_keeper_name: z.string(),
        phone_number: z.string(),
      })
      .optional(),
  });

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    control: control2,
    setValue: setValue2,
    getValues: getValues2,
    trigger: trigger2,
    reset: reset2,
    formState: { errors: errors2, isValid: isValid2 },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(dropOffSchema),
  });

  const onSubmitDropOff = (data) => {
    dispatch(addDropOffLocation(data));
    reset2();
  };

  const onErrorDropOff = (errors) => {
    console.log("33333", errors);
  };

  const nextStepCalled = () => {
    handleSubmit(onSubmitPickUp)();
    handleSubmit2(onSubmitDropOff)();

    if ((isValid && isValid2) || (isValid && dropOffLocations?.length > 0)) {
      nextStep();
    }
  };

  const addMultipleLocation = () => {
    handleSubmit2(onSubmitDropOff)();
  };

  return (
    <div
      // className="bg-white rounded-lg"
      gutter={{ base: 5, xs: "md", md: "xl", xl: 50 }}
    >
      <Grid>
        <Grid.Col span={{ xs: 12, sm: 6 }}>
          <form>
            <Title className="font-custom">From</Title>
            <Box className="shadow-lg rounded-md p-5 pb-12 border-t bg-white  border-t-gray-100">
              <Controller
                name="pickup_location"
                control={control}
                render={({ field }) => (
                  <LocationPicker
                    label="Pick Up Location"
                    value={field.value}
                    onChange={field.onChange}
                    errorMessage={errors?.pickup_location?.message}
                  />
                )}
              />
              <Flex
                align={{ base: "flex-start", md: "center" }}
                direction={{ base: "column", md: "row" }}
                gap={4}
                my={8}
              >
                <Controller
                  name="pickup_date"
                  control={control}
                  render={({ field: { name, value, onChange } }) => (
                    <DateInput
                      name={name}
                      value={value ? new Date(value) : null}
                      label="Pickup Date and Time"
                      placeholder="Pickup Date"
                      className="w-full"
                      onChange={onChange}
                      error={errors?.pickup_date?.message}
                    />
                  )}
                />

                <Controller
                  name="from"
                  control={control}
                  render={({ field: { name, value, onChange } }) => (
                    <TimeInput
                      ref={refFrom}
                      rightSection={pickerControl(refFrom)}
                      label="From"
                      value={value ?? ""}
                      name={name}
                      onChange={onChange}
                      className="w-full"
                      error={errors?.from?.message}
                    />
                  )}
                />
                <Controller
                  name="to"
                  control={control}
                  render={({ field: { name, value, onChange } }) => (
                    <TimeInput
                      ref={refTo}
                      rightSection={pickerControl(refTo)}
                      label="To"
                      name={name}
                      value={value ?? ""}
                      className="w-full"
                      onChange={onChange}
                      error={errors?.to?.message}
                    />
                  )}
                />
              </Flex>
              <Box>
                <Text className="font-semibold">Contact Person</Text>
                <Flex direction={{ base: "column", sm: "row" }} gap={4} my={8}>
                  <TextInput
                    label=" Full Name"
                    placeholder="Full Name"
                    className="w-full"
                    {...register("contact_person.full_name")}
                    error={errors?.contact_person?.full_name?.message}
                  />
                  <Controller
                    name="contact_person.phone_number"
                    control={control}
                    render={({ field: { name, value, onChange } }) => (
                      <NumberInput
                        name={name}
                        label="Phone Number"
                        placeholder="Phone Number"
                        value={value}
                        className="w-full"
                        onChange={onChange}
                        error={errors?.contact_person?.phone_number?.message}
                      />
                    )}
                  />
                  <TextInput
                    label="Email"
                    placeholder="Email"
                    className="w-full"
                    {...register("contact_person.email")}
                    error={errors?.contact_person?.email?.message}
                  />
                </Flex>
              </Box>

              <Checkbox
                my={10}
                label={
                  <Text className="font-semibold cursor-pointer">
                    Include Store
                  </Text>
                }
                checked={pickUpstore}
                onChange={(event) =>
                  setPickUpStore(event.currentTarget.checked)
                }
                // {...register("include_store")}
              />
              {pickUpstore && (
                <Flex direction={{ base: "column", sm: "row" }} gap={4} my={8}>
                  <TextInput
                    label="Store Number"
                    placeholder="Store Number"
                    className="w-full"
                    {...register("store?.store_number")}
                    error={errors?.store?.store_number?.message}
                  />
                  <TextInput
                    label="Store Keeper Full Name"
                    placeholder="Store Keeper Full Name"
                    className="w-full"
                    {...register("store?.store_keeper_name")}
                    error={errors?.store?.store_keeper_name?.message}
                  />
                  <TextInput
                    label="Store Keeper Phone Number"
                    placeholder="Store Keeper Phone Number"
                    className="w-full"
                    {...register("store?.phone_number")}
                    error={errors?.store?.phone_number?.message}
                  />
                </Flex>
              )}
            </Box>
          </form>
        </Grid.Col>

        <Grid.Col span={{ xs: 12, sm: 6 }}>
          <form>
            <Title className="font-custom">To</Title>
            <Box className="shadow-lg rounded-md p-5 bg-white">
              <Checkbox
                onChange={(e) => setMultipleDropOfloc(e.currentTarget.checked)}
                label={
                  <Text className="font-semibold">
                    Has Multiple Drop off Location
                  </Text>
                }
                className="mb-2"
                checked={multipleDropOfloc}
              />
              <Flex direction="column" gap={4} my={8}>
                {/* <LocationPicker label="Drop-off Location" /> */}
                <Controller
                  name="dropoff_location"
                  control={control2}
                  render={({ field }) => (
                    <LocationPicker
                      label="Drop-off Location"
                      value={field.value}
                      onChange={field.onChange}
                      errorMessage={errors2?.dropoff_location?.message}
                    />
                  )}
                />
                <Controller
                  name="delivery_date"
                  control={control2}
                  render={({ field: { name, value, onChange } }) => (
                    <DateInput
                      name={name}
                      value={value ? new Date(value) : null}
                      label="Delivery Date"
                      placeholder="Delivery Date"
                      className="w-full"
                      onChange={onChange}
                      error={errors2?.delivery_date?.message}
                    />
                  )}
                />
              </Flex>

              {/* {!dropOffstore && ( */}
              <Box>
                <Text className="font-semibold">Reciver</Text>
                <Flex direction={{ base: "column", sm: "row" }} gap={4} my={8}>
                  <TextInput
                    label="Full Name"
                    placeholder="Full Name"
                    className="w-full"
                    {...register2("reciver.full_name")}
                    error={errors2?.reciver?.full_name?.message}
                  />
                  <Controller
                    name="reciver.phone_number"
                    control={control2}
                    render={({ field: { name, value, onChange } }) => (
                      <NumberInput
                        name={name}
                        label="Phone Number"
                        placeholder="Phone Number"
                        value={value}
                        className="w-full"
                        onChange={onChange}
                        error={errors2?.reciver?.phone_number?.message}
                      />
                    )}
                  />
                  <TextInput
                    label="Email"
                    placeholder="Email"
                    className="w-full"
                    {...register2("reciver.email")}
                    error={errors2?.reciver?.email?.message}
                  />
                </Flex>
              </Box>
              {/* )} */}
              <Checkbox
                my={10}
                label={
                  <Text className="font-semibold cursor-pointer">
                    Include Store
                  </Text>
                }
                checked={dropOffstore}
                onChange={(event) =>
                  setDropOffStore(event.currentTarget.checked)
                }
              />
              {dropOffstore && (
                <Flex direction={{ base: "column", sm: "row" }} gap={4} my={8}>
                  <TextInput
                    label="Store Number"
                    placeholder="Store Number"
                    className="w-full"
                    {...register2("store?.store_number")}
                    error={errors2?.store?.store_number?.message}
                  />
                  <TextInput
                    label="Store Keeper Full Name"
                    placeholder="Store Keeper Full Name"
                    className="w-full"
                    {...register2("store?.store_keeper_name")}
                    error={errors2?.store?.store_keeper_name?.message}
                  />
                  <TextInput
                    label="Store Keeper Phone Number"
                    placeholder="Store Keeper Phone Number"
                    className="w-full"
                    {...register2("store?.phone_number")}
                    error={errors2?.store?.phone_number?.message}
                  />
                </Flex>
              )}
              {multipleDropOfloc && (
                <Flex justify="flex-end">
                  <Button
                    className="rounded-full px-10 bg-gradient-to-r from-sky-300 to-blue-500"
                    type="button"
                    onClick={addMultipleLocation}
                  >
                    Add More Location
                  </Button>
                </Flex>
              )}

              {multipleDropOfloc && (
                <div className="mt-5">
                  <DataTable
                    // height={150}
                    columns={[
                      {
                        accessor: "no",
                        title: "No.",
                        render: (records, index) => <>{index + 1}</>,
                      },
                      { accessor: "dropoff_location", title: "location Name" },
                      {
                        accessor: "delivery_date",
                        title: "Delivery Date",
                        render: (records) => (
                          <>
                            {new Date(
                              records?.delivery_date
                            ).toLocaleDateString()}
                          </>
                        ),
                      },
                      { accessor: "reciver.full_name", title: "Reciver" },
                      {
                        accessor: "reciver.phone_number",
                        title: "Reciver No.",
                      },
                      { accessor: "reciver.email", title: "Reciver Email" },
                      {
                        accessor: "actions",
                        title: "",
                        width: "0%",
                        render: (records) => (
                          <Group gap={4} justify="right" wrap="nowrap">
                            <ActionIcon size="sm" variant="subtle" color="blue">
                              <IconEdit size={16} />
                            </ActionIcon>
                            <ActionIcon size="sm" variant="subtle" color="red">
                              <IconTrash size={16} />
                            </ActionIcon>
                          </Group>
                        ),
                      },
                    ]}
                    records={dropOffLocations ?? []}
                  />
                </div>
              )}
            </Box>
          </form>
        </Grid.Col>
      </Grid>
      <Flex justify="center" gap={10} mt="xl">
        {/* <Button variant="default" onClick={prevStep}>
          Back
        </Button> */}
        <Button
          className="rounded-full px-10 bg-gradient-to-r from-sky-300 to-blue-500"
          onClick={() => nextStepCalled()}
        >
          Next
        </Button>
      </Flex>
    </div>
  );
}

export default Route;
