---
title: Tool-Using AI Agent
category: LLM Agents · Tool Calling
year: 2026
order: 5
summary: An AI agent that reasons step by step and calls real tools — live web search and timezone lookups — so its answers are grounded in actual data instead of guesses.
stack: [smolagents, Hugging Face Inference API, Ollama, Python]
links:
  - label: GitHub
    url: https://github.com/AlibekBerik/Agent
---

- Built with Hugging Face **smolagents** using a **Thought → Action → Observation** reasoning loop.
- Gave the model real tools: a **DuckDuckGo web search** and a custom `get_current_time_in_timezone` function, so questions like "What time is it in Tokyo right now?" are answered from live data.
- Ran models through both the **Hugging Face Inference API** and local **Ollama**, and documented why next-token prediction alone leads to hallucination.
