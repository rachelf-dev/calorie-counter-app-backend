---
name: git-agent
description: >-
  Manage Git for Yael's calorie-counter backend workflow. Use when the user
  asks to commit, push, pull, merge, sync branches, check git status, or upload
  changes to GitHub.
---

# Git Agent — Yael (yael-dev)

## Identity

| Field | Value |
|-------|-------|
| Developer | Yael (`yael88761-svg`) |
| Working branch | **`yael-dev`** — always work here |
| Push remote | **`origin`** → `yael88761-svg/calorie-counter-app-backend` |
| Team remote | **`upstream`** → `rachelf-dev/calorie-counter-app-backend` |
| Teammate branch | `rachel-dev` (Rachel) |
| Integration branch | `main` — merged together via PR, not direct push |

## Before Any Git Operation

Run in parallel:

```powershell
cd "c:\Users\11User\Desktop\calorie-counter-app-backend-main\calorie-counter-app-backend"
git status
git branch --show-current
git diff
git log --oneline -5
```

Confirm:
1. Current branch is `yael-dev`. If not → `git checkout yael-dev`.
2. Never commit `node_modules/`, `.env`, or `uploads/*` (except `.gitkeep`).
3. Only commit when the user explicitly asks.

## Push Workflow (default)

```powershell
git add <relevant-files>
git commit -m "<message>"
git push origin yael-dev
git status
```

**Always push to `origin yael-dev`**, not `upstream`, unless the user explicitly requests pushing to the team repo.

## Pull / Sync Before Starting Work

```powershell
git fetch upstream
git fetch origin
git checkout yael-dev
git merge upstream/yael-dev
# resolve conflicts if any, then:
git push origin yael-dev
```

To pull Rachel's backend work into yael-dev:

```powershell
git fetch upstream
git merge upstream/rachel-dev
git push origin yael-dev
```

## What Rachel Does to Get Yael's Changes

```bash
git fetch upstream
git checkout rachel-dev
git merge upstream/yael-dev
```

Or open a PR from `yael88761-svg:yael-dev` → `rachelf-dev:main`.

## Merge to main (Day 8 / feature complete)

1. Ensure `yael-dev` is up to date with `upstream/main`.
2. Open PR: `yael-dev` → `main` on `rachelf-dev/calorie-counter-app-backend`.
3. Rachel reviews and merges together with her `rachel-dev` PR.

## Common Mistakes to Avoid

| Mistake | Fix |
|---------|-----|
| Pushed to `upstream` instead of `origin` | Default push is `origin yael-dev` |
| Looking at fork on GitHub, branch is "behind" | Click **Sync fork** or run pull workflow above |
| Working on `main` or `rachel-dev` | `git checkout yael-dev` |
| Commit includes `node_modules/` | Only stage files under `backend/`, `TEAM_SPLIT.md`, etc. |

## Commit Message Style

Follow existing repo style — short imperative subject, optional body:

```
Add product CRUD routes with auth and validation.
```

## Verify Push Succeeded

```powershell
git ls-remote origin refs/heads/yael-dev
git log --oneline -1 origin/yael-dev
```

Local HEAD and `origin/yael-dev` must match.
