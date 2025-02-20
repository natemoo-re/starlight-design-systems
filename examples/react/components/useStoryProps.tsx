import { useCallback, useEffect, useMemo, useState } from 'react';
import { type KnobChangeHandler, getInitialProps, listen } from 'starlight-design-systems/client'

/** React hook that exposes props for a specific story  */
export function useStoryProps(storyName: string) {
  if (typeof window === 'undefined') return {};
  const initialProps = useMemo(() => getInitialProps(storyName), [storyName]);
  const [props, setProps] = useState<Record<string, unknown>>(initialProps);

  const onKnobChange = useCallback<KnobChangeHandler>(
    ({ story, prop, value }) => {
      if (story !== storyName) return;
      setProps((p) => ({ ...p, [prop]: value }));
    },
    [storyName]
  );
  useEffect(() => {
    return listen(onKnobChange);
  }, [onKnobChange]);

  return props;
}
