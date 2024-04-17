import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Gallery() {
  const [gallery, setGallery] = useState(null);
  useEffect(() => {
    const fetchMemberList = async () => {
      try {
        const response = await axios.get(
          "https://king-prawn-app-b4omc.ondigitalocean.app/api/photo-gallary"
        );

        setGallery(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMemberList();
  }, []);

  // console.log(gallery);
  return (
    <>
      <div className="mt-4 px-2 grid grid-cols-2 xl:grid-cols-3 gap-4">
        {gallery?.slice(0, 6).map((photo) => (
          <img
            src={photo.image}
            key={photo.id}
            className="max-w-40 md:max-w-60 mx-auto"
          />
        ))}
      </div>

      <Link
        to={"/"}
        className="py-1.5 px-3 rounded-md border bg-blue-100 w-fit mx-auto block mt-10 font-semibold"
      >
        See More
      </Link>
    </>
  );
}
