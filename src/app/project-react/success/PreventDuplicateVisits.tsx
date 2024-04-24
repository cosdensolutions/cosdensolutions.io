'use client';

import { useEffect } from 'react';

export default function PreventDuplicateVisits() {
  useEffect(() => {
    const url = window.location.href;
    var r = new URL(url);
    r.searchParams.delete('teachable_token');
    const newUrl = r.href;
    window.history.pushState({ path: newUrl }, '', newUrl);
  }, []);

  return <></>;
}
