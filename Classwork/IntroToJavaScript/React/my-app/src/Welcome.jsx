// Default value for name is "Guest" if no prop is passed
function Welcome({ name = "Guest" }) {
    return <div>Hello, {name}!</div>;
}

export default Welcome;