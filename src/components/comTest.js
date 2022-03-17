import Button from "./Button.js"

const ComTest = ({ title }) => {
    var port = ''
    const connectToPort = async () => {
        const port = await navigator.serial.requestPort()
        console.log(port)
        await port.open({baudRate: 9600})
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
            onClick={console.log('clicked')}/>
        </header>
    )
}

ComTest.defaultProps = {
    title: "MacroMaker"
}

export default ComTest