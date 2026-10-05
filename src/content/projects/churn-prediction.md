---
title: Customer Churn Prediction System
category: SQL · ML Pipeline · Deployment
year: 2026
order: 2
summary: Flags e-commerce customers who are about to churn, using 800K+ real transactions from the UCI Online Retail II dataset, served as a live risk-lookup dashboard.
highlight:
  value: "40% → 67%"
  label: churn recall · AUC-ROC 0.759
image: projects/churn-prediction.gif
stack: [SQL, XGBoost, SMOTE, Pandas, Streamlit]
links:
  - label: Live demo
    url: https://churn-prediction-wff7qjwtq8kkugtoplbfsh.streamlit.app/
  - label: GitHub
    url: https://github.com/AlibekBerik/churn-prediction
---

- Engineered **RFM** (Recency, Frequency, Monetary) features with SQL CTEs, joins and aggregations over **800,000+** real e-commerce transactions (Dec 2009 – Dec 2011).
- Identified and resolved a **target leakage** issue in the initial feature set before it could inflate results.
- Trained an **XGBoost** classifier and compared a baseline against **SMOTE** balancing: recall on churned customers rose from 0.40 to 0.67 (+68%) while precision moved from 0.52 to 0.47 — a deliberate, measured tradeoff.
- Deployed as an interactive **Streamlit** dashboard for real-time customer churn-risk lookup.
