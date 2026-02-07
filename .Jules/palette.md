# Palette's Journal

## 2025-05-18 - Accessibility Gaps in Auth Forms
**Learning:** Found significant accessibility gaps in the Login component. Specifically, labels were not programmatically associated with inputs (missing `htmlFor`/`id`), and icon-only buttons (like password toggle) lacked `aria-label` and state indicators (`aria-pressed`).
**Action:** Always check for implicit vs explicit label associations. For icon-only toggles, ensure both the action ("Show password") and the state (pressed/not pressed) are communicated to assistive technology.
