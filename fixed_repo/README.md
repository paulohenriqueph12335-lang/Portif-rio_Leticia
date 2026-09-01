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

Publicado via **GitHub Pages**, com deploy automático a cada push no branch `main` (workflow em `.github/workflows/deploy-pages.yml`).

**Configuração necessária no GitHub (uma vez só):**
1. No repositório, vá em **Settings → Pages**
2. Em "Source", selecione **GitHub Actions** (não "Deploy from a branch")
3. Faça um push para `main` — o workflow builda e publica automaticamente
4. O site fica disponível em `https://<seu-usuário>.github.io/Portif-rio_Leticia/`

**Importante:** o `base` no `vite.config.ts` e o `basename` no `src/main.tsx` estão configurados para `/Portif-rio_Leticia/`, que precisa bater exatamente com o nome do repositório no GitHub. Se o nome do repositório mudar, esses dois valores precisam ser atualizados juntos.
