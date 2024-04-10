

Project Work finale PROGETTO CODE

realizzazione di un e-commerce
    sono stati utilizzati: Javascript, Typescript, Express.js, MongoDB

UTENTI-> creazione e registrazione profilo utente
            richiesti: nome, cognome, email, password, data di nascita

            APIautenticazione (authApi) viene assegnato un "role" per la gestione delle autorizzazioni
            del profilo, utilizziamo un sistema di autenticazione per garantire gli utenti
            registrati possano accedere ad alcune funzionalità.
PRODOTTI-> aggiungere, modificare, eliminare un prodotto
            richiesti: nome, marchio, prezzo, sconti

            APIprodotto (productApi) è possibile visualizzare tutti i prodotti con un GETALL, gli utenti admin
            possono aggiungere, modificare le informazioni ed eliminare un nuovo prodotto
ORDINI-> creazione, aggiornamento, eliminazione di un ordine
            richiesti: dati utente (nome, cognome, email, password, data di nascita)

            APIordini (orderApi)
            funzionalità utenti admin: aggiornamento dello stato dell'ordine esistente e
            cancellare l'ordine
            funzionalità utenti: visualizzare lo storico ordini, creazione di un nuovo ordine
CARRELLO-> aggiungere, rimuove, svuotare il carrello
            funzionalità: restituisce i dettagli di ogni prodotto acquistato, si pùò aggiungere,
            modificare ed eliminare un prodotto