import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

function apiDevPlugin() {
  return {
    name: 'api-dev-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url ? req.url.split('?')[0] : '';
        if (url !== '/api/send-email') {
          return next();
        }

        // Add helper res methods if not present
        if (!res.status) {
          res.status = function (code) {
            res.statusCode = code;
            return res;
          };
        }
        if (!res.json) {
          res.json = function (data) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));
            return res;
          };
        }

        const handleRequest = async () => {
          try {
            const { default: handler } = await server.ssrLoadModule('/api/send-email.js');
            await handler(req, res);
          } catch (err) {
            console.error('Local API Error:', err);
            res.status(500).json({ error: err.message || 'Internal Server Error' });
          }
        };

        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              req.body = body ? JSON.parse(body) : {};
            } catch (e) {
              req.body = {};
            }
            handleRequest();
          });
        } else {
          handleRequest();
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  Object.assign(process.env, env);

  return {
    plugins: [react(), apiDevPlugin()],
  };
});
