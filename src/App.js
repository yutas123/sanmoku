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
      <ChildForm sendToParent={handleNotify} />
    </div>
  );
}

// 子コンポーネント（フォーム入力あり）
function ChildForm(catchProps) {
  console.log("受け取ったprops:", catchProps);
  const hoge = catchProps.sendToParent;
  const [inputValue, setInputValue] = useState("");

  function handleClick() {
    hoge(inputValue);
    setInputValue(""); // 送信後に入力欄をリセット
  }

  return (
    <div>
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

export default Parent;