# Testare-unitara-in-JavaScript

Tema T4: Utilizarea unui framework de testare unitară (Jest) pentru testarea logicii unui Task Manager în JavaScript. În cadrul acestui proiect, componentele JavaScript testate unitar sunt funcțiile și metodele care gestionează logica aplicației (addTask, deleteTask, toggleTask etc.). Interfața grafică (HTML/DOM) nu a fost inclusă în testarea unitară, deoarece testarea componentelor JS se referă la logica aplicativă, nu la partea vizuală. 

Software/Hardware configuration:

- Sistem: Windows 10 / Ubuntu 22.04 / MacOS (testat local)
- Node.js: v20.x
- npm: v10.x
- Framework testare: Jest v29.x
- IDE: VSCode
- Mașină virtuală: Nu a fost utilizată

  Strategii de testare

- Testare black-box pentru funcții publice (addTask, deleteTask, toggleTask, getTasks, clearTasks).
- Testare edge-case: text gol, index invalid.
- Testare pozitivă: adăugare, ștergere, toggle.
- Testare negativă: input invalid, index greșit.

  1. Coverage test
     
     npm test -- --coverage
     
<img width="561" alt="Screenshot 2025-05-25 at 02 28 02" src="https://github.com/user-attachments/assets/0fd301a0-bb33-4319-b525-0f2c16e56187" />

<img width="574" alt="Screenshot 2025-05-25 at 02 32 58" src="https://github.com/user-attachments/assets/3b72b2dd-7782-48cc-ba2a-11738702bd99" />


Instalare si rulare
```bash
npm install
npm test


## Referințe bibliografice

[1] Jest, Documentație oficială, https://jestjs.io/, Data ultimei accesări: 24 mai 2025  
[2] OpenAI, ChatGPT, https://chatgpt.com/, Data generării: 24 mai 2025  


