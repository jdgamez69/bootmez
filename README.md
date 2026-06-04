# Bootmez Tecnologia - Sitio web corporativo

Sitio web estático para Bootmez Tecnologia, enfocado en soporte tecnológico preventivo para empresas en San José de Cúcuta y área metropolitana.

## Cambios de esta versión

- Inicio más corto y comercial.
- Mensaje principal enfocado en Cúcuta.
- Servicios reorganizados en 4 líneas principales:
  - Mantenimiento y soporte TI.
  - Servidores, redes y respaldos.
  - Seguridad de la información.
  - IA, automatización y desarrollo web.
- Nueva sección de problemas que resuelve Bootmez.
- Nueva sección de modalidades de servicio:
  - Visita técnica.
  - Mantenimiento preventivo.
  - Soporte mensual.
  - Proyecto puntual.
- Sección de IA más clara y menos invasiva.
- Formulario conectado a Formspree.

## Archivos principales

- `index.html`: estructura del sitio.
- `assets/css/styles.css`: estilos responsive.
- `assets/js/main.js`: menú móvil, año automático y animaciones.
- `assets/img/`: logo, favicon y vista previa.
- `netlify.toml`: configuración básica para Netlify.

## Formulario de contacto

El formulario usa el endpoint:

```html
action="https://formspree.io/f/xvoerlpl" method="POST"
```

Los mensajes llegan al correo configurado en Formspree.

## Publicación en Netlify

1. Entra a Netlify.
2. Sube la carpeta completa del proyecto o conecta el repositorio.
3. No requiere build command.
4. El directorio de publicación es la raíz del proyecto.

## Personalización pendiente

Cuando tengas datos corporativos definitivos, reemplaza:

- Correo.
- Teléfono o WhatsApp.
- Dominio final.
- Casos de éxito reales.
- Horarios de atención.
