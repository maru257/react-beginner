import Button from "./Button"
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time"); // state가 변경될때 App의 모든 코드들은 항상 다시 실행된다.
  //const iRunOnlyOnce = () => {
  //  console.log("i run only once");
  //};
  //useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    console.log("i run only once");
  }, []); // 한번만 실행
  useEffect(() => {
    console.log("SEARCH FOR", keyword);
  }, [keyword]); // keyword가 변할 때 코드를 실행
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange} 
        type="text" 
        placeholder="Search here..." 
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
