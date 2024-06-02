import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Spinner from "../../components/Spinner";
import Tag from "../../components/Tag";
import BookingData from "./BookingData";
import { useSingleBooking } from "./useSingleBooking";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useCheckout } from "../check-in-out/useCheckout";
import useDeleteBooking from "./useDeleteBooking";
import Modal from "../../components/Modal";
import ConfirmDelete from "../../components/ConfirmDelete";

const BookingDetail = () => {
  const { booking = {}, isPending, bookingId } = useSingleBooking();
  const { isDeleting, deleteBooking } = useDeleteBooking();
  const navigate = useNavigate();
  const moveBack = useMoveBack();
  const { status } = booking;
  const { checkout, isCheckingOut } = useCheckout();

  if (isPending) return <Spinner />;

  const statusTags = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "gray",
  };
  return (
    <>
      <div className="md:flex justify-between items-center">
        <div className="md:flex items-center justify-center gap-6">
          <h1 className="font-semibold text-2xl font-poppins ml-4 text-[#374151]">
            Booking #{bookingId}
          </h1>
          <Tag status={statusTags[status]}>{status.replace("-", " ")}</Tag>
        </div>
        <Button
          className="text-indigo-600 bg-transparent hover:bg-transparent text-center font-medium"
          onClick={moveBack}
        >
          &larr; Back
        </Button>
      </div>

      <BookingData booking={booking} />

      <div className="flex justify-end">
        {status === "unconfirmed" && (
          <Button
            className="mt-4 text-md font-normal mx-4 text-white border"
            onClick={() => navigate(`/checkin/${bookingId}`)}
          >
            Check In
          </Button>
        )}

        {status === "checked-in" && (
          <Button
            className="mt-4 text-md font-normal mx-4 text-white border"
            onClick={() => checkout(bookingId)}
            disabled={isCheckingOut}
          >
            Check out
          </Button>
        )}

        <Modal width="lg">
          <Modal.Open width="lg" name="delete">
            <Button
              className="mt-4 text-md font-normal mx-4 bg-red-500 hover:bg-red-600 text-white"
              disabled={isDeleting}
            >
              Delete Booking {console.log("hi2")}
            </Button>
          </Modal.Open>
          <Modal.Window>
            <ConfirmDelete
              resourceName="booking"
              disabled={isDeleting}
              onConfirm={() =>
                deleteBooking(bookingId, { onSettled: () => navigate(-1) })
              }
            />
          </Modal.Window>
        </Modal>
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

export default BookingDetail;
