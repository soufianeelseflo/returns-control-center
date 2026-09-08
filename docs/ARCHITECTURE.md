# Architecture

## Boundaries
- `lib/types.ts`: domain contracts shared by UI and route handlers.
- `lib/rules.ts`: pure policy decisions; no React or network concerns.
- `lib/metrics.ts`: operational aggregation.
- `app/api/*`: HTTP boundary with validation and explicit error statuses.
- `components/*`: client interactivity kept narrow; most pages remain server components.

## Production migration
The in-memory fixture would be replaced with a repository/service layer backed by PostgreSQL or the merchant's commerce platform. Mutations should use idempotency keys, persisted audit events, optimistic concurrency and role-based authorization.

## Regression safety
Policy code is intentionally pure so a real implementation can run historical return cases through old/new policy versions before deployment. API mutations return explicit errors; the client action component demonstrates optimistic state with rollback instead of assuming persistence succeeded.
