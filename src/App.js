import { useState } from "react";
function MyComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <h2>ようこそ、ログイン済みユーザーさん！</h2>
      ) : (
        <h2>ログインしてください。</h2>
      )}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        状態を切り替える
      </button>
    </div>
  );
}

export default MyComponent;