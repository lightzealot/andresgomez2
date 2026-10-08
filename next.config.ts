import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  async redirects() {
    return [
      {
        "source": "/recursos",
        "destination": "https://comunidad.andresgomez.store/recursos",
        "permanent": true
      },
      {
        "source": "/recursos/:slug",
        "destination": "https://comunidad.andresgomez.store/recursos/:slug",
        "permanent": true
      },
      {
        "source": "/prompt-ia-objetiva.txt",
        "destination": "https://comunidad.andresgomez.store/recursos",
        "permanent": true
      },
      {
        "source": "/formula-buen-prompt.txt",
        "destination": "https://comunidad.andresgomez.store/recursos",
        "permanent": true
      },
      {
        "source": "/videos-animados-claude.txt",
        "destination": "https://comunidad.andresgomez.store/recursos",
        "permanent": true
      },
      {
        "source": "/sistema-60-minutos-contenido-ia.txt",
        "destination": "https://comunidad.andresgomez.store/recursos",
        "permanent": true
      },
      {
        "source": "/recurso-10-ideas-recordatorios-ia.txt",
        "destination": "https://comunidad.andresgomez.store/recursos",
        "permanent": true
      },
      {
        "source": "/ia1.txt",
        "destination": "https://comunidad.andresgomez.store/recursos",
        "permanent": true
      },
      {
        "source": "/3.txt",
        "destination": "https://comunidad.andresgomez.store/recursos",
        "permanent": true
      },
      {
        "source": "/codigos.txt",
        "destination": "https://comunidad.andresgomez.store/recursos",
        "permanent": true
      },
      {
        "source": "/plantilla-prompt-google-flow.txt",
        "destination": "https://comunidad.andresgomez.store/recursos",
        "permanent": true
      },
      {
        "source": "/guia-google-flow-para-principiantes.txt",
        "destination": "https://comunidad.andresgomez.store/recursos",
        "permanent": true
      }
    ];
  },
};

export default nextConfig;
