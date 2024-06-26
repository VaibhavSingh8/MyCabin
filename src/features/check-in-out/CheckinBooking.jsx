import Button from "../../components/Button";
import Spinner from "../../components/Spinner";
import { useMoveBack } from "../../hooks/useMoveBack";
import BookingData from "../bookings/BookingData";
import { useSingleBooking } from "../bookings/useSingleBooking";
import Checkbox from "../../components/Checkbox";
import { formatCurrency } from "../../utils/helpers";
import { useEffect, useState } from "react";
import { useSettings } from "../settings/useSettings";
import { useCheckin } from "./useCheckin";

const CheckinBooking = () => {
  const { booking, isLoading, bookingId } = useSingleBooking();
  const [addBreakfast, setAddBreakfast] = useState(false);
  const [confirmPaid, setConfirmPaid] = useState(false);
  const { settings = {}, isPending: isPendingSettings } = useSettings();
  const { checkin, isCheckingIn } = useCheckin();
  const {
    hasBreakfast = false,
    numberOfNights,
    numberOfGuests,
    totalPrice,
    guestID: { fulName: guestName } = {},
  } = booking || {};

  const optionalBreakfastPrice =
    settings.breakfastPrice * numberOfNights * numberOfGuests;

  useEffect(() => setConfirmPaid(booking?.isPaid ?? false), [booking]);

  const moveBack = useMoveBack();

  function handleCheckin() {
    if (!confirmPaid) return;

    if (addBreakfast) {
      checkin({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakfastPrice,
          totalPrice: totalPrice + optionalBreakfastPrice,
        },
      });
    } else {
      checkin({ bookingId, breakfast: {} });
    }
  }

  if (isLoading || isPendingSettings) return <Spinner />;

  return (
    <>
      <div className="md:flex justify-between items-center">
        <h1 className="font-semibold text-2xl font-poppins ml-4 text-[#374151]">
          Check in Booking #{bookingId}
        </h1>
        <Button
          className="text-indigo-600 bg-transparent hover:bg-transparent text-center font-medium"
          onClick={moveBack}
        >
          &larr; Back
        </Button>
      </div>

      <BookingData booking={booking} />
      {!hasBreakfast && (
        <div>
          <Checkbox
            className="mt-4 mx-5"
            checked={addBreakfast}
            onChange={() => {
              setAddBreakfast((add) => !add);
              setConfirmPaid(false);
            }}
            id="breakfast"
          >
            Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}?
          </Checkbox>
        </div>
      )}
      <div>
        <Checkbox
          className="mt-4 mx-5"
          checked={confirmPaid}
          onChange={() => setConfirmPaid((confirm) => !confirm)}
          disabled={confirmPaid || isCheckingIn}
          id="confirm"
        >
          I confirm that {guestName} has paid the total amount of{" "}
          {!addBreakfast
            ? formatCurrency(totalPrice)
            : `${formatCurrency(
                totalPrice + optionalBreakfastPrice
              )} (${formatCurrency(totalPrice)} +
                ${formatCurrency(optionalBreakfastPrice)})`}
        </Checkbox>
      </div>

      <div className="flex justify-end">
        <Button
          className="mt-4 text-md font-normal mx-4 text-white border"
          disabled={!confirmPaid || isCheckingIn}
          onClick={handleCheckin}
        >
          Check In
        </Button>

        <Button
          className="mt-4 text-md font-normal mx-4 bg-white hover:bg-white border border-black"
          onClick={moveBack}
        >
          Back
        </Button>
      </div>
    </>
  );
};

export default CheckinBooking;
