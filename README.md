# Bootmez Tecnology - Sitio web corporativo

Sitio web estático creado desde cero para Bootmez Tecnology. Está orientado a servicios de mantenimiento de equipos, instalación de servidores, virtualización, redes, backups, telefonía IP y asesoría en seguridad de la información.

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

## Datos que conviene personalizar

En `index.html` puedes cambiar:

- Correo de contacto: busca `jdgamez69@gmail.com`.
- Dominio final: busca `https://bootmez.com` dentro del bloque JSON-LD.
- Textos de servicios, ubicación, casos de experiencia y preguntas frecuentes.
- Agrega teléfono o WhatsApp si quieres un botón directo.

## Formulario de contacto

El formulario es estático y abre el cliente de correo del visitante usando `mailto:`. Si luego quieres un formulario real con almacenamiento o envío automático, puedes integrarlo con Netlify Forms, Formspree o un backend propio.

## Colores principales

- Azul principal: `#061b33`
- Azul secundario: `#082a4a`
- Cian/acento: `#00a3cf`
- Fondo claro: `#f5f8fb`

