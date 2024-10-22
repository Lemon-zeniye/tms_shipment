import { Button } from "@mantine/core";
import React from "react";
import { useForm } from "react-hook-form";

function ScheduleShipment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm();

  const onSubmit2 = (data) => {
    console.log(data);
  };

  const handlerButtonClick = () => {
    handleSubmit(onSubmit)(); // Trigger validation and submission for the first form
    handleSubmit2(onSubmit2)(); // Trigger validation and submission for the second form
  };

  return (
    <div>
      <form>
        <div>
          <label>Name</label>
          <input
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
      <form>
        <div>
          <label>Name</label>
          <input
            {...register2("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
          />
          {errors2.name && <p>{errors.name.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
      <Button onClick={handlerButtonClick}>Click</Button>
    </div>
  );
}

export default ScheduleShipment;
