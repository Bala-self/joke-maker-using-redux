import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJoke } from "./seestore";  

function App() {
  const [category, setCategory] = useState("");

  const joke = useSelector(function (state) {
    return state.joke.joke;
  });

  const dispatch = useDispatch();

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  function handleFetchJoke() {
    dispatch(fetchJoke(category));
  }

  return (
    <div>
      <h2>Balakrishnan Joke Generator</h2>

      <select onChange={handleCategoryChange}>
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

  
      <button onClick={handleFetchJoke}>Get Joke</button>

      <div>
        <h3>{joke}</h3>
      </div>
    </div>
  );
}

export default App;