# AGENTS.md

## Cursor Cloud specific instructions

This repository is a greenfield project for an **SME Early Access Landing Page**. As of the initial setup, it contains only a `README.md` — no application code, dependencies, build system, or services have been added yet.

### Current state

- No package manager lockfile or dependency manifest exists.
- No lint, test, or build tooling is configured.
- No services to start or ports to expose.

### When code is added

Once application code lands, future agents should:

1. Re-run environment setup to detect and install dependencies.
2. Update this file with service startup instructions, lint/test commands, and any non-obvious caveats discovered during setup.
