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

Agents that coordinate other agents, quality gates that fail the build, face recognition running on the phone instead of a server.

Most of it is in private repositories, so here's the work rather than the repos.

## AI

**Multi-agent orchestration** — a coordinator that runs several AI agents at the same time. Each agent works in its own isolated folder, so closing one never deletes another's work. Tokens are scoped per session, which stops one agent from running commands as another.

**LLM cost control** — an audit of real usage found 98% of the model spend on the most expensive tier, and 92% of that inside orchestration nobody had instrumented. Every stage now declares which tier it runs on, and the expensive one is kept for the checks where a wrong answer costs more than the call.

**Code quality gate** — reads SARIF output from static analysis, grades the code A–E and comments on the pull request. No SonarQube server to maintain.

**On-device inference** — face recognition on Android. I moved the model out of the app bundle and download it on demand. The app is 23 MB smaller and still works before the model arrives.

**Persistent memory** — context that survives between sessions, stored as a linked graph. A decision made six weeks ago is still reachable when the same question comes back, instead of being made again from scratch.

## Engineering

The systems the AI work sits on top of. Multi-tenant web platforms in TypeScript and Postgres, where several companies share one deployment and every change is attributable. C# and Python services moving data between APIs that were never designed to meet. Android apps in Kotlin and Compose, built for warehouses and job sites where the network drops mid-request and the phone is the only device anyone has.

The platform work came out of that: CI shared across repositories, dependency updates that merge themselves when green, and a runtime migration of 25+ actions finished before the deadline rather than after it.

## What I don't build

The interesting part is rarely the part you build. Queues, roles, canned replies, dashboards — that already exists under a permissive license, and rebuilding it costs weeks nobody has.

I'd rather spend those weeks on the piece nobody can sell you: the one wired to data only that company has.

## How I work

Merging to `main` doesn't deploy. A person approves each release, and the approval is recorded with the run.

Every pull request links to a task. A required check blocks the merge when it doesn't.

Before I report that something is broken, I test it again. More than once the problem had already been fixed and nobody had rechecked.

## Stack

<p>
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white">
  <img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white">
  <img alt="Kotlin" src="https://img.shields.io/badge/Kotlin-7F52FF?style=flat-square&logo=kotlin&logoColor=white">
  <img alt="C#" src="https://img.shields.io/badge/C%23-512BD4?style=flat-square&logo=dotnet&logoColor=white">
  <img alt="Java" src="https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white">
</p>
<p>
  <img alt="Claude" src="https://img.shields.io/badge/Claude-D97757?style=flat-square&logo=anthropic&logoColor=white">
  <img alt="MCP" src="https://img.shields.io/badge/MCP-0B1220?style=flat-square&logo=modelcontextprotocol&logoColor=E0A63C">
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

---

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/focus-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="assets/focus-light.svg">
    <img alt="Currently building: multi-agent orchestration, code quality gate, on-device inference" src="assets/focus-light.svg" width="860">
  </picture>
</p>

<p align="center">
  <img height="170" alt="Contribution streak" src="https://streak-stats.demolab.com?user=LucasEdu07&hide_border=true&background=00000000&ring=E0A63C&fire=E0A63C&currStreakLabel=E0A63C&sideLabels=8FA3BC&dates=6F8399&stroke=1E2B3E&sideNums=8FA3BC&currStreakNum=E0A63C">
</p>
