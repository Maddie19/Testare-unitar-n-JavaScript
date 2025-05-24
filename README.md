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


Instalare si rulare
```bash
npm install
npm test


## Referințe bibliografice

[1] Jest, Documentație oficială, https://jestjs.io/, Data ultimei accesări: 24 mai 2025  
[2] OpenAI, ChatGPT, https://chatgpt.com/, Data generării: 24 mai 2025  


