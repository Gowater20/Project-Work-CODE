# General considerations

- README migliorabile, sia in termini di contenuto che formattazione
    [V]- Improvements: aggiungere link ai profili github dei partecipanti, specificare eventuali contenuti del file .env per avviare il progetto, altre informazioni necessarie per avviare il progetto, funzionalità mancanti
    [V]- Formattazione: seguire la formattazione markdown (vedi guida https://www.markdownguide.org/)
    [V] - Fare cenno della cartella `TestAPI` nel file README


# Auth

[V]- Signup restituisce un errore 500 (invece di 400) se l'utente è già esistente
[V]- Il salt di bcrypt è invalido; viene utilizzato il valore numerico `10` per codificare la password dell'utente, ma in questo modo bcrypt interpreta il parametro come 'numero di hops' invece che come salt vero e proprio. Utilizzate `$2a$10$7h/0SQ4FXRG5eX3602o3/.6xGWZdP6oqHGWcCHS1A3oRFZ70gSB8a` al posto del numero 10. Come riferimento utilizzate la pagina ufficiale della libreria [QUI](https://www.npmjs.com/package/bcryptjs) e anche questo Stack Overflow https://stackoverflow.com/questions/63859143/bcryptjs-salt-as-a-string
[DOPO]- Login deve creare un token JWT valido, contenente al suo interno anche almeno l'email o l'id dell'utente
-[DOPO] Il metodo di recupero utente da JWT token è sostanzialmente pronto, va capito il motivo per cui la verifica del token vada in errore


# Products

 - [V]Nella cancellazione viene restituito il prodotto cancellato; poteva bastare un HTTP 204 oppure HTTP 200 con il solo messaggio "message"
- [V](minor) nell'esempio di aggiornamento c'è il field `id` che però non è utilizzato
- [NO]Manca la validazione dei valori in input rispetto ai tipi di campo sul database


# Carrello

- Il carrello in sé funziona, ma l'utente non viene recuperato né dal JWT token né dalla request body (fatta eccezione per l'aggiunta di prodotto al carrello). Due cose da fare:
    1. Usare `const userId = req.body.userId; // TODO recuperare id utente dal JWT token` ovunque al posto della costante scritta a mano;
    2. Specificare che l'API del carrello funziona in questo modo perché non siete riusciti ad implementare la gestione del JWT middleware token
- Il totale di spesa del carrello non viene calcolato (questo vi serve nell'ordine)


# Ordini

- La creazione dell'ordine è implementata a metà, dovrebbe contenere altre informazioni mancanti nella richiesta e calcolare il totale
- Dovreste, in alternativa:
    - Cancellare il cart e ricrearne uno nuovo, dopo avere spostato i productID nell'ordine
    - Gestire la possibilità di avere più cart per un utente, ed in quel caso utilizzare un attributo per marcare il cart attivo per quell'utente
- Manca lo stato dell'ordine
- Nel file di esempio rest per gli ordini ci sono degli esempi che puntano al cart e questo crea dubbio al revisore

# Admin

- Non c'è l'api per la gestione ordini lato admin