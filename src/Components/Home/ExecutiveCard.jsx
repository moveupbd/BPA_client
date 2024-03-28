import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ExecutiveCard({ data }) {
  return (
    <Link
      to={`/member-detail/${data.id}`}
      className="p-3 border flex flex-col items-center gap-4 rounded-lg shadow-md"
    >
      <img
        src={data.avatar}
        alt=""
        className="w-36 h-36 rounded-full object-cover border-4 border-blue-900"
      />

      <div className="text-center space-y-1">
        <p className="text-lg md:text-xl font-semibold">{data.name}</p>
        <p className="text-sm">{data.email}</p>
      </div>
    </Link>
  );
}
