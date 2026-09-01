# Portfólio Educacional — Ticya

Portfólio pessoal de Maria Letícia ("Ticya" / "Tia Lê"), psicopedagoga em formação.

## Stack

React + Vite + TypeScript + TailwindCSS v4 + Framer Motion + React Router.

## Rodando localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Estrutura

- `docs/` — documentação completa do projeto, fase por fase (Discovery até Development)
- `src/routes/` — páginas (Home, Sobre, Metodologia, Materiais, Formação, FAQ, Contato)
- `src/components/` — componentes organizados por camada (layout, ui, characters, sections, transitions)
- `src/content/copy.ts` — todo o texto do site, separado da lógica visual

## Deploy

Publicado no Railway a partir do branch principal (build automático via `npm run build`).
