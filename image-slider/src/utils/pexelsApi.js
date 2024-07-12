import { createClient } from "pexels";

const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);

export const getImages = async (
  query = "tuxedo cat",
  orientation = "landscape",
  per_page = 8,
) => {
  try {
    const response = await client.photos.search({
      query,
      orientation,
      per_page,
    });

    return response.photos.map((photoData) => ({
      id: photoData.id,
      alt: photoData.alt,
      src: photoData.src.large,
    }));
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};

// export const getImages = () => {
//   const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);

//   return client.photos
//     .search({
//       query: "longboard women",
//       orientation: "landscape",
//       per_page: 8,
//     })
//     .then((response) => {
//       return response.photos.map((photoData) => ({
//         id: photoData.id,
//         alt: photoData.alt,
//         src: photoData.src.large,
//       }));
//     });
// };
