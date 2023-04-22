'use client';

import { useState } from 'react';

export default function Counter() {
  const [state, setState] = useState(0);
  return (
    <>
      <p>{state}</p>
      <button onClick={() => setState(state + 1)}>add</button>
    </>
  );
}
