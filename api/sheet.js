export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const SHEET = "https://script.google.com/macros/s/AKfycbwrRpCbZwZ0Uczd-VVmdNqnZ3WeV6FDcrrZM6Vwl61Bh8XjWtbhiMkrZyvk_IO9GJcn/exec";
  try {
    const r = await fetch(SHEET + '?t=' + Date.now());
    const data = await r.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
