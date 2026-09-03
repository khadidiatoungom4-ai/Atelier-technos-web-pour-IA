// Sélection des éléments principaux
const navItems = document.querySelectorAll('.nav-item');
const mainContent = document.getElementById('main-content');

// Fonction pour retirer la classe active de tous les liens et l'ajouter au bon
function setActiveNav(clickedItem) {
  navItems.forEach(item => item.classList.remove('active'));
  clickedItem.classList.add('active');
}

// PARTIE 3 - Résumé de texte
function renderResume() {
  mainContent.innerHTML = `
    <section class="page-header">
      <h2>Résumé de texte</h2>
      <p>Collez votre texte pour en générer un résumé</p>
    </section>

    <section class="resume-section">
      <div class="resume-card">
        <label for="texte-source">Texte à résumer</label>
        <textarea id="texte-source" rows="8" placeholder="Collez ou écrivez votre texte ici..."></textarea>
        <button id="btn-resumer">Résumer</button>
      </div>

      <div class="resume-card">
        <label>Résumé généré</label>
        <div id="resume-resultat" class="resultat-box">
          <p class="placeholder">Le résumé s'affichera ici...</p>
        </div>
      </div>
    </section>
  `;

  const btnResumer = document.getElementById('btn-resumer');
  const texteSource = document.getElementById('texte-source');
  const resumeResultat = document.getElementById('resume-resultat');

  btnResumer.addEventListener('click', () => {
    const texte = texteSource.value.trim();

    if (texte === '') {
      resumeResultat.innerHTML = `<p class="placeholder">Veuillez saisir un texte avant de résumer.</p>`;
      return;
    }

    // Simulation d'un résumé (à remplacer plus tard par un appel API)
    const resumeSimule = texte.split(' ').slice(0, 15).join(' ') + '...';
    resumeResultat.innerHTML = `<p>${resumeSimule}</p>`;
  });
}

// Gestion de la navigation (clic sur les items du menu)
navItems.forEach(item => {
  item.addEventListener('click', () => {
    setActiveNav(item);
    const page = item.getAttribute('data-page');

    if (page === 'resume') {
        renderResume();} 
    else if
        (page === 'traduction') {renderTraduction();}
    // les autres pages (chat, classification, traduction, historique...) seront ajoutées plus tard
  });
});
// PARTIE 4 - Traduction
function renderTraduction() {
  mainContent.innerHTML = `
    <section class="page-header">
      <h2>Traduction</h2>
      <p>Traduisez votre texte dans la langue de votre choix</p>
    </section>

    <section class="traduction-section">
      <div class="traduction-card">
        <label for="texte-a-traduire">Texte à traduire</label>
        <textarea id="texte-a-traduire" rows="8" placeholder="Écrivez ou collez votre texte ici..."></textarea>

        <label for="langue-cible">Langue cible</label>
        <select id="langue-cible">
          <option value="en">Anglais</option>
          <option value="es">Espagnol</option>
          <option value="de">Allemand</option>
          <option value="ar">Arabe</option>
          <option value="it">Italien</option>
        </select>

        <button id="btn-traduire">Traduire</button>
      </div>

      <div class="traduction-card">
        <label>Traduction générée</label>
        <div id="traduction-resultat" class="resultat-box">
          <p class="placeholder">La traduction s'affichera ici...</p>
        </div>
      </div>
    </section>
  `;

  const btnTraduire = document.getElementById('btn-traduire');
  const texteATraduire = document.getElementById('texte-a-traduire');
  const langueCible = document.getElementById('langue-cible');
  const traductionResultat = document.getElementById('traduction-resultat');

  btnTraduire.addEventListener('click', () => {
    const texte = texteATraduire.value.trim();
    const langue = langueCible.options[langueCible.selectedIndex].text;

    if (texte === '') {
      traductionResultat.innerHTML = `<p class="placeholder">Veuillez saisir un texte avant de traduire.</p>`;
      return;
    }

    // Simulation d'une traduction (à remplacer plus tard par un appel API)
    const traductionSimulee = `[Traduction simulée en ${langue}] ${texte}`;
    traductionResultat.innerHTML = `<p>${traductionSimulee}</p>`;
  });
}
