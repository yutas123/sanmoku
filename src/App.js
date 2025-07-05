function Parent() {
  function handleNotify(message) {
    console.log(`📨 子からのメッセージ: ${message}`);
  }

  return (
    <div>
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
  return (
    <button onClick={() => props.sendToParent("こんにちは、親！")}>
      propsを使用
    </button>
  );
}

export default Parent;