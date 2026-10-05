---
title: Kazakh Culture RAG Q&A System
category: LLMs · RAG · Vector Search · API
year: 2026
order: 1
summary: A retrieval-augmented Q&A system that answers questions about Kazakh culture from real Wikipedia sources — citing them, and refusing to answer when the knowledge base doesn't cover the question.
highlight:
  value: "6-stage"
  label: pipeline · fetch → chunk → embed → store → retrieve → generate
image: projects/rag-qa-system.gif
stack: [ChromaDB, sentence-transformers, Groq LLM API, FastAPI, Docker]
links:
  - label: GitHub
    url: https://github.com/AlibekBerik/rag-qa-system
---

- Built a full **RAG pipeline**: fetches Wikipedia articles (nomadic pastoralism, yurts, dombra, Nauryz, cuisine, eagle hunting, the Kazakh Khanate) and splits them into overlapping ~500-word chunks.
- Embedded chunks with **sentence-transformers** (all-MiniLM-L6-v2) and stored them in a **ChromaDB** vector database for semantic retrieval.
- Generated answers with an LLM via the **Groq API**, grounded in retrieved context and **citing sources** — out-of-scope questions get "I don't have enough information" instead of a hallucination.
- Served through a **FastAPI** endpoint and containerised with **Docker**; the index rebuilds from scratch in under a minute.
