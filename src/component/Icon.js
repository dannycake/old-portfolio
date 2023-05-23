import Link from './Link';

export default function Icon({
                                 src,
                                 alt,
                                 link
                             }) {
    return (
        <Link href={link}>
            <img src={src} alt={alt} className="icon shadow"/>
        </Link>
    );
}
