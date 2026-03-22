"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { removeBooking } from "../redux/features/bookSlice";
import { BookingItem } from "../../interface";

export default function BookingList() {
  const dispatch = useDispatch<AppDispatch>();
  const bookItems = useSelector(
    (state: RootState) => state.bookSlice.bookItems
  );

  if (bookItems.length === 0) {
    return <div>No Venue Booking</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      {bookItems.map((item: BookingItem, index: number) => (
        <div key={index} className="bg-white shadow rounded-lg p-4">
          <p>Name-Lastname: {item.nameLastname}</p>
          <p>Tel: {item.tel}</p>
          <p>Venue: {item.venue}</p>
          <p>Book Date: {item.bookDate}</p>

          <button
            className="mt-3 bg-red-500 text-white px-3 py-1 rounded"
            onClick={() => dispatch(removeBooking(item))}
          >
            Remove Booking
          </button>
        </div>
      ))}
    </div>
  );
}