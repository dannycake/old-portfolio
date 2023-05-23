export default function Link({href, children}) {
    return (
        <a target="_blank" rel="noreferrer" href={href}>
            {children}
        </a>
    );
}
