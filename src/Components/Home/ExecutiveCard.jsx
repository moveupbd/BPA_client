import { Link } from "react-router-dom";
import { Popover } from "keep-react";

import {
  MdLocalPhone,
  MdOutlineEmail,
  MdOutlineLocationOn,
  MdWhatsapp,
} from "react-icons/md";

/* eslint-disable react/prop-types */
export default function ExecutiveCard({ data }) {
  return (
    <Link
      to={`/member-detail/${data.id}`}
      className="p-3 border flex flex-col md:flex-row items-center gap-2 md:gap-4 rounded-lg shadow-md "
    >
      <p className="md:-rotate-90 md:w-2 text-lg font-semibold tracking-wider uppercase md:ml-2 md:-mb-4">
        {data.committee_position}
      </p>
      <img
        src={data.avatar}
        alt=""
        className="w-40 h-44 rounded-lg object-cover border"
      />

      <div>
        <p className="text-lg md:text-xl font-semibold capitalize">
          {data.name}
        </p>
        <p className="font-light text-sm font-mono text-neutral-600">
          ID: {data?.membership_no}
        </p>

        <div
          className="mt-2 md:mt-4 flex flex-wrap gap-1 items-center justify-start opacity-65"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <Popover placement="bottom">
            <Popover.Action>
              <MdLocalPhone size={16} />
            </Popover.Action>
            <Popover.Content className="z-20 flex items-center rounded-xl bg-neutral-700 text-white p-2 text-sm">
              <p>{data?.mobile_no}</p>
            </Popover.Content>
          </Popover>

          <Popover placement="bottom">
            <Popover.Action>
              <MdOutlineEmail size={16} />
            </Popover.Action>
            <Popover.Content className="z-20 flex items-center rounded-xl bg-neutral-700 text-white p-2 text-sm">
              <p>{data?.email}</p>
            </Popover.Content>
          </Popover>

          <Popover placement="bottom">
            <Popover.Action>
              <MdOutlineLocationOn size={16} />
            </Popover.Action>
            <Popover.Content className="z-20 flex items-center rounded-xl bg-neutral-700 text-white p-2 text-sm">
              <p>{data?.present_address}</p>
            </Popover.Content>
          </Popover>

          <Popover placement="bottom">
            <Popover.Action>
              <MdWhatsapp size={16} />
            </Popover.Action>
            <Popover.Content className="z-20 flex items-center rounded-xl bg-neutral-700 text-white p-2 text-sm">
              <p>{data?.mobile_no}</p>
            </Popover.Content>
          </Popover>
        </div>
      </div>
    </Link>
  );
}
