export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export const projects: Project[] = [
    {
        title: "Veris",
        description: "Plataforma de automatização de prazos legais. Integração com Google Calendar para agendamento automático de prazos de processos jurídicos.",
        tags: ["Python", "Flask", "Machine Learning"],
        link: "https://gitlab.com/puc-group/Veris",
    },
    {
        title: "Evex",
        description: "App gerenciador de eventos acadêmicos. Criação de eventos, notificações push e integração com Google Maps.",
        tags: ["Flutter", "Dart", "Firebase"],
        link: "https://github.com/Villainitt/evex",
    }
];