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

Publicado via **Netlify** (gratuito), com um nome próprio escolhido por você (ex: `ticya-portfolio.netlify.app`) — sem depender do nome de nenhuma conta do GitHub na URL.

**Opção 1 — conectando o repositório do GitHub (recomendado, atualiza sozinho a cada push):**
1. Crie uma conta gratuita em [netlify.com](https://netlify.com)
2. Clique em **"Add new site" → "Import an existing project"**
3. Escolha **GitHub** e selecione o repositório `Portif-rio_Leticia`
4. Configurações de build (o Netlify costuma detectar sozinho, mas confirme):
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Clique em **Deploy**
6. Depois do primeiro deploy, vá em **Site settings → Change site name** e escolha o nome que quiser (ex: `ticya-portfolio`) — a URL final fica `https://ticya-portfolio.netlify.app`
7. A partir daí, todo `git push` para `main` atualiza o site sozinho

**Opção 2 — mais rápida, sem conectar o GitHub (deploy manual):**
1. No seu computador, rode `npm install` e depois `npm run build` dentro da pasta do projeto
2. Isso gera uma pasta `dist/`
3. Em [app.netlify.com/drop](https://app.netlify.com/drop), arraste a pasta `dist/` inteira
4. O site fica no ar em segundos, com uma URL gerada automaticamente (que você pode trocar depois em Site settings)

**Se no futuro você registrar um domínio de verdade** (ex: comprar `portfolioleticia.com.br`), o Netlify também aceita domínio próprio gratuitamente — só é preciso pagar o registro do domínio em si, não a hospedagem.
