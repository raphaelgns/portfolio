export type TranslationType = typeof translations.en;

export interface ProjectItem {
  title: string;
  description: string;
  problem: string;
  impact: string;
  status?: string;
}

export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      resume: "Resume",
    },
    hero: {
      badge: "Available for new opportunities",
      title_part1: "Hi, I'm",
      title_highlight: "Raphael",
      title_part2: "Computing Engineer",
      description: "A tech enthusiast passionate about infrastructure and automation. I love solving complex problems and building efficient systems that make technology work seamlessly.",
      view_projects: "Let's connect",
    },
    about: {
      title_part1: "Bridge between",
      title_highlight: "Infrastructure",
      title_part2: "and Modern Automation.",
      description: "I am a Computing Engineer student focused on building robust and scalable solutions that optimize workflows and improve system reliability. My background combines deep system administration with modern technical expertise to deliver high-performance environments.",
      expertise: [
        {
          title: "Automation & Infrastructure",
          description: "Hands on in Linux environments, managing services, and automating processes with Python and Bash.",
        },
        {
          title: "Network Engineering",
          description: "Proficient in Cisco Packet Tracer, VLAN segmentation, and managing Fortinet Firewall policies.",
        },
        {
          title: "Observability",
          description: "Real-time monitoring of SCADA (SAGE) systems, ensuring data acquisition and information reliability.",
        },
        {
          title: "Security & Auditing",
          description: "Implementing access rules, network isolation, and automated system integrity checks.",
        },
        {
          title: "Database Management",
          description: "Handling relational databases and complex system integrations like PostgreSQL and SAGE.",
        },
      ],
    },
    experience: {
      title_part1: "Professional",
      title_highlight: "Journey",
      title_part2: ".",
      description: "Experience focused on sustaining critical systems, process automation, and infrastructure security.",
      items: [
        {
          role: "Automation & Telecom Intern",
          company: "EDP Brasil",
          period: "Present",
          description: "Sustaining critical energy infrastructure and automating operational workflows.",
          tasks: [
            "Real-time operation and maintenance of SCADA (SAGE) systems.",
            "Developed Bash scripts for file and log integrity verification used in maintenance plans.",
            "Automated Service Orders and Notes in SAP using Python, reducing processing time and mitigating errors.",
            "Support in configuring network assets (Switches) and managing Fortinet Firewall security rules.",
            "Designed network topologies to ensure environment segmentation and security.",
          ],
        },
      ],
    },
    skills: {
      title_part1: "Technical",
      title_highlight: "Ecosystem",
      title_part2: ".",
      description: "A specialized stack focused on performance, reliability, and security.",
      learning: "Learning",
    },
    projects: {
      title_part1: "Featured",
      title_highlight: "Projects",
      title_part2: ".",
      description: "A selection of academic and personal projects in engineering and infrastructure.",
      view_github: "View All GitHub",
      problem: "Context",
      impact: "Highlights",
      details: "Details",
      items: [
        {
          title: "SAGE Backup Automation",
          description: "Automated monthly backup system for SAGE substations using Bash and Crontab.",
          problem: "Manual backup processes were inconsistent and prone to human error across multiple substations.",
          impact: "Ensured 100% backup reliability and compliance with monthly maintenance protocols.",
        } as ProjectItem,
        {
          title: "Maintenance Plan Optimizer",
          description: "Python-driven automation for creating orders and notes in SAP for maintenance plans.",
          problem: "Extensive manual process from creation to completion of maintenance plans in ERP systems.",
          impact: "Reduced process time by over 35% and mitigated data entry errors through automation.",
        } as ProjectItem,
        {
          title: "Network Audit Toolkit",
          status: "UNDER CONSTRUCTION",
          description: "Security and troubleshooting tools for complex network environments.",
          problem: "Lack of centralized tools for rapid network analysis and vulnerability scanning.",
          impact: "Improved troubleshooting speed and identified critical network vulnerabilities.",
        } as ProjectItem,
        {
          title: "Homelab: File Server & Monitoring",
          description: "NAS server implementation with Linux and OpenMediaVault to understand network concepts.",
          problem: "Need for a centralized storage solution with user permission management and system hardening.",
          impact: "Hands-on experience with NAS, SSH hardening, and secure data management.",
        } as ProjectItem,
        {
          title: "Robot Sumo",
          description: "Developed a combat robot from scratch using ESP32 and custom C/C++ programming.",
          problem: "Designing a competitive robot capable of autonomous or remote combat against other students' robots.",
          impact: "Successful end-to-end implementation of hardware, electronics, and logic for competitive environment.",
        } as ProjectItem,
      ],
    },
    contact: {
      title_part1: "Ready to",
      title_highlight: "Collaborate",
      title_part2: "?",
      description: "I'm always open to discussing technical challenges in infrastructure and automation.",
      say_hello: "Say Hello",
      download_resume: "Download Resume",
      copyright: "Built with Next.js & Framer Motion.",
    },
  },
  pt: {
    nav: {
      about: "Sobre",
      skills: "Habilidades",
      projects: "Projetos",
      experience: "Experiência",
      contact: "Contato",
      resume: "Currículo",
    },
    hero: {
      badge: "Disponível para novas oportunidades",
      title_part1: "Oi, eu sou o",
      title_highlight: "Raphael",
      title_part2: "Engenheiro da Computação",
      description: "Um entusiasta de tecnologia apaixonado por infraestrutura e automação. Adoro resolver problemas complexos e construir sistemas eficientes que fazem a tecnologia funcionar de forma fluida.",
      view_projects: "Vamos conversar",
    },
    about: {
      title_part1: "Ponte entre",
      title_highlight: "Infraestrutura",
      title_part2: "e Automação Moderna.",
      description: "Sou um estudante de Engenharia da Computação focado em construir soluções robustas e escaláveis que otimizam fluxos de trabalho e aumentam a confiabilidade dos sistemas. Minha trajetória combina administração de sistemas com expertise técnica moderna para entregar ambientes de alta performance.",
      expertise: [
        {
          title: "Automação & Infraestrutura",
          description: "Hands on em ambientes Linux, gerenciando serviços e automatizando processos com Python e Bash.",
        },
        {
          title: "Engenharia de Redes",
          description: "Proficiente em Cisco Packet Tracer, segmentação de VLANs e gestão de políticas de Firewall Fortinet.",
        },
        {
          title: "Observabilidade",
          description: "Monitoramento de sistemas SCADA (SAGE) em tempo real, garantindo a aquisição de dados e confiabilidade.",
        },
        {
          title: "Segurança & Auditoria",
          description: "Implementação de regras de acesso, isolamento de rede e verificações automatizadas de integridade de sistema.",
        },
        {
          title: "Gerenciamento de Banco de Dados",
          description: "Lidando com bancos de dados relacionais e integrações complexas de sistemas como PostgreSQL e SAGE.",
        },
      ],
    },
    experience: {
      title_part1: "Jornada",
      title_highlight: "Profissional",
      title_part2: ".",
      description: "Atuação focada na sustentação de sistemas críticos, automação de processos e segurança de infraestrutura.",
      items: [
        {
          role: "Estagiário em Automação e Telecom",
          company: "EDP Brasil",
          period: "Atualmente",
          description: "Sustentação de infraestrutura crítica de energia e automação de fluxos operacionais.",
          tasks: [
            "Operação e manutenção de sistemas SCADA (SAGE) em tempo real.",
            "Desenvolvimento de scripts Bash para verificação de integridade de arquivos e logs para planos de manutenção.",
            "Automação de Ordens de Serviço e Notas no SAP usando Python, reduzindo o tempo e mitigando erros.",
            "Apoio na configuração de ativos de rede (Switches) e gestão de regras de Firewall Fortinet.",
            "Criação de topologias de rede para garantir segmentação e segurança do ambiente.",
          ],
        },
      ],
    },
    skills: {
      title_part1: "Ecossistema",
      title_highlight: "Técnico",
      title_part2: ".",
      description: "Uma stack especializada focada em performance, confiabilidade e segurança.",
      learning: "Aprendizado",
    },
    projects: {
      title_part1: "Projetos",
      title_highlight: "Destaque",
      title_part2: ".",
      description: "Uma seleção de projetos acadêmicos e pessoais em engenharia e infraestrutura.",
      view_github: "Ver GitHub",
      problem: "Contexto",
      impact: "Destaques",
      details: "Detalhes",
      items: [
        {
          title: "Automação de Backup SAGE",
          description: "Sistema de backup mensal automatizado para subestações SAGE usando Bash e Crontab.",
          problem: "Processos de backup manuais eram inconsistentes e propensos a erros humanos.",
          impact: "Garantiu 100% de confiabilidade e conformidade com protocolos de manutenção.",
        } as ProjectItem,
        {
          title: "Otimizador de Plano de Manutenção",
          description: "Automação em Python para criação de ordens e notas no SAP para planos de manutenção.",
          problem: "Processo manual extenso para gestão de planos de manutenção em sistemas ERP.",
          impact: "Reduziu o tempo do processo em 35% e mitigou erros de preenchimento via automação.",
        } as ProjectItem,
        {
          title: "Toolkit de Auditoria de Rede",
          status: "EM CONSTRUÇÃO",
          description: "Ferramentas de segurança e solução de problemas para ambientes de rede complexos.",
          problem: "Falta de ferramentas centralizadas para análise rápida de rede e vulnerabilidades.",
          impact: "Melhorou a velocidade de resolução de problemas e identificação de falhas críticas.",
        } as ProjectItem,
        {
          title: "Homelab: Servidor de Arquivos e Monitoramento",
          description: "Implementação de servidor NAS com Linux e OpenMediaVault para conceitos de redes.",
          problem: "Necessidade de armazenamento centralizado com gestão de permissões e hardening de sistema.",
          impact: "Experiência prática com NAS, hardening de SSH e gestão segura de dados.",
        } as ProjectItem,
        {
          title: "Sumô de Robô",
          description: "Desenvolvimento de um robô de combate do zero usando ESP32 e programação C/C++.",
          problem: "Projetar um robô competitivo capaz de lutar autonomamente ou via controle remoto contra outros robôs.",
          impact: "Implementação completa de hardware, eletrônica e lógica para ambiente competitivo.",
        } as ProjectItem,
      ],
    },
    contact: {
      title_part1: "Pronto para",
      title_highlight: "Colaborar",
      title_part2: "?",
      description: "Estou sempre aberto a discutir desafios técnicos em infraestrutura e automação.",
      say_hello: "Diga Olá",
      download_resume: "Baixar Currículo",
      copyright: "Desenvolvido com Next.js & Framer Motion.",
    },
  },
};
