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
  useEffect,
} from "react";
import LocationPicker from "../shared/components/location-picker";
import { DateInput, TimeInput } from "@mantine/dates";
import { IconClock, IconEdit, IconTrash } from "@tabler/icons-react";
import { string, z } from "zod";
import { v4 as uuidv4 } from "uuid";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { parseDate } from "../util/util";
import { useDispatch, useSelector } from "react-redux";
import {
  addDropOffLocation,
  addPickUpLocation,
  deleteDropOffLocation,
  selectDropOffLocations,
  selectPickUpLocations,
  updateDropOffLocation,
} from "../store/shipment";
import { DataTable } from "mantine-datatable";
import { notifications } from "@mantine/notifications";

function Route({ nextStep, prevStep }) {
  const refFrom = useRef(null);
  const refTo = useRef(null);
  const [pickUpstore, setPickUpStore] = useState(false);
  const [dropOffstore, setDropOffStore] = useState(false);

  const [multiplePickUpLoc, setMultiplePickUpLoc] = useState(false);
  const [multipleDropOfloc, setMultipleDropOfloc] = useState(false);

  const dispatch = useDispatch();
  const dropOffLocations = useSelector(selectDropOffLocations);
  const pickupLocations = useSelector(selectPickUpLocations);

  const [onEdit, setOnEdit] = useState(false);

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
    id: string().optional(),
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
        store_number: z.string().optional(),
        store_keeper_name: z.string().optional(),
        phone_number: z.string().optional(),
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

  // For Drop of Location
  const dropOffSchema = z.object({
    id: string().optional(),
    multiple_dropoff_location: z.boolean().default(false),
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
        store_number: z.string().optional(),
        store_keeper_name: z.string().optional(),
        phone_number: z.string().optional(),
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

  const onSubmitPickUp = (data) => {
    const payload = {
      ...data,
      pickup_date: new Date(data.pickup_date).toLocaleDateString(),
    };
    dispatch(addPickUpLocation(payload));
  };

  const onErrorPickUp = (errors) => {
    console.log("444444444444", errors);
    notifications.show({
      title: "Error",
      message: "Please make sure all required field are  filled",
      color: "red",
    });
  };

  const onSubmitDropOff = (data) => {
    const payload = {
      ...data,
      delivery_date: new Date(data.delivery_date).toLocaleDateString(),
    };

    if (payload.id) {
      dispatch(updateDropOffLocation(payload));

      reset2({
        id: "",
        dropoff_location: "",
        delivery_date: null,
        reciver: {
          full_name: "",
          phone_number: 0,
          email: "",
        },
        store: {
          store_number: "",
          store_keeper_name: "",
          phone_number: "",
        },
      });
      return;
    }
    dispatch(addDropOffLocation(payload));
    reset2();
  };

  const onErrorDropOff = (errors) => {
    console.log("33333333333333", errors);
    // notifications.show({
    //   title: "Error",
    //   message: "Please make sure all required field are  filled",
    //   color: "red",
    // });
  };

  const nextStepCalled = () => {
    handleSubmit(onSubmitPickUp, onErrorPickUp)();
    handleSubmit2(onSubmitDropOff, onErrorDropOff)();

    if ((isValid && isValid2) || (isValid && dropOffLocations?.length > 0)) {
      nextStep();
    }
  };

  const addMultipleLocation = () => {
    handleSubmit2(onSubmitDropOff, onErrorDropOff)();
  };

  const populateDropOffLoc = (dropoffloc) => {
    if (dropoffloc) {
      reset2({
        id: dropoffloc.id,
        multiple_dropoff_location: dropoffloc.multiple_dropoff_location,
        dropoff_location: dropoffloc.dropoff_location,
        delivery_date: new Date(dropoffloc.delivery_date), // Convert to Date
        from: dropoffloc.from,
        to: dropoffloc.to,
        reciver: {
          full_name: dropoffloc.reciver.full_name,
          phone_number: dropoffloc.reciver.phone_number,
          email: dropoffloc.reciver.email,
        },
        store: dropoffloc.store,
      });
    }
  };

  useEffect(() => {
    if (pickupLocations && pickupLocations.length > 0) {
      const firstPickup = pickupLocations[0];

      // Reset form with new values
      reset({
        id: firstPickup.id,
        multiple_pickup_location: firstPickup.multiple_pickup_location,
        pickup_location: firstPickup.pickup_location,
        pickup_date: new Date(firstPickup.pickup_date), // Convert to Date
        from: firstPickup.from,
        to: firstPickup.to,
        contact_person: {
          full_name: firstPickup.contact_person.full_name,
          phone_number: firstPickup.contact_person.phone_number,
          email: firstPickup.contact_person.email,
        },
        store: {
          store_keeper_name: firstPickup?.store?.store_keeper_name ?? "",
          store_number: firstPickup?.store?.store_number ?? "",
          phone_number: firstPickup?.store?.phone_number,
        },
      });
    }
  }, [pickupLocations, reset]);

  useEffect(() => {
    if (dropOffLocations && dropOffLocations.length > 0) {
      // if (dropOffLocations.length === 1) {
      //   const firstDropOff = dropOffLocations[0];
      //   populateDropOffLoc(firstDropOff);
      // } else {
      setMultipleDropOfloc(true);
      // }
    }
  }, [dropOffLocations, reset2]);

  const onDeleteDropOff = (data) => {
    dispatch(deleteDropOffLocation(data));
  };

  const onEditDropOff = (data) => {
    setOnEdit(true);
    populateDropOffLoc(data);
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
                onChange={(e) => {
                  setMultipleDropOfloc(e.currentTarget.checked),
                    setValue2(
                      "multiple_dropoff_location",
                      e.currentTarget.checked
                    );
                }}
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
                    {onEdit ? "Edit Location" : "Add More Location"}
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
                            <ActionIcon
                              onClick={() => onEditDropOff(records)}
                              size="sm"
                              variant="subtle"
                              color="blue"
                            >
                              <IconEdit size={16} />
                            </ActionIcon>
                            <ActionIcon
                              onClick={() => onDeleteDropOff(records)}
                              size="sm"
                              variant="subtle"
                              color="red"
                            >
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
