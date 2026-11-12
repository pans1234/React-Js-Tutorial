function PropsStyleJsxDefaultSend({ children, custom_color = "blue" }) {
    return (
        <div style={{ color: custom_color, backgroundColor: "yellow", border: "2px solid red", padding: "10px", margin: "10px" }}>
            <h1>Props Style JSX Default Send</h1>
            {children}
        </div>
    )
}

export default PropsStyleJsxDefaultSend