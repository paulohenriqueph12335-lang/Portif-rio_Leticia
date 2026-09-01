# FASE 04 — UX PLANNING (WIREFRAMES DE BAIXA FIDELIDADE)
## Portfólio Educacional | Maria Letícia ("Ticya" / "Tia Lê")

---

## 1. Resumo Executivo

Esta fase traduz a arquitetura aprovada (Fase 03) em **wireframes de baixa fidelidade** — representações estruturais em blocos, sem cor, sem tipografia definitiva e sem identidade visual. O objetivo único é validar proporção, hierarquia, densidade de conteúdo e comportamento responsivo de cada seção, antes de qualquer decisão estética (reservada às Fases 05 e 07).

Os wireframes seguem rigorosamente a ordem de seções definida na Fase 03: Hero → Quem Sou → Trajetória → Filosofia → Metodologia → Serviços → Formação → (Galeria/Depoimentos reservados) → FAQ → Contato → Rodapé.

---

## 2. Objetivos desta Fase

- Validar se a hierarquia de informação (Fase 03, seção 5) se traduz corretamente em peso visual relativo (blocos maiores = mais importantes)
- Testar o ritmo de leitura em rolagem contínua (one-page) antes de aplicar qualquer estilo
- Confirmar que cada seção comporta seu conteúdo obrigatório sem espremer ou sobrecarregar o layout
- Estabelecer o comportamento responsivo estrutural (o que empilha, o que se reorganiza, o que se esconde) em três larguras: desktop, tablet, mobile
- Definir a posição exata de cada CTA, sem ainda estilizá-lo

---

## 3. Legenda dos Wireframes

```
┌───────────────┐
│   BLOCO        │   = área de conteúdo (texto, imagem ou ilustração — indiferenciado nesta fase)
└───────────────┘

[Texto]          = espaço reservado para conteúdo textual
[Ilustração]     = espaço reservado para elemento simbólico (folha, lápis, aquarela — decidido na Fase 05/07)
[CTA]            = espaço reservado para chamada à ação
(âncora: #id)    = ponto de navegação do menu
```

---

## 4. Wireframe — Hero (Seção 1)

**Desktop**

```
┌──────────────────────────────────────────────────────────┐
│  [Menu: Quem Sou · Trajetória · Filosofia · Metodologia   │
│         · Serviços · Formação · FAQ · Contato]             │
├──────────────────────────────────────────────────────────┤
│                                                              │
│   [Texto: Headline]                    [Ilustração          │
│   [Texto: Subheadline]                  discreta —          │
│                                          canto ou fundo]     │
│   [Indicador sutil de rolagem]                              │
│                                                              │
└──────────────────────────────────────────────────────────┘
```

**Mobile**

```
┌────────────────────┐
│ [☰ Menu hambúrguer] │
├────────────────────┤
│                      │
│  [Texto: Headline]   │
│  [Texto: Subheadline]│
│  [Ilustração,        │
│   reduzida, abaixo   │
│   ou removida se     │
│   competir com o     │
│   texto]              │
│  [Indicador de       │
│   rolagem]           │
└────────────────────┘
```

**Notas de UX:** headline e subheadline centralizados verticalmente na viewport inicial (above the fold). Nenhum CTA nesta seção — decisão da Fase 03 mantida. Em mobile, a ilustração cede espaço ao texto se houver conflito de espaço (prioridade: legibilidade > decoração, conforme Brand Strategy).

---

## 5. Wireframe — Quem Sou (Seção 2)

**Desktop**

```
┌──────────────────────────────────────────────────────────┐
│  (âncora: #quem-sou)                                        │
│                                                              │
│   [Ilustração ou    │   [Texto: título da seção]            │
│    foto pessoal,    │   [Texto: história do apelido         │
│    coluna esquerda]  │    "Ticya"]                          │
│                      │   [Texto: personalidade/hobbies]      │
│                                                              │
└──────────────────────────────────────────────────────────┘
```

**Mobile**

```
┌────────────────────┐
│ (âncora: #quem-sou)  │
│                      │
│ [Ilustração/foto,    │
│  topo, largura       │
│  total]               │
│ [Texto: título]      │
│ [Texto: história do  │
│  apelido]            │
│ [Texto: hobbies]     │
└────────────────────┘
```

**Notas de UX:** layout de duas colunas em desktop vira empilhamento vertical (imagem → texto) em mobile. A imagem/ilustração sempre precede o texto em mobile para dar contexto humano antes da leitura.

---

## 6. Wireframe — Trajetória (Seção 3)

**Desktop**

```
┌──────────────────────────────────────────────────────────┐
│  (âncora: #trajetoria)                                      │
│  [Texto: título da seção]                                   │
│                                                              │
│  ●──────●──────●──────●──────●                              │
│  [Texto] [Texto] [Texto] [Texto] [Texto]                     │
│  14 anos  18 anos  Projeto  Mudança  Hoje                    │
│                     próprio  de cidade                       │
└──────────────────────────────────────────────────────────┘
```

**Mobile**

```
┌────────────────────┐
│ (âncora: #trajetoria)│
│ [Texto: título]      │
│                      │
│ ● [Texto] 14 anos    │
│ │                    │
│ ● [Texto] 18 anos    │
│ │                    │
│ ● [Texto] Projeto    │
│ │         próprio    │
│ ● [Texto] Mudança    │
│ │                    │
│ ● [Texto] Hoje        │
└────────────────────┘
```

**Notas de UX:** linha do tempo horizontal em desktop (5 marcos, conforme limite de legibilidade), vertical em mobile — padrão comum para timelines responsivas, evita rolagem horizontal (anti-padrão de UX). Nenhum nome real de criança em nenhum marco (validado na Discovery).

---

## 7. Wireframe — Filosofia (Seção 4)

**Desktop e Mobile (mesmo padrão, blocos únicos)**

```
┌──────────────────────────────────────────────────────────┐
│  (âncora: #filosofia)                                       │
│                                                              │
│              [Texto: citação de destaque —                  │
│               trecho do Manifesto]                          │
│                                                              │
│              [Texto: parágrafo de apoio]                    │
│                                                              │
└──────────────────────────────────────────────────────────┘
```

**Notas de UX:** seção deliberadamente simples e centralizada — funciona como "pausa respiratória" na jornada de rolagem, antes da densidade de informação da Metodologia. Não precisa de adaptação estrutural entre desktop/mobile, apenas de escala tipográfica (decidida na Fase 07).

---

## 8. Wireframe — Metodologia (Seção 5)

**Desktop**

```
┌──────────────────────────────────────────────────────────┐
│  (âncora: #metodologia)                                     │
│  [Texto: título da seção]                                   │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │[Ícone]    │  │[Ícone]    │  │[Ícone]    │  │[Ícone]    │    │
│  │[Texto:    │  │[Texto:    │  │[Texto:    │  │[Texto:    │    │
│  │Individua- │  │Atividades │  │Recursos   │  │Interven-  │    │
│  │lidade]    │  │lúdicas]   │  │visuais]   │  │ções       │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
│                                                              │
│  [CTA leve: "quer saber mais sobre como isso funciona?"]    │
└──────────────────────────────────────────────────────────┘
```

**Mobile**

```
┌────────────────────┐
│(âncora: #metodologia)│
│ [Texto: título]      │
│                      │
│ ┌──────────────────┐│
│ │[Ícone][Texto]      ││
│ └──────────────────┘│
│ ┌──────────────────┐│
│ │[Ícone][Texto]      ││
│ └──────────────────┘│
│ ┌──────────────────┐│
│ │[Ícone][Texto]      ││
│ └──────────────────┘│
│ ┌──────────────────┐│
│ │[Ícone][Texto]      ││
│ └──────────────────┘│
│ [CTA leve]            │
└────────────────────┘
```

**Notas de UX:** grade de 4 colunas em desktop vira empilhamento de 1 coluna em mobile (nunca 2x2 — mantém leitura linear e ritmo pausado). Cada bloco representa um recurso citado na Brand Strategy (individualidade, atividades lúdicas, recursos visuais, intervenções psicopedagógicas).

---

## 9. Wireframe — Serviços / Atuação (Seção 6)

**Desktop**

```
┌──────────────────────────────────────────────────────────┐
│  (âncora: #servicos)                                        │
│  [Texto: título da seção]                                   │
│  [Texto: formato de atendimento — presencial/online]        │
│                                                              │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌───────────┐│
│  │[Reforço      │ │[Coord.       │ │[Orientação   │ │[Palestras]  ││
│  │escolar]      │ │motora]       │ │a pais]       │ │             ││
│  └────────────┘ └────────────┘ └────────────┘ └───────────┘│
│                                                              │
│  [CTA leve: "converse comigo sobre o que você precisa"]     │
└──────────────────────────────────────────────────────────┘
```

**Mobile:** mesmo padrão de empilhamento vertical já estabelecido na Metodologia.

**Notas de UX:** cada card de serviço deve ser objetivo — um título + uma frase, nada além disso (evita transformar a seção em "página de vendas"). Local de atuação **[depende da validação pendente: cidade específica em Mato Grosso]** deve aparecer como texto de apoio, não como bloco separado.

---

## 10. Wireframe — Formação (Seção 7)

**Desktop e Mobile (bloco único, sem necessidade de grade)**

```
┌──────────────────────────────────────────────────────────┐
│  (âncora: #formacao)                                        │
│  [Texto: título da seção]                                   │
│  [Texto: parágrafo transparente sobre o status da           │
│   formação em Psicopedagogia — em construção]               │
│  [Texto opcional: cursos complementares, se houver]         │
└──────────────────────────────────────────────────────────┘
```

**Notas de UX:** propositalmente o bloco mais "quieto" visualmente do site — sem ícones, sem grade, sem elementos de destaque. A simplicidade do wireframe aqui é uma decisão de UX, não uma limitação: uma seção "gritante" sobre um tema delicado (formação incompleta) soaria defensiva.

---

## 11. Wireframe — Galeria e Depoimentos [seções reservadas]

```
┌──────────────────────────────────────────────────────────┐
│  [Seção não renderizada nesta versão — reservada na        │
│   estrutura de componentes para ativação futura, sem       │
│   necessidade de redesenho]                                 │
└──────────────────────────────────────────────────────────┘
```

**Notas de UX:** conforme já definido na Fase 03, estas seções não aparecem no menu nem na rolagem até haver conteúdo validado. O wireframe existe apenas como placeholder estrutural no sistema de componentes (Fase 08).

---

## 12. Wireframe — FAQ (Seção 8)

**Desktop e Mobile (mesmo padrão — acordeão é naturalmente responsivo)**

```
┌──────────────────────────────────────────────────────────┐
│  (âncora: #faq)                                             │
│  [Texto: título da seção]                                   │
│                                                              │
│  ┌──────────────────────────────────────────────────┐      │
│  │ [Texto: pergunta 1]                          [ v ] │      │
│  ├──────────────────────────────────────────────────┤      │
│  │ [Texto: pergunta 2]                          [ v ] │      │
│  ├──────────────────────────────────────────────────┤      │
│  │ [Texto: pergunta 3]                          [ v ] │      │
│  ├──────────────────────────────────────────────────┤      │
│  │ [Texto: pergunta 4]                          [ v ] │      │
│  └──────────────────────────────────────────────────┘      │
└──────────────────────────────────────────────────────────┘
```

**Notas de UX:** formato acordeão (expansível), com apenas uma pergunta aberta por vez — evita poluição visual e mantém o ritmo pausado da experiência. Perguntas definidas na Fase 03 (seção 6.10), pendente validação final de conteúdo.

---

## 13. Wireframe — Contato (Seção 9)

**Desktop**

```
┌──────────────────────────────────────────────────────────┐
│  (âncora: #contato)                                          │
│                                                              │
│              [Texto: convite ao contato]                    │
│                                                              │
│     [Botão: WhatsApp]  [Botão: E-mail]  [Botão: Instagram]  │
│                                                              │
└──────────────────────────────────────────────────────────┘
```

**Mobile**

```
┌────────────────────┐
│(âncora: #contato)     │
│                      │
│ [Texto: convite]     │
│                      │
│ [Botão: WhatsApp]     │
│ [Botão: E-mail]       │
│ [Botão: Instagram]    │
└────────────────────┘
```

**Notas de UX:** os três canais confirmados (WhatsApp `https://wa.me/message/OMD3D3MKT53VO1`, e-mail `profleticiasoares3@gmail.com`, Instagram `@Euticya_soares`) aparecem como botões de mesmo peso visual — nenhum é hierarquicamente "principal" nesta fase estrutural (poderá mudar na Fase 05 se a marca quiser priorizar WhatsApp como canal mais rápido). Em mobile, empilhados verticalmente para toque confortável (mínimo 44px de área de toque, requisito de acessibilidade).

---

## 14. Wireframe — Rodapé

```
┌──────────────────────────────────────────────────────────┐
│  [Texto: assinatura institucional]                          │
│  [Links rápidos: mesmas âncoras do menu]                    │
│  [Ícones: WhatsApp · E-mail · Instagram]                    │
│  [Texto: ano/direitos]                                       │
└──────────────────────────────────────────────────────────┘
```

---

## 15. Botão Fixo de Contato (elemento persistente)

```
Desktop:  canto inferior direito, sempre visível, discreto
                                                    ┌────┐
                                                    │ [WA]│
                                                    └────┘
Mobile:   mesma posição, tamanho de toque ampliado
                                                    ┌────┐
                                                    │ [WA]│
                                                    └────┘
```

**Notas de UX:** conforme definido na Fase 03, único botão fixo do site, direcionando ao WhatsApp (canal de resposta mais rápida). Nunca animado de forma chamativa — no máximo uma transição sutil de opacidade ao aparecer após o Hero.

---

## 16. Fluxo de Navegação (Menu)

```
Clique em item do menu
        ↓
Rolagem suave até a âncora correspondente
        ↓
Seção ganha destaque temporário no menu (indicador de "seção ativa")
        ↓
Usuário pode continuar rolando manualmente ou usar o menu novamente
```

**Mobile:** clique no ícone hambúrguer → menu expande em overlay de tela cheia → clique em item → menu fecha automaticamente → rolagem suave até a âncora.

---

## 17. Fluxo de Interação — FAQ (Acordeão)

```
Estado inicial: todas as perguntas fechadas
        ↓
Clique em uma pergunta → expande a resposta, ícone gira (v → ^)
        ↓
Clique em outra pergunta → a anterior fecha automaticamente, a nova expande
        ↓
Clique na mesma pergunta aberta → fecha
```

---

## 18. Comportamento Responsivo — Resumo Consolidado

| Elemento | Desktop | Tablet | Mobile |
|---|---|---|---|
| Menu | Horizontal, todas as âncoras visíveis | Horizontal, pode reduzir espaçamento | Hambúrguer, overlay de tela cheia |
| Quem Sou | 2 colunas (imagem + texto) | 2 colunas ou empilhado, conforme espaço | 1 coluna, imagem no topo |
| Trajetória | Linha do tempo horizontal | Horizontal reduzida ou vertical | Linha do tempo vertical |
| Metodologia/Serviços | Grade de 4 colunas | Grade de 2 colunas | 1 coluna empilhada |
| FAQ | Acordeão largura total | Acordeão largura total | Acordeão largura total |
| Contato | Botões lado a lado | Botões lado a lado ou empilhados | Botões empilhados |
| Botão fixo | Canto inferior direito, discreto | Igual | Canto inferior direito, área de toque ampliada |

---

## 19. Anotações de Usabilidade e Riscos de Wireframe

| Observação | Risco se ignorado | Mitigação |
|---|---|---|
| Timeline horizontal em desktop com 5 marcos | Se crescer para 6+, quebra o limite de legibilidade em linha | Manter no máximo 5 marcos; consolidar eventos secundários dentro de um marco existente |
| Seção Formação muito "quieta" | Pode passar despercebida | Isso é intencional — não é uma falha de wireframe, é a decisão estratégica da Fase 02/03 |
| Botão fixo de WhatsApp sempre visível | Pode competir com o CTA principal da seção Contato | Botão fixo deve ser visualmente mais discreto que os botões da seção Contato (definido na Fase 05) |
| Grade de 4 colunas (Metodologia/Serviços) em tablet | Pode ficar apertada com 3-4 colunas | Wireframe já prevê queda para 2 colunas em tablet |

---

## 20. Checklist de Validação

- [ ] Estrutura de cada seção aprovada
- [ ] Comportamento responsivo aprovado (desktop/tablet/mobile)
- [ ] Posição dos CTAs aprovada
- [ ] Fluxos de navegação (menu, FAQ) aprovados
- [ ] Hierarquia visual (blocos maiores = mais importantes) condizente com a Fase 03
- [ ] Pronto para iniciar a Fase 05 — Design System

---

**Status:** Aguardando sua aprovação (ou ajustes pontuais) antes de avançarmos para a **Fase 05 — Design System**, onde entram finalmente cores, tipografia e os primeiros elementos de identidade visual.
