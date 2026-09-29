VANTAGE GLOBAL // INTRANET
Enterprise intranet • Angular 22 • Zoneless • Signals • SSR • 70kB transfer

🌐 Live Demo: https://vantage-intranet.vercel.app/

[Deployed on Vercel](https://vantage-intranet.vercel.app/)
[Angular 22](https://angular.dev)
[Bundle 70kB](#performance---production-build)

Why this exists
Diluted a 1500-line monolithic app.component.html into a modern, scalable architecture. From legacy to Angular 22 best practices in one migration. Deployed as dark-only for LATAM operations center.

Live
https://vantage-intranet.vercel.app/

SSR Operational + Prerendered 3 static routes
Dark mode locked (zinc-950 shell)
Live Activity • 247 online with pulse
Performance - Production Build
Browser bundles
Initial chunk files  | Names            |  Raw size | Estimated transfer size
main-PMTGPRT5.js     | main             | 245.90 kB |                66.68 kB
styles-JE75TJ3S.css  | styles           |  22.27 kB |                 3.43 kB
                     | Initial total    | 268.17 kB |                70.11 kB

Lazy chunk files     | Names            |  Raw size | Estimated transfer size
knowledge-base   | 103 bytes  | 103 bytes
home-component   | 2.02 kB    | 980 bytes
people-component | 3.23 kB    | 1.30 kB

Prerendered 3 static routes.
Stack
Angular 22 standalone, zoneless
Signals: signal(), computed(), effect(), resource()
SSR + Tailwind darkMode class
Pure signals - No NgRx
Deploy
Vercel: ng build / Output: dist/vantage-intranet/browser
Live: https://vantage-intranet.vercel.app/

Built by Jairo Andrade • Nilópolis, RJ
