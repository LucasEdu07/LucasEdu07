<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/banner-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="assets/banner-light.svg">
  <img alt="Lucas Eduardo — Software Engineer, Applied AI & Platform" src="assets/banner-light.svg" width="100%">
</picture>

<p align="center">
  <a href="https://www.linkedin.com/in/lucas-souza-a67a52165/">
    <img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white">
  </a>
  <img alt="Brazil" src="https://img.shields.io/badge/Brazil-0B1220?style=flat-square&logo=googlemaps&logoColor=E0A63C">
  <img alt="Applied AI" src="https://img.shields.io/badge/Applied_AI-0B1220?style=flat-square&logo=probot&logoColor=E0A63C">
  <img alt="Platform Engineering" src="https://img.shields.io/badge/Platform_Engineering-0B1220?style=flat-square&logo=githubactions&logoColor=E0A63C">
</p>

---

I build AI systems that do real work — and the platform underneath that keeps them honest.

Most of what I ship lives in private repositories. Here's the shape of it.

## Applied AI

**Multi-agent orchestration.** A coordinator that runs several CLI agents in parallel: each one isolated in its own workspace, so closing one never destroys another's work. Session-scoped tokens stop one agent from forging commands as another, and the command surface is an allowlist — read verbs by default, writes by exception. Approval travels back to the coordinator inside the same turn, not on the next poll.

**Cost engineering for LLMs.** Model tiering per task, measured instead of assumed. Cheap models do the mechanical work; the expensive tier is reserved for adversarial verification, where it actually pays. An audit of real usage found most of the spend hiding in orchestration that nobody had instrumented.

**AI-assisted code quality.** A quality gate that reads SARIF, grades A–E and decorates the pull request — no SonarQube server to run. Named after ἔλεγχος: the examination that proves a claim by trying to refute it.

**On-device inference.** Face recognition on Android, with the model pulled out of the APK and downloaded on demand — 23 MB lighter, and the app handles the model simply not being there.

**Memory and context engineering.** Persistent memory across sessions, linked as a graph rather than a flat log, so a decision made weeks ago is still reachable when it matters.

## Engineering

**Native Android** — Kotlin, Jetpack Compose. Offline-first: the places these apps run have bad signal and the phone is the only interface.

**Web platforms** — TypeScript over Postgres. Multi-tenant, role-based access, audit trails that survive the question *who changed this, and when*.

**Services and integrations** — C#/.NET and Python. Third-party APIs, background processing, ETL, and the unglamorous work of making two systems that were never meant to talk agree on a contract.

**Developer platform** — reusable CI shared across repositories, dependency automation, and a runtime migration of 25+ actions completed ahead of the deprecation deadline rather than after it.

## How I work

Merging to `main` does not deploy. A person approves the release and the approval is recorded with the run — fail-closed, because a pipeline that ships on green alone will eventually ship on a green that lied.

Every pull request links to a task, and a required check blocks the merge when it doesn't. A gate beats discipline.

I verify before I assert. A blocked port, a full disk, a service that's down — if I haven't tested it today, it isn't a fact, it's a memory.

## Stack

<p>
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white">
  <img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white">
  <img alt="Kotlin" src="https://img.shields.io/badge/Kotlin-7F52FF?style=flat-square&logo=kotlin&logoColor=white">
  <img alt="C#" src="https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white">
  <img alt="Java" src="https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white">
</p>
<p>
  <img alt="Anthropic Claude" src="https://img.shields.io/badge/Claude-D97757?style=flat-square&logo=anthropic&logoColor=white">
  <img alt="Model Context Protocol" src="https://img.shields.io/badge/MCP-0B1220?style=flat-square&logo=modelcontextprotocol&logoColor=E0A63C">
  <img alt="n8n" src="https://img.shields.io/badge/n8n-EA4B71?style=flat-square&logo=n8n&logoColor=white">
  <img alt="React" src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB">
  <img alt="Jetpack Compose" src="https://img.shields.io/badge/Compose-4285F4?style=flat-square&logo=jetpackcompose&logoColor=white">
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-5FA04E?style=flat-square&logo=nodedotjs&logoColor=white">
</p>
<p>
  <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white">
  <img alt="SQL Server" src="https://img.shields.io/badge/SQL_Server-CC2927?style=flat-square&logo=microsoftsqlserver&logoColor=white">
  <img alt="Docker" src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white">
  <img alt="GitHub Actions" src="https://img.shields.io/badge/Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white">
  <img alt="Linux" src="https://img.shields.io/badge/Linux-0B1220?style=flat-square&logo=linux&logoColor=E0A63C">
</p>

## Open work

**[friday_agents](https://github.com/LucasEdu07/friday_agents)** — local agent framework in Python: persistent memory, image analysis, API integration. Modular and offline-ready. It's where the ideas above started.

The other public repositories are earlier ground — CRM, inventory, an OBD-II reader for car diagnostics. They stay public on purpose; the trajectory is part of the work.

---

<p align="center">
  <img height="165" alt="GitHub stats" src="https://github-readme-stats.vercel.app/api?username=LucasEdu07&show_icons=true&hide_border=true&bg_color=00000000&title_color=E0A63C&text_color=8FA3BC&icon_color=E0A63C&hide=issues&rank_icon=github">
  <img height="165" alt="Top languages" src="https://github-readme-stats.vercel.app/api/top-langs/?username=LucasEdu07&layout=compact&hide_border=true&bg_color=00000000&title_color=E0A63C&text_color=8FA3BC&langs_count=8">
</p>

<p align="center">
  <img alt="Contribution activity" src="https://github-readme-activity-graph.vercel.app/graph?username=LucasEdu07&bg_color=00000000&color=8FA3BC&line=E0A63C&point=E9EFF7&area=true&hide_border=true">
</p>
