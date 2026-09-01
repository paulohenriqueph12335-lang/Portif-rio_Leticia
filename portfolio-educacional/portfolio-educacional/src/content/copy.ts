// Copy final — Fase 06 (Storytelling)
// Mantido separado dos componentes visuais para facilitar atualizações de texto
// sem tocar em lógica/JSX.

export const contato = {
  whatsapp: 'https://wa.me/message/OMD3D3MKT53VO1',
  email: 'profleticiasoares3@gmail.com',
  instagram: '@Euticya_soares',
  instagramUrl: 'https://instagram.com/Euticya_soares',
}

export const home = {
  headline: 'Antes de estudar sobre o desenvolvimento infantil, eu já vivia isso todos os dias',
  subheadline: 'Psicopedagogia em formação. Prática construída desde os 14 anos, uma criança de cada vez.',
  intro: 'Um portfólio em capítulos — escolha por onde começar',
  capitulos: [
    {
      eyebrow: 'Capítulo 1',
      titulo: 'Sobre e trajetória',
      descricao: 'Quem sou, a linha do tempo',
      to: '/sobre',
      cor: 'rosa',
    },
    {
      eyebrow: 'Capítulo 2',
      titulo: 'Metodologia',
      descricao: 'Filosofia, serviços',
      to: '/metodologia',
      cor: 'amarelo',
    },
    {
      eyebrow: 'Em imagens',
      titulo: 'Galeria',
      descricao: 'Atividades, bastidores, eventos',
      to: '/galeria',
      cor: 'azul',
    },
    {
      eyebrow: 'Área dinâmica',
      titulo: 'Materiais',
      descricao: 'Conteúdo que cresce com o tempo',
      to: '/materiais',
      cor: 'verde',
    },
    {
      eyebrow: 'Capítulo 3',
      titulo: 'Formação',
      descricao: 'Onde estou hoje',
      to: '/formacao',
      cor: 'azul',
    },
    {
      eyebrow: 'Dúvidas',
      titulo: 'FAQ',
      descricao: 'Perguntas frequentes',
      to: '/faq',
      cor: 'rosa',
    },
    {
      eyebrow: 'Último capítulo',
      titulo: 'Contato',
      descricao: 'Vamos conversar?',
      to: '/contato',
      cor: 'outline',
    },
  ],
}

export const sobre = {
  eyebrow: 'Quem sou',
  titulo: 'Ticya',
  corpo: [
    'Me chamam de Ticya desde que minha prima Ellen, ainda pequena, tentava dizer "Letícia" — e saía um carinhoso "Aticya". O apelido ficou guardado no coração e, com o tempo, virou parte de quem eu sou.',
    'Fora da sala de aula, sou apaixonada por música e por livros. Cantar é uma das formas que encontro de me sentir viva; ler é como viajo por outras histórias e aprendo um pouco mais a cada página. Afinal, quem ensina também precisa estar sempre aprendendo.',
  ],
  trajetoria: {
    eyebrow: 'Trajetória',
    titulo: 'Um caminho que foi se desenhando',
    introducao: 'Nunca houve um único momento em que decidi cuidar de crianças. Sempre foi algo natural — como se o caminho já existisse antes de mim.',
    marcos: [
      { ano: '14 anos', texto: 'Minha primeira palestra, para alunos do 5º ano. Um desafio que parecia grande demais — e que eu decidi aceitar mesmo assim.' },
      { ano: '18 anos', texto: 'Auxiliar de creche pela Prefeitura do Ceará, acompanhando uma turma de dois anos. Também professora de reforço, com foco em alfabetização.' },
      { ano: '2023', texto: 'Escola Re Vamos Aprender: reforço escolar com ênfase em crianças com TEA (transtorno do espectro autista) e TDAH.' },
      { ano: '2024', texto: 'Escola Cazuza Bezerra: auxiliar de sala em educação infantil e professora de reforço para o 2º e 5º ano do fundamental.' },
      { ano: 'Hoje', texto: 'Em Primavera do Leste (MT), sigo com meu próprio acompanhamento pedagógico. Entre a Psicologia e a Pedagogia, encontrei meu lugar: a Psicopedagogia.' },
    ],
  },
}

export const sobreExtra = {
  cidade: 'Primavera do Leste - MT',
  telefone: '(81) 9390-0144',
  cursosComplementares: [
    { nome: 'Produção Textual', carga: '10h' },
    { nome: 'Análise de Dados', carga: '10h' },
    { nome: 'Análise de Textos', carga: '10h' },
  ],
}

export const metodologia = {
  filosofia: {
    eyebrow: 'Filosofia',
    citacao: 'Nenhuma criança aprende do mesmo jeito que a outra.',
    corpo: 'Antes de ensinar, eu observo. Antes de aplicar qualquer método, preciso entender a criança que está na minha frente — o tempo dela, o jeito dela, o que faz sentido para ela. Não busco resultados rápidos. Busco caminhos verdadeiros.',
  },
  metodologia: {
    eyebrow: 'Metodologia',
    titulo: 'Cada criança, um caminho próprio',
    introducao: 'Na prática, isso significa adaptar cada estratégia às necessidades reais de quem está aprendendo — nunca aplicar a mesma fórmula para todos.',
    cards: [
      { titulo: 'Individualidade', texto: 'Cada plano é pensado a partir de quem a criança é, não de uma média.' },
      { titulo: 'Recursos visuais', texto: 'Materiais que tornam conceitos abstratos em algo que se pode ver e tocar.' },
      { titulo: 'Atividades lúdicas', texto: 'Aprender também pode ser leve — e o é, quando feito com intenção.' },
      { titulo: 'Intervenções', texto: 'Observação próxima, ajustes constantes, sempre no tempo da criança.' },
    ],
  },
  servicos: {
    eyebrow: 'Serviços',
    titulo: 'Como posso ajudar',
    introducao: 'Atendimento com prioridade presencial em Primavera do Leste (MT), também disponível online.',
    cards: [
      { titulo: 'Reforço escolar' },
      { titulo: 'Coordenação motora' },
      { titulo: 'Orientação a pais' },
      { titulo: 'Palestras' },
    ],
  },
}

export const formacao = {
  eyebrow: 'Formação',
  corpo: 'Estou cursando Psicopedagogia, hoje com a graduação pausada. Minha maior bagagem vem da prática — construída desde os 14 anos, em contextos diferentes, com crianças diferentes. Acredito que aprender nunca termina, nem para quem ensina.',
  complementar: 'Também completei cursos complementares em produção textual, análise de dados e análise de textos.',
}

export const faq = {
  eyebrow: 'Perguntas frequentes',
  titulo: 'Tirando algumas dúvidas',
  perguntas: [
    { pergunta: 'Você atende presencial ou online?', resposta: 'De preferência presencial, em Primavera do Leste (MT), mas também atendo online, conforme a necessidade.' },
    { pergunta: 'Sua formação em Psicopedagogia está concluída?', resposta: 'Ainda não — está em andamento. Minha experiência prática, no entanto, vem sendo construída desde os 14 anos.' },
    { pergunta: 'Qual faixa etária você atende?', resposta: 'Em breve, mais detalhes sobre a faixa etária atendida.' }, // TODO: pendência desde a Fase 03
    { pergunta: 'Como funciona o primeiro contato?', resposta: 'Você pode falar comigo diretamente pelo WhatsApp, e-mail ou Instagram. Vamos conversar sobre o que você precisa.' },
  ],
}

export const contatoPagina = {
  titulo: 'Vamos escrever esse próximo capítulo?',
  subtitulo: 'Sem pressa, sem compromisso — só uma conversa.',
}

export const materiais = {
  eyebrow: 'Materiais',
  titulo: 'Em construção',
  corpo: 'Esta página vai reunir, aos poucos, conteúdos e materiais de apoio para famílias e educadores. Volte em breve.',
}

export const menu = [
  { label: 'Sobre', to: '/sobre' },
  { label: 'Metodologia', to: '/metodologia' },
  { label: 'Galeria', to: '/galeria' },
  { label: 'Materiais', to: '/materiais' },
  { label: 'Formação', to: '/formacao' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contato', to: '/contato' },
]

export interface GalleryItem {
  src: string
  alt: string
  legenda: string
}

// Curadoria de fotos reais — apenas imagens com crianças vestidas, em contexto
// pedagógico claro, com autorização de uso confirmada pela cliente.
export const galeria: { categoria: string; itens: GalleryItem[] }[] = [
  {
    categoria: 'Atividades pedagógicas',
    itens: [
      {
        src: '/gallery/jogo-silabico-1.jpg',
        alt: 'Criança brincando com jogo de sílabas simples sobre a mesa',
        legenda: 'Jogo de sílabas — alfabetização de forma lúdica',
      },
      {
        src: '/gallery/jogo-silabico-2.jpg',
        alt: 'Criança organizando cartas do jogo de sílabas',
        legenda: 'Cada carta, uma descoberta',
      },
      {
        src: '/gallery/letras-massinha.jpg',
        alt: 'Criança formando letras com massinha de modelar',
        legenda: 'Letras em massinha — aprender com as mãos',
      },
      {
        src: '/gallery/atividade-alfabeto.jpg',
        alt: 'Criança sorridente com letras do alfabeto sobre a mesa',
        legenda: 'Montando o próprio nome, letra por letra',
      },
      {
        src: '/gallery/atividade-colorir.jpg',
        alt: 'Grupo de crianças colorindo em atividade de mesa',
        legenda: 'Atividades em grupo, respeitando o ritmo de cada um',
      },
      {
        src: '/gallery/atividade-sensorial-fotos.jpg',
        alt: 'Crianças sentadas em roda explorando fotografias',
        legenda: 'Reconhecimento afetivo e vínculo familiar',
      },
    ],
  },
  {
    categoria: 'Momentos e bastidores',
    itens: [
      {
        src: '/gallery/ticya-ensinando.jpg',
        alt: 'Ticya sentada com um grupo de crianças, mostrando uma atividade',
        legenda: 'Perto, sempre — do jeito que a prática pede',
      },
      {
        src: '/gallery/dia-das-criancas.jpg',
        alt: 'Comemoração do Dia das Crianças com decoração e crianças reunidas',
        legenda: 'Dia das Crianças — celebrar também é ensinar',
      },
      {
        src: '/gallery/equipe-natal.jpg',
        alt: 'Ticya com colegas de equipe em confraternização de Natal',
        legenda: 'Bastidores — a equipe por trás do cuidado',
      },
      {
        src: '/gallery/modo-educadora.jpg',
        alt: 'Mãos organizando material pedagógico de matemática',
        legenda: '"Modo educadora" — preparo antes da aula',
      },
    ],
  },
  {
    categoria: 'Eventos e palestras',
    itens: [
      {
        src: '/gallery/evento-palestra.jpg',
        alt: 'Evento escolar em pátio com famílias e crianças reunidas',
        legenda: 'Palestras que aproximam escola e família',
      },
    ],
  },
]
