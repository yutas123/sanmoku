// App.jsx / App.tsx

import React from 'react';

function Parent() {
  function handleMessage() {
    console.log('✅ 子から親に通知が届いた！');
  }

  return (
    <div>
      <h1>親コンポーネント</h1>
      <Child />
    </div>
  );
}

function Child({ }) {
  return (
    <div>
      <h2>子コンポーネント</h2>
      <button>親に知らせる</button>
    </div>
  );
}

export default Parent;