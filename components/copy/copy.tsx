'use client'
const Copy = ({ text }: { text: string }) => {
    return (
        <button
            onClick={(event) => {
                const parent = (event.target as HTMLElement).parentElement;
                const target = (event.target as HTMLElement);
                try {
                    if (parent) {
                        parent.classList.toggle('animate');
                        navigator.clipboard.writeText(text);
                        target.innerText = 'Copied';
                        setTimeout(() => {
                            target.innerText = 'Copy';
                            parent.classList.toggle('animate');
                        }, 300);
                    }
                } catch (error) {
                    console.log(error);
                }
            }}
        >
            Copy
        </button>
    )
}

export default Copy;