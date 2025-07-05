// App.jsx / App.tsx

import React from 'react';

function Parent() {
  function handleMessage() {
    console.log('✅ 子から親に通知が届いた！');
  }

  function mekanic() {
    console.log('anpan実行');
  }

  return (
    <div>
      <h1>親コンポーネント</h1>
      <Child hogepiyo ={handleMessage} />
      <Child02 anpan ={mekanic} />
    </div>
  );
}

function Child(props) {
  return (
    <div>
      <h2>子コンポーネント</h2>
      <button onClick={props.hogepiyo}>親に知らせる</button>
    </div>
  );
}

function Child02({ anpan }) {
  return (
    <div>
      <button onClick={anpan}>色をかえます</button>
    </div>
  );
}

export default Parent;
