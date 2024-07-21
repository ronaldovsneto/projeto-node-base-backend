
export default function errorHandler(err, req, res, next) {
  console.error(err.stack); 
  const status = err.status || 500; 
  const message = err.message || 'Erro interno do servidor'; 

  res.status(status).json({ error: message });
}