// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Search_notice() {
  const [events, setEvents] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getEvents() {
      const response = await axios.get(
        "https://king-prawn-app-b4omc.ondigitalocean.app/api/events"
      );

      if (response.status === 200) setEvents(response.data);
    }

    getEvents();
  }, []);

  async function SearchMember(e) {
    e.preventDefault();
    let response;
    if (e.target.name.value != null) {
      response = await axios.get(
        `https://king-prawn-app-b4omc.ondigitalocean.app/api/members/?search=${e.target.name.value}`
      );
    } else {
      response = await axios.get(
        `https://king-prawn-app-b4omc.ondigitalocean.app/api/members/?search=${e.target.name.value}`
      );
    }

    if (response.data.length < 1) {
      alert("No member found with such name. Please try again.");
    } else {
      navigate(`/member-detail/${response.data[0].id}`);
    }

    console.log(response.data);
  }

  return (
    <div>
      {/* Search Member  */}
      <div className="bg-[#ECECEB]">
        <h1 className="text-lg md:text-xl bg-[#171c49] text-white p-2">
          Search Member
        </h1>
        <form onSubmit={(e) => SearchMember(e)} className="px-2 py-6">
          <div className="Field pb-2">
            <label className="mr-12">Name </label>
            <input className="border border-[gray] px-3 pb-1" name="name" />
          </div>

          <div className="Field pb-2">
            <label className="mr-12">Phone</label>
            <input className="border border-[gray] px-3 pb-1" name="phone" />
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
