export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const token = process.env.FOOTBALL_DATA_TOKEN;

  if (!token) {
    return res.status(500).json({
      error: "Variável FOOTBALL_DATA_TOKEN não configurada na Vercel"
    });
  }

  try {
    const response = await fetch("https://api.football-data.org/v4/competitions/WC/matches", {
      headers: {
        "X-Auth-Token": token
      }
    });

    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=120");
    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(500).json({
      error: "Erro ao consultar Football-Data",
      details: error.message
    });
  }
}
