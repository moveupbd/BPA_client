/* eslint-disable react/prop-types */

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import {
  MdLocalPhone,
  MdOutlineEmail,
  MdOutlineLocationOn,
  MdWhatsapp,
} from "react-icons/md";

import { Popover } from "keep-react";

export default function MemberProfile({ data }) {
  const memberDetail = data;

  console.log(memberDetail);
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-3 bg-white p-4 rounded-lg shadow-md">
        <img
          src={memberDetail?.avatar}
          className="h-52 w-44 border object-cover rounded-lg mx-auto"
        />

        <div className="max-w-40 mx-auto mt-3 flex gap-1 items-center justify-between opacity-65">
          <Popover placement="bottom">
            <Popover.Action>
              <MdLocalPhone size={20} />
            </Popover.Action>
            <Popover.Content className="z-20 flex items-center rounded-xl bg-neutral-700 text-white p-2 text-sm">
              <p>{memberDetail?.mobile_no}</p>
            </Popover.Content>
          </Popover>

          <Popover placement="bottom">
            <Popover.Action>
              <MdOutlineEmail size={20} />
            </Popover.Action>
            <Popover.Content className="z-20 flex items-center rounded-xl bg-neutral-700 text-white p-2 text-sm">
              <p>{memberDetail?.email}</p>
            </Popover.Content>
          </Popover>

          <Popover placement="bottom">
            <Popover.Action>
              <MdOutlineLocationOn size={20} />
            </Popover.Action>
            <Popover.Content className="z-20 flex items-center rounded-xl bg-neutral-700 text-white p-2 text-sm">
              <p>{memberDetail?.present_address}</p>
            </Popover.Content>
          </Popover>

          <Popover placement="bottom">
            <Popover.Action>
              <MdWhatsapp size={20} />
            </Popover.Action>
            <Popover.Content className="z-20 flex items-center rounded-xl bg-neutral-700 text-white p-2 text-sm">
              <p>{memberDetail?.mobile_no}</p>
            </Popover.Content>
          </Popover>
        </div>
      </div>

      <div className="col-span-12 md:col-span-9 bg-white p-4 rounded-lg shadow-md">
        <div>
          <h4 className="text-xl font-bold capitalize">{memberDetail?.name}</h4>
          <p className="font-light text-sm font-mono text-neutral-600">
            ID: {memberDetail?.membership_no}
          </p>

          <div className="flex flex-col md:flex-row items-start gap-2 md:gap-20">
            <div className="mt-4 text-neutral-700">
              <p className="font-semibold mb-1">Membership Info</p>

              <p>Member since: {memberDetail?.membership_date}</p>
              <p>Membership category: {memberDetail?.membership_category}</p>
              <p>Present Job: {memberDetail?.present_job}</p>
              <p>Office: {memberDetail?.chamber_address}</p>

              <p className="font-semibold mt-2">About Nominee</p>
              <p>name: {memberDetail?.nominee_name}</p>
              <p>relation: {memberDetail?.nominee_relation}</p>
              <p>DOB: {memberDetail?.nominee_dob}</p>
            </div>

            <div className="mt-4 text-neutral-700">
              <p className="font-semibold mb-1">Personal Info</p>
              <p>Email: {memberDetail?.email}</p>
              <p>Phone: {memberDetail?.mobile_no}</p>
              <p>Address: {memberDetail?.present_address}</p>
              <p>Father&apos;s name: {memberDetail?.father_name}</p>
              <p>Mother&apos;s name: {memberDetail?.mother_name}</p>
              <p>NID: {memberDetail?.nid_no}</p>
              <p>Gender: {memberDetail?.gender}</p>
              <p>Blood Group: {memberDetail?.blood_group}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 bg-white p-4 rounded-lg shadow-md">
        <p className="text-lg font-semibold">
          Some notable works by{" "}
          <span className="font-bold capitalize">{memberDetail?.name}</span>
        </p>

        <div className="mt-6">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
            breakpoints={{
              576: {
                // width: 576,
                slidesPerView: 2,
              },
              768: {
                // width: 768,
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide className="h-80 bg-neutral-100 border rounded-lg">
              Slide 1
            </SwiperSlide>
            <SwiperSlide className="h-80 bg-neutral-100 border rounded-lg">
              Slide 2
            </SwiperSlide>
            <SwiperSlide className="h-80 bg-neutral-100 border rounded-lg">
              Slide 3
            </SwiperSlide>
            <SwiperSlide className="h-80 bg-neutral-100 border rounded-lg">
              Slide 4
            </SwiperSlide>
            <SwiperSlide className="h-80 bg-neutral-100 border rounded-lg">
              Slide 5
            </SwiperSlide>
            <SwiperSlide className="h-80 bg-neutral-100 border rounded-lg">
              Slide 6
            </SwiperSlide>
            <SwiperSlide className="h-80 bg-neutral-100 border rounded-lg">
              Slide 7
            </SwiperSlide>
            <SwiperSlide className="h-80 bg-neutral-100 border rounded-lg">
              Slide 8
            </SwiperSlide>
            <SwiperSlide className="h-80 bg-neutral-100 border rounded-lg">
              Slide 9
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
