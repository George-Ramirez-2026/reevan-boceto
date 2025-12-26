(function(){
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const btnMenu = document.getElementById('btnMenu');

  function openSidebar(){
    if (!sidebar || !overlay) return;
    sidebar.classList.add('open');
    overlay.classList.add('open');
  }
  function closeSidebar(){
    if (!sidebar || !overlay) return;
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  }

  if (btnMenu) btnMenu.addEventListener('click', () => {
    if (!sidebar) return;
    sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
  });

  if (overlay) overlay.addEventListener('click', closeSidebar);

  // Cerrar sidebar al navegar (móvil)
  document.querySelectorAll('.sideLink').forEach(a => {
    a.addEventListener('click', () => {
      if (window.matchMedia('(max-width: 980px)').matches) closeSidebar();
    });
  });

  // Activo por página
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.sideLink').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    const isActive = href.endsWith(path) || (path === '' && href.endsWith('index.html'));
    a.classList.toggle('active', isActive);
  });
})();
