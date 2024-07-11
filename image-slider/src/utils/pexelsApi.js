import { createClient } from "pexels";

export const getImages = () => {
  const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);

  return client.photos
    .search({ query: "freedive", orientation: "landscape", per_page: 8 })
    .then((response) => {
      return response.photos.map((photoData) => ({
        id: photoData.id,
        alt: photoData.alt,
        src: photoData.src.large,
      }));
    });
};
