import dynamic from 'next/dynamic';
import { useMemo } from 'react';

export function Index() {
  const Map = useMemo(
    () =>
      dynamic(() => import('../components/map'), {
        loading: () => <p>Loading...</p>,
        ssr: false,
      }),
    []
  );

  return <Map></Map>;
}

export default Index;
