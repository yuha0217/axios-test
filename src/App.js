import "./styles.css";
import axios from "axios";

export default function App() {
  const postData = {
    title: "foo",
    body: "bar",
    userId: 1
  };

  const onCLickUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch(() => {
        alert("エラー");
      })
      .finally(() => {
        console.log("必ず最後にする処理");
      });
  };
  const onCLickUser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => {
        console.log(res.data);
      })
      .catch(() => {
        alert("エラー");
      })
      .finally(() => {
        console.log("必ず最後にする処理");
      });
  };
  const onCLickPost = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", postData)
      .then((res) => {
        console.log(res.data);
      })
      .catch(() => {
        alert("エラー");
      })
      .finally(() => {
        console.log("必ず最後にする処理");
      });
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={onCLickUsers}>ユーザー一覧取得</button>
      <button onClick={onCLickUser1}>ユーザー１取得</button>
      <button onClick={onCLickPost}>POST</button>
    </div>
  );
}
