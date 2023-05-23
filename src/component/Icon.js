export default function Icon({
                                 src,
                                 alt,
                                 link
                             }) {
    return (
        <a target="_blank" rel="noreferrer" href={link}>
            <img src={src} alt={alt} className="icon"/>
        </a>
    );
}
