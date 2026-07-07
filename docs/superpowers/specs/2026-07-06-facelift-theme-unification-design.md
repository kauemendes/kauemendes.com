# Facelift kauecode.com — Unificação de tema + upgrade de dependências

**Data:** 2026-07-06
**Status:** Aprovado pelo usuário

## Objetivo

Unificar o tema visual de todas as páginas do site em torno da identidade navy + verde,
atualizar todas as dependências (incluindo majors), e entregar via commit + push na main.

## Contexto / Diagnóstico

O site tem dois sistemas visuais convivendo:

- **Sistema A (canônico):** navy `bg-gradient-brand`, tokens `brand-*`, headings Poppins,
  texto gradiente cyan→verde, cards vidro `brand-secondary/80 backdrop-blur`.
  Páginas: Links (referência mais limpa), Blog, Projects, Consult, Footer, NavBar, shell do Resume.
- **Sistema B (off-brand):** cores genéricas do Tailwind (slate/gray/blue/rose/red/indigo/amber/lime).
  Páginas/componentes: About, about/[slug], 404, `Card` e `Heading` compartilhados,
  sidebar + recent-posts da home, seções internas do Resume (Contact/Projects/Education/Skills).

Bugs estruturais:
- `font-poppins` é a classe de heading dominante, mas Poppins **nunca é carregada** via next/font
  (config aponta para o nome da família, não para a CSS variable). Montserrat idem.
- `DarkModeButton` existe mas nunca é renderizado — dark mode segue apenas o SO.

## Decisões do usuário

1. **Dependências:** atualizar tudo, incluindo majors (Next 16, Tailwind 4, ESLint 10, Jest 30, TS 6, marked 18).
2. **Direção visual:** refresh moderno — manter base navy, modernizar tons.
3. **Accent principal:** verde `#2EE6A6`. Cyan `#00E5FF` vira acento secundário raro
   (gradient cyan→verde permanece como assinatura em headings). Laranja some ou vira só status.
4. **Modos:** dark + light, ambos coerentes, com toggle visível.
5. **Entrega:** commit e push direto na main, sem referência ao Claude nas mensagens.

## Design

### Fase 1 — Upgrade de dependências (antes do tema)

Ordem: majors primeiro porque o Tailwind 4 muda onde/como o tema é definido (CSS-first `@theme`).

1. Next 16 + eslint-config-next 16 (codemod `@next/codemod` se necessário), React 19.2, next-intl 4.13.
2. Tailwind 4 via `npx @tailwindcss/upgrade` — PostCSS plugin novo (`@tailwindcss/postcss`),
   tokens migram de `tailwind.config.ts` para `@theme` no globals.css.
3. ESLint 10 com flat config (`eslint.config.mjs` substitui `.eslintrc.json`).
4. Jest 30 + ts-jest compatível; TypeScript 6 (fallback documentado: se TS 6 quebrar o tooling, ficar em 5.9.x e avisar).
5. marked 18 — validar render dos posts do blog.
6. **Gate:** `npm run build` e `npm test` verdes antes de iniciar a Fase 2.

### Fase 2 — Sistema de tema unificado (Tailwind 4 `@theme`)

- Tokens semânticos via CSS variables trocadas pela classe `.dark` (next-themes já usa `attribute="class"`):
  - `surface` (fundo de página), `surface-raised` (cards),
  - `ink` / `ink-muted` (texto primário/secundário),
  - `accent` = verde #2EE6A6, `accent-soft`, `accent-secondary` = cyan #00E5FF.
  - Dark = navy atual polido (#0B132B / #1C2541); light = superfícies claras (#F5F7FA) com texto navy e o mesmo verde.
- Páginas usam um único conjunto de classes; o modo troca via variables — sem duplicar `dark:` em todo lugar
  (usos pontuais de `dark:` são aceitáveis onde um token não cobrir).
- Tipografia: **Poppins** (headings, carregada de verdade via next/font + CSS variable) +
  **Roboto** (corpo) + Source Code Pro apenas em detalhes de terminal.
  EB Garamond e Montserrat removidas de fonts.ts e do config.
- Renderizar `DarkModeButton` no NavBar.

### Fase 3 — Alinhar Sistema B ao canônico (referência: página Links)

- **About, about/[slug], 404:** reescrever estilos com gradient-brand + tokens (maior mudança visual do facelift).
- **Card compartilhado:** rebranding para card vidro navy, botão verde, "Read more" via i18n (messages en/pt).
- **Heading compartilhado:** tokens + Poppins.
- **Home:** sidebar (profile/contact/skills) e recent-posts alinhados ao hero — remover rose/gray.
- **Resume** (ContactSection, ProjectsSection, EducationSection, SkillsSection): cards vidro navy no lugar do sistema slate.
- **Consult:** trocar `cyan-*` genérico pelos tokens do tema no card featured.
- **Fora de escopo:** rota de impressão do CV (`resume/print`, PrintResume) — tema claro próprio, intencional.

### Fase 4 — Verificação e entrega

- `npm run build` + `npm test` verdes.
- Navegação real (dev server) nas páginas principais em dark e light para verificação visual.
- Commit único (ou poucos commits lógicos) e push na main.

## Tratamento de erros / riscos

- Cada major é atualizado e validado em sequência; se um upgrade quebrar de forma não trivial,
  documentar e decidir (ficar na versão anterior é aceitável para TS 6 e ESLint 10; Next 16 e Tailwind 4 são o núcleo do pedido).
- O upgrade tool do Tailwind 4 pode reescrever classes; revisar o diff antes de prosseguir.
- Light mode em páginas historicamente dark-only: aceitar ajustes finos por página onde os tokens não bastarem.

## Testes

- Suite Jest existente deve continuar verde (lib/content).
- Verificação visual manual via dev server (dark + light) nas rotas: /, /about, /blog, /blog/[post],
  /projects, /resume, /consult, /links, 404.
