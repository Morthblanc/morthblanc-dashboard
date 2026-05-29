export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const BINGX = "https://open-api.bingx.com/openApi/swap/v3/quote/klines?symbol=BTC-USDT&interval=1h&limit=120";
  try {
    const r = await fetch(BINGX);
    const data = await r.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
