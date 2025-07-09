const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+import.meta.env.VITE_TMDB_KEY,
  },
};

export const OPENAI_KEY =  import.meta.env.VITE_OPENAI_KEY;

export const TMDB_IMAGE_URL =import.meta.env.VITE_TMDB_IMAGE_URL


export default options;