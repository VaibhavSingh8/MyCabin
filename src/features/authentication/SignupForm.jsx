import Form from "../../components/Form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import useSignup from "./useSignup";

function SignupForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm({
    mode: "onChange",
  });
  const { errors } = formState;
  const { signup, isPending } = useSignup();

  function onSubmit({ email, password, fullName }) {
    signup({ email, password, fullName }, { onSettled: reset });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="my-6 p-8 bg-white">
      <Input
        label="Full name"
        type="text"
        id="fullName"
        disabled={isPending}
        error={errors?.fullName?.message}
        {...register("fullName", { required: "This field is required" })}
      />
      <Input
        label="Email address"
        type="email"
        id="email"
        disabled={isPending}
        error={errors?.email?.message}
        {...register("email", {
          required: "This field is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Please provide a valid email address",
          },
        })}
      />
      <Input
        label="Password(min 8 characters)"
        type="password"
        id="password"
        disabled={isPending}
        error={errors?.password?.message}
        {...register("password", {
          required: "This field is required",
          minLength: {
            value: 8,
            message: "Password needs to be minimum 8 characters",
          },
        })}
      />
      <Input
        label="Repeat password"
        type="password"
        id="cnfPassword"
        disabled={isPending}
        error={errors?.cnfPassword?.message}
        {...register("cnfPassword", {
          required: "This field is required",
          validate: (value) =>
            value === getValues().password || "Password needs to be same",
        })}
      />

      <div className="flex items-center justify-center gap-8">
        <Button type="reset" className="text-white" disabled={isPending}>
          Cancel
        </Button>
        <Button type="submit" className="text-white" disabled={isPending}>
          {isPending ? "Creating..." : "Create new User"}
        </Button>
      </div>
    </Form>
  );
}

export default SignupForm;
