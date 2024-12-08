import React from "react";
import QRCode from "react-qr-code";
import { useState } from "react";

const QRCodeGenerator = ()=> {

    const [qrCode,setQrCode] = useState('')
    const [input,setInput] = useState('')

    function handleGenerateCode() {
        setQrCode(input)
    }

    return (
    <div>
        <h1>QR Code generator</h1>
        <div>
            <input onChange = {(e)=> setInput(e.target.value)} type="text" name="qr-code" placeholder="Enter your value here" />
            <button disabled = {input && input.trim() !== ''? false:true} onClick={handleGenerateCode}>Generate</button>
        </div>
        <div>
            <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff"/>
        </div>
    </div>
    )
    
}

export default QRCodeGenerator;

