export const defaultLocale = "pt" as const;

export const supportedLocales = [
  { code: "pt", iso: "pt-BR", name: "Português", shortName: "PT" },
  { code: "en", iso: "en-CA", name: "English", shortName: "EN" },
  { code: "es", iso: "es", name: "Español", shortName: "ES" },
  { code: "fr", iso: "fr-CA", name: "Français", shortName: "FR" },
] as const;

export type LocaleCode = (typeof supportedLocales)[number]["code"];

export function isSupportedLocale(value: unknown): value is LocaleCode {
  return supportedLocales.some((locale) => locale.code === value);
}

export const messages = {
  pt: {
    seo: {
      title: "b8edu | Plataforma educacional para gestão pedagógica e cronograma de aulas",
      description:
        "A b8edu ajuda escolas regulares, escolas de idiomas, cursos livres e reforço escolar a organizar turmas, professores, alunos, materiais didáticos, planos de aula e cronogramas.",
      ogDescription:
        "Organize a rotina pedagógica da sua escola: turmas, professores, alunos, materiais didáticos, planos de aula e cronogramas em uma plataforma centralizada.",
      organizationDescription:
        "A b8edu é uma plataforma educacional para escolas organizarem turmas, professores, alunos, materiais didáticos, planos pedagógicos e cronogramas de aula.",
      softwareDescription:
        "Plataforma educacional para gestão pedagógica, organização de turmas, materiais didáticos, planos de aula e cronogramas.",
    },
    nav: {
      problem: "Problema",
      solution: "Solução",
      resources: "Recursos",
      waitlist: "Lista de espera",
      joinWaitlist: "Entrar na lista de espera",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      language: "Idioma",
    },
    hero: {
      eyebrow: "Plataforma educacional",
      titleBefore: "Organize a rotina",
      titleHighlight: "pedagógica",
      titleAfter: "da sua escola",
      subtitle:
        "A b8edu ajuda escolas a centralizar turmas, professores, alunos, materiais didáticos, planos de aula e cronogramas pedagógicos em uma plataforma simples e visual.",
      primaryCta: "Entrar na lista de interesse",
      secondaryCta: "Ver como funciona",
      schoolTypesLabel: "Pensado para diferentes formatos de ensino",
      schoolTypes: ["Escolas Regulares", "Escolas de Idiomas", "Cursos Livres", "Reforço Escolar", "Cursos Técnicos"],
      card: {
        eyebrow: "Cronograma da turma",
        title: "9º Ano A — Matemática",
        status: "Publicado",
        progressLabel: "Planejamento do período",
        lessonEyebrow: "Aula planejada",
        lessonDescription:
          "Revise o que será trabalhado na próxima aula, os materiais vinculados e as atividades previstas para a turma.",
        planEyebrow: "Plano da turma",
        planStatus: "Em revisão",
        planTitle: "Plano B1 — 2026/1",
        planDescription: "Livro, unidades, revisões e avaliações conectados ao cronograma.",
        materialEyebrow: "Material didático",
        materialStatus: "Vinculado",
        materialTitle: "Unidade 3 — Capítulo 2",
        materialDescription: "Livro, apostila ou conteúdo próprio conectado ao plano da aula.",
      },
      lessonPlanItems: [
        { label: "Material didático: Unidade 3 — Frações e porcentagem", badge: "Material", selected: false },
        { label: "Aula de hoje: revisão guiada + atividade prática", badge: "Hoje", selected: true },
        { label: "Próxima aula: prova diagnóstica da turma", badge: "Prova", selected: false },
        { label: "Tarefa: lista de exercícios para casa", badge: "Tarefa", selected: false },
      ],
      stats: [
        { value: "01", label: "Turmas organizadas" },
        { value: "02", label: "Planos por turma" },
        { value: "03", label: "Cronograma claro" },
      ],
    },
    problem: {
      title: "A rotina pedagógica ainda fica espalhada demais",
      subtitle:
        "Turmas, planos de aula, materiais, exercícios, provas, flashcards e atividades precisam conversar entre si para a escola acompanhar melhor o aprendizado.",
      items: [
        {
          icon: "event_busy",
          title: "Planejamento pedagógico espalhado",
          description:
            "Planos de aula, conteúdos, revisões e provas acabam divididos entre planilhas, cadernos, mensagens e arquivos soltos. A coordenação perde a visão do caminho da turma.",
        },
        {
          icon: "assignment_late",
          title: "Exercícios e provas desconectados",
          description:
            "Atividades, exercícios, provas e revisões muitas vezes são criados fora do planejamento da turma, dificultando saber o que foi praticado, avaliado e retomado em cada etapa.",
        },
        {
          icon: "style",
          title: "Flashcards fora da rotina de estudo",
          description:
            "Flashcards podem ajudar muito na fixação, especialmente em idiomas e conteúdos de memorização, mas geralmente ficam em ferramentas separadas e sem ligação com a aula do dia.",
        },
        {
          icon: "edit_note",
          title: "Atividades manuais sem organização",
          description:
            "Trabalhos, tarefas em folha, redações, projetos, atividades em sala e entregas manuais nem sempre ficam conectados à turma, ao professor, ao conteúdo e ao cronograma.",
        },
        {
          icon: "menu_book",
          title: "Material didático sem vínculo com a aula",
          description:
            "Livros, apostilas, unidades, capítulos e conteúdos próprios muitas vezes não ficam ligados ao plano da turma, dificultando saber exatamente o que será ensinado e praticado.",
        },
        {
          icon: "auto_awesome",
          title: "Professor cria tudo do zero",
          description:
            "Montar plano de aula, exercício, revisão, atividade e tarefa consome tempo. Sem apoio inteligente, o professor repete trabalho manual que poderia ser agilizado com sugestões assistidas.",
        },
      ],
    },
    solution: {
      eyebrow: "A SOLUÇÃO",
      title: "De links e planilhas soltas para uma<br class='hidden md:block' />rotina pedagógica conectada",
      subtitle:
        "Google Forms, planilhas e mensagens ajudam em partes da rotina, mas não conectam tudo. A b8edu organiza turmas, materiais didáticos, planos de aula, exercícios, provas, flashcards e atividades em uma visão pedagógica centralizada.",
      withoutTitle: "SEM A B8EDU",
      withTitle: "COM A B8EDU",
      launchBadge: "DISPONÍVEL NO LANÇAMENTO",
      roadmapBadge: "EM EVOLUÇÃO",
      withoutList: [
        "Provas e atividades no Google Forms ou Microsoft Forms, sem conexão direta com a turma, o plano de aula e o cronograma pedagógico",
        "Exercícios criados em ferramentas soltas, dificultando saber qual conteúdo foi praticado por cada turma",
        "Revisões, tarefas e provas espalhadas entre links, mensagens, planilhas e arquivos separados",
        "Flashcards em aplicativos externos, sem ligação clara com a aula, o material didático ou o nível do aluno",
        "Atividades manuais, trabalhos e entregas controlados por WhatsApp, papel ou planilhas",
        "Professor gastando tempo criando plano, exercício, revisão e tarefa do zero",
        "Coordenação sem visão clara do que foi planejado, praticado, revisado e avaliado",
      ],
      withList: [
        "Provas, exercícios e atividades conectados à turma, ao conteúdo estudado e ao planejamento pedagógico",
        "Cronograma da turma com aulas, revisões, provas, tarefas e atividades em uma visão centralizada",
        "Materiais didáticos, livros, unidades e capítulos vinculados ao plano da aula",
        "Flashcards conectados ao conteúdo para reforço, memorização e revisão contínua",
        "Atividades manuais e trabalhos registrados como parte da rotina pedagógica da turma",
        "Professor com uma base organizada para planejar, aplicar, revisar e acompanhar atividades",
        "Auxílio de IA, quando habilitado pela escola, para sugerir planos, exercícios, revisões e tarefas",
      ],
      features: [
        {
          icon: "calendar_month",
          iconBg: "bg-pm/5",
          iconColor: "text-pm",
          title: "Plano e cronograma da turma",
          description:
            "Organize o caminho pedagógico da turma com aulas planejadas, conteúdos, revisões, provas, tarefas e materiais vinculados.",
          status: "launch",
        },
        {
          icon: "assignment",
          iconBg: "bg-om/5",
          iconColor: "text-om",
          title: "Exercícios e atividades",
          description:
            "Crie atividades para prática dos alunos e conecte cada exercício ao conteúdo, ao plano da aula e à turma correspondente.",
          status: "launch",
        },
        {
          icon: "quiz",
          iconBg: "bg-green-50",
          iconColor: "text-green-600",
          title: "Provas com contexto pedagógico",
          description:
            "Planeje provas, revisões e atividades avaliativas dentro do cronograma da turma, sem depender apenas de links soltos em ferramentas externas.",
          status: "launch",
        },
        {
          icon: "style",
          iconBg: "bg-pm/5",
          iconColor: "text-pm",
          title: "Flashcards para reforço",
          description:
            "Use flashcards para apoiar memorização, vocabulário, revisão de conceitos e prática contínua conectada ao conteúdo estudado.",
          status: "launch",
        },
        {
          icon: "edit_note",
          iconBg: "bg-om/5",
          iconColor: "text-om",
          title: "Atividades manuais e trabalhos",
          description:
            "Organize tarefas em folha, redações, projetos, trabalhos e entregas manuais sem perder o vínculo com turma, professor e aula.",
          status: "launch",
        },
        {
          icon: "auto_awesome",
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          title: "Auxílio de IA para professores",
          description:
            "Em evolução: sugestões assistidas para planos de aula, exercícios, revisões, tarefas e atividades, sempre com revisão do professor.",
          status: "roadmap",
        },
      ],
    },
    transparency: {
      eyebrow: "TRANSPARÊNCIA",
      title: "O que vamos entregar primeiro e o que vem depois",
      subtitle:
        "A b8edu está sendo construída por etapas. Primeiro, vamos organizar a base pedagógica: turmas, materiais, planos, aulas, atividades, provas e cronogramas. Depois, evoluímos para registros, relatórios, pagamentos e IA.",
      note:
        "A ordem das funcionalidades pode evoluir conforme validação com escolas, professores e coordenação pedagógica. A proposta é construir a b8edu com clareza, sem prometer tudo de uma vez.",
      columns: [
        {
          badge: "PRIMEIRA VERSÃO",
          title: "Base pedagógica",
          description:
            "O foco inicial é dar clareza para a rotina pedagógica da escola: organizar turmas, materiais, planos de aula, atividades, provas, flashcards e cronogramas.",
          items: [
            "Gestão de escolas, usuários, perfis e permissões",
            "Cadastro de turmas, professores e alunos",
            "Níveis, disciplinas e estrutura customizável por escola",
            "Materiais didáticos, livros, unidades e capítulos",
            "Plano pedagógico da turma",
            "Cronograma de aulas com conteúdos, revisões, provas e tarefas",
            "Exercícios e atividades vinculados ao plano de aula",
            "Provas e revisões dentro do cronograma da turma",
            "Flashcards para reforço e memorização",
            "Atividades manuais, trabalhos e entregas organizadas por turma",
            "Branding com logo e cores da escola",
          ],
        },
        {
          badge: "PRÓXIMAS ETAPAS",
          title: "Registro e acompanhamento",
          description:
            "Depois da base pedagógica, a plataforma evolui para acompanhar o que aconteceu na prática: aula dada, frequência, desempenho e relatórios.",
          items: [
            "Diário de aula e registro do que foi realmente ministrado",
            "Chamada e controle de frequência",
            "Boletim e acompanhamento de desempenho por período",
            "Relatórios pedagógicos por turma, aluno e professor",
            "Painel avançado da coordenação",
            "Portal do responsável",
            "Notificações para alunos, professores e coordenação",
            "Integração com calendário",
          ],
        },
        {
          badge: "VISÃO FUTURA",
          title: "Inteligência e automação",
          description:
            "A visão de futuro é reduzir trabalho repetitivo, apoiar professores com IA e conectar a operação pedagógica com recursos financeiros e administrativos.",
          items: [
            "Auxílio de IA para sugerir planos de aula",
            "IA para apoiar criação de exercícios, revisões e tarefas",
            "Sugestões de flashcards com base no conteúdo estudado",
            "Análise de alunos com dificuldade ou baixa participação",
            "Pagamentos e mensalidades com Asaas",
            "Certificados digitais",
            "Aulas ao vivo e videoaulas integradas",
            "Marketplace de conteúdos educacionais",
          ],
        },
      ],
    },
    steps: {
      eyebrow: "COMO FUNCIONA",
      title: "Da rotina espalhada ao planejamento conectado",
      subtitle:
        "A b8edu organiza o caminho pedagógico da escola em etapas: estrutura, turmas, materiais, planos, cronogramas, atividades e acompanhamento.",
      items: [
        {
          title: "A escola configura sua estrutura",
          description:
            "A b8edu se adapta ao formato da escola: escola regular, escola de idiomas, curso livre, reforço escolar ou curso técnico. A escola define sua identidade, níveis, disciplinas, perfis e permissões.",
          tag: "Multi-tenant",
          tagVariant: "available",
          active: true,
        },
        {
          title: "Turmas, professores e alunos são organizados",
          description:
            "A coordenação cadastra turmas por nível, período, modalidade e horário. Professores e alunos são vinculados às turmas, mantendo cada informação no contexto certo.",
          tag: "Base pedagógica",
          tagVariant: "purple",
          active: false,
        },
        {
          title: "Materiais e conteúdos entram no plano",
          description:
            "Livros, apostilas, unidades, capítulos, cursos e conteúdos próprios podem ser conectados ao plano da turma. Assim, o material didático deixa de ficar solto e passa a fazer parte do cronograma.",
          tag: "Materiais",
          tagVariant: "orange",
          active: false,
        },
        {
          title: "A turma ganha um plano e um cronograma",
          description:
            "A coordenação ou o professor monta o caminho pedagógico da turma: aulas, conteúdos, revisões, provas, atividades, flashcards, tarefas e entregas manuais organizados por data.",
          tag: "Cronograma",
          tagVariant: "available",
          active: false,
        },
        {
          title: "Professor e aluno acompanham a rotina",
          description:
            "O professor visualiza o que será trabalhado em cada aula e o aluno acompanha conteúdos, atividades, provas, revisões e tarefas publicadas para sua turma.",
          tag: "Visão por perfil",
          tagVariant: "purple",
          active: false,
        },
        {
          title: "A plataforma evolui com registros e IA",
          description:
            "Nas próximas etapas, a b8edu evolui para diário de aula, frequência, boletim, relatórios e auxílio de IA para sugerir planos, exercícios, revisões, flashcards e tarefas, sempre com revisão do professor.",
          tag: "Em evolução",
          tagVariant: "orange",
          active: false,
        },
      ],
    },
    plans: {
      title: "Escolha como participar da validação",
      subtitle:
        "A b8edu está em fase de validação. Em vez de planos fechados, queremos entender o porte e a rotina da escola para indicar o melhor caminho de entrada.",
      cards: [
        {
          name: "Escola piloto",
          price: "Validação",
          period: "sem compromisso",
          description: "Para escolas que querem testar a primeira versão e contribuir com feedback real.",
          features: ["Acesso antecipado", "Onboarding inicial", "Turmas e cronogramas", "Canal direto com a equipe"],
          cta: "Quero validar",
          highlighted: false,
        },
        {
          name: "Fundadores",
          price: "Condição especial",
          period: "primeiros parceiros",
          description: "Para escolas que querem acompanhar de perto a evolução da plataforma.",
          features: ["Prioridade no roadmap", "Apoio na configuração", "Participação em decisões", "Condição de fundador"],
          cta: "Entrar como fundador",
          highlighted: true,
          ribbon: "Mais indicado",
        },
        {
          name: "Rede ou franquia",
          price: "Sob consulta",
          period: "projeto personalizado",
          description: "Para grupos com múltiplas unidades, marcas, equipes ou necessidades específicas.",
          features: ["Mapeamento de operação", "Estrutura multi-unidade", "Branding por escola", "Roadmap conjunto"],
          cta: "Falar com especialista",
          highlighted: false,
        },
      ],
    },
    waitlist: {
      eyebrow: "LISTA DE INTERESSE GRATUITA",
      title: "Organize a rotina pedagógica da sua escola",
      subtitle: "Entre na lista para conhecer a b8edu e acompanhar o lançamento da plataforma.",
      namePlaceholder: "Seu nome",
      emailPlaceholder: "seu@email.com",
      phonePlaceholder: "(11) 99999-9999",
      requiredError: "Preencha seu nome e e-mail para continuar.",
      phoneError: "Informe um telefone válido com DDD.",
      submitError: "Não conseguimos enviar agora. Tente novamente em instantes.",
      submit: "Entrar na lista",
      sending: "Enviando...",
      success: "Ótimo! Você está na lista. Entraremos em contato em breve.",
      trust: "Sem spam. Sem cobranças agora. Apenas novidades sobre o lançamento.",
    },
    contact: {
      eyebrow: "FALE COM A GENTE",
      title: "Conta pra gente sobre a rotina da sua escola",
      subtitle:
        "Queremos entender os desafios reais de escolas, cursos e operações educacionais para construir a b8edu com foco no que mais importa: turmas, planejamento pedagógico, materiais, atividades, provas, flashcards e cronogramas.",
      benefits: [
        "Acesso antecipado à primeira versão da b8edu",
        "Participação na validação do produto",
        "Sua dor pode influenciar o roadmap",
        "Contato direto com a equipe fundadora",
      ],
      successTitle: "Mensagem enviada!",
      successDescription: "Nossa equipe entrará em contato em breve. Obrigado!",
      nameLabel: "Seu nome *",
      namePlaceholder: "Ex: Maria Fernanda",
      emailLabel: "E-mail *",
      emailPlaceholder: "seu@email.com",
      phoneLabel: "WhatsApp",
      phonePlaceholder: "(11) 99999-9999",
      schoolLabel: "Nome da escola ou curso",
      schoolPlaceholder: "Ex: Escola Aurora, English Way, Curso Saber+",
      typeLabel: "Tipo de instituição",
      selectPlaceholder: "Selecione...",
      institutionTypes: [
        { value: "escola-regular", label: "Escola regular" },
        { value: "escola-idiomas", label: "Escola de idiomas" },
        { value: "curso-livre", label: "Curso livre" },
        { value: "reforco-escolar", label: "Reforço escolar" },
        { value: "curso-tecnico", label: "Curso técnico" },
        { value: "franquia-educacional", label: "Franquia educacional" },
        { value: "outro", label: "Outro" },
      ],
      challengeLabel: "Qual é seu maior desafio hoje?",
      challengePlaceholder:
        "Ex: Hoje o planejamento das aulas fica em planilhas, as provas em formulários e as atividades espalhadas no WhatsApp...",
      requiredError: "Preencha seu nome e e-mail para continuar.",
      phoneError: "Informe um WhatsApp válido com DDD.",
      submitError: "Não conseguimos enviar sua mensagem agora. Tente novamente em instantes.",
      submit: "Enviar mensagem",
      sending: "Enviando...",
      privacy: "Suas informações são confidenciais. Não compartilhamos com terceiros.",
    },
    footer: {
      description:
        "A b8edu ajuda escolas a organizar turmas, materiais didáticos, planos de aula, atividades, provas, flashcards e cronogramas em uma rotina pedagógica conectada.",
      columns: [
        {
          title: "Plataforma",
          links: [
            { label: "Funcionalidades", href: "#solucao" },
            { label: "Como funciona", href: "#como-funciona" },
            { label: "Transparência", href: "#transparencia" },
            { label: "Lista de interesse", href: "#lista-espera" },
          ],
        },
        {
          title: "Produto",
          links: [
            { label: "Turmas e cronogramas", href: "#solucao" },
            { label: "Atividades e provas", href: "#solucao" },
            { label: "Flashcards", href: "#solucao" },
            { label: "IA em evolução", href: "#transparencia" },
          ],
        },
        {
          title: "Contato",
          links: [
            { label: "Fale com a gente", href: "#dor-especifica" },
            { label: "Participar da validação", href: "#lista-espera" },
          ],
        },
      ],
      emailAria: "E-mail",
      copyright: "b8edu Soluções Educacionais",
    },
  },
  en: {
    seo: {
      title: "b8edu | Educational platform for academic planning and class schedules",
      description:
        "b8edu helps regular schools, language schools, free courses and tutoring programs organize classes, teachers, students, learning materials, lesson plans and schedules.",
      ogDescription:
        "Organize your school's academic routine: classes, teachers, students, learning materials, lesson plans and schedules in one centralized platform.",
      organizationDescription:
        "b8edu is an educational platform for schools to organize classes, teachers, students, learning materials, academic plans and class schedules.",
      softwareDescription:
        "Educational platform for academic management, classes, learning materials, lesson plans and schedules.",
    },
    nav: {
      problem: "Problem",
      solution: "Solution",
      resources: "Resources",
      waitlist: "Waitlist",
      joinWaitlist: "Join the waitlist",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      language: "Language",
    },
    hero: {
      eyebrow: "Educational platform",
      titleBefore: "Organize your school's",
      titleHighlight: "academic routine",
      titleAfter: "in one place",
      subtitle:
        "b8edu helps schools centralize classes, teachers, students, learning materials, lesson plans and academic schedules in a simple, visual platform.",
      primaryCta: "Join the interest list",
      secondaryCta: "See how it works",
      schoolTypesLabel: "Built for different learning models",
      schoolTypes: ["Regular Schools", "Language Schools", "Free Courses", "Tutoring Programs", "Technical Courses"],
      card: {
        eyebrow: "Class schedule",
        title: "Grade 9 A — Math",
        status: "Published",
        progressLabel: "Term planning",
        lessonEyebrow: "Planned lesson",
        lessonDescription:
          "Review what will be covered in the next class, the linked materials and the planned activities for the group.",
        planEyebrow: "Class plan",
        planStatus: "In review",
        planTitle: "B1 Plan — 2026/1",
        planDescription: "Book, units, reviews and assessments connected to the schedule.",
        materialEyebrow: "Learning material",
        materialStatus: "Linked",
        materialTitle: "Unit 3 — Chapter 2",
        materialDescription: "Book, workbook or custom content connected to the lesson plan.",
      },
      lessonPlanItems: [
        { label: "Learning material: Unit 3 — Fractions and percentage", badge: "Material", selected: false },
        { label: "Today's class: guided review + practice activity", badge: "Today", selected: true },
        { label: "Next class: diagnostic assessment", badge: "Test", selected: false },
        { label: "Homework: exercise list", badge: "Task", selected: false },
      ],
      stats: [
        { value: "01", label: "Organized classes" },
        { value: "02", label: "Plans per group" },
        { value: "03", label: "Clear schedule" },
      ],
    },
    problem: {
      title: "Academic routines are still too scattered",
      subtitle:
        "Classes, lesson plans, materials, exercises, assessments, flashcards and activities need to connect so schools can better follow learning progress.",
      items: [
        { icon: "event_busy", title: "Scattered academic planning", description: "Lesson plans, content, reviews and tests end up split across spreadsheets, notebooks, messages and loose files. Coordination loses visibility into the class path." },
        { icon: "assignment_late", title: "Disconnected exercises and tests", description: "Activities, exercises, assessments and reviews are often created outside the class plan, making it harder to know what was practiced, assessed and revisited." },
        { icon: "style", title: "Flashcards outside the study routine", description: "Flashcards can strongly support retention, especially for languages and memorization-heavy content, but they are usually in separate tools and not connected to the lesson of the day." },
        { icon: "edit_note", title: "Manual activities without structure", description: "Worksheets, essays, projects, in-class activities and manual submissions are not always connected to the class, teacher, content and schedule." },
        { icon: "menu_book", title: "Materials not linked to lessons", description: "Books, workbooks, units, chapters and custom content are often not linked to the class plan, making it difficult to know exactly what should be taught and practiced." },
        { icon: "auto_awesome", title: "Teachers create everything from scratch", description: "Creating lesson plans, exercises, reviews, activities and homework takes time. Without intelligent support, teachers repeat manual work that could be accelerated with assisted suggestions." },
      ],
    },
    solution: {
      eyebrow: "THE SOLUTION",
      title: "From loose links and spreadsheets to a<br class='hidden md:block' />connected academic routine",
      subtitle:
        "Google Forms, spreadsheets and messages help with parts of the routine, but they do not connect everything. b8edu organizes classes, learning materials, lesson plans, exercises, assessments, flashcards and activities in one academic view.",
      withoutTitle: "WITHOUT B8EDU",
      withTitle: "WITH B8EDU",
      launchBadge: "AVAILABLE AT LAUNCH",
      roadmapBadge: "IN EVOLUTION",
      withoutList: [
        "Tests and activities in Google Forms or Microsoft Forms, without a direct connection to the class, lesson plan and academic schedule",
        "Exercises created in separate tools, making it hard to know what each class practiced",
        "Reviews, homework and tests spread across links, messages, spreadsheets and separate files",
        "Flashcards in external apps, without a clear link to the lesson, learning material or student level",
        "Manual activities, projects and submissions controlled through WhatsApp, paper or spreadsheets",
        "Teachers spending time creating plans, exercises, reviews and homework from scratch",
        "Coordination without a clear view of what was planned, practiced, reviewed and assessed",
      ],
      withList: [
        "Tests, exercises and activities connected to the class, studied content and academic planning",
        "Class schedule with lessons, reviews, tests, homework and activities in a centralized view",
        "Learning materials, books, units and chapters linked to the lesson plan",
        "Flashcards connected to the content for reinforcement, memorization and continuous review",
        "Manual activities and projects recorded as part of the class academic routine",
        "Teachers with an organized base to plan, apply, review and track activities",
        "AI assistance, when enabled by the school, to suggest plans, exercises, reviews and homework",
      ],
      features: [
        { icon: "calendar_month", iconBg: "bg-pm/5", iconColor: "text-pm", title: "Class plan and schedule", description: "Organize the class learning path with planned lessons, content, reviews, assessments, homework and linked materials.", status: "launch" },
        { icon: "assignment", iconBg: "bg-om/5", iconColor: "text-om", title: "Exercises and activities", description: "Create practice activities and connect each exercise to the content, lesson plan and corresponding class.", status: "launch" },
        { icon: "quiz", iconBg: "bg-green-50", iconColor: "text-green-600", title: "Assessments with context", description: "Plan tests, reviews and assessment activities inside the class schedule without relying only on loose external links.", status: "launch" },
        { icon: "style", iconBg: "bg-pm/5", iconColor: "text-pm", title: "Flashcards for reinforcement", description: "Use flashcards to support memorization, vocabulary, concept review and continuous practice connected to the studied content.", status: "launch" },
        { icon: "edit_note", iconBg: "bg-om/5", iconColor: "text-om", title: "Manual activities and projects", description: "Organize worksheets, essays, projects and manual submissions without losing the link to class, teacher and lesson.", status: "launch" },
        { icon: "auto_awesome", iconBg: "bg-purple-50", iconColor: "text-purple-600", title: "AI assistance for teachers", description: "In evolution: assisted suggestions for lesson plans, exercises, reviews, homework and activities, always reviewed by the teacher.", status: "roadmap" },
      ],
    },
    transparency: {
      eyebrow: "TRANSPARENCY",
      title: "What we will deliver first and what comes next",
      subtitle:
        "b8edu is being built in stages. First, we organize the academic foundation: classes, materials, plans, lessons, activities, assessments and schedules. Then we evolve into records, reports, payments and AI.",
      note:
        "The order of features may evolve based on validation with schools, teachers and academic coordinators. The goal is to build b8edu with clarity, without promising everything at once.",
      columns: [
        { badge: "FIRST VERSION", title: "Academic foundation", description: "The first focus is to bring clarity to the school routine: classes, materials, lesson plans, activities, assessments, flashcards and schedules.", items: ["School, user, profile and permission management", "Classes, teachers and students", "Levels, subjects and customizable structure per school", "Learning materials, books, units and chapters", "Class academic plan", "Class schedules with content, reviews, assessments and homework", "Exercises and activities linked to the lesson plan", "Assessments and reviews inside the class schedule", "Flashcards for reinforcement and memorization", "Manual activities, projects and submissions organized by class", "Branding with school logo and colors"] },
        { badge: "NEXT STEPS", title: "Records and tracking", description: "After the academic foundation, the platform evolves to track what happened in practice: delivered lessons, attendance, performance and reports.", items: ["Class diary and delivered content records", "Attendance tracking", "Report cards and term performance tracking", "Academic reports by class, student and teacher", "Advanced coordination dashboard", "Parent or guardian portal", "Notifications for students, teachers and coordinators", "Calendar integration"] },
        { badge: "FUTURE VISION", title: "Intelligence and automation", description: "The future vision is to reduce repetitive work, support teachers with AI and connect the academic operation with financial and administrative resources.", items: ["AI assistance for lesson plan suggestions", "AI to support exercises, reviews and homework", "Flashcard suggestions based on studied content", "Analysis of students with difficulty or low participation", "Payments and tuition with Asaas", "Digital certificates", "Live classes and integrated video lessons", "Educational content marketplace"] },
      ],
    },
    steps: {
      eyebrow: "HOW IT WORKS",
      title: "From scattered routines to connected planning",
      subtitle:
        "b8edu organizes the school's academic path in stages: structure, classes, materials, plans, schedules, activities and tracking.",
      items: [
        { title: "The school configures its structure", description: "b8edu adapts to the school model: regular school, language school, free course, tutoring program or technical course. The school defines its identity, levels, subjects, profiles and permissions.", tag: "Multi-tenant", tagVariant: "available", active: true },
        { title: "Classes, teachers and students are organized", description: "The coordination team registers classes by level, period, modality and schedule. Teachers and students are linked to each class, keeping every piece of information in the right context.", tag: "Academic base", tagVariant: "purple", active: false },
        { title: "Materials and content enter the plan", description: "Books, workbooks, units, chapters, courses and custom content can be connected to the class plan. Learning materials stop being isolated and become part of the schedule.", tag: "Materials", tagVariant: "orange", active: false },
        { title: "The class gets a plan and schedule", description: "Coordination or the teacher builds the class learning path: lessons, content, reviews, tests, activities, flashcards, homework and manual submissions organized by date.", tag: "Schedule", tagVariant: "available", active: false },
        { title: "Teacher and student follow the routine", description: "Teachers see what will be covered in each lesson, and students follow content, activities, tests, reviews and homework published for their class.", tag: "Profile views", tagVariant: "purple", active: false },
        { title: "The platform evolves with records and AI", description: "Next, b8edu evolves into class diary, attendance, report cards, reports and AI assistance to suggest plans, exercises, reviews, flashcards and homework, always reviewed by the teacher.", tag: "In evolution", tagVariant: "orange", active: false },
      ],
    },
    plans: {
      title: "Choose how to join the validation",
      subtitle:
        "b8edu is in validation. Instead of fixed plans, we want to understand the size and routine of each school to recommend the best entry path.",
      cards: [
        { name: "Pilot school", price: "Validation", period: "no commitment", description: "For schools that want to test the first version and contribute real feedback.", features: ["Early access", "Initial onboarding", "Classes and schedules", "Direct channel with the team"], cta: "I want to validate", highlighted: false },
        { name: "Founders", price: "Special condition", period: "first partners", description: "For schools that want to closely follow the platform evolution.", features: ["Roadmap priority", "Setup support", "Participation in decisions", "Founder condition"], cta: "Join as founder", highlighted: true, ribbon: "Recommended" },
        { name: "Network or franchise", price: "Custom quote", period: "custom project", description: "For groups with multiple units, brands, teams or specific needs.", features: ["Operation mapping", "Multi-unit structure", "Branding per school", "Shared roadmap"], cta: "Talk to a specialist", highlighted: false },
      ],
    },
    waitlist: {
      eyebrow: "FREE INTEREST LIST",
      title: "Organize your school's academic routine",
      subtitle: "Join the list to learn about b8edu and follow the platform launch.",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@email.com",
      phonePlaceholder: "+1 (555) 123-4567",
      requiredError: "Fill in your name and email to continue.",
      phoneError: "Enter a valid phone number.",
      submitError: "We could not send it right now. Please try again shortly.",
      submit: "Join the list",
      sending: "Sending...",
      success: "Great! You're on the list. We'll contact you soon.",
      trust: "No spam. No charges now. Only launch updates.",
    },
    contact: {
      eyebrow: "TALK TO US",
      title: "Tell us about your school's routine",
      subtitle:
        "We want to understand the real challenges of schools, courses and educational operations so we can build b8edu around what matters most: classes, academic planning, materials, activities, assessments, flashcards and schedules.",
      benefits: ["Early access to the first b8edu version", "Participation in product validation", "Your pain can influence the roadmap", "Direct contact with the founding team"],
      successTitle: "Message sent!",
      successDescription: "Our team will contact you soon. Thank you!",
      nameLabel: "Your name *",
      namePlaceholder: "Ex: Maria Fernanda",
      emailLabel: "Email *",
      emailPlaceholder: "you@email.com",
      phoneLabel: "WhatsApp / Phone",
      phonePlaceholder: "+1 (555) 123-4567",
      schoolLabel: "School or course name",
      schoolPlaceholder: "Ex: Aurora School, English Way, Saber+ Course",
      typeLabel: "Institution type",
      selectPlaceholder: "Select...",
      institutionTypes: [
        { value: "escola-regular", label: "Regular school" },
        { value: "escola-idiomas", label: "Language school" },
        { value: "curso-livre", label: "Free course" },
        { value: "reforco-escolar", label: "Tutoring program" },
        { value: "curso-tecnico", label: "Technical course" },
        { value: "franquia-educacional", label: "Educational franchise" },
        { value: "outro", label: "Other" },
      ],
      challengeLabel: "What is your biggest challenge today?",
      challengePlaceholder:
        "Ex: Today, lesson planning is in spreadsheets, tests are in forms and activities are spread across WhatsApp...",
      requiredError: "Fill in your name and email to continue.",
      phoneError: "Enter a valid phone number.",
      submitError: "We could not send your message right now. Please try again shortly.",
      submit: "Send message",
      sending: "Sending...",
      privacy: "Your information is confidential. We do not share it with third parties.",
    },
    footer: {
      description:
        "b8edu helps schools organize classes, learning materials, lesson plans, activities, assessments, flashcards and schedules in one connected academic routine.",
      columns: [
        { title: "Platform", links: [{ label: "Features", href: "#solucao" }, { label: "How it works", href: "#como-funciona" }, { label: "Transparency", href: "#transparencia" }, { label: "Interest list", href: "#lista-espera" }] },
        { title: "Product", links: [{ label: "Classes and schedules", href: "#solucao" }, { label: "Activities and assessments", href: "#solucao" }, { label: "Flashcards", href: "#solucao" }, { label: "AI in evolution", href: "#transparencia" }] },
        { title: "Contact", links: [{ label: "Talk to us", href: "#dor-especifica" }, { label: "Join validation", href: "#lista-espera" }] },
      ],
      emailAria: "Email",
      copyright: "b8edu Educational Solutions",
    },
  },
  es: {
    seo: {
      title: "b8edu | Plataforma educativa para gestión pedagógica y cronograma de clases",
      description:
        "b8edu ayuda a escuelas regulares, escuelas de idiomas, cursos libres y refuerzo escolar a organizar grupos, profesores, alumnos, materiales didácticos, planes de clase y cronogramas.",
      ogDescription:
        "Organiza la rutina pedagógica de tu escuela: grupos, profesores, alumnos, materiales didácticos, planes de clase y cronogramas en una plataforma centralizada.",
      organizationDescription:
        "b8edu es una plataforma educativa para que las escuelas organicen grupos, profesores, alumnos, materiales didácticos, planes pedagógicos y cronogramas de clase.",
      softwareDescription:
        "Plataforma educativa para gestión pedagógica, organización de grupos, materiales didácticos, planes de clase y cronogramas.",
    },
    nav: { problem: "Problema", solution: "Solución", resources: "Recursos", waitlist: "Lista de espera", joinWaitlist: "Entrar en la lista de espera", openMenu: "Abrir menú", closeMenu: "Cerrar menú", language: "Idioma" },
    hero: {
      eyebrow: "Plataforma educativa",
      titleBefore: "Organiza la rutina",
      titleHighlight: "pedagógica",
      titleAfter: "de tu escuela",
      subtitle: "b8edu ayuda a las escuelas a centralizar grupos, profesores, alumnos, materiales didácticos, planes de clase y cronogramas pedagógicos en una plataforma simple y visual.",
      primaryCta: "Entrar en la lista de interés",
      secondaryCta: "Ver cómo funciona",
      schoolTypesLabel: "Pensado para diferentes formatos de enseñanza",
      schoolTypes: ["Escuelas regulares", "Escuelas de idiomas", "Cursos libres", "Refuerzo escolar", "Cursos técnicos"],
      card: { eyebrow: "Cronograma del grupo", title: "9º Año A — Matemáticas", status: "Publicado", progressLabel: "Planificación del período", lessonEyebrow: "Clase planificada", lessonDescription: "Revisa lo que se trabajará en la próxima clase, los materiales vinculados y las actividades previstas para el grupo.", planEyebrow: "Plan del grupo", planStatus: "En revisión", planTitle: "Plan B1 — 2026/1", planDescription: "Libro, unidades, repasos y evaluaciones conectados al cronograma.", materialEyebrow: "Material didáctico", materialStatus: "Vinculado", materialTitle: "Unidad 3 — Capítulo 2", materialDescription: "Libro, apostilla o contenido propio conectado al plan de la clase." },
      lessonPlanItems: [
        { label: "Material didáctico: Unidad 3 — Fracciones y porcentaje", badge: "Material", selected: false },
        { label: "Clase de hoy: repaso guiado + actividad práctica", badge: "Hoy", selected: true },
        { label: "Próxima clase: prueba diagnóstica del grupo", badge: "Prueba", selected: false },
        { label: "Tarea: lista de ejercicios", badge: "Tarea", selected: false },
      ],
      stats: [{ value: "01", label: "Grupos organizados" }, { value: "02", label: "Planes por grupo" }, { value: "03", label: "Cronograma claro" }],
    },
    problem: {
      title: "La rutina pedagógica todavía está demasiado dispersa",
      subtitle: "Grupos, planes de clase, materiales, ejercicios, pruebas, flashcards y actividades deben conectarse para que la escuela acompañe mejor el aprendizaje.",
      items: [
        { icon: "event_busy", title: "Planificación pedagógica dispersa", description: "Planes de clase, contenidos, repasos y pruebas terminan divididos entre hojas de cálculo, cuadernos, mensajes y archivos sueltos. La coordinación pierde la visión del camino del grupo." },
        { icon: "assignment_late", title: "Ejercicios y pruebas desconectados", description: "Actividades, ejercicios, pruebas y repasos muchas veces se crean fuera del plan del grupo, dificultando saber qué se practicó, evaluó y retomó en cada etapa." },
        { icon: "style", title: "Flashcards fuera de la rutina de estudio", description: "Los flashcards ayudan mucho a fijar contenidos, especialmente en idiomas y temas de memorización, pero suelen estar en herramientas separadas y sin conexión con la clase del día." },
        { icon: "edit_note", title: "Actividades manuales sin organización", description: "Trabajos, hojas, redacciones, proyectos, actividades en clase y entregas manuales no siempre quedan conectados al grupo, profesor, contenido y cronograma." },
        { icon: "menu_book", title: "Material didáctico sin vínculo con la clase", description: "Libros, apostillas, unidades, capítulos y contenidos propios muchas veces no se vinculan al plan del grupo, dificultando saber exactamente qué se debe enseñar y practicar." },
        { icon: "auto_awesome", title: "El profesor crea todo desde cero", description: "Montar plan de clase, ejercicio, repaso, actividad y tarea consume tiempo. Sin apoyo inteligente, el profesor repite trabajo manual que podría agilizarse con sugerencias asistidas." },
      ],
    },
    solution: {
      eyebrow: "LA SOLUCIÓN",
      title: "De enlaces y hojas sueltas a una<br class='hidden md:block' />rutina pedagógica conectada",
      subtitle: "Google Forms, hojas de cálculo y mensajes ayudan en partes de la rutina, pero no conectan todo. b8edu organiza grupos, materiales didácticos, planes de clase, ejercicios, pruebas, flashcards y actividades en una visión pedagógica centralizada.",
      withoutTitle: "SIN B8EDU", withTitle: "CON B8EDU", launchBadge: "DISPONIBLE EN EL LANZAMIENTO", roadmapBadge: "EN EVOLUCIÓN",
      withoutList: ["Pruebas y actividades en Google Forms o Microsoft Forms, sin conexión directa con el grupo, el plan de clase y el cronograma pedagógico", "Ejercicios creados en herramientas sueltas, dificultando saber qué contenido practicó cada grupo", "Repasos, tareas y pruebas dispersas entre enlaces, mensajes, hojas y archivos separados", "Flashcards en apps externas, sin vínculo claro con la clase, el material didáctico o el nivel del alumno", "Actividades manuales, trabajos y entregas controlados por WhatsApp, papel u hojas de cálculo", "Profesor gastando tiempo creando plan, ejercicio, repaso y tarea desde cero", "Coordinación sin visión clara de lo planificado, practicado, repasado y evaluado"],
      withList: ["Pruebas, ejercicios y actividades conectados al grupo, al contenido estudiado y a la planificación pedagógica", "Cronograma del grupo con clases, repasos, pruebas, tareas y actividades en una vista centralizada", "Materiales didácticos, libros, unidades y capítulos vinculados al plan de clase", "Flashcards conectados al contenido para refuerzo, memorización y repaso continuo", "Actividades manuales y trabajos registrados como parte de la rutina pedagógica del grupo", "Profesor con una base organizada para planificar, aplicar, repasar y acompañar actividades", "Auxilio de IA, cuando la escuela lo habilite, para sugerir planes, ejercicios, repasos y tareas"],
      features: [
        { icon: "calendar_month", iconBg: "bg-pm/5", iconColor: "text-pm", title: "Plan y cronograma del grupo", description: "Organiza el camino pedagógico del grupo con clases planificadas, contenidos, repasos, pruebas, tareas y materiales vinculados.", status: "launch" },
        { icon: "assignment", iconBg: "bg-om/5", iconColor: "text-om", title: "Ejercicios y actividades", description: "Crea actividades de práctica y conecta cada ejercicio al contenido, al plan de clase y al grupo correspondiente.", status: "launch" },
        { icon: "quiz", iconBg: "bg-green-50", iconColor: "text-green-600", title: "Pruebas con contexto pedagógico", description: "Planifica pruebas, repasos y actividades evaluativas dentro del cronograma del grupo, sin depender solo de enlaces externos sueltos.", status: "launch" },
        { icon: "style", iconBg: "bg-pm/5", iconColor: "text-pm", title: "Flashcards para refuerzo", description: "Usa flashcards para apoyar memorización, vocabulario, repaso de conceptos y práctica continua conectada al contenido estudiado.", status: "launch" },
        { icon: "edit_note", iconBg: "bg-om/5", iconColor: "text-om", title: "Actividades manuales y trabajos", description: "Organiza hojas, redacciones, proyectos, trabajos y entregas manuales sin perder el vínculo con grupo, profesor y clase.", status: "launch" },
        { icon: "auto_awesome", iconBg: "bg-purple-50", iconColor: "text-purple-600", title: "Auxilio de IA para profesores", description: "En evolución: sugerencias asistidas para planes de clase, ejercicios, repasos, tareas y actividades, siempre revisadas por el profesor.", status: "roadmap" },
      ],
    },
    transparency: {
      eyebrow: "TRANSPARENCIA", title: "Qué entregaremos primero y qué viene después", subtitle: "b8edu se está construyendo por etapas. Primero organizamos la base pedagógica: grupos, materiales, planes, clases, actividades, pruebas y cronogramas. Después evolucionamos hacia registros, informes, pagos e IA.", note: "El orden de las funcionalidades puede evolucionar según la validación con escuelas, profesores y coordinación pedagógica. La propuesta es construir b8edu con claridad, sin prometer todo de una vez.",
      columns: [
        { badge: "PRIMERA VERSIÓN", title: "Base pedagógica", description: "El foco inicial es dar claridad a la rutina pedagógica de la escuela: organizar grupos, materiales, planes de clase, actividades, pruebas, flashcards y cronogramas.", items: ["Gestión de escuelas, usuarios, perfiles y permisos", "Registro de grupos, profesores y alumnos", "Niveles, disciplinas y estructura personalizable por escuela", "Materiales didácticos, libros, unidades y capítulos", "Plan pedagógico del grupo", "Cronograma de clases con contenidos, repasos, pruebas y tareas", "Ejercicios y actividades vinculados al plan de clase", "Pruebas y repasos dentro del cronograma del grupo", "Flashcards para refuerzo y memorización", "Actividades manuales, trabajos y entregas organizados por grupo", "Branding con logo y colores de la escuela"] },
        { badge: "PRÓXIMAS ETAPAS", title: "Registro y seguimiento", description: "Después de la base pedagógica, la plataforma evoluciona para acompañar lo que ocurrió en la práctica: clase dada, asistencia, desempeño e informes.", items: ["Diario de clase y registro de contenidos ministrados", "Control de asistencia", "Boletín y seguimiento del desempeño por período", "Informes pedagógicos por grupo, alumno y profesor", "Panel avanzado de coordinación", "Portal del responsable", "Notificaciones para alumnos, profesores y coordinación", "Integración con calendario"] },
        { badge: "VISIÓN FUTURA", title: "Inteligencia y automatización", description: "La visión futura es reducir trabajo repetitivo, apoyar a profesores con IA y conectar la operación pedagógica con recursos financieros y administrativos.", items: ["Auxilio de IA para sugerir planes de clase", "IA para apoyar creación de ejercicios, repasos y tareas", "Sugerencias de flashcards según el contenido estudiado", "Análisis de alumnos con dificultad o baja participación", "Pagos y mensualidades con Asaas", "Certificados digitales", "Clases en vivo y videoaulas integradas", "Marketplace de contenidos educativos"] },
      ],
    },
    steps: {
      eyebrow: "CÓMO FUNCIONA", title: "De la rutina dispersa a la planificación conectada", subtitle: "b8edu organiza el camino pedagógico de la escuela por etapas: estructura, grupos, materiales, planes, cronogramas, actividades y seguimiento.",
      items: [
        { title: "La escuela configura su estructura", description: "b8edu se adapta al formato de la escuela: escuela regular, escuela de idiomas, curso libre, refuerzo escolar o curso técnico. La escuela define identidad, niveles, disciplinas, perfiles y permisos.", tag: "Multi-tenant", tagVariant: "available", active: true },
        { title: "Grupos, profesores y alumnos se organizan", description: "La coordinación registra grupos por nivel, período, modalidad y horario. Profesores y alumnos se vinculan a los grupos, manteniendo cada información en su contexto correcto.", tag: "Base pedagógica", tagVariant: "purple", active: false },
        { title: "Materiales y contenidos entran al plan", description: "Libros, apostillas, unidades, capítulos, cursos y contenidos propios pueden conectarse al plan del grupo. Así, el material didáctico deja de estar suelto y pasa a formar parte del cronograma.", tag: "Materiales", tagVariant: "orange", active: false },
        { title: "El grupo gana plan y cronograma", description: "La coordinación o el profesor monta el camino pedagógico del grupo: clases, contenidos, repasos, pruebas, actividades, flashcards, tareas y entregas manuales organizadas por fecha.", tag: "Cronograma", tagVariant: "available", active: false },
        { title: "Profesor y alumno acompañan la rutina", description: "El profesor visualiza lo que se trabajará en cada clase y el alumno acompaña contenidos, actividades, pruebas, repasos y tareas publicadas para su grupo.", tag: "Vista por perfil", tagVariant: "purple", active: false },
        { title: "La plataforma evoluciona con registros e IA", description: "En las próximas etapas, b8edu evoluciona hacia diario de clase, asistencia, boletín, informes y auxilio de IA para sugerir planes, ejercicios, repasos, flashcards y tareas, siempre con revisión del profesor.", tag: "En evolución", tagVariant: "orange", active: false },
      ],
    },
    plans: {
      title: "Elige cómo participar en la validación", subtitle: "b8edu está en fase de validación. En lugar de planes cerrados, queremos entender el tamaño y la rutina de la escuela para indicar el mejor camino de entrada.",
      cards: [
        { name: "Escuela piloto", price: "Validación", period: "sin compromiso", description: "Para escuelas que quieren probar la primera versión y aportar feedback real.", features: ["Acceso anticipado", "Onboarding inicial", "Grupos y cronogramas", "Canal directo con el equipo"], cta: "Quiero validar", highlighted: false },
        { name: "Fundadores", price: "Condición especial", period: "primeros socios", description: "Para escuelas que quieren acompañar de cerca la evolución de la plataforma.", features: ["Prioridad en el roadmap", "Apoyo en configuración", "Participación en decisiones", "Condición de fundador"], cta: "Entrar como fundador", highlighted: true, ribbon: "Más indicado" },
        { name: "Red o franquicia", price: "A consultar", period: "proyecto personalizado", description: "Para grupos con múltiples unidades, marcas, equipos o necesidades específicas.", features: ["Mapeo de operación", "Estructura multiunidad", "Branding por escuela", "Roadmap conjunto"], cta: "Hablar con especialista", highlighted: false },
      ],
    },
    waitlist: { eyebrow: "LISTA DE INTERÉS GRATUITA", title: "Organiza la rutina pedagógica de tu escuela", subtitle: "Entra en la lista para conocer b8edu y acompañar el lanzamiento de la plataforma.", namePlaceholder: "Tu nombre", emailPlaceholder: "tu@email.com", phonePlaceholder: "+55 (11) 99999-9999", requiredError: "Completa tu nombre y e-mail para continuar.", phoneError: "Informa un teléfono válido.", submitError: "No pudimos enviar ahora. Inténtalo nuevamente en unos instantes.", submit: "Entrar en la lista", sending: "Enviando...", success: "¡Genial! Estás en la lista. Nos pondremos en contacto pronto.", trust: "Sin spam. Sin cobros ahora. Solo novedades sobre el lanzamiento." },
    contact: { eyebrow: "HABLEMOS", title: "Cuéntanos sobre la rutina de tu escuela", subtitle: "Queremos entender los desafíos reales de escuelas, cursos y operaciones educativas para construir b8edu con foco en lo más importante: grupos, planificación pedagógica, materiales, actividades, pruebas, flashcards y cronogramas.", benefits: ["Acceso anticipado a la primera versión de b8edu", "Participación en la validación del producto", "Tu dolor puede influir en el roadmap", "Contacto directo con el equipo fundador"], successTitle: "¡Mensaje enviado!", successDescription: "Nuestro equipo se pondrá en contacto pronto. ¡Gracias!", nameLabel: "Tu nombre *", namePlaceholder: "Ej: María Fernanda", emailLabel: "E-mail *", emailPlaceholder: "tu@email.com", phoneLabel: "WhatsApp / Teléfono", phonePlaceholder: "+55 (11) 99999-9999", schoolLabel: "Nombre de la escuela o curso", schoolPlaceholder: "Ej: Escuela Aurora, English Way, Curso Saber+", typeLabel: "Tipo de institución", selectPlaceholder: "Selecciona...", institutionTypes: [{ value: "escola-regular", label: "Escuela regular" }, { value: "escola-idiomas", label: "Escuela de idiomas" }, { value: "curso-livre", label: "Curso libre" }, { value: "reforco-escolar", label: "Refuerzo escolar" }, { value: "curso-tecnico", label: "Curso técnico" }, { value: "franquia-educacional", label: "Franquicia educativa" }, { value: "outro", label: "Otro" }], challengeLabel: "¿Cuál es tu mayor desafío hoy?", challengePlaceholder: "Ej: Hoy la planificación de clases está en hojas, las pruebas en formularios y las actividades dispersas en WhatsApp...", requiredError: "Completa tu nombre y e-mail para continuar.", phoneError: "Informa un teléfono válido.", submitError: "No pudimos enviar tu mensaje ahora. Inténtalo nuevamente en unos instantes.", submit: "Enviar mensaje", sending: "Enviando...", privacy: "Tu información es confidencial. No la compartimos con terceros." },
    footer: { description: "b8edu ayuda a las escuelas a organizar grupos, materiales didácticos, planes de clase, actividades, pruebas, flashcards y cronogramas en una rutina pedagógica conectada.", columns: [{ title: "Plataforma", links: [{ label: "Funcionalidades", href: "#solucao" }, { label: "Cómo funciona", href: "#como-funciona" }, { label: "Transparencia", href: "#transparencia" }, { label: "Lista de interés", href: "#lista-espera" }] }, { title: "Producto", links: [{ label: "Grupos y cronogramas", href: "#solucao" }, { label: "Actividades y pruebas", href: "#solucao" }, { label: "Flashcards", href: "#solucao" }, { label: "IA en evolución", href: "#transparencia" }] }, { title: "Contacto", links: [{ label: "Habla con nosotros", href: "#dor-especifica" }, { label: "Participar en la validación", href: "#lista-espera" }] }], emailAria: "E-mail", copyright: "b8edu Soluciones Educativas" },
  },
  fr: {
    seo: {
      title: "b8edu | Plateforme éducative pour la gestion pédagogique et les calendriers de cours",
      description:
        "b8edu aide les écoles régulières, les écoles de langues, les cours libres et le soutien scolaire à organiser groupes, enseignants, élèves, matériel pédagogique, plans de cours et calendriers.",
      ogDescription:
        "Organisez la routine pédagogique de votre école : groupes, enseignants, élèves, matériel pédagogique, plans de cours et calendriers dans une plateforme centralisée.",
      organizationDescription:
        "b8edu est une plateforme éducative qui aide les écoles à organiser groupes, enseignants, élèves, matériel pédagogique, plans pédagogiques et calendriers de cours.",
      softwareDescription:
        "Plateforme éducative pour la gestion pédagogique, les groupes, le matériel pédagogique, les plans de cours et les calendriers.",
    },
    nav: { problem: "Problème", solution: "Solution", resources: "Ressources", waitlist: "Liste d'attente", joinWaitlist: "Rejoindre la liste", openMenu: "Ouvrir le menu", closeMenu: "Fermer le menu", language: "Langue" },
    hero: {
      eyebrow: "Plateforme éducative",
      titleBefore: "Organisez la routine",
      titleHighlight: "pédagogique",
      titleAfter: "de votre école",
      subtitle: "b8edu aide les écoles à centraliser groupes, enseignants, élèves, matériel pédagogique, plans de cours et calendriers dans une plateforme simple et visuelle.",
      primaryCta: "Rejoindre la liste d'intérêt",
      secondaryCta: "Voir comment ça fonctionne",
      schoolTypesLabel: "Pensé pour différents formats d'enseignement",
      schoolTypes: ["Écoles régulières", "Écoles de langues", "Cours libres", "Soutien scolaire", "Cours techniques"],
      card: { eyebrow: "Calendrier du groupe", title: "9e année A — Mathématiques", status: "Publié", progressLabel: "Planification de la période", lessonEyebrow: "Cours planifié", lessonDescription: "Vérifiez ce qui sera travaillé au prochain cours, les supports liés et les activités prévues pour le groupe.", planEyebrow: "Plan du groupe", planStatus: "En révision", planTitle: "Plan B1 — 2026/1", planDescription: "Livre, unités, révisions et évaluations connectés au calendrier.", materialEyebrow: "Matériel pédagogique", materialStatus: "Lié", materialTitle: "Unité 3 — Chapitre 2", materialDescription: "Livre, cahier ou contenu personnalisé connecté au plan de cours." },
      lessonPlanItems: [
        { label: "Matériel pédagogique : Unité 3 — Fractions et pourcentage", badge: "Matériel", selected: false },
        { label: "Cours du jour : révision guidée + activité pratique", badge: "Aujourd'hui", selected: true },
        { label: "Prochain cours : évaluation diagnostique", badge: "Évaluation", selected: false },
        { label: "Devoir : liste d'exercices", badge: "Devoir", selected: false },
      ],
      stats: [{ value: "01", label: "Groupes organisés" }, { value: "02", label: "Plans par groupe" }, { value: "03", label: "Calendrier clair" }],
    },
    problem: {
      title: "La routine pédagogique reste trop dispersée",
      subtitle: "Groupes, plans de cours, matériel, exercices, évaluations, flashcards et activités doivent se connecter pour aider l'école à mieux suivre les apprentissages.",
      items: [
        { icon: "event_busy", title: "Planification pédagogique dispersée", description: "Plans de cours, contenus, révisions et évaluations se retrouvent dans des feuilles de calcul, cahiers, messages et fichiers isolés. La coordination perd la vision du parcours du groupe." },
        { icon: "assignment_late", title: "Exercices et évaluations déconnectés", description: "Activités, exercices, évaluations et révisions sont souvent créés hors du plan du groupe, ce qui rend difficile de savoir ce qui a été pratiqué, évalué et repris." },
        { icon: "style", title: "Flashcards hors de la routine d'étude", description: "Les flashcards aident beaucoup à mémoriser, surtout pour les langues et les contenus à retenir, mais elles restent souvent dans des outils séparés sans lien avec le cours du jour." },
        { icon: "edit_note", title: "Activités manuelles sans organisation", description: "Travaux, feuilles, rédactions, projets, activités en classe et remises manuelles ne sont pas toujours reliés au groupe, à l'enseignant, au contenu et au calendrier." },
        { icon: "menu_book", title: "Matériel pédagogique sans lien avec le cours", description: "Livres, cahiers, unités, chapitres et contenus personnalisés ne sont souvent pas liés au plan du groupe, ce qui complique la visibilité sur ce qui doit être enseigné et pratiqué." },
        { icon: "auto_awesome", title: "L'enseignant crée tout à partir de zéro", description: "Préparer un plan de cours, un exercice, une révision, une activité et un devoir prend du temps. Sans aide intelligente, l'enseignant répète un travail manuel qui pourrait être accéléré par des suggestions assistées." },
      ],
    },
    solution: {
      eyebrow: "LA SOLUTION", title: "Des liens et feuilles dispersés vers une<br class='hidden md:block' />routine pédagogique connectée", subtitle: "Google Forms, feuilles de calcul et messages aident sur certaines parties de la routine, mais ne connectent pas tout. b8edu organise groupes, matériel pédagogique, plans de cours, exercices, évaluations, flashcards et activités dans une vue pédagogique centralisée.", withoutTitle: "SANS B8EDU", withTitle: "AVEC B8EDU", launchBadge: "DISPONIBLE AU LANCEMENT", roadmapBadge: "EN ÉVOLUTION",
      withoutList: ["Évaluations et activités dans Google Forms ou Microsoft Forms, sans lien direct avec le groupe, le plan de cours et le calendrier pédagogique", "Exercices créés dans des outils séparés, rendant difficile de savoir quel contenu chaque groupe a pratiqué", "Révisions, devoirs et évaluations dispersés entre liens, messages, feuilles et fichiers séparés", "Flashcards dans des applications externes, sans lien clair avec le cours, le matériel ou le niveau de l'élève", "Activités manuelles, projets et remises contrôlés par WhatsApp, papier ou feuilles de calcul", "Enseignant qui passe du temps à créer plan, exercice, révision et devoir à partir de zéro", "Coordination sans vision claire de ce qui a été planifié, pratiqué, révisé et évalué"],
      withList: ["Évaluations, exercices et activités connectés au groupe, au contenu étudié et à la planification pédagogique", "Calendrier du groupe avec cours, révisions, évaluations, devoirs et activités dans une vue centralisée", "Matériel pédagogique, livres, unités et chapitres liés au plan de cours", "Flashcards connectées au contenu pour renforcer, mémoriser et réviser en continu", "Activités manuelles et travaux enregistrés comme partie de la routine pédagogique du groupe", "Enseignant avec une base organisée pour planifier, appliquer, réviser et suivre les activités", "Aide IA, lorsque l'école l'active, pour suggérer plans, exercices, révisions et devoirs"],
      features: [
        { icon: "calendar_month", iconBg: "bg-pm/5", iconColor: "text-pm", title: "Plan et calendrier du groupe", description: "Organisez le parcours pédagogique du groupe avec cours planifiés, contenus, révisions, évaluations, devoirs et supports liés.", status: "launch" },
        { icon: "assignment", iconBg: "bg-om/5", iconColor: "text-om", title: "Exercices et activités", description: "Créez des activités de pratique et reliez chaque exercice au contenu, au plan de cours et au groupe correspondant.", status: "launch" },
        { icon: "quiz", iconBg: "bg-green-50", iconColor: "text-green-600", title: "Évaluations contextualisées", description: "Planifiez évaluations, révisions et activités évaluatives dans le calendrier du groupe, sans dépendre uniquement de liens externes isolés.", status: "launch" },
        { icon: "style", iconBg: "bg-pm/5", iconColor: "text-pm", title: "Flashcards pour renforcer", description: "Utilisez des flashcards pour soutenir la mémorisation, le vocabulaire, la révision de concepts et la pratique continue liée au contenu étudié.", status: "launch" },
        { icon: "edit_note", iconBg: "bg-om/5", iconColor: "text-om", title: "Activités manuelles et travaux", description: "Organisez feuilles, rédactions, projets, travaux et remises manuelles sans perdre le lien avec le groupe, l'enseignant et le cours.", status: "launch" },
        { icon: "auto_awesome", iconBg: "bg-purple-50", iconColor: "text-purple-600", title: "Aide IA pour les enseignants", description: "En évolution : suggestions assistées pour plans de cours, exercices, révisions, devoirs et activités, toujours revues par l'enseignant.", status: "roadmap" },
      ],
    },
    transparency: { eyebrow: "TRANSPARENCE", title: "Ce que nous livrons d'abord et ce qui vient ensuite", subtitle: "b8edu est construite par étapes. D'abord, nous organisons la base pédagogique : groupes, matériel, plans, cours, activités, évaluations et calendriers. Ensuite, nous évoluons vers les registres, rapports, paiements et IA.", note: "L'ordre des fonctionnalités peut évoluer selon la validation avec les écoles, enseignants et coordinations pédagogiques. L'objectif est de construire b8edu avec clarté, sans tout promettre à la fois.", columns: [
      { badge: "PREMIÈRE VERSION", title: "Base pédagogique", description: "Le premier objectif est de clarifier la routine pédagogique de l'école : organiser groupes, matériel, plans de cours, activités, évaluations, flashcards et calendriers.", items: ["Gestion des écoles, utilisateurs, profils et permissions", "Création de groupes, enseignants et élèves", "Niveaux, matières et structure personnalisable par école", "Matériel pédagogique, livres, unités et chapitres", "Plan pédagogique du groupe", "Calendrier de cours avec contenus, révisions, évaluations et devoirs", "Exercices et activités liés au plan de cours", "Évaluations et révisions dans le calendrier du groupe", "Flashcards pour renforcer et mémoriser", "Activités manuelles, travaux et remises organisés par groupe", "Branding avec logo et couleurs de l'école"] },
      { badge: "PROCHAINES ÉTAPES", title: "Registres et suivi", description: "Après la base pédagogique, la plateforme évolue pour suivre ce qui s'est passé en pratique : cours donné, présence, performance et rapports.", items: ["Journal de classe et registre du contenu enseigné", "Suivi des présences", "Bulletin et suivi des performances par période", "Rapports pédagogiques par groupe, élève et enseignant", "Tableau de bord avancé pour la coordination", "Portail parent ou responsable", "Notifications pour élèves, enseignants et coordination", "Intégration avec calendrier"] },
      { badge: "VISION FUTURE", title: "Intelligence et automatisation", description: "La vision future est de réduire le travail répétitif, soutenir les enseignants avec l'IA et connecter l'opération pédagogique aux ressources financières et administratives.", items: ["Aide IA pour suggérer des plans de cours", "IA pour soutenir la création d'exercices, révisions et devoirs", "Suggestions de flashcards selon le contenu étudié", "Analyse des élèves en difficulté ou à faible participation", "Paiements et frais de scolarité avec Asaas", "Certificats numériques", "Cours en direct et vidéos intégrés", "Marketplace de contenus éducatifs"] },
    ] },
    steps: { eyebrow: "COMMENT ÇA FONCTIONNE", title: "De la routine dispersée à la planification connectée", subtitle: "b8edu organise le parcours pédagogique de l'école par étapes : structure, groupes, matériel, plans, calendriers, activités et suivi.", items: [
      { title: "L'école configure sa structure", description: "b8edu s'adapte au modèle de l'école : école régulière, école de langues, cours libre, soutien scolaire ou cours technique. L'école définit son identité, ses niveaux, matières, profils et permissions.", tag: "Multi-tenant", tagVariant: "available", active: true },
      { title: "Groupes, enseignants et élèves sont organisés", description: "La coordination crée des groupes par niveau, période, modalité et horaire. Enseignants et élèves sont reliés aux groupes, en gardant chaque information dans son bon contexte.", tag: "Base pédagogique", tagVariant: "purple", active: false },
      { title: "Matériel et contenus entrent dans le plan", description: "Livres, cahiers, unités, chapitres, cours et contenus personnalisés peuvent être reliés au plan du groupe. Le matériel cesse d'être isolé et fait partie du calendrier.", tag: "Matériel", tagVariant: "orange", active: false },
      { title: "Le groupe obtient un plan et un calendrier", description: "La coordination ou l'enseignant construit le parcours pédagogique du groupe : cours, contenus, révisions, évaluations, activités, flashcards, devoirs et remises manuelles organisés par date.", tag: "Calendrier", tagVariant: "available", active: false },
      { title: "Enseignant et élève suivent la routine", description: "L'enseignant voit ce qui sera travaillé à chaque cours et l'élève suit les contenus, activités, évaluations, révisions et devoirs publiés pour son groupe.", tag: "Vue par profil", tagVariant: "purple", active: false },
      { title: "La plateforme évolue avec registres et IA", description: "Dans les prochaines étapes, b8edu évolue vers journal de classe, présence, bulletin, rapports et aide IA pour suggérer plans, exercices, révisions, flashcards et devoirs, toujours avec validation de l'enseignant.", tag: "En évolution", tagVariant: "orange", active: false },
    ] },
    plans: { title: "Choisissez comment participer à la validation", subtitle: "b8edu est en validation. Plutôt que des forfaits fermés, nous voulons comprendre la taille et la routine de l'école pour recommander le meilleur chemin d'entrée.", cards: [
      { name: "École pilote", price: "Validation", period: "sans engagement", description: "Pour les écoles qui veulent tester la première version et contribuer avec un retour réel.", features: ["Accès anticipé", "Onboarding initial", "Groupes et calendriers", "Canal direct avec l'équipe"], cta: "Je veux valider", highlighted: false },
      { name: "Fondateurs", price: "Condition spéciale", period: "premiers partenaires", description: "Pour les écoles qui veulent suivre de près l'évolution de la plateforme.", features: ["Priorité au roadmap", "Aide à la configuration", "Participation aux décisions", "Condition fondateur"], cta: "Rejoindre comme fondateur", highlighted: true, ribbon: "Recommandé" },
      { name: "Réseau ou franchise", price: "Sur devis", period: "projet personnalisé", description: "Pour les groupes avec plusieurs unités, marques, équipes ou besoins spécifiques.", features: ["Cartographie opérationnelle", "Structure multi-unité", "Branding par école", "Roadmap partagé"], cta: "Parler à un spécialiste", highlighted: false },
    ] },
    waitlist: { eyebrow: "LISTE D'INTÉRÊT GRATUITE", title: "Organisez la routine pédagogique de votre école", subtitle: "Rejoignez la liste pour découvrir b8edu et suivre le lancement de la plateforme.", namePlaceholder: "Votre nom", emailPlaceholder: "vous@email.com", phonePlaceholder: "+1 (555) 123-4567", requiredError: "Remplissez votre nom et votre e-mail pour continuer.", phoneError: "Entrez un numéro valide.", submitError: "Nous n'avons pas pu envoyer pour le moment. Réessayez dans quelques instants.", submit: "Rejoindre la liste", sending: "Envoi...", success: "Parfait ! Vous êtes sur la liste. Nous vous contacterons bientôt.", trust: "Pas de spam. Aucun paiement maintenant. Seulement des nouvelles du lancement." },
    contact: { eyebrow: "PARLEZ-NOUS", title: "Parlez-nous de la routine de votre école", subtitle: "Nous voulons comprendre les vrais défis des écoles, cours et opérations éducatives pour construire b8edu autour de l'essentiel : groupes, planification pédagogique, matériel, activités, évaluations, flashcards et calendriers.", benefits: ["Accès anticipé à la première version de b8edu", "Participation à la validation du produit", "Votre douleur peut influencer le roadmap", "Contact direct avec l'équipe fondatrice"], successTitle: "Message envoyé !", successDescription: "Notre équipe vous contactera bientôt. Merci !", nameLabel: "Votre nom *", namePlaceholder: "Ex : Marie Fernanda", emailLabel: "E-mail *", emailPlaceholder: "vous@email.com", phoneLabel: "WhatsApp / Téléphone", phonePlaceholder: "+1 (555) 123-4567", schoolLabel: "Nom de l'école ou du cours", schoolPlaceholder: "Ex : École Aurora, English Way, Cours Saber+", typeLabel: "Type d'institution", selectPlaceholder: "Sélectionnez...", institutionTypes: [{ value: "escola-regular", label: "École régulière" }, { value: "escola-idiomas", label: "École de langues" }, { value: "curso-livre", label: "Cours libre" }, { value: "reforco-escolar", label: "Soutien scolaire" }, { value: "curso-tecnico", label: "Cours technique" }, { value: "franquia-educacional", label: "Franchise éducative" }, { value: "outro", label: "Autre" }], challengeLabel: "Quel est votre plus grand défi aujourd'hui ?", challengePlaceholder: "Ex : Aujourd'hui, la planification est dans des feuilles, les évaluations dans des formulaires et les activités dispersées sur WhatsApp...", requiredError: "Remplissez votre nom et votre e-mail pour continuer.", phoneError: "Entrez un numéro valide.", submitError: "Nous n'avons pas pu envoyer votre message pour le moment. Réessayez dans quelques instants.", submit: "Envoyer le message", sending: "Envoi...", privacy: "Vos informations sont confidentielles. Nous ne les partageons pas avec des tiers." },
    footer: { description: "b8edu aide les écoles à organiser groupes, matériel pédagogique, plans de cours, activités, évaluations, flashcards et calendriers dans une routine pédagogique connectée.", columns: [{ title: "Plateforme", links: [{ label: "Fonctionnalités", href: "#solucao" }, { label: "Comment ça fonctionne", href: "#como-funciona" }, { label: "Transparence", href: "#transparencia" }, { label: "Liste d'intérêt", href: "#lista-espera" }] }, { title: "Produit", links: [{ label: "Groupes et calendriers", href: "#solucao" }, { label: "Activités et évaluations", href: "#solucao" }, { label: "Flashcards", href: "#solucao" }, { label: "IA en évolution", href: "#transparencia" }] }, { title: "Contact", links: [{ label: "Parlez-nous", href: "#dor-especifica" }, { label: "Participer à la validation", href: "#lista-espera" }] }], emailAria: "E-mail", copyright: "b8edu Solutions Éducatives" },
  },
} as const;
