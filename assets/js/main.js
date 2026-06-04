const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
const yearNode = document.querySelector('[data-year]');
const form = document.querySelector('[data-contact-form]');

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 10);
};

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('menu-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('menu-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const revealNodes = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealNodes.forEach((node) => observer.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add('is-visible'));
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const email = form.dataset.email || 'jdgamez69@gmail.com';
    const nombre = data.get('nombre')?.toString().trim();
    const correo = data.get('correo')?.toString().trim();
    const telefono = data.get('telefono')?.toString().trim() || 'No indicado';
    const servicio = data.get('servicio')?.toString().trim();
    const mensaje = data.get('mensaje')?.toString().trim();
    const note = form.querySelector('[data-form-note]');

    if (!nombre || !correo || !servicio || !mensaje) {
      if (note) {
        note.textContent = 'Por favor completa los campos obligatorios antes de enviar.';
      }
      return;
    }

    const subject = `Solicitud Bootmez Tecnology - ${servicio}`;
    const body = [
      'Hola Bootmez Tecnology,',
      '',
      'Quiero solicitar información sobre un servicio.',
      '',
      `Nombre y empresa: ${nombre}`,
      `Correo: ${correo}`,
      `Teléfono: ${telefono}`,
      `Servicio de interés: ${servicio}`,
      '',
      'Mensaje:',
      mensaje,
      '',
      'Enviado desde el sitio web de Bootmez Tecnology.'
    ].join('\n');

    window.location.href = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    if (note) {
      note.textContent = 'Se abrió tu cliente de correo. Revisa el mensaje y presiona enviar.';
    }
  });
}
