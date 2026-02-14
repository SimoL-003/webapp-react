# MovieCatalogue – WebApp React

## Descrizione del progetto

MovieCatalogue è una webapp per la gestione e la consultazione di un catalogo di film, con possibilità di aggiungere recensioni e voti. L’applicazione è composta da un frontend sviluppato in React e un backend realizzato in Express (vedi cartella `webapp-express`).

### Funzionalità principali

- Visualizzazione del catalogo film con anteprima e dettagli
- Ricerca film per titolo
- Visualizzazione dettagliata di ogni film, con recensioni e voti
- Aggiunta di nuovi film tramite form dedicato
- Aggiunta di recensioni e voti ai film
- Navigazione semplice e responsive tramite navbar
- Gestione errori e pagine di fallback (404)

### Tecnologie utilizzate

- **Frontend:**
  - React (con componenti atomici, molecolari, organismi e layouts)
  - Vite (per lo sviluppo e il build)
  - Axios (per le chiamate HTTP)
  - Tailwind CSS o classi utility CSS (per lo stile)
- **Backend:**
  - Express.js (vedi cartella `webapp-express`)
  - MySQL

### Logica generale

- Il frontend comunica con il backend tramite API RESTful (es. `/api/movies`, `/api/movies/:id/reviews`)
- I dati dei film e delle recensioni sono gestiti dal backend, che si occupa di validazione, formattazione e persistenza
- Il frontend si occupa di:
  - Mostrare i dati in modo user-friendly
  - Gestire la navigazione tra le pagine (Home, Catalogo, Dettaglio, Aggiungi Film, NotFound)
  - Validare i dati lato client prima dell’invio
  - Mostrare feedback e messaggi di errore
- La struttura dei componenti React segue un design system modulare (atoms, molecules, organisms, layouts)

### Struttura delle cartelle principali

- `src/pages/` – Pagine principali dell’app (Home, Movies, MovieDetails, AddMovie, NotFound)
- `src/components/` – Componenti riutilizzabili suddivisi in atoms, molecules, organisms, layouts
- `public/` – File statici
- `vite.config.js` – Configurazione Vite

### Note aggiuntive

- Il backend gestisce la validazione e la formattazione dei dati (vedi middlewares come `formatData.js`)
- Il frontend si aspetta risposte strutturate secondo le API definite nel backend

---

Per dettagli sulle API e la logica server, consultare la cartella `webapp-express`.
