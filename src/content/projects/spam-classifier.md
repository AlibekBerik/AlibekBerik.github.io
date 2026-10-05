---
title: Spam vs Ham Classifier
category: NLP · Text Classification
year: 2025
order: 7
summary: A message classifier that separates spam from legitimate messages, with an interactive terminal interface for real-time predictions.
highlight:
  value: "~95%"
  label: accuracy on 10,000+ messages
stack: [Scikit-learn, Naive Bayes, Bag-of-Words, Pandas]
links:
  - label: GitHub
    url: https://github.com/AlibekBerik/spam-vs-ham-classifier
---

- Extracted text features with a **Bag-of-Words** model (CountVectorizer) and trained a **Multinomial Naive Bayes** classifier on 10,000+ labelled messages.
- Evaluated with accuracy, a confusion matrix and a full classification report.
- Added an interactive terminal interface for classifying new messages in real time.
