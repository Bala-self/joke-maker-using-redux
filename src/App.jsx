import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJoke } from "./seestore";

function App() {
  const [category, setCategory] = useState("");
  const joke = useSelector((state) => state.joke.joke);
  const dispatch = useDispatch();

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  function handleFetchJoke() {
    dispatch(fetchJoke(category));
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}> Balakrishnan Joke Generator</h2>

      <select style={styles.select} onChange={handleCategoryChange}>
        <option value="">Choose Category</option>
        <option value="animal">Animal</option>
        <option value="career">Career</option>
        <option value="celebrity">Celebrity</option>
        <option value="dev">Dev</option>
        <option value="explicit">Explicit</option>
        <option value="fashion">Fashion</option>
        <option value="food">Food</option>
        <option value="history">History</option>
        <option value="money">Money</option>
        <option value="movie">Movie</option>
        <option value="music">Music</option>
        <option value="political">Political</option>
        <option value="religion">Religion</option>
        <option value="science">Science</option>
        <option value="sport">Sport</option>
        <option value="travel">Travel</option>
      </select>

      <button style={styles.button} onClick={handleFetchJoke}>
        Get Joke
      </button>

      <div style={styles.jokeBox}>
        <h3 style={styles.jokeText}>{joke}</h3>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "40px",
    background: "linear-gradient(135deg, #ffecd2, #fcb69f)",
    minHeight: "100vh",
  },
  title: {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#333",
  },
  select: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginRight: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#ff6f61",
    color: "#fff",
    cursor: "pointer",
    transition: "0.3s",
  },
  jokeBox: {
    marginTop: "30px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    maxWidth: "600px",
    margin: "30px auto",
  },
  jokeText: {
    fontSize: "20px",
    color: "#444",
  },
};
export default App;
