import styles from "../styles/search.module.css";
import { useState } from "react";
import { getQuestions } from "../services/api";
import Anagram from "../ui/Anagram";
import MCQ from "../ui/MCQ";
import ReadAlong from "../ui/ReadAlong";

const Search = () => {
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("ALL");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const response = await getQuestions(title, page, 10);
    if (response.error) {
      setError(response.error);
      setLoading(false);
      return;
    }
    setLoading(false);
    setQuestions(response.questions);
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
      handleSearch();
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
    handleSearch();
  };

  const filteredQuestions = questions.filter((question) => {
    if (filter === "ALL") return true;
    return question.type === filter;
  });

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Enter question title"
            onChange={handleChange}
            className={styles.searchInput}
          />
          <button className={styles.searchButton} onClick={handleSearch}>
            Search
          </button>
        </div>

        {questions.length > 0 && (
          <div className={styles.filterBar}>
            <select
              onChange={handleFilterChange}
              className={styles.filterDropdown}
            >
              <option value="ALL">All</option>
              <option value="ANAGRAM">Anagrams</option>
              <option value="MCQ">MCQs</option>
              <option value="READALONG">ReadAlong</option>
            </select>
          </div>
        )}
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.questions}>
        {loading ? (
          <p>Loading...</p>
        ) : filteredQuestions.length === 0 ? (
          <p>No questions found</p>
        ) : (
          filteredQuestions.map((question) => {
            if (question.type === "ANAGRAM") {
              return <Anagram key={question._id} question={question} />;
            } else if (question.type === "MCQ") {
              return <MCQ key={question._id} question={question} />;
            } else {
              return <ReadAlong key={question._id} question={question} />;
            }
          })
        )}
      </div>

      {questions.length > 0 && (
        <div className={styles.pagination}>
          <button onClick={handlePreviousPage} disabled={page === 1 || loading}>
            Previous
          </button>
          <button onClick={handleNextPage} disabled={loading}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
