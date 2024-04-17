// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";

function Search_notice() {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    async function getEvents() {
      const response = await axios.get(
        "https://king-prawn-app-b4omc.ondigitalocean.app/api/events"
      );

      if (response.status === 200) setEvents(response.data);
    }

    getEvents();
  }, []);

  return (
    <div>
      {/* Search Member  */}
      <div className="bg-[#ECECEB]">
        <h1 className="text-lg md:text-xl bg-[#171c49] text-white p-2">
          Search Member
        </h1>
        <form action="" className="px-2 py-6">
          <div className="Field pb-2">
            <label className="mr-12">Name </label>
            <input className="border border-[gray] px-3 pb-1" name="name" />
          </div>
          <div className="Field pb-2">
            <label className="mr-[14px]">Member ID</label>
            <input className="border border-[gray] px-3 pb-1" name="name" />
          </div>
          <div className="Field pb-2">
            <label className="mr-12">Phone</label>
            <input className="border border-[gray] px-3 pb-1" name="name" />
          </div>
          <button action="" className="border border-red-500 px-2 rounded-sm">
            Search
          </button>
        </form>
      </div>

      {/* Notice Part  */}
      <div className="bg-[#ECECEB] mt-10">
        <h1 className="text-lg md:text-xl bg-[#171c49] text-white p-2">
          Notice
        </h1>

        <div className="p-2">
          {events?.map((event) => (
            <div
              key={event.id}
              className="flex gap-2 py-4 border-b-2 border-black"
            >
              <img
                className="max-w-24 object-fit"
                src={event.image}
                alt="event"
              />

              <span className="space-y-3">
                <p className="ml-1">{event.title}</p>
                <p className="ml-1">{event.created_at}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search_notice;
