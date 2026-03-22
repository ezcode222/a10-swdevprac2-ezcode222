"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, MenuItem, Button } from "@mui/material";
import DateReserve from "../../components/DateReserve";
import { AppDispatch } from "../../redux/store";
import { addBooking } from "../../redux/features/bookSlice";
import { BookingItem } from "../../../interface";

export default function BookingPage() {
  const dispatch = useDispatch<AppDispatch>();

  const [nameLastname, setNameLastname] = useState("");
  const [tel, setTel] = useState("");
  const [venue, setVenue] = useState("");
  const [bookDate, setBookDate] = useState("");

  const handleSubmit = () => {
    if (!nameLastname || !tel || !venue || !bookDate) return;

    const newBooking: BookingItem = {
      nameLastname,
      tel,
      venue,
      bookDate,
    };

    dispatch(addBooking(newBooking));
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Venue Booking</h1>

      <div className="flex flex-col gap-4 max-w-md">
        <TextField
          name="Name-Lastname"
          label="Name-Lastname"
          variant="standard"
          value={nameLastname}
          onChange={(e) => setNameLastname(e.target.value)}
        />

        <TextField
          name="Contact-Number"
          label="Contact-Number"
          variant="standard"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />

        <TextField
          id="venue"
          select
          label="Venue"
          variant="standard"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
        >
          <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
          <MenuItem value="Spark">Spark Space</MenuItem>
          <MenuItem value="GrandTable">The Grand Table</MenuItem>
        </TextField>

        <DateReserve onDateChange={setBookDate} />

        <Button
          variant="contained"
          name="Book Venue"
          onClick={handleSubmit}
        >
          Book Venue
        </Button>
      </div>
    </main>
  );
}