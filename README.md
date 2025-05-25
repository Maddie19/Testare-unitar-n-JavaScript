# Testare-unitara-in-JavaScript

Tema T4: Utilizarea unui framework de testare unitară, in cazul meu Jest, pentru testarea logicii unui Task Manager în JavaScript. În cadrul acestui proiect, componentele JavaScript testate unitar sunt funcțiile și metodele care gestionează logica aplicației (addTask, deleteTask, toggleTask etc.). Interfața grafică (HTML/DOM) nu a fost inclusă în testarea unitară, deoarece testarea componentelor JS se referă la logica aplicativă, nu la partea vizuală. 

I.Software/Hardware configuration:

- Sistem: Windows 10 / Ubuntu 22.04 / MacOS (testat local)
- Node.js: v20.x
- npm: v10.x
- Framework testare: Jest v29.x
- IDE: VSCode
- Mașină virtuală: Nu a fost utilizată

 II. Strategii de testare

- Testare black-box pentru funcții publice (addTask, deleteTask, toggleTask, getTasks, clearTasks).
- Testare edge-case: text gol, index invalid.
- Testare pozitivă: adăugare, ștergere, toggle.
- Testare negativă: input invalid, index greșit.

  1. Coverage test
     
     npm test -- --coverage
     
<img width="561" alt="Screenshot 2025-05-25 at 02 28 02" src="https://github.com/user-attachments/assets/0fd301a0-bb33-4319-b525-0f2c16e56187" />

<img width="574" alt="Screenshot 2025-05-25 at 02 32 58" src="https://github.com/user-attachments/assets/3b72b2dd-7782-48cc-ba2a-11738702bd99" />


Strategii de testare


1. Partiționare în clase de echivalență
Am grupat inputurile în clase de valori echivalente, astfel încât testarea unui exemplu din fiecare clasă să fie suficientă.

Exemple:

Task valid (string nenul, nevid, cu text real)

Task invalid (string gol, doar spații, null, undefined)

Index valid pentru ștergere/toggle vs. index invalid (negativ, prea mare, neîntreg)

2. Analiza valorilor de frontieră
Am testat limitele intervalelor sau edge case-urilor.

Exemple:

Index 0 (primul task), index egal cu lungimea arrayului - 1 (ultimul task)

Task adăugat cu exact un caracter, sau cu spații la capete

Golirea unei liste deja goale

3. Acoperirea codului (coverage)
Am rulat testele cu Jest și am analizat cât la sută din codul sursă este executat de teste.

Exemple:

Instrucțiuni (statements)

Ramuri de decizie (branches)

Funcții (functions)

Linii de cod (lines)

4. Testare pozitivă și negativă

Pozitivă: am verificat si m-am asigurat că funcțiile fac ceea ce trebuie la inputuri corecte.

Negativă: am verificat si m-an asigurat că aruncă eroare/nu fac nimic când inputul e invalid.

Exemple:

addTask("Ceva") => task nou creat

addTask("") sau addTask(null) => aruncă eroare

5. Testare la nivel de decizie/condiție
   
M-am asigurat că fiecare ramură a instrucțiunilor if, else, throw etc. este acoperită.

Prezint drept exemplu situatia cand testez și când indexul este valid, și când este invalid

Alt exemplu ar fi, task completat și task necompletat la toggle

6. Testare la nivel de structură/izolare

Am testat fiecare metodă independent de UI, direct pe instanța clasei TaskManager.

Exemple:

getTasks returnează o copie, nu referința originală

Constructorul cu array presetat

7. Testare regresivă/manuală (opțional, pentru UI)
   
Am verifici manual că acțiunile din UI (adăugare, ștergere, toggle) se comportă corect.

IV. Coverage

<img width="1437" alt="Screenshot 2025-05-25 at 06 51 25" src="https://github.com/user-attachments/assets/72d7b10f-24b8-46ef-bba7-c88a5d8911bc" />

V.Pasii pe care i-am urmat pentru rula testele

1.Am clonat repo-ul:

git clone https://github.com/Maddie19/Testare-unitara-in-JavaScript.git
cd Testare-unitara-in-JavaScript

2.Am instalat dependențele:

npm install

3.Am rulat testele Jest:

npm test

4.Am generat raport de acoperire (coverage):

npm test -- --coverage

5. Am rulat testarea cu mutanți (Stryker):

npx stryker run

VI.Diagrama


![Untitled Diagram drawio](https://github.com/user-attachments/assets/77d85edb-d2df-42db-ae3e-0dcf9b18f296)

![Diagram2 drawio](https://github.com/user-attachments/assets/2487e2c9-57eb-44fa-a9b6-bbbdb4b8cc21)


   
📚 Referințe

[1] OpenAI, ChatGPT, https://chatgpt.com/, Data generării: 25 mai 2025

[2] Jest - https://jestjs.io/

[3] Stryker - https://stryker-mutator.io/

[4] Diagrams.net, https://app.diagrams.net/, Data acces: 25 mai 2025

[5] Node.js - https://nodejs.org/


