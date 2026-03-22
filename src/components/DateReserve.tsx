"use client";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";

export default function DateReserve({
  onDateChange,
}: {
  onDateChange?: (date: string) => void;
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        onChange={(value: Dayjs | null) => {
          if (onDateChange) {
            onDateChange(value ? dayjs(value).format("YYYY/MM/DD") : "");
          }
        }}
      />
    </LocalizationProvider>
  );
}