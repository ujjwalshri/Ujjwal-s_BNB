import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import PlaceWidget from "./PlaceWidget";
const SinglePlacePage = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  useEffect(() => {
    if (!id) return;
    axios.get("/places/" + id).then((res) => {
      console.log(res.data);
      setPlace(res.data);
    });
  }, [id]);
  console.log(place);

  if (!place) return "";

  if (showAllPhotos) {
    return (
      <div className="absolute inset-0 fixed bg-black  min-h-screen ">
        <motion.button
          onClick={() => setShowAllPhotos(false)}
          className="mt-10 mx-10 w-10 h-10 bg-gray-500 fixed shadow shadow-black"
          whileHover={{ scale: 1.2 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path d="M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.188 2.805-1.628V8.69c0-1.44-1.555-2.343-2.805-1.628L12 11.029v-2.34c0-1.44-1.555-2.343-2.805-1.628l-7.108 4.061c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z" />
          </svg>
        </motion.button>
        <div className="py-14 grid grid-cols-2 bg-black gap-4 px-10">
          {place?.photos?.length > 0 &&
            place.photos.map((photo) => (
              <div>
                <img
                  className="w-full h-full rounded-3xl"
                  src={`http://localhost:2000/uploads/${photo}`}
                  alt=""
                />
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className=" mt-8 mb-40 bg-gray-100 p-6 mx-40 "
      animate={{ y: 30 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <h1 className="text-2xl font-mono">{place.title}</h1>
      <a
        target="_blank"
        className="text-blue-500 underline flex gap-1 font-semibold m-1"
        href={"http://maps.google.com/?q=" + place.address}
      >
        {" "}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              clipRule="evenodd"
            />
          </svg>
        </span>{" "}
        {place.address}{" "}
      </a>
      <div className="relative">
        <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-2xl overflow-hidden ">
          <div className="aspect-square object-cover ">
            {place.photos?.[0] && (
              <img
                onClick={() => setShowAllPhotos(true)}
                className="cursor-pointer   h-full w-full object-fit"
                src={`http://localhost:2000/uploads/${place.photos[0]}`}
                alt=""
              />
            )}
          </div>
          <div className="grid gap-2">
            {place.photos?.[1] && (
              <img
                onClick={() => setShowAllPhotos(true)}
                className="cursor-pointer  aspect-square object-cover"
                src={`http://localhost:2000/uploads/${place.photos[1]}`}
                alt=""
              />
            )}

            {place.photos?.[2] && (
              <img
                onClick={() => setShowAllPhotos(true)}
                className="cursor-pointer  aspect-square object-cover"
                src={`http://localhost:2000/uploads/${place.photos[2]}`}
                alt=""
              />
            )}
          </div>

          <motion.button
            onClick={() => setShowAllPhotos(true)}
            className=" flex gap-1 absolute bottom-4 right-3 bg-gray-300 text-black font-semibold rounded-xl  shadow-lg shadow-gray-500"
            whileHover={{ scale: 1.07 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                clipRule="evenodd"
              />
            </svg>
            show more photos
          </motion.button>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="font-3xl font-semibold  m-1">Description</h1>
        {place.description}
      </div>
      
     <PlaceWidget place={place}/>
    </motion.div>
  );
};

export default SinglePlacePage;
