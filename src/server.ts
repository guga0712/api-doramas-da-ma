import app from "./app.js"; // Use .js no final do caminho

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na portaa ${PORT}`);
});
