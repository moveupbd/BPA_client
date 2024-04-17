import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Media() {
  const [media, setMedia] = useState(null);

  useEffect(() => {
    async function getMedia() {
      const response = await axios.get(
        "https://king-prawn-app-b4omc.ondigitalocean.app/api/medias"
      );

      if (response.status === 200) setMedia(response.data);
    }

    getMedia();
  }, []);

  return (
    <div className="bg-[#ECECEB]">
      <h1 className="text-lg md:text-xl bg-[#171c49] text-white p-2">
        Resources
      </h1>

      <div className="p-2">
        {media?.map((med) => (
          <Link to={"/"} key={med.id} className="block pb-6 space-y-2">
            <div className="w-full h-40 overflow-hidden">
              <img src={med.image} className="w-full h-full object-cover" />
            </div>
            <h2 className="font-semibold">{med.title}</h2>
            <p className="text-wrap">{med.description.slice(0, 25)} ...</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
