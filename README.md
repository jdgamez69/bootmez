# Bootmez Tecnology - Sitio web corporativo

Sitio web estático creado desde cero para Bootmez Tecnology. Está orientado a servicios de mantenimiento de equipos, instalación de servidores, virtualización, redes, backups, telefonía IP, seguridad de la información, agentes con IA, automatización, páginas web y asesoría para proyectos de desarrollo.

## Estructura

```text
.
├── index.html
├── netlify.toml
├── README.md
└── assets
    ├── css/styles.css
    ├── img/bootmez-logo.png
    ├── img/favicon.png
    ├── img/og-bootmez.png
    └── js/main.js
```

## Cómo publicarlo en Netlify

1. Entra a Netlify y crea un nuevo sitio.
2. Sube esta carpeta completa con la opción de despliegue manual o conéctala a un repositorio.
3. No necesitas comando de build. La carpeta de publicación es la raíz del proyecto (`.`).

## Formulario de contacto

El formulario ya está conectado a Formspree con este endpoint:

```html
action="https://formspree.io/f/xvoerlpl" method="POST"
```

Cuando un visitante envíe el formulario, el mensaje llegará al correo configurado en Formspree. El campo "Servicio de interés" incluye mantenimiento, servidores, seguridad, redes, backups, telefonía IP, agentes con IA, páginas web y asesoría para proyectos de desarrollo.

## Datos que conviene personalizar

En `index.html` puedes cambiar:

- Correo de contacto: busca `jdgamez69@gmail.com`.
- Dominio final: busca `https://bootmez.com` dentro del bloque JSON-LD.
- Textos de servicios, ubicación, casos de experiencia y preguntas frecuentes.
- Agrega teléfono o WhatsApp si quieres un botón directo.

## Colores principales

- Azul principal: `#061b33`
- Azul secundario: `#082a4a`
- Cian/acento: `#00a3cf`
- Fondo claro: `#f5f8fb`
