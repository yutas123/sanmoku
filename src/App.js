// 親コンポーネント
import { useState } from "react";

function Parent() {
  const [message, setMessage] = useState("（まだメッセージがありません）");

  function handleNotify(newMessage) {
    setMessage(newMessage);
  }

  return (
    <div>
      <h2>📩 受信メッセージ：</h2>
      <p>{message}</p>
      <ChildA sendToParent={handleNotify} />
      <ChildB message={message} />
    </div>
  );
}

// 子コンポーネント（フォーム入力あり）
function ChildA({sendToParent}) {
  const [inputValue, setInputValue] = useState("");

  function handleClick() {
    sendToParent(inputValue);
    setInputValue(""); // 送信後に入力欄をリセット
  }

  return (
    <div>
      子コンポーネントA
      <input
        type="text"
        placeholder="親に送りたいメッセージ"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}>送信</button>
    </div>
  );
}

function ChildB({ message }) {
  console.log("受け取ったprops:", message);
  return (
    <div>
      <h3>子コンポーネントB</h3>
      <p>親からのメッセージ: {message}</p>
    </div>
  );
} 

export default Parent;