Project Work finale - PROGETTO CODE

realizzazione di un e-commerce
    sono stati utilizzati: Javascript, Typescript, Express.js, MongoDB
    
    la combinazione JavaScript, TypeScript, Express.js e MongoDB offre una soluzione completa;
    consente di avere un'applicazione performante, scalabile e facile da modificare
UTENTI-> creazione e registrazione profilo utente
            richiesti: nome, cognome, email e password

            APIautenticazione (authApi) viene assegnato un "role" per la gestione delle autorizzazioni
            del profilo, utilizziamo un sistema di autenticazione per garantire gli utenti
            registrati possano accedere ad alcune funzionalità.
PRODOTTI-> aggiungere, modificare, eliminare un prodotto
            richiesti: nome, marchio, prezzo
            APIprodotto (productApi) è possibile visualizzare tutti i prodotti con un GETALL, gli utenti admin
            possono aggiungere, modificare le informazioni ed eliminare un nuovo prodotto
ORDINI-> creazione, aggiornamento, eliminazione di un ordine
            richiesti: dati utente (nome, cognome, email, password)

            APIordini (orderApi)
            funzionalità utenti admin: aggiornamento dello stato dell'ordine esistente e
            cancellare l'ordine
            funzionalità utenti: visualizzare lo storico ordini, creazione di un nuovo ordine
CARRELLO-> aggiungere, rimuove, svuotare il carrello
            funzionalità: restituisce i dettagli di ogni prodotto acquistato, si può aggiungere,
            modificare ed eliminare un prodotto



    Realizzato da: Fabio Vallacqua, Valeria Imbrogio Ponaro e Dylan La Ferrera







*il file presenta dei TO DO da modificare o implementare
    users: admin register, logout (user/admin), show user logged
    orders: create, show order by id, upgrade status, delete
