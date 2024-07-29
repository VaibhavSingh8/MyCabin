import SignupForm from "../features/authentication/SignupForm";

const Account = () => {
  return (
    <>
      <h1 className="font-semibold text-2xl ml-5 text-[#374151] p-2">
        Create new user
      </h1>
      <SignupForm />
    </>
  );
};

export default Account;
