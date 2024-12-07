import { useState } from "react"

export default function RandomColor() {

    const [typeOfColor,setTypeOfColor] = useState('hex')
    const [color,setColor] = useState('#000000')

    function handleCreateRandomHexColor() {
        const hex = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor= '#'

        for(let i = 0;i<6;i++) {
            hexColor += hex[Math.floor(Math.random()*hex.length)];
        }

        setColor(hexColor)
        
    }

    function handleCreateRandomRgbColor() {
        let rgbcol = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
        setColor(rgbcol);
    }

    return (
        
        <div style={{
            width:"100vw",
            height: "100vh",
            background: color
        }}>
            <button onClick={()=> setTypeOfColor('hex')}>Generate HEX Color</button>
            <button onClick={()=> setTypeOfColor('rgb')}>Generate rgb color</button>
            <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor: handleCreateRandomRgbColor}>Generate random color</button>

            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "50px",
                fontSize: "40px",
                color: "white"

            }}> 
                <h3>{typeOfColor === 'hex' ? 'HEX COLOR ' : 'RGB COLOR '}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}