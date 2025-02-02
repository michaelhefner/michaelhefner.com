'use client'
import Copy from "../../components/copy/copy";
import './code.scss';
import 'prismjs';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';

const Code = ({ code }: { code: string }) => {
    return (
        <pre className="language-javascript code-custom">
            <Copy text={code} />

            <code style={{ whiteSpace: 'break-spaces', fontSize: '.8rem' }} className="language-javascript">
                {code}
            </code>
        </pre>
    )
}
export default Code;