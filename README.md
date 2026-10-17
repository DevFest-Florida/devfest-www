# 🌴 DevFest Florida 🏖️

The is a new website for DevFest Florida. This website is built with [Astro](https://astro.build/). We are using a template called [AstroWind](https://github.com/onwidget/astrowind).

## Development

Use Node.js 22 or later and install dependencies with `npm ci`.
Run `npm run dev` for the Astro development server.

## Cloudflare Workers

The site is generated statically by Astro and served with
[Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/).
No Astro server adapter or runtime secrets are required for the public site.

- `npm run preview:workers` builds and serves the site in the local Workers runtime.
- `npm run deploy:check` builds and validates the deployment without publishing.
- `npm run deploy` builds and publishes to Cloudflare after Wrangler authentication.
- `npm run deploy:preview` builds and publishes a public branch Preview without updating production.

`wrangler.jsonc` configures the Worker name (`devfest-florida`) and `dist` assets.
If connecting an existing Worker, set the name to match that Worker before deploying.
For Cloudflare Workers Builds, connect this repository with root directory `/`,
build command `npm run build`, and deploy command `npx wrangler deploy`.
Use `main` as the production branch and enable Preview builds for other branches
with Preview command `npx wrangler preview`. Pushes and merges to `main` deploy
production; other branches get their own public Preview URL. The empty `previews`
configuration shares the static asset settings without adding production routes.
Set the build Node.js version to 22 or later. `wrangler.jsonc` targets the DevFest
account and routes `devfestflorida.com/*` and `www.devfestflorida.com/*` to the Worker.
These routes require proxied DNS records. Preview deployments do not use these routes.
For local deployment with the existing DevFest login, run `wrangler auth activate devfest`
once in this directory, or pass `--profile devfest` directly to Wrangler commands.

The `public/_redirects` file preserves the permanent volunteer redirects.
`public/_headers` preserves immutable caching for Astro's fingerprinted assets.
Unknown paths return the generated `404.html` with status 404; HTML URLs use no trailing slash.

The unused `/decapcms/` editor and its Netlify Identity/Git Gateway integration
have been retired. Edit content in the repository instead.
