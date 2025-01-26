export const getQuestions = async (title, page, limit) => {
  try {
    const response = await fetch(
      `http://localhost:3000/questions?title=${title}&page=${page}&limit=${limit}`,
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
