'use client'
import Copy from "../../components/copy/copy";
import 'prismjs';
import './code.scss';
// Load the languages you want to highlight
// @see https://github.com/PrismJS/prism/tree/master/components for an overview of all languages
// import 'prismjs/components/prism-markup-templating';
// import 'prismjs/components/prism-php';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import 'prism-themes'

// Option 1: Load a default theme (included in the 'prismjs' package)
// import 'prismjs/themes/prism-okaidia.css';
// import 'prism-themes/themes/prism-darcula.css';
const Code = ({ code }: { code: string }) => {
    return (
        <pre className="code-custom">
            <Copy text={code} />

            <code style={{ whiteSpace: 'break-spaces', fontSize: '.8rem' }} className="language-javascript">
                {code}
            </code>
        </pre>
    )
}
export default Code;