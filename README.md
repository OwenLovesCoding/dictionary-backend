# 📚 Dictionary Backend – NestJS

This is the **backend API service** for a full-featured **Dictionary App**, built using **NestJS**. It receives a word query from the frontend, processes the request using internal logic or external APIs, and returns detailed lexical data such as definitions, parts of speech, examples, and phonetics. The backend is modular, scalable, and ready for deployment to cloud platforms like Railway.

---

## 🌍 Live API

- **Base URL**: `https://dictionary-backend-production-d792.up.railway.app`
- **API Endpoint**: `POST /word-service`
- **Frontend GitHub Repo**: [Dictionary Frontend](https://github.com/owenlovescoding/dictionary)


```bash
src/
├── db/
│   ├── constants.ts
│   ├── database.providers.ts
│   ├── db.module.ts
│   └── word.schema.ts
│
├── interfaces/
│   └── word.interface.ts
│
├── word-service/
│   ├── middlewares/
│   │   └── findMeaning.ts
│   ├── word-service.controller.ts
│   ├── word-service.module.ts
│   ├── word-service.service.ts
│   └── *.spec.ts
│
├── words/
│   └── words.providers.ts
│
├── app.module.ts
├── app.controller.ts
├── app.service.ts
└── main.ts
