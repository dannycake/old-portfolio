export default function Container({ children }) {
    const style = {
        height: '100vh',
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory',
    };

    return <div style={style} className="App">{children}</div>;
};
