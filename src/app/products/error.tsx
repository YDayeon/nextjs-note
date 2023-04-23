'use client'; // Error components must be Client components

import { useEffect } from 'react';

export type TError = {
  error: Error;
  reset: () => void;
};

export default function ProductsError({ error, reset }: TError) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
