'use client'
// Import Prism.js
import 'prismjs';

// Load the languages you want to highlight
// @see https://github.com/PrismJS/prism/tree/master/components for an overview of all languages
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-java';

// Option 1: Load a default theme (included in the 'prismjs' package)
// import 'prismjs/themes/prism-okaidia.css';
import 'prism-themes/themes/prism-coldark-dark.css';
const Code = ({ code }: { code: string }) => {
    return (
        <pre >
            <code style={{ whiteSpace: 'break-spaces', fontSize: '.8rem' }} className="language-javascript">
                {code}
            </code>
        </pre>
    )
}
export default Code;