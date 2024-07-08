export const getImages = () => {
  const url =
    "https://api.pexels.com/v1/search?query=Ocean&orientation=landscape";

  return fetch(url, {
    headers: {
      Authorization: process.env.PEXELS_API_KEY,
    },
  })
    .then(
      (response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`Request failed with status ${response.status}!`);
      },
      (networkError) => console.log(networkError.message)
    )
    .then((jsonResponse) => {
      return jsonResponse.photos.map((photoData) => ({
        id: photoData.id,
        url: photoData.src["medium"],
        alt: photoData.alt,
      }));
    });
};
