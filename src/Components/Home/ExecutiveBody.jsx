import axios from "axios";
import { useEffect, useState } from "react";
import ExecutiveCard from "./ExecutiveCard";

export default function ExecutiveBody() {
  const [memberList, setMemberList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMemberList = async () => {
      try {
        const response = await axios.get(
          "https://king-prawn-app-b4omc.ondigitalocean.app/api/members"
        );
        setMemberList(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch member list. Please try again later.");
        setLoading(false);
      }
    };

    fetchMemberList();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="grid grid-cols-2 gap-4 mt-4 px-2 max-w-xl mx-auto">
        {memberList?.slice(0, 2).map((member) => (
          <ExecutiveCard key={member.id} data={member} />
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 px-2">
        {memberList?.slice(2, 5).map((member) => (
          <ExecutiveCard key={member.id} data={member} />
        ))}
      </div>
    </>
  );
}
