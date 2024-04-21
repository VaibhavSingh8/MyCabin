import Input from "../../components/Input";
import Spinner from "../../components/Spinner";
import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";

const UpdateSettingsForm = () => {
  const {
    isPending,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {
      minBookingLength: 0,
      maxBookingLength: 0,
      maxGuestsPerBooking: 0,
      breakfastPrice: 0,
    },
    settingsId,
  } = useSettings();

  const { updateSettingMutation, isUpdating } = useUpdateSetting();

  if (isPending) return <Spinner />;

  const handleUpdate = (e, field) => {
    const { value } = e.target;
    if (!value) return;

    updateSettingMutation({ [field]: value }, settingsId);
  };

  return (
    <form className="bg-white p-7 rounded-lg font-medium font-poppins">
      <Input
        label="Minimum nights/booking"
        type="number"
        id="min-nights"
        defaultValue={minBookingLength}
        onBlur={(e) => handleUpdate(e, "minBookingLength")}
      />
      <Input
        label="Maximum nights/booking"
        type="number"
        id="max-nights"
        defaultValue={maxBookingLength}
        onBlur={(e) => handleUpdate(e, "maxBookingLength")}
      />
      <Input
        label="Maximum guests/booking"
        type="number"
        id="max-guests"
        defaultValue={maxGuestsPerBooking}
        onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
      />
      <Input
        label="Breakfast Price(₹)"
        type="number"
        id="breakfast-price"
        defaultValue={breakfastPrice}
        onBlur={(e) => handleUpdate(e, "breakfastPrice")}
      />
    </form>
  );
};

export default UpdateSettingsForm;
