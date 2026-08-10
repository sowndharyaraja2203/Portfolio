// Sowndharya R Portfolio Interactive Engine
document.addEventListener('DOMContentLoaded', () => {
  const data = window.portfolioData;
  if (!data) return;
  // 1. Splash Loader Dismissal
  const splashLoader = document.getElementById('splashLoader');
  const splashLaser = document.getElementById('splashLaser');
  if (splashLaser) {
    setTimeout(() => {
      splashLaser.style.transform = 'scaleX(1)';
    }, 200);
  }
  setTimeout(() => {
    if (splashLoader) {
      splashLoader.style.opacity = '0';
      setTimeout(() => {
        splashLoader.style.display = 'none';
      }, 700);
    }
  }, 1400);
  // 2. Ambient Particle Canvas Animation
  initAmbientCanvas();
  // 3. Render Profile & Hero Content
  renderProfile(data.profile);
  // 4. Render GitHub Activity Grid & DSA Stats
  renderGitHubGrid(data.stats.commitsThisYear);
  renderDsaStats(data.stats);
  // 5. Render Orbital Tech Ecosystem
  renderOrbitalSkills(data.orbitalSkills);
  // 6. Render Projects Showcase
  renderProjects(data.projects);
  // 6.5 Render Achievements & Participation
  renderAchievements(data.achievements);
  // 7. Render Methodology Process
  renderProcess(data.process);
  // 8. Render Experience & Background Timeline
  renderExperience(data.experience);
  // 9. Setup Event Listeners for Modals & Live Editor Drawer
  setupModalEvents(data);
});
// Ambient Floating Particle Background Canvas
function initAmbientCanvas() {
  const canvas = document.getElementById('ambientCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);
  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
  const particles = [];
  const particleCount = 45;
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.8 + 0.6,
      alpha: Math.random() * 0.5 + 0.2
    });
  }
  function draw() {
    ctx.clearRect(0, 0, width, height);
    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - dist / 130)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    // Update and draw particles
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(96, 165, 250, ${p.alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
}
// Render Profile Details
function renderProfile(profile){
  document.title = `${profile.name} — ${profile.title}`;
  const navName = document.getElementById('navName');
  if (navName) navName.textContent = profile.name;
  const heroAvatar = document.getElementById('heroAvatar');
  if (heroAvatar && profile.avatar) heroAvatar.src = profile.avatar;
  const heroStatus = document.getElementById('heroStatus');
  if (heroStatus) heroStatus.textContent = profile.status;
  const heroName = document.getElementById('heroName');
  if (heroName) heroName.textContent = profile.name;
  const heroTitle = document.getElementById('heroTitle');
  if (heroTitle) heroTitle.textContent = profile.title;
  const heroBio = document.getElementById('heroBio');
  if (heroBio) heroBio.textContent = profile.bio;
  const emailBtn = document.getElementById("emailBtn");
  if (emailBtn) {
    emailBtn.addEventListener("click", function () {
        window.location.href =
            "mailto:sowndharyaraja2203@gmail.com?subject=Portfolio Contact&body=Hello Sowndharya,";
    });
}
  const githubLink = document.getElementById('githubLink');
  if (githubLink && profile.github) githubLink.href = profile.github;
  const linkedinLink = document.getElementById('linkedinLink');
  if (linkedinLink && profile.linkedin) linkedinLink.href = profile.linkedin;
  const leetcodeLink = document.getElementById('leetcodeLink');
  if (leetcodeLink && profile.leetcode) leetcodeLink.href = profile.leetcode;
}
// GitHub Commit Matrix Grid Generator
function renderGitHubGrid(totalCommits) {
  const gridContainer = document.getElementById('githubGrid');
  const countEl = document.getElementById('githubCommitsCount');
  if (countEl) countEl.textContent = totalCommits;
  if (!gridContainer) return;
  gridContainer.innerHTML = '';
  const totalTiles = 108; // 18 cols x 6 rows
  for (let i = 0; i < totalTiles; i++) {
    const tile = document.createElement('div');
    tile.className = 'w-full aspect-square rounded-[2px] transition-all duration-300 hover:scale-125 hover:z-20 cursor-pointer';
    // Seed commit heat levels
    const randomVal = Math.random();
    let heatClass = 'heat-level-0';
    if (randomVal > 0.85) heatClass = 'heat-level-4';
    else if (randomVal > 0.65) heatClass = 'heat-level-3';
    else if (randomVal > 0.45) heatClass = 'heat-level-2';
    else if (randomVal > 0.3) heatClass = 'heat-level-1';
    tile.classList.add(heatClass);
    tile.title = `Contributions logged`;
    gridContainer.appendChild(tile);
  }
}
// DSA Stats Render
function renderDsaStats(stats) {
  const totalEl = document.getElementById('dsaTotalCount');
  if (totalEl) totalEl.textContent = stats.dsaSolved;
  const easyEl = document.getElementById('dsaEasyCount');
  const easyBar = document.getElementById('dsaEasyBar');
  if (easyEl && easyBar) {
    easyEl.textContent = stats.dsaBreakdown.easy;
    easyBar.style.width = `${(stats.dsaBreakdown.easy / stats.dsaSolved) * 100}%`;
  }
  const mediumEl = document.getElementById('dsaMediumCount');
  const mediumBar = document.getElementById('dsaMediumBar');
  if (mediumEl && mediumBar) {
    mediumEl.textContent = stats.dsaBreakdown.medium;
    mediumBar.style.width = `${(stats.dsaBreakdown.medium / stats.dsaSolved) * 100}%`;
  }
  const hardEl = document.getElementById('dsaHardCount');
  const hardBar = document.getElementById('dsaHardBar');
  if (hardEl && hardBar) {
    hardEl.textContent = stats.dsaBreakdown.hard;
    hardBar.style.width = `${(stats.dsaBreakdown.hard / stats.dsaSolved) * 100}%`;
  }
}
// Orbital Ecosystem Skills Renderer
function renderOrbitalSkills(skills) {
  const container = document.getElementById('orbitNodesContainer');
  if (!container) return;
  container.innerHTML = '';
  const ringsData = [
    { items: skills.core, radius: 120, colorClass: 'border-blue-500/40 text-blue-400 bg-slate-950/90 shadow-blue-500/20' },
    { items: skills.backend, radius: 200, colorClass: 'border-amber-500/40 text-amber-400 bg-slate-950/90 shadow-amber-500/20' },
    { items: skills.devopsAi, radius: 270, colorClass: 'border-emerald-500/40 text-emerald-400 bg-slate-950/90 shadow-emerald-500/20' }
  ];
  ringsData.forEach(ring => {
    ring.items.forEach(skill => {
      const rad = (skill.angle * Math.PI) / 180;
      const x = Math.cos(rad) * ring.radius;
      const y = Math.sin(rad) * ring.radius;
      const node = document.createElement('div');
      node.className = `absolute px-3.5 py-1.5 rounded-full border text-xs font-bold font-mono whitespace-nowrap shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 cursor-pointer ${ring.colorClass}`;
      node.style.left = `calc(50% + ${x}px)`;
      node.style.top = `calc(50% + ${y}px)`;
      node.style.transform = 'translate(-50%, -50%)';
      node.textContent = skill.name;
      container.appendChild(node);
    });
  });
}
// Projects Renderer
function renderProjects(projects) {
  const container = document.getElementById('projectsContainer');
  if (!container) return;
  container.innerHTML = '';
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'group glass-card rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 flex flex-col justify-between cursor-pointer relative overflow-hidden';
    card.innerHTML = `
      <div>
        <div class="flex justify-between items-start mb-6">
          <div class="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
            <span class="material-symbols-outlined text-2xl text-blue-400 group-hover:text-white">${project.icon}</span>
          </div>
          <div class="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-slate-950 transition-colors">
            <span class="material-symbols-outlined text-sm">open_in_full</span>
          </div>
        </div>
        <h3 class="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">${project.name}</h3>
        <div class="text-xs font-mono font-semibold mb-4 text-blue-400 uppercase tracking-wider">${project.subtitle}</div>
        <p class="text-slate-400 text-sm leading-relaxed mb-6">${project.description}</p>
      </div>
      <div class="flex flex-wrap gap-2 pt-6 border-t border-slate-800/80">
        ${project.tags.map(tag => `<span class="text-[11px] font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-800">${tag}</span>`).join('')}
      </div>
    `;
    card.addEventListener('click', () => openProjectModal(project));
    container.appendChild(card);
  });
}
// Achievements & Participation Renderer
function renderAchievements(achievements) {
  const container = document.getElementById('achievementsContainer');
  if (!container) return;
  container.innerHTML = '';
  achievements.forEach(item => {
    const entry = document.createElement('div');
    entry.className = 'relative group';
    entry.innerHTML = `
      <div class="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 group-hover:scale-125 transition-transform" style="border-color: ${item.color};"></div>
      <div class="flex items-center gap-2 mb-1">
        <span class="material-symbols-outlined text-base" style="color: ${item.color};">${item.icon}</span>
        <h3 class="text-xl font-bold text-white">${item.title}</h3>
      </div>
      <h4 class="text-sm font-semibold text-slate-400 mb-3">${item.org}</h4>
      <p class="text-slate-400 text-sm leading-relaxed max-w-xl">${item.description}</p>
    `;
    container.appendChild(entry);
  });
}
// Methodology Process Renderer (Numbers Removed!)
function renderProcess(processSteps) {
  const container = document.getElementById('processContainer');
  if (!container) return;
  container.innerHTML = '';
  processSteps.forEach(step => {
    const card = document.createElement('div');
    card.className = 'glass-card p-6 rounded-2xl border border-slate-800 hover:border-blue-500/40 transition-all group relative overflow-hidden';
    card.innerHTML = `
      <h4 class="text-lg font-bold text-white mb-3 relative z-10 mt-2">${step.title}</h4>
      <p class="text-slate-400 text-xs leading-relaxed relative z-10">${step.description}</p>
    `;
    container.appendChild(card);
  });
}
// Experience Timeline Renderer
function renderExperience(timeline) {
  const container = document.getElementById('experienceContainer');
  if (!container) return;
  container.innerHTML = '';
  timeline.forEach(item => {
    const entry = document.createElement('div');
    entry.className = 'relative group';
    entry.innerHTML = `
      <div class="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-blue-500 group-hover:scale-125 transition-transform"></div>
      <span class="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-1">${item.period}</span>
      <h3 class="text-xl font-bold text-white">${item.role}</h3>
      <h4 class="text-sm font-semibold text-slate-400 mb-3">${item.company}</h4>
      <p class="text-slate-400 text-sm leading-relaxed max-w-xl">${item.description}</p>
    `;
    container.appendChild(entry);
  });
}
// Modal & Live Editor Logic
function setupModalEvents(data) {
  // 1. Project Modal
  const projectModal = document.getElementById('projectModal');
  const closeProjectModalBtn = document.getElementById('closeProjectModal');
  if (closeProjectModalBtn) {
    closeProjectModalBtn.addEventListener('click', () => {
      projectModal.classList.add('hidden');
      projectModal.classList.remove('flex');
    });
  }
  // 2. Resume Modal
  const resumeModal = document.getElementById('resumeModal');
  const openResumeBtn = document.getElementById('openResumeBtn');
  const heroResumeBtn = document.getElementById('heroResumeBtn');
  const closeResumeModalBtn = document.getElementById('closeResumeModal');
  const openResume = () => {
    if (resumeModal) {
      resumeModal.classList.remove('hidden');
      resumeModal.classList.add('flex');
    }
  };
  if (openResumeBtn) openResumeBtn.addEventListener('click', openResume);
  if (heroResumeBtn) heroResumeBtn.addEventListener('click', openResume);
  if (closeResumeModalBtn) {
    closeResumeModalBtn.addEventListener('click', () => {
      if (resumeModal) {
        resumeModal.classList.add('hidden');
        resumeModal.classList.remove('flex');
      }
    });
  }
  // 3. Live Editor Drawer
  const editorDrawer = document.getElementById('editorDrawer');
  const openEditorBtn = document.getElementById('openEditorBtn');
  const closeEditorDrawerBtn = document.getElementById('closeEditorDrawer');
  const editorForm = document.getElementById('editorForm');
  if (openEditorBtn && editorDrawer) {
    openEditorBtn.addEventListener('click', () => {
      document.getElementById('editName').value = data.profile.name;
      document.getElementById('editTitle').value = data.profile.title;
      document.getElementById('editStatus').value = data.profile.status;
      document.getElementById('editBio').value = data.profile.bio;
      document.getElementById('editEmail').value = data.profile.email;
      document.getElementById('editCommits').value = data.stats.commitsThisYear;
      document.getElementById('editDsa').value = data.stats.dsaSolved;
      editorDrawer.classList.remove('translate-x-full');
    });
  }
  if (closeEditorDrawerBtn && editorDrawer) {
    closeEditorDrawerBtn.addEventListener('click', () => {
      editorDrawer.classList.add('translate-x-full');
    });
  }
  if (editorForm) {
    editorForm.addEventListener('submit', (e) => {
      e.preventDefault();
      data.profile.name = document.getElementById('editName').value;
      data.profile.title = document.getElementById('editTitle').value;
      data.profile.status = document.getElementById('editStatus').value;
      data.profile.bio = document.getElementById('editBio').value;
      data.profile.email = document.getElementById('editEmail').value;
      data.stats.commitsThisYear = parseInt(document.getElementById('editCommits').value) || data.stats.commitsThisYear;
      data.stats.dsaSolved = parseInt(document.getElementById('editDsa').value) || data.stats.dsaSolved;
      renderProfile(data.profile);
      renderGitHubGrid(data.stats.commitsThisYear);
      renderDsaStats(data.stats);
      editorDrawer.classList.add('translate-x-full');
    });
  }
}
// Open Project Overlay Modal Function
function openProjectModal(project) {
  const projectModal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  if (!projectModal || !modalContent) return;
  modalContent.innerHTML = `
    <div class="flex items-center gap-3 mb-4">
      <div class="w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
        <span class="material-symbols-outlined text-2xl">${project.icon}</span>
      </div>
      <div>
        <h3 class="text-2xl font-bold text-white">${project.name}</h3>
        <span class="text-xs font-mono text-blue-400 uppercase">${project.subtitle}</span>
      </div>
    </div>
    <p class="text-slate-300 text-sm leading-relaxed mb-6 border-b border-slate-800 pb-6">${project.longDescription}</p>
    <div class="mb-6">
      <h4 class="text-xs uppercase tracking-widest font-mono text-slate-400 mb-3">Architectural Components</h4>
      <div class="grid grid-cols-2 gap-3">
        ${project.architecture.map(arch => `
          <div class="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            <span>${arch}</span>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="mb-8">
      <h4 class="text-xs uppercase tracking-widest font-mono text-slate-400 mb-3">Technologies</h4>
      <div class="flex flex-wrap gap-2">
        ${project.tags.map(tag => `<span class="bg-blue-500/10 border border-blue-500/30 text-blue-300 px-3 py-1 rounded text-xs font-mono">${tag}</span>`).join('')}
      </div>
    </div>
    <div class="flex items-center gap-4 pt-4 border-t border-slate-800">
      <a href="${project.github}" target="_blank" class="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2">
        <svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        <span>GitHub Repo</span>
      </a>
      <a href="${project.demo}" target="_blank" class="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider text-center transition-colors shadow-lg flex items-center justify-center gap-2">
        <span class="material-symbols-outlined text-base">open_in_new</span>
        <span>Live Preview</span>
      </a>
    </div>
  `;
  projectModal.classList.remove('hidden');
  projectModal.classList.add('flex');
}
// Achievements & Participation Renderer
function renderAchievements(achievements) {
  const container = document.getElementById('achievementsContainer');
  if (!container) return;
  container.innerHTML = '';
  achievements.forEach(item => {
    const card = document.createElement('div');
    card.className = 'glass-card p-6 rounded-2xl border border-slate-800 hover:border-blue-500/40 transition-all group relative overflow-hidden';
    card.innerHTML = `
      <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border" style="background: ${item.color}1A; border-color: ${item.color}4D;">
        <span class="material-symbols-outlined text-xl" style="color: ${item.color};">${item.icon}</span>
      </div>
      <h4 class="text-base font-bold text-white mb-1.5">${item.title}</h4>
      <p class="text-xs font-mono text-slate-400 mb-3">${item.org}</p>
      <p class="text-slate-400 text-xs leading-relaxed">${item.description}</p>
    `;
    container.appendChild(card);
  });
}