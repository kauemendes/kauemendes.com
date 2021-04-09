function Tempo(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toUTCString();

    return (
        <div>
            <div>{dynamicDateString} (dinamico)</div>
            <div>{props.staticDateString} (estatico)</div>
        </div>
    )
}

export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toUTCString();
    return {
        props: {
            staticDateString
        },
        revalidate: 20
    }
}

export default Tempo;