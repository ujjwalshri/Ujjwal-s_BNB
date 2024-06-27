import React, { useEffect, useState } from "react";
import AccountNav from "./AccountNav";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const BookingsPage = () => {
  const [userBookings, setUserBookings] = useState([]);

  function countDaysBetween(date1, date2) {
    // Parse the dates to ensure they are Date objects
    let startDate = new Date(date1);
    let endDate = new Date(date2);

    // Calculate the difference in time (milliseconds)
    let timeDifference = Math.abs(endDate - startDate);

    // Convert the difference from milliseconds to days
    let dayDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    return dayDifference;
  }

  function convertISODate(inputDate) {
    // Create a Date object from the input ISO date string
    let date = new Date(inputDate);

    // Get the day, month, and year components
    let day = date.getUTCDate();
    let month = date.getUTCMonth(); // 0-based index
    let year = date.getUTCFullYear();

    // Create an array of month abbreviations
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Convert the month from numerical to abbreviated text format
    let monthName = months[month];

    // Format the day to always be two digits
    let formattedDay = day < 10 ? `0${day}` : day;

    // Rearrange and combine the components into the desired format
    return `${formattedDay}-${monthName}-${year}`;
  }

  useEffect(() => {
    axios.get("/bookings").then((res) => {
      setUserBookings(res.data);
    });
  }, []);

  return (
    <div className="mt-8">
      <AccountNav />

      <div className="w-full ">
        {userBookings?.length > 0 &&
          userBookings.map((booking) => (
            <Link to={'/account/bookings/'+ booking.place._id} className="flex m-20 mt-20 gap-0 ">
              <img
                className=""
                src={`http://localhost:2000/uploads/${booking.place.photos[0]}`}
                alt=""
              />
              <div className="">
                <motion.div
                  className="w-full h-full border border-black bg-gray-200 pt-8 p-2"
                  initial={{ x: "10vw" }}
                  animate={{ x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 20,
                    duration: 0.1,
                  }}
                >
                  <h1 className="text-3xl font-mono font-extrabold mb-10 ">
                    {booking.place.title}
                    <a
                      target="_blank"
                      className="text-green-500 underline flex gap-1 font-semibold m-1"
                      href={
                        "http://maps.google.com/?q=" + booking.place.address
                      }
                    >
                      {" "}
                      visit
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-8"
                      >
                        <path
                          fillRule="evenodd"
                          d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </h1>
                  <h1 className="flex">
                    <span className="font-bold text-xl">Time </span>{" "}
                  </h1>
                  <h1 className="text-black bg-gray-400 rounded-md p-1 mb-10">
                    from {convertISODate(booking.checkInTime)} &rarr;{" "}
                    {convertISODate(booking.checkOutTime)}
                  </h1>
                  <h1 className="text-3xl font-mono font-extrabold mb-10 ">
                    Total Price{" "}
                  </h1>
                  <h1 className="bg-gray-400 rounded-2xl p-2 text-2xl font-bold flex gap-1 justify-center items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {booking.place.price} /-{" "}
                  </h1>

                  <h1 className="font-extrabold text-2xl mt-10 flex justify-center items-center gap-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-12"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Number of nights
                  </h1>
                  <div className="bg-gray-400 p-2 flex justify-center items-center font-bold text-3xl">
                    {countDaysBetween(
                      booking.checkInTime,
                      booking.checkOutTime
                    )}
                  </div>

                  <Link
                    to={"/account/bookings/" + booking.place._id}
                    className="flex  bg-gray-400  mt-16 h-[60px] justify-center items-center font-bold text-2xl p-2 rounded-md"
                  >
                    Explore Booking
                  </Link>
                </motion.div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default BookingsPage;
