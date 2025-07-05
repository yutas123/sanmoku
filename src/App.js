function Parent() {
  function handleNotify(message) {
    console.log(`📨 子からのメッセージ: ${message}`);
  }

  return (
    <div>
      <Child00 sendToParent={handleNotify} />
      <Child01 sendToParent={handleNotify} />
      <Child02 sendToParent={handleNotify} />
    </div>
  );
}

// 分割代入を使用
function Child01({ sendToParent }) {
  return (
    <button onClick={() => sendToParent("こんにちは、親！")}>
      親に挨拶を送る
    </button>
  );
}

//propsを使用
function Child02(props) {
  console.log(props);
  return (
    <button>
      ああ
    </button>
    // <button onClick={() => sendToParent("こんにちは、親！")}>
    //   親に挨拶を送る
    // </button>
  );
}

export default Parent;