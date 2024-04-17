import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Stats() {
  const [stats, setStats] = useState(null);
  useEffect(() => {
    const fetchMemberList = async () => {
      try {
        const response = await axios.get(
          "https://king-prawn-app-b4omc.ondigitalocean.app/api/stats"
        );

        setStats(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMemberList();
  }, []);

  return (
    <div className="my-10 p-2 grid grid-cols-2 gap-6 md:grid-cols-4">
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-6xl font-bold">{stats?.total_members_count}</h2>
        <p className="font-light">Total Members</p>
      </div>

      <div className="flex items-center justify-center flex-col">
        <h2 className="text-6xl font-bold">{stats?.male_members_count}</h2>
        <p className="font-light">Male Members</p>
      </div>

      <div className="flex items-center justify-center flex-col">
        <h2 className="text-6xl font-bold">{stats?.female_members_count}</h2>
        <p className="font-light">Female Members</p>
      </div>

      <div className="flex items-center justify-center flex-col">
        <h2 className="text-6xl font-bold">
          {stats?.unique_visited_users_count}
        </h2>
        <p className="font-light">Total Visitors</p>
      </div>
    </div>
  );
}
