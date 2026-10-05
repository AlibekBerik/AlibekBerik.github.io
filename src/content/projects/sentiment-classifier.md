---
title: Sentiment Classifier
category: NLP · Fine-tuned Transformer · REST API
year: 2026
order: 3
summary: A fine-tuned DistilBERT model that classifies movie-review sentiment, served in real time through a FastAPI backend and published on Hugging Face Hub.
highlight:
  value: "0.866"
  label: F1 score · 85.9% accuracy
image: projects/sentiment-classifier.gif
stack: [PyTorch, Hugging Face Transformers, DistilBERT, FastAPI]
links:
  - label: Model on Hugging Face
    url: https://huggingface.co/Zolotouly/sentiment-classifier-model
  - label: GitHub
    url: https://github.com/AlibekBerik/sentiment-classifier
---

- Fine-tuned **distilbert-base-uncased** on IMDb (3,000 training / 1,000 test reviews) on a Colab T4 GPU, reaching **85.9% accuracy** and a **0.866 F1 score**.
- Built a **FastAPI** backend serving real-time predictions, with an interactive Swagger UI for testing.
- Published the trained model to **Hugging Face Hub** and documented free-tier hosting constraints transparently in the README.
