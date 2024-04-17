import axios from "axios";
import { useEffect, useState } from "react";

export default function Activities() {
  const [activities, setActivities] = useState(null);
  useEffect(() => {
    const fetchMemberList = async () => {
      try {
        const response = await axios.get(
          "https://king-prawn-app-b4omc.ondigitalocean.app/api/activites"
        );

        setActivities(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMemberList();
  }, []);

  //   console.log(activities);
  return (
    <div className="mt-4 px-2">
      {activities?.map((act) => (
        <div key={act.id} className="md:grid md:grid-cols-12 gap-6 mb-6">
          <img src={act.image} alt="activitty" className="col-span-5" />
          <div className="col-span-7">
            <p className="text-xl font-semibold mb-4 capitalize">{act.title}</p>
            <p className="text-neutral-500 font-light line-clamp-4">
              {act.description}
            </p>

            <p className="text-neutral-500 mt-6 text-sm font-light">
              Updated at: {act.updated_at}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
