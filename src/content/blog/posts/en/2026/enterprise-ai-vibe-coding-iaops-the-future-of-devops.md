---
post: "enterprise-ai-vibe-coding-iaops-the-future-of-devops"
title: "9. Enterprise AI, Vibe Coding and IAOps: where software engineering is heading"
description: "Writing code line by line is becoming a thing of the past. The new edge is knowing how to pick the right tools, design agentic workflows and operate AI at scale — IAOps is already here. A take on enterprise AI, Vibe Coding and the DevOps transformation reshaping lean teams to stay lean."
image_banner: "/images/blog/banner_devops_transformation.png"
image_post: "/images/blog/banner_devops_transformation@2x.png"
date: "2026-04-25"
---
## Enterprise AI, Vibe Coding and IAOps: where software engineering is heading

Two years ago, "coding with AI" meant tab-completing a function in your editor. Today, in serious enterprise settings, **a senior engineer writes less code by hand and designs more workflows.** The hype is over — what's left is a set of practices reshaping how we deliver software at scale.

This post is an opinionated take on what I'm seeing in the field, organized into three threads: **Enterprise AI**, **Vibe Coding** and **IAOps**.

---

### Enterprise AI: where we actually are

We've moved past the "ChatGPT in a browser" phase and into an **architecture** phase. A serious company doing AI today has to decide, at minimum:

* **Multi-model, not single-model.** Bedrock for AWS-first shops, Anthropic Claude and OpenAI direct, open models (Llama, Mistral, Qwen) self-hosted when it makes sense. Each one has its own cost, latency, context window and governance profile.
* **Private models on Kubernetes with GPUs.** For sensitive workloads (regulated data, critical IP), running LLMs internally on K8s with NVIDIA Operator + vLLM/Triton/Ollama is no longer exotic. It's the playbook.
* **Enterprise MCPs.** The Model Context Protocol has become the natural way to connect AI agents to internal tooling — Jira, Confluence, ServiceNow, GitHub, the data lake — with real permissions and auditing. The conversation changes: "how does the agent reach our ERP?" now has a standard answer.
* **Multi-agent systems.** A "do-everything" agent doesn't scale. Specialized agents (planner, reviewer, executor, observer) orchestrated with explicit handoff produce more predictable, more auditable results.
* **Governance and cost.** If you still treat AI as an "isolated feature", you'll learn the hard way that token cost, data exfiltration and vendor lock-in are FinOps and SecOps problems, not just product ones.

The question isn't "should we use AI?" anymore. It's **"what's our AI architecture, and who's responsible for operating it?"**.

---

### Vibe Coding: writing code is a thing of the past (really)

Sounds provocative, but it's literal. **Typing code is no longer the bottleneck.** The bottleneck is now:

1. **Knowing how to ask.** Clear specs, well-built context, good examples. **Spec-Driven Development** is back with a vengeance — except now the "spec" is the input that makes the agent get it right on the first try instead of wrong ten times.
2. **Knowing which tool.** Codex/Copilot for fast local edits, Claude Code for long sessions with context and tooling, OpenWebUI for controlled internal experimentation, custom agents for specific flows. **If all you have is a hammer, everything looks like a nail.**
3. **Knowing how to design the workflow.** Agent-generated PR, validated by another reviewer agent, tested in CI, observed in production. The human becomes **architect and reviewer-in-the-loop**, not typist.

That's Vibe Coding: **operating at the level of intent, letting AI materialize the code** within guardrails you designed. If you're still measuring productivity by "lines of code per day", you're measuring the wrong thing — what matters is **problems solved per day**, and the path there includes a good prompt, a good workflow and a good human reviewer at the right checkpoints.

It's not magic. It doesn't replace understanding what you're doing — quite the opposite, **it ruthlessly exposes those who don't**, because AI does exactly what you ask, including confidently stupid things. That's precisely why **experienced engineers are more valuable, not less**.

---

### IAOps: the transformation DevOps is already living

DevOps was born lean and productive. **Good news: it stays lean.** The news that scares some: the practices change deeply.

We call it **IAOps** (or AIOps, depending on the dialect) — the marriage between infra/app operations and agentic AI. Concrete shifts already happening:

* **Agent-assisted incident triage.** The agent reads alert + logs + dashboards + runbook, proposes a hypothesis and an action. Human approves or redirects. Mean time to diagnosis drops from minutes to seconds on the happy path.
* **Self-healing pipelines.** Build broke? Agent investigates, opens a fix PR, chains the review. You wake up to a solved problem — or a ready post-mortem if it gave up.
* **AI-driven IaC governance.** Before `terraform apply`, an agent evaluates drift, cost, policy, blast radius. It's **Spec-Driven Development applied to infrastructure**: you describe intent, it proposes the plan, you validate.
* **Living documentation.** Architecture diagrams, runbooks, ADRs — all regenerated on demand from the system's actual state. Documentation stops lying because it stops being hand-written.
* **Conversational observability.** Instead of learning PromQL/KQL/Splunk SPL for every case, the engineer asks in natural language; the agent translates, executes and correlates.

Practical outcome: **the lean DevOps team of 5 people serving 200 developers now serves 500** with the same headcount, because the repetitive work has become an agentic pipeline. What's left for the human is the **harder, more strategic** work: architecture, governance, platform design, guardrail definition, intervention when the agent gets it wrong.

If all you used to do was the repetitive stuff, you're at risk. If you operate at the **platform + workflow + AI** level, you're more relevant than ever.

---

### What changes in practice for companies in 2026

If you lead technology at a company, three decisions just became urgent:

1. **Define an enterprise AI architecture** — not isolated POCs per department. Multi-model, MCP, governance, observability, cost. Treated as a first-class platform.
2. **Invest in teams that master Vibe Coding and Spec-Driven Development**, not "who types fastest". Hiring and promotion criteria need to be rethought.
3. **Reframe DevOps as IAOps.** Keep the team lean, expand the scope, automate the repetitive with agents, keep the human on the critical-decision path.

The competitive-advantage window is short. Whoever lays the foundation now will set the bar for the next five years. Whoever waits for "things to mature" will pay the cost of a rushed migration in 2027 — at best.

---

### Coffee?

This isn't a consulting pitch — it's a real invitation to swap notes. If you're shaping enterprise AI, building an IAOps platform or rethinking how your DevOps team works with Vibe Coding, **come talk to me**. **I live this in real environments, inside the corporate world**, every day: I know the real friction — the politics, the teams that resist, the hidden cost, the things vendors won't tell you — and I genuinely enjoy chewing on these problems. Drop me a message and let's grab a coffee (virtual or in person) and trade experiences. I learn as much as I share.
