export function getInitialProps(story: string) {
    if (typeof document === 'undefined') return {};
    const element = document.querySelector(`sl-knobs[for=${JSON.stringify(story)}]`);
    if (!element) return {};
    return structuredClone(element.props);
}

export type KnobChangeHandler = (data: { story: string, prop: string, value: unknown }) => void

export function listen(onKnobChange: KnobChangeHandler) {
    function handleKnobChange({ detail: { story, prop, value } }: CustomEvent<{ prop: string, value: unknown, story: string }>) {
        onKnobChange({ story, prop, value });
    }
    // @ts-expect-error starlight:knobchange event is untyped
    document.addEventListener("starlight:knobchange", handleKnobChange);
    // @ts-expect-error starlight:knobchange event is untyped
    return () => document.removeEventListener("starlight:knobchange", handleKnobChange);
}
