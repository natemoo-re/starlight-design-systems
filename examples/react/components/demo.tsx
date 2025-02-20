import { useStoryProps } from "./useStoryProps"

function Output(props: Record<string, unknown>) {
    // biome-ignore lint/security/noDangerouslySetInnerHtml: i know what im doing
    return <pre><code><output dangerouslySetInnerHTML={{ __html: JSON.stringify(props, null, 2 )}} /></code></pre>
}

export default function Demo() {
    const props = useStoryProps('default');
    return <Output {...props} />
}
