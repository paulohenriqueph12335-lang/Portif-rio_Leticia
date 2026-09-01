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

Publicado via **GitHub Pages**, com deploy automático a cada push no branch `main` (workflow em `.github/workflows/deploy-pages.yml`), usando o domínio próprio **portfolioleticia.com.br**.

**Configuração no GitHub (uma vez só):**
1. No repositório, vá em **Settings → Pages**
2. Em "Source", selecione **GitHub Actions**
3. Em "Custom domain", confirme que está `portfolioleticia.com.br` (o arquivo `public/CNAME` já garante isso a cada deploy)
4. Faça push para `main` — o workflow builda e publica automaticamente

**Configuração no registrador do domínio (Registro.br ou onde o domínio foi comprado) — ESSA PARTE NÃO FICA NO GITHUB:**

O domínio precisa de registros DNS apontando para o GitHub Pages. No painel de DNS do domínio, adicione:

Registros tipo A (para o domínio raiz `portfolioleticia.com.br`):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Opcionalmente, registros AAAA (IPv6):
```
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

Se quiser que `www.portfolioleticia.com.br` também funcione, adicione um registro CNAME apontando `www` para `paulohenriqueph12335-lang.github.io`.

A propagação de DNS pode levar de alguns minutos até 24-48h. Enquanto isso, o GitHub mostra "DNS Check in Progress" nas configurações de Pages — isso é esperado até o DNS propagar.
