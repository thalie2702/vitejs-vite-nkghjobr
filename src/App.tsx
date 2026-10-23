import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

export default function App() {
  const [inputUrl, setInputUrl] = useState('');
  const [qrValue, setQrValue] = useState('');

  const handleGenerate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputUrl.trim()) return;
    setQrValue(inputUrl);
  };

  const backgroundStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffedf2',
    backgroundImage: `
      radial-gradient(#ffb6c1 15%, transparent 16%),
      radial-gradient(#ffb6c1 15%, transparent 16%)
    `,
    backgroundSize: '30px 30px',
    backgroundPosition: '0 0, 15px 15px',
    fontFamily: 'sans-serif',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(255, 182, 193, 0.5)',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
  };

  return (
    <div style={backgroundStyle}>
      <div style={cardStyle}>
        <h2 style={{ color: '#d87093', marginBottom: '20px' }}>QRコード生成ツール</h2>
        
        <form onSubmit={handleGenerate} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <input
            type="text"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder="https://example.com"
            style={{
              padding: '12px',
              fontSize: '16px',
              borderRadius: '8px',
              border: '2px solid #ffb6c1',
              outline: 'none',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '12px',
              fontSize: '16px',
              backgroundColor: '#ff69b4',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            生成
          </button>
        </form>

        {qrValue && (
          <div style={{ marginTop: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <p style={{ fontSize: '13px', color: '#666', wordBreak: 'break-all', margin: 0 }}>
              対象URL: {qrValue}
            </p>
            <div style={{ padding: '15px', background: '#fff', borderRadius: '12px', border: '2px solid #ffedf2', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <QRCodeSVG value={qrValue} size={180} level={"H"} />
            </div>
            <p style={{ fontSize: '12px', color: '#d87093', margin: 0 }}>
              スマホのカメラで読み取ってね！
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
