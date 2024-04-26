import { useState } from "react";
import QRCode from "react-qr-code";
export default function QRCodeGenerator() {
  function handleQRGenerator() {
    SetQRCode(input);
    setInput("");
  }
  const [input, setInput] = useState("");
  const [qrCode, SetQRCode] = useState("");
  return (
    <div>
      <h1>Project : 7 QR Code Generator</h1>
      <input
        type="text"
        name="qrcode"
        placeholder="Type something to generate QE Code"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        disabled={input && input?.trim() === "" ? true : false}
        onClick={handleQRGenerator}
      >
        Generate
      </button>
      <br />
      <br />
      <QRCode
        id="qrcode"
        display={"hello"}
        value={qrCode}
        size="256"
        Color="white"
        viewBox={`0 0 256 256`}
        
      />
    </div>
  );
}
