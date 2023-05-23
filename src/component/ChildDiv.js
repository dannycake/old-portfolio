export default function ChildDiv({ children }) {
    const style = {
        height: '99vh',
        scrollSnapAlign: 'start',
    };

    return <div style={style}>
        <div className="holder">
            <div className="border">
                {children}
            </div>
        </div>
    </div>;
};
