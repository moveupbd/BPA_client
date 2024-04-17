import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GrFormNextLink } from "react-icons/gr";

export default function FeaturedProfile() {
  const [member, setMember] = useState([]);

  function getRandomArbitrary(arr) {
    return Math.random() * (arr.length - 0) + 0;
  }

  useEffect(() => {
    const fetchMemberList = async () => {
      try {
        const response = await axios.get(
          "https://king-prawn-app-b4omc.ondigitalocean.app/api/members"
        );
        setMember(response.data[Math.round(getRandomArbitrary(response.data))]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMemberList();
  }, []);

  // console.log(member);
  return (
    <div className="mt-10 p-2">
      <h4 className="text-lg lg:text-xl font-semibold">Featured Member</h4>

      {member && (
        <div className="mt-4 grid grid-cols-12 gap-4">
          <Link
            to={`/member-detail/${member.id}`}
            className="col-span-12 md:col-span-9 border rounded-lg shadow-md p-3 flex items-center gap-4"
          >
            <img
              src={member?.avatar}
              className="h-52 w-44 border object-cover rounded-lg"
            />

            <div className="py-2">
              <p className="text-lg md:text-xl font-semibold capitalize">
                {member?.name}
              </p>
              <p className="font-light text-sm font-mono text-neutral-600">
                ID: {member?.membership_no}
              </p>
              <span className="block my-2 text-sm text-neutral-600">
                <p className="font-semibold">Membership Info</p>

                <p>Member since: {member?.membership_date}</p>
                <p>Membership category: {member?.membership_category}</p>
                <p>Present Job: {member?.present_job}</p>
                <p>Office: {member?.chamber_address}</p>
              </span>
            </div>
          </Link>
          <Link
            to={"/all-members"}
            className="col-span-12 md:col-span-3 border rounded-lg shadow-md p-3 flex items-center justify-center md:flex-col hover:bg-neutral-100 gap-4"
          >
            <p className="text-lg md:text-xl font-semibold text-center">
              See all members
            </p>
            <GrFormNextLink size={22} />
          </Link>
        </div>
      )}
    </div>
  );
}
