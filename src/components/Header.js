import Button from "./Button.js"

const Header = ({ title }) => {
    var port = ''
    const connectToPort = async () => {
        console.log("Click")
        port = await navigator.serial.requestPort();
        await port.open({ baudRate: 9600})
        const reader = port.readable.getReader();

        while (port.serial.available()) {
            const {value, done} = await reader.read();
            if (done) {
                reader.releaseLock();
                break;
            }

            console.log(value)
        }
    }

    const sendToPort = async () => {
        const writer = port.writable.getWriter();
        const data = new Uint8Array([104, 101, 108, 108, 111]) // Hello
        await writer.write(data)
        writer.releaseLock();
    }

    return (
        <header className="header">
            <h1>Hey</h1>
            <h1>{title}</h1>
            <Button color="green" 
            text="Connect to Port" 
            onClick={connectToPort}/>
            <Button color="green" 
            text="Send" 
            onClick={sendToPort}/>
        </header>
    )
}

Header.defaultProps = {
    title: "MacroMaker"
}

export default Header