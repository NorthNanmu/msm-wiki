# Architecture

This page summarizes the current implementation in `/Users/doumao/code/github/msm`.

## Overview

- **Frontend**: React + Vite
- **Backend**: Go + Gin
- **Service Layer**: unified control for MosDNS / Sing-box / Mihomo
- **Data & Config**: SQLite and service config files

```mermaid
flowchart LR
    UI[Web UI] --> API[Backend API]
    API --> SVC[Service Manager]
    SVC --> MOS[ MosDNS ]
    SVC --> SB[ Sing-box ]
    SVC --> MI[ Mihomo ]
    API --> DB[(SQLite)]
    API --> CFG[Config Files]
```

## Default Paths

- Config: `/root/.msm`
- Data: `/root/.msm/data`
- Logs: `/root/.msm/logs`
