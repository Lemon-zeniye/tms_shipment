import { useForm, Controller } from "react-hook-form";
import {
  TextInput,
  Button,
  Box,
  Grid,
  Flex,
  Text,
  Select,
} from "@mantine/core";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { DateInput } from "@mantine/dates";
import { drivers } from "../../mock-data/shipment";

// Validation schema

function NewVehicle() {
  const schema = z.object({
    vehicle_type: z.string().min(1, { message: "Vehicle type is required" }),
    vehicle_model: z.string().min(1, { message: "Vehicle model is required" }),
    license_plate_number: z
      .string()
      .min(1, { message: "License plate number is required" }),
    VIN: z.string().min(1, { message: "VIN is required" }),
    weight_capacity: z
      .string()
      .min(1, { message: "Weight capacity is required" }),
    volume_capacity: z
      .string()
      .min(1, { message: "Volume capacity is required" }),
    insurance_policy_number: z
      .string()
      .min(1, { message: "Insurance policy number is required" }),
    insurance_type: z
      .string()
      .min(1, { message: "Insurance type is required" }),
    insurance_expiry_date: z.date().optional(),
    driver: z.string().optional(),
  });

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      vehicle_type: "",
      vehicle_model: "",
      license_plate_number: "",
      VIN: "",
      weight_capacity: "",
      volume_capacity: "",
      insurance_policy_number: "",
      insurance_type: "",
      insurance_expiry_date: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <Text className="text-xl mb-2 font-semibold">New Vehicle</Text>

      <Grid gutter="md">
        <Grid.Col span={{ base: 12, md: 4 }}>
          <TextInput
            label="Vehicle Type"
            placeholder="Truck"
            {...register("vehicle_type")}
            error={errors.vehicle_type?.message}
            required
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <TextInput
            label="Vehicle Model"
            placeholder="Ford F-150"
            {...register("vehicle_model")}
            error={errors.vehicle_model?.message}
            required
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <TextInput
            label="License Plate Number"
            placeholder="ABC1234"
            {...register("license_plate_number")}
            error={errors.license_plate_number?.message}
            required
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <TextInput
            label="VIN"
            placeholder="1FTFW1E59JKE98765"
            {...register("VIN")}
            error={errors.VIN?.message}
            required
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <TextInput
            label="Weight Capacity"
            type="number"
            placeholder="3000 kg"
            {...register("weight_capacity")}
            error={errors.weight_capacity?.message}
            required
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <TextInput
            label="Volume Capacity"
            placeholder="15 m³"
            type="number"
            {...register("volume_capacity")}
            error={errors.volume_capacity?.message}
            required
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <TextInput
            label="Insurance Policy Number"
            placeholder="INS12345678"
            {...register("insurance_policy_number")}
            error={errors.insurance_policy_number?.message}
            required
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <TextInput
            label="Insurance Type"
            placeholder="Comprehensive"
            {...register("insurance_type")}
            error={errors.insurance_type?.message}
            required
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Controller
            name="insurance_expiry_date"
            control={control}
            render={({ field }) => (
              <DateInput
                {...field}
                label="Insurance Expiry Date"
                placeholder="YYYY-MM-DD"
                error={errors.insurance_expiry_date?.message}
              />
            )}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Controller
            name="driver"
            control={control}
            render={({ field: { name, value, onChange } }) => (
              <Select
                label="Driver"
                placeholder="Driver"
                data={drivers?.map((driver) => ({
                  value: driver?.id?.toString(),
                  label: driver?.name + " - " + driver?.license_class,
                }))}
                value={value}
                onChange={onChange}
                className="w-full"
              />
            )}
          />
        </Grid.Col>
      </Grid>

      <Flex mt="md" justify="flex-end">
        <Button type="submit">Add Vehicle</Button>
      </Flex>
    </form>
  );
}

export default NewVehicle;
