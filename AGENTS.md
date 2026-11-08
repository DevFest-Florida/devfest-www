# Repository Instructions

## Point-in-time event archives

Historical event sites are immutable, public snapshots. Use these standards whenever creating or maintaining an archive.

### Source and branch

- Start from the preserved snapshot for the event year, such as `origin/2024` or `origin/2025`; never reconstruct an archive from the current `main` branch.
- Create a dedicated branch named `<year>.<city>`, using a lowercase city slug, for example `2024.miami` or `2025.orlando`.
- Complete and verify the archive before its first push. Archive branches are protected after creation and direct follow-up pushes may be rejected.
- Make later archive changes through a pull request targeting the protected archive branch. Do not bypass branch protection.

### Routes and content

- Promote the archived city's home page and applicable pages—such as schedule, speakers, keynote, sponsors, and location—to root routes on the archive domain.
- Preserve the historical event content and branding. Do not modernize copy, dates, dependencies, or event details unless correcting an archive defect requested by the user.
- On the archive site, redirect the former city or year prefix to the equivalent root path. For example, `/miami/schedule` becomes `/schedule` and `/2025/speakers` becomes `/speakers`.
- Set both Astro's `site` value and `src/config.yaml` canonical site URL to the archive domain.

### Hosting and domains

- Use a dedicated Cloudflare Worker with static assets for each archive.
- Name the Worker `devfest-<city>-<year>`.
- Use the custom domain `<year>-<city>.devfestflorida.com`, for example `2024-miami.devfestflorida.com`.
- Keep the Wrangler configuration in `wrangler.jsonc`, use the repository's pinned Wrangler version, and declare the archive hostname as a custom domain.
- Archives are public unless the user explicitly requests access controls.

### Main-site behavior

- Legacy paths on `devfestflorida.com`, such as `/miami`, `/orlando`, or `/2025`, redirect to the current main-site homepage. They do not redirect into an archive.
- The main footer's **Past events** menu links directly to each archive's unique domain.
- Keep archive links organized, responsive, and accessible rather than rendering them as one long inline list.

### Validation and release

1. Install from the archive branch's lockfile and add only the hosting tooling required for deployment. Do not run automated dependency upgrades or audit fixes on a historical snapshot.
2. Run the static build and `wrangler deploy --dry-run`.
3. Verify root pages, canonical URLs, archive-local redirects, and footer links in the generated output.
4. Commit and push the complete archive branch.
5. Deploy the exact committed build to its dedicated Worker and custom domain.
6. Verify the public archive returns HTTP 200 and the main site's legacy path returns the intended homepage redirect.
