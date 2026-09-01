# FASE 08 — FRONT-END ARCHITECTURE
## Portfólio Educacional | Maria Letícia ("Ticya" / "Tia Lê")

---

## 1. Resumo Executivo

Esta fase traduz tudo o que foi documentado (Fases 01-07) em uma arquitetura técnica concreta: stack, estrutura de pastas, componentes, roteamento, estratégia de animação e pipeline de deploy. Nenhuma decisão de conteúdo, visual ou estrutural é tomada aqui — o objetivo é exclusivamente **como implementar** o que já foi aprovado.

Stack confirmada (herdada do prompt-mestre original): **React + Vite + TypeScript + TailwindCSS + Framer Motion**, versionado no GitHub, publicado no Railway.

---

## 2. Stack Técnica

| Camada | Tecnologia | Justificativa |
|---|---|---|
| Build tool | Vite | Build rápido, HMR eficiente, ideal para SPA com múltiplas rotas |
| Framework | React 18+ | Componentização, ecossistema maduro |
| Linguagem | TypeScript | Tipagem para conteúdo (copy da Fase 06) e props de componentes — evita erros silenciosos ao atualizar texto |
| Estilo | TailwindCSS | Tokens do Design System (Fase 05) mapeados para `theme.extend` |
| Roteamento | React Router v6 | Necessário desde a mudança para multi-página (Fase 03 revisada) |
| Animação | Framer Motion | Personagens animados, transição de poeira mágica, scroll-linked animations |
| Versionamento | Git + GitHub | Conforme prompt-mestre original |
| Deploy | Railway | Conforme prompt-mestre original |

---

## 3. Estrutura de Pastas

Baseada na estrutura já prevista no prompt-mestre original (Fase 01), detalhada agora para a implementação real:

```
portfolio-educacional/
├── README.md
├── ROADMAP.md
├── PROJECT_VISION.md
├── docs/                          (toda a documentação das Fases 01-08)
├── prompts/
├── public/
└── src/
    ├── main.tsx
    ├── App.tsx                    (definição das rotas)
    ├── routes/
    │   ├── Home.tsx
    │   ├── Sobre.tsx
    │   ├── Metodologia.tsx
    │   ├── Materiais.tsx
    │   ├── Formacao.tsx
    │   ├── Faq.tsx
    │   └── Contato.tsx
    ├── components/
    │   ├── layout/
    │   │   ├── Header.tsx         (menu, presente em todas as páginas)
    │   │   ├── Footer.tsx
    │   │   └── FixedContactButton.tsx
    │   ├── ui/                    (peças reutilizáveis)
    │   │   ├── Button.tsx
    │   │   ├── Card.tsx
    │   │   ├── AccordionItem.tsx
    │   │   ├── SectionEyebrow.tsx
    │   │   └── CornerOrnaments.tsx
    │   ├── characters/             (personagens SVG, um componente por animal)
    │   │   ├── Fox.tsx
    │   │   ├── Rabbit.tsx
    │   │   ├── Owl.tsx
    │   │   ├── Bear.tsx
    │   │   └── Butterfly.tsx
    │   ├── transitions/
    │   │   └── MagicDustTransition.tsx
    │   └── sections/               (blocos de conteúdo dentro das páginas)
    │       ├── Timeline.tsx
    │       ├── MethodologyCards.tsx
    │       ├── ServiceCards.tsx
    │       └── FaqAccordion.tsx
    ├── content/                    (copy da Fase 06, separado dos componentes)
    │   └── copy.ts
    ├── hooks/
    │   ├── useScrollReveal.ts
    │   └── usePageTransition.ts
    ├── styles/
    │   └── tokens.css              (variáveis do Design System)
    └── assets/
        └── illustrations/          (SVGs de ornamentos, texturas)
```

---

## 4. Roteamento

| Rota | Componente | Observação |
|---|---|---|
| `/` | `Home.tsx` | Capa do livro / sumário ilustrado (Fase 03 revisada) |
| `/sobre` | `Sobre.tsx` | Quem Sou + Trajetória |
| `/metodologia` | `Metodologia.tsx` | Filosofia + Metodologia + Serviços |
| `/materiais` | `Materiais.tsx` | Área dinâmica — pode iniciar com estado vazio/"em construção" |
| `/formacao` | `Formacao.tsx` | Seção "quieta", sem personagem |
| `/faq` | `Faq.tsx` | Acordeão de perguntas |
| `/contato` | `Contato.tsx` | Canais de contato + coruja no galho |

`Header`, `Footer` e `FixedContactButton` vivem no `App.tsx` (layout persistente), fora do `<Routes>`, para não recarregar a cada navegação — coerente com a decisão de a transição de poeira mágica ser suave, não um recarregamento completo de página.

---

## 5. Estratégia de Conteúdo (Copy)

O texto final da Fase 06 vive em `src/content/copy.ts`, separado dos componentes visuais — cada seção referencia esse arquivo em vez de ter texto hardcoded no JSX. Isso permite:
- Ajustar copy sem tocar em lógica visual
- Eventual expansão futura (ex: internacionalização, se necessário)
- Facilita a atualização da pendência de faixa etária (FAQ) sem precisar mexer em componente

---

## 6. Personagens como Componentes

Cada personagem (raposa, coelha, coruja, ursinho, borboleta) é um componente SVG próprio, não uma imagem estática — decisão já registrada na Fase 07. Isso permite:
- Animação individual via Framer Motion (piscar, caminhar, cruzar a tela)
- Reuso do mesmo personagem em contextos diferentes, se necessário no futuro
- Facilidade de ajuste de traço sem exportar/reimportar arquivos de imagem

Exemplo de assinatura de componente:
```
<Fox blink={true} className="absolute bottom-0 right-4" />
<Rabbit walking={true} progress={scrollProgress} />
```

---

## 7. Estratégia de Animação

| Tipo de animação | Ferramenta | Onde se aplica |
|---|---|---|
| Fade-in ao entrar em viewport | Tailwind + CSS puro, ou Framer `whileInView` | Blocos de texto, cards |
| Scroll-linked (coelha andando na trilha) | Framer Motion `useScroll` + `useTransform` | Timeline em /sobre |
| Piscar de personagem | Framer Motion, `animate` com loop leve e intervalo longo (não repetitivo/cansativo) | Raposa (Home), coruja (Contato) |
| Transição de poeira mágica entre páginas | Framer Motion `AnimatePresence` + componente `MagicDustTransition` (partículas geradas via JS, conforme protótipo da Fase 05/07) | Toda navegação entre rotas |
| Ornamentos de canto | Leve balanço/cintilar contínuo, `animate` com `repeat: Infinity`, amplitude pequena | Presente em todas as páginas |

Todas as animações respeitam `prefers-reduced-motion` — usuários com essa preferência do sistema recebem versões estáticas ou com movimento mínimo.

---

## 8. Gerenciamento de Estado

O site é majoritariamente estático — não há necessidade de gerenciador de estado global (Redux, Zustand etc.). Estado local (`useState`) é suficiente para:
- Estado do acordeão FAQ (qual pergunta está aberta)
- Estado do menu mobile (aberto/fechado)
- Progresso de scroll para animações (via hook customizado `useScrollReveal`)

---

## 9. Acessibilidade Técnica

- Todos os componentes de personagem/ornamento decorativos recebem `aria-hidden="true"`
- Navegação por teclado funcional em: menu, acordeão do FAQ, botões de contato
- Contraste validado conforme apontado na Fase 07 (pendência: validação formal WCAG AA nesta fase)
- `alt` text descritivo em qualquer imagem não decorativa (ex: foto pessoal, se usada)

---

## 10. Pipeline de Deploy

```
Desenvolvimento local (Vite dev server)
        ↓
Commit + push para GitHub
        ↓
Railway detecta push (branch principal)
        ↓
Build automático (vite build)
        ↓
Deploy do output estático
```

Nenhuma configuração de backend/API é necessária — o site é inteiramente estático (sem formulário com backend próprio; contato via links diretos para WhatsApp/e-mail/Instagram, conforme Fase 03).

---

## 11. O Que Permanece Validado (sem alteração nesta fase)

- Todo o conteúdo (Fase 06)
- Toda a identidade visual (Fase 05)
- Toda a arquitetura de informação e sitemap (Fase 03, revisada)
- Comportamento responsivo (Fase 04)

---

## 12. Pendências

- [ ] Faixa etária atendida (herdada desde a Fase 03) — necessária para o conteúdo do FAQ em `copy.ts`
- [ ] Validação formal de contraste WCAG AA
- [ ] Definição final de conteúdo inicial da página `/materiais` (mesmo que seja um estado "em construção")

---

## 13. Checklist de Validação

- [ ] Stack aprovada
- [ ] Estrutura de pastas aprovada
- [ ] Roteamento aprovado
- [ ] Estratégia de animação aprovada
- [ ] Pronto para Fase 09 — Development (implementação real do código)

---

**Status:** Aguardando sua aprovação antes de seguirmos para a **Fase 09 — Development**, onde o código é efetivamente escrito.
