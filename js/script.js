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
    // Enregistrement dans l'historique
    enregistrerHistorique('Résumé d\'un texte', 'Résumé de texte');
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

    else if (page === 'chat') {
      renderChat();}

     else if (page === 'prediction') {
  renderPrediction();
}
    else if (page === 'historique') {
      renderHistorique();
    }
        
        // les autres pages (chat, classification, traduction, historique...) seront ajoutées plus tard
  ww});
   
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
 // Enregistrement dans l'historique
    enregistrerHistorique(`Traduction vers ${langue}`, 'Traduction');

});
}

// PARTIE 5 - Chat IA
function renderChat() {
  mainContent.innerHTML = `
    <section class="page-header">
      <h2>Chat IA</h2>
      <p>Discutez avec l'assistant intelligent</p>
    </section>

    <section class="chat-section">
      <div id="chat-messages" class="chat-messages">
        <p class="placeholder">La conversation s'affichera ici...</p>
      </div>

      <div class="chat-input-zone">
        <input type="text" id="chat-input" placeholder="Écrivez votre message...">
        <button id="btn-envoyer">Envoyer</button>
      </div>
    </section>
  `;

  const chatInput = document.getElementById('chat-input');
  const btnEnvoyer = document.getElementById('btn-envoyer');
  const chatMessages = document.getElementById('chat-messages');

  function envoyerMessage() {
    const message = chatInput.value.trim();

    if (message === '') {
      return;
    }

    // Supprime le placeholder au premier message
    const placeholder = chatMessages.querySelector('.placeholder');
    if (placeholder) {
      placeholder.remove();
    }

    // Affiche le message de l'utilisateur
    const messageUtilisateur = document.createElement('div');
    messageUtilisateur.classList.add('message', 'message-user');
    messageUtilisateur.innerHTML = `<p>${message}</p>`;
    chatMessages.appendChild(messageUtilisateur);

    chatInput.value = '';

    // Enregistrement dans l'historique
  enregistrerHistorique(`Discussion : "${message}"`, 'Chat');

    // Simulation d'une réponse IA (à remplacer plus tard par un appel API)
    setTimeout(() => {
      const messageIA = document.createElement('div');
      messageIA.classList.add('message', 'message-ia');
      messageIA.innerHTML = `<p>Réponse simulée à : "${message}"</p>`;
      chatMessages.appendChild(messageIA);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500);

    chatMessages.scrollTop = chatMessages.scrollHeight;

  }

  btnEnvoyer.addEventListener('click', envoyerMessage);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      envoyerMessage();
    }
  });
}
// PARTIE 6 - Prédiction
function renderPrediction() {
  mainContent.innerHTML = `
    <section class="page-header">
      <h2>Prédiction</h2>
      <p>Renseignez les informations pour générer une prédiction</p>
    </section>

    <section class="prediction-section">
      <div class="prediction-card">
        <label for="pred-age">Âge</label>
        <input type="number" id="pred-age" placeholder="Ex : 30">

        <label for="pred-revenu">Revenu (FCFA)</label>
        <input type="number" id="pred-revenu" placeholder="Ex : 500000">

        <label for="pred-ville">Ville</label>
        <input type="text" id="pred-ville" placeholder="Ex : Dakar">

        <button id="btn-predire">Prédire</button>
      </div>

      <div class="prediction-card">
        <label>Résultat de la prédiction</label>
        <div id="prediction-resultat" class="resultat-box">
          <p class="placeholder">La prédiction s'affichera ici...</p>
        </div>
      </div>
    </section>
  `;

  const btnPredire = document.getElementById('btn-predire');
  const predAge = document.getElementById('pred-age');
  const predRevenu = document.getElementById('pred-revenu');
  const predVille = document.getElementById('pred-ville');
  const predictionResultat = document.getElementById('prediction-resultat');

  btnPredire.addEventListener('click', () => {
    const age = predAge.value.trim();
    const revenu = predRevenu.value.trim();
    const ville = predVille.value.trim();

    if (age === '' || revenu === '' || ville === '') {
      predictionResultat.innerHTML = `<p class="placeholder">Veuillez remplir tous les champs avant de prédire.</p>`;
      return;
    }

    // Simulation d'une prédiction (à remplacer plus tard par un appel API)
    const categories = ['Faible potentiel', 'Potentiel moyen', 'Fort potentiel'];
    const resultatAleatoire = categories[Math.floor(Math.random() * categories.length)];

    predictionResultat.innerHTML = `
      <p><strong>Profil analysé :</strong> ${age} ans, ${revenu} FCFA, ${ville}</p>
      <p><strong>Résultat :</strong> ${resultatAleatoire}</p>
    `;
    // Enregistrement dans l'historique
    enregistrerHistorique(`Prédiction pour ${ville}`, 'Prédiction');
  
});
}
// PARTIE 7 - Historique

// Enregistre une entrée dans le localStorage
function enregistrerHistorique(activite, service) {
  const historique = JSON.parse(localStorage.getItem('historique')) || [];

  const nouvelleEntree = {
    id: Date.now(),
    activite: activite,
    service: service,
    utilisateur: 'Admin User',
    date: new Date().toLocaleString('fr-FR')
  };

  historique.unshift(nouvelleEntree); // ajoute au début (plus récent en premier)
  localStorage.setItem('historique', JSON.stringify(historique));
}

// Affiche la page Historique
function renderHistorique() {
  mainContent.innerHTML = `
    <section class="page-header">
      <h2>Historique</h2>
      <p>Consultez, recherchez et gérez vos requêtes passées</p>
    </section>

    <section class="historique-section">
      <div class="historique-toolbar">
        <input type="text" id="recherche-historique" placeholder="Rechercher une activité, un service...">
        <button id="btn-vider">Vider l'historique</button>
      </div>

      <div class="historique-card">
        <table>
          <thead>
            <tr>
              <th>Activité</th>
              <th>Service</th>
              <th>Utilisateur</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody id="historique-body"></tbody>
        </table>
      </div>
    </section>
  `;

  const rechercheInput = document.getElementById('recherche-historique');
  const btnVider = document.getElementById('btn-vider');

  afficherHistorique();

  rechercheInput.addEventListener('input', () => {
    afficherHistorique(rechercheInput.value.trim().toLowerCase());
  });

  btnVider.addEventListener('click', () => {
    if (confirm('Voulez-vous vraiment vider tout l\'historique ?')) {
      localStorage.removeItem('historique');
      afficherHistorique();
    }
  });
}

// Affiche les lignes du tableau, avec filtre de recherche optionnel
function afficherHistorique(filtre = '') {
  const historiqueBody = document.getElementById('historique-body');
  const historique = JSON.parse(localStorage.getItem('historique')) || [];

  const historiqueFiltre = historique.filter(entree =>
    entree.activite.toLowerCase().includes(filtre) ||
    entree.service.toLowerCase().includes(filtre)
  );

  if (historiqueFiltre.length === 0) {
    historiqueBody.innerHTML = `<tr><td colspan="5" class="placeholder">Aucune activité trouvée.</td></tr>`;
    return;
  }

  historiqueBody.innerHTML = historiqueFiltre.map(entree => `
    <tr>
      <td>${entree.activite}</td>
      <td>${entree.service}</td>
      <td>${entree.utilisateur}</td>
      <td>${entree.date}</td>
      <td><button class="btn-supprimer" data-id="${entree.id}">Supprimer</button></td>
    </tr>
  `).join('');

  // Gestion de la suppression individuelle
  document.querySelectorAll('.btn-supprimer').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.getAttribute('data-id'));
      const historiqueMisAJour = historique.filter(entree => entree.id !== id);
      localStorage.setItem('historique', JSON.stringify(historiqueMisAJour));
      afficherHistorique(filtre);
    });
  });
}