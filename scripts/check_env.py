#!/usr/bin/env python3
"""Validate environment variables for the Directus CMS setup."""

import os
import sys

REQUIRED_VARS = [
    "DIRECTUS_KEY",
    "DIRECTUS_SECRET",
    "DIRECTUS_ADMIN_EMAIL",
    "DIRECTUS_ADMIN_PASSWORD",
]

OPTIONAL_VARS = [
    "DIRECTUS_PORT",
    "DIRECTUS_DB_FILENAME",
    "VITE_API_URL",
]


def check_env() -> bool:
    """Check that all required environment variables are set."""
    missing = []
    defaults_used = []

    print("Exhale TWC — Directus Environment Check")
    print("=" * 40)

    for var in REQUIRED_VARS:
        value = os.environ.get(var)
        if not value:
            missing.append(var)
            print(f"  ✗ MISSING: {var}")
        elif value in ("your-secret-key-here", "your-secret-secret-here", "change-me-in-production"):
            defaults_used.append(var)
            print(f"  ⚠ DEFAULT VALUE: {var} (please change before production!)")
        else:
            print(f"  ✓ SET: {var}")

    print()
    for var in OPTIONAL_VARS:
        value = os.environ.get(var)
        if value:
            print(f"  ✓ OPTIONAL SET: {var}={value}")
        else:
            print(f"  - OPTIONAL NOT SET: {var}")

    print()

    if missing:
        print(f"ERROR: {len(missing)} required variable(s) are missing: {', '.join(missing)}")
        return False

    if defaults_used:
        print(f"WARNING: {len(defaults_used)} variable(s) still use default values.")
        print("  These are acceptable for development but MUST be changed for production.")

    print("Environment check complete.")
    return True


if __name__ == "__main__":
    success = check_env()
    sys.exit(0 if success else 1)
