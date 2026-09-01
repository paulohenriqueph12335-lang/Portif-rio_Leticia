# FASE 07 — UI DESIGN
## Portfólio Educacional | Maria Letícia ("Ticya" / "Tia Lê")

---

## 1. Resumo Executivo

Esta fase junta tudo o que foi produzido até aqui — arquitetura (Fase 03), wireframes (Fase 04), Design System (Fase 05) e copy final (Fase 06) — em telas completas, prontas para servirem de referência direta ao Front-end Architect (Fase 08). Nenhuma decisão nova de conteúdo ou estrutura foi tomada nesta fase; o trabalho aqui é exclusivamente de composição final: como cada elemento se organiza, se espaça e se comporta na tela.

A prévia visual compartilhada (Hero, Quem Sou, Trajetória, Contato) demonstra a integração completa entre texto (Fase 06) e sistema visual (Fase 05) — as demais seções (Filosofia, Metodologia, Serviços, Formação, FAQ) seguem exatamente o mesmo padrão já validado nas simulações anteriores.

---

## 2. Grid e Espaçamento

| Contexto | Regra |
|---|---|
| Largura máxima de conteúdo (desktop) | ~1120px, centralizado, com respiro lateral generoso |
| Padding lateral de seção (desktop) | 32-40px |
| Padding lateral de seção (mobile) | 20-24px |
| Espaço vertical entre seções | Generoso e consistente (~64-96px desktop, ~48-56px mobile) — sustenta o "espaço negativo" definido como identidade na Fase 05 |
| Grid de cards (Metodologia/Serviços) | 4 colunas desktop → 2 colunas tablet → 1 coluna mobile (já definido na Fase 04, mantido) |
| Raio de borda padrão | 18-22px em cards e blocos grandes; 14px em cards menores; 24px+ em pílulas/tags |

---

## 3. Estados de Interação

| Elemento | Estado padrão | Hover/Foco | Ativo |
|---|---|---|---|
| Item de menu | Texto em verde-floresta suave | Sublinhado fino desenhado à mão (não uma barra reta) | Cor levemente mais escura, âncora ativa marcada |
| Botão de contorno fino | Fundo branco, borda sutil | Fundo ganha leve tom da cor do canal (ex: verde clarinho para WhatsApp) | Leve escurecimento da borda |
| Card de FAQ (acordeão) | Fechado, indicador "+" | Sombra sutil ao passar o mouse | Expandido, indicador "−", conteúdo revelado com transição suave |
| Card de Metodologia/Serviços | Estático | Leve elevação (sombra suave) + ícone com micro-movimento (ex: folha balança) | — |
| Botão fixo de contato | Opacidade reduzida até o Hero terminar | Leve escala ao passar o mouse (~1.05x) | — |
| Links de rodapé | Texto padrão | Sublinhado sutil | — |

Todos os estados seguem a regra geral: transições suaves (200-300ms), nunca abruptas, reforçando a identidade "desenhado à mão, nunca mecânico".

---

## 4. Acessibilidade de Contraste

Verificação de contraste texto/fundo para os pares mais usados da paleta (Fase 05):

| Combinação | Contexto | Observação |
|---|---|---|
| Verde-floresta (`#3B4A34`) sobre creme (`#FBF5EA`) | Texto padrão | Alto contraste, adequado para leitura longa |
| Verde-floresta sobre verde sálvia (`#DDEBD1`) | Seção Quem Sou | Contraste confortável, validado visualmente |
| Marrom-quente sobre creme | Textos secundários | Manter para textos de apoio, evitar para textos longos de leitura primária |
| Texto branco sobre cores de destaque (azul/amarelo/rosa) | Tags e badges | Usar apenas em textos curtos (uma palavra), nunca em parágrafos |

**Recomendação para a Fase 08:** validar formalmente com ferramenta de contraste (ex: WCAG AA) antes da implementação final, especialmente nos textos secundários em marrom sobre creme.

---

## 5. Comportamento dos Personagens em Tela (especificação para animação, detalhamento técnico na Fase 10)

| Personagem | Comportamento estático (Fase 07) | Comportamento animado (a especificar na Fase 10) |
|---|---|---|
| Raposa (Hero) | Parcialmente atrás do texto, canto inferior direito | Pisca lentamente ao entrar em viewport |
| Ursinho (Quem Sou) | Ao lado do retrato circular | Leve balanço, sem repetição em loop chamativo |
| Coelha (Trajetória) | Sobre a trilha, entre marcos | Caminha ao longo da trilha conforme o scroll avança |
| Borboleta (Filosofia) | Cruzando a citação, canto superior | Cruza lentamente a tela ao entrar na seção |
| Coruja (Contato) | Pousada no galho, centralizada | Presença estática, talvez um piscar sutil ao final |

---

## 6. Lista de Assets para Handoff (Fase 08 — Front-end Architect)

- Ilustrações finais em SVG de cada personagem (raposa, ursinho, coelha, borboleta, coruja) — vetorizadas a partir do estilo aprovado nas simulações
- Ícones de metodologia/serviços em SVG, mesma linguagem gráfica dos personagens
- Textura de papel (arquivo de ruído sutil ou gerado via CSS/SVG filter)
- Tokens de cor (paleta completa da Fase 05, em formato de variáveis CSS)
- Tokens de tipografia (5 famílias definidas na Fase 05, com pesos e tamanhos por nível hierárquico)
- Copy final por seção (Fase 06), pronto para inserção direta nos componentes

---

## 7. O Que Permanece Validado (sem alteração nesta fase)

- Estrutura, ordem e função de cada seção (Fase 03)
- Comportamento responsivo (Fase 04)
- Paleta, personagens, tipografia e componentes base (Fase 05)
- Texto final de cada seção (Fase 06)

---

## 8. Pendências

- [ ] Faixa etária atendida — ainda pendente desde a Fase 03, necessária para o FAQ
- [ ] Validação formal de contraste (WCAG AA) na Fase 08
- [ ] Vetorização final dos personagens (as versões atuais são simulações em SVG simplificado; a versão de produção pode receber refinamento de traço)

---

## 9. Checklist de Validação

- [ ] Grid e espaçamento aprovados
- [ ] Estados de interação aprovados
- [ ] Comportamento dos personagens aprovado
- [ ] Lista de assets validada
- [ ] Pronto para Fase 08 — Front-end Architecture

---

**Status:** Aguardando sua aprovação antes de seguirmos para a **Fase 08 — Front-end Architecture**, onde definimos a estrutura de componentes React/Tailwind que vai implementar tudo isso.
