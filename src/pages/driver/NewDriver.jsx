import { useForm, Controller } from "react-hook-form";
import {
  TextInput,
  NumberInput,
  Button,
  Box,
  Grid,
  Flex,
  Title,
  Text,
  Select,
} from "@mantine/core";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { DateInput } from "@mantine/dates";
import { vehicles } from "../../mock-data/shipment";

function NewDriver() {
  // Validation schema
  const schema = z.object({
    name: z.string().min(1, { message: "Driver name is required" }),
    license_number: z
      .string()
      .min(1, { message: "License number is required" }),
    license_expiry_date: z.date().optional(),
    license_class: z.string().min(1, { message: "License class is required" }),
    phone_number: z.string().min(1, { message: "Phone number is required" }),
    email: z
      .string()
      .email({ message: "Invalid email" })
      .min(1, { message: "Email is required" }),
    experience_years: z.number().optional(),
    address: z.string().optional(),
  });

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    // defaultValues: {
    //   name: "",
    //   license_number: "",
    //   license_expiry_date: "",
    //   license_class: "",
    //   phone_number: "",
    //   email: "",
    //   experience_years: 0,
    //   address: "",
    // },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <Text className="text-xl mb-2 font-semibold">New Driver</Text>
      <Grid gutter="md">
        <Grid.Col span={{ base: 12, md: 4 }}>
          <TextInput
            label="Driver Name"
            placeholder="Driver Name"
            {...register("name")}
            error={errors.name?.message}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <TextInput
            label="License Number"
            placeholder="License Number"
            {...register("license_number")}
            error={errors.license_number?.message}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Controller
            name="license_expiry_date"
            control={control}
            render={({ field }) => (
              <DateInput
                {...field}
                label="License Expiry Date"
                placeholder="YYYY-MM-DD"
                error={errors.license_expiry_date?.message}
              />
            )}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <TextInput
            label="License Class"
            placeholder="License Class"
            {...register("license_class")}
            error={errors.license_class?.message}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <TextInput
            label="Phone Number"
            type="number"
            placeholder="Phone Number"
            {...register("phone_number")}
            error={errors.phone_number?.message}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <TextInput
            label="Email"
            placeholder="Email"
            {...register("email")}
            error={errors.email?.message}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Controller
            name="experience_years"
            control={control}
            render={({ field: { name, value, onChange } }) => (
              <NumberInput
                name={name}
                value={value}
                onChange={onChange}
                label="Experience (Years)"
                placeholder="Experience (Years)"
                error={errors.experience_years?.message}
              />
            )}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <TextInput
            label="Address"
            placeholder="Address"
            {...register("address")}
            error={errors.address?.message}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 4 }}>
          <Controller
            name="vehicle"
            control={control}
            render={({ field: { name, value, onChange } }) => (
              <Select
                name={name}
                label="Vehicle"
                placeholder="Vehicle"
                data={vehicles?.map((vehicle) => ({
                  value: vehicle?.id?.toString(),
                  label:
                    vehicle.license_plate_number + " - " + vehicle.vehicle_type,
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
        <Button type="submit">Add Driver</Button>
      </Flex>
    </form>
  );
}

export default NewDriver;
