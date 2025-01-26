const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const getQuestions = async (title, page, limit) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/questions?title=${title}&page=${page}&limit=${limit}`,
      {
        methid: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.json();
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong" };
  }
};
