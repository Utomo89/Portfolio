// Init AOS
AOS.init({
  duration: 800,
  once: true
});

// Smooth scroll
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navbar & Back to Top
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('shadow-lg');
  } else {
    navbar.classList.remove('shadow-lg');
  }

  // Back to top button
  if (window.scrollY > 400) {
    backToTop.classList.remove('hidden');
  } else {
    backToTop.classList.add('hidden');
  }
});

// Back to top click
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// ===== Pagination Projects =====
const projects = document.querySelectorAll('#projectList .project-card');
const perPage = 6; // jumlah project per halaman
let currentPage = 1;

function renderProjects() {
  projects.forEach((project, index) => {
    project.style.display =
      index >= (currentPage - 1) * perPage && index < currentPage * perPage
        ? 'block'
        : 'none';
  });
  renderPagination();
}

function renderPagination() {
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  const totalPages = Math.ceil(projects.length / perPage);

  // Tombol Prev
  if (currentPage > 1) {
    const prev = document.createElement('button');
    prev.textContent = 'Prev';
    prev.className = "px-3 py-1 bg-dark-200 text-gray-200 rounded hover:bg-cyan-600 transition";
    prev.addEventListener('click', () => {
      currentPage--;
      renderProjects();
    });
    pagination.appendChild(prev);
  }

  // Nomor halaman
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.className = `px-3 py-1 rounded transition ${
      i === currentPage ? 'bg-cyan-600 text-white' : 'bg-dark-200 text-gray-200 hover:bg-cyan-600'
    }`;
    btn.addEventListener('click', () => {
      currentPage = i;
      renderProjects();
    });
    pagination.appendChild(btn);
  }

  // Tombol Next
  if (currentPage < totalPages) {
    const next = document.createElement('button');
    next.textContent = 'Next';
    next.className = "px-3 py-1 bg-dark-200 text-gray-200 rounded hover:bg-cyan-600 transition";
    next.addEventListener('click', () => {
      currentPage++;
      renderProjects();
    });
    pagination.appendChild(next);
  }
}

// Jalankan saat load
if (projects.length > perPage) {
  renderProjects();
}
