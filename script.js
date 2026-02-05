// Cursor glow movement
document.addEventListener('mousemove', e => {
  document.body.style.setProperty('--x', `${e.clientX}px`);
  document.body.style.setProperty('--y', `${e.clientY}px`);
});

// GitHub projects
fetch('https://api.github.com/users/pedgeot11/repos')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('github-projects');
    data.slice(0, 6).forEach(repo => {
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `
        <h3>${repo.name}</h3>
        <p style="color:#94a3b8;font-size:14px;">
          ${repo.description || 'No description'}
        </p>
        <a href="${repo.html_url}" target="_blank" style="color:#22c55e;">
          View Repo →
        </a>
      `;
      container.appendChild(div);
    });
  });
function openSection(id) {
  document.querySelectorAll('.panel').forEach(p => p.style.display = 'none');
  document.getElementById(id).style.display = 'block';
  document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
}

