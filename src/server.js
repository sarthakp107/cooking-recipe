const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(process.env.JSON_DB_FILE || 'data/db.json'); // Default to 'db.json' if not set
const middlewares = jsonServer.defaults();

// Middleware (optional)
server.use(middlewares);

// Use a dynamic route
server.use('/api', router);

// Dynamic port from environment variable or fallback to 3001
const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
