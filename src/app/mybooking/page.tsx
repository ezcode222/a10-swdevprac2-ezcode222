import BookingList from "../../components/BookingList";

export default function MyBookingPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">My Booking</h1>
      <BookingList />
    </main>
  );
}