export type Language = "en" | "id";

export const translations = {
  en: {
    // Welcome
    welcomeTitle: "HELLO",
    welcomeMessage: "Welcome to my interactive portfolio!",
    welcomeIntro: "I'm",
    welcomeName: "John Doe",
    welcomeRole: "Software Engineer",
    welcomeHelp: "Type",
    welcomeHelpCommand: "help",
    welcomeHelpSuffix: "to see available commands",
    lastLogin: "Last login:",
    at: "at",

    // Help
    helpTitle: "Available commands:",
    helpTip: "Tip: Use",
    helpTabKey: "Tab",
    helpToAutocomplete: "to autocomplete,",
    helpArrowKeys: "↑/↓",
    helpForHistory: "for history",
    commands: {
      help: "Show available commands",
      about: "Display information about me",
      skills: "List my technical skills",
      experience: "Show work experience",
      projects: "View my projects",
      contact: "Get my contact information",
      social: "Display social media links",
      resume: "Open resume/CV",
      whoami: "Who is visiting?",
      ls: "List available sections",
      clear: "Clear terminal",
      welcome: "Show welcome screen",
      lang: "Change language (en/id)",
      neofetch: "Display system info with ASCII art",
      theme: "Switch color theme",
    },

    // About
    aboutName: "name:",
    aboutRole: "role:",
    aboutExperience: "experience:",
    aboutLocation: "location:",
    aboutBio: "bio:",
    aboutBioText: "A passionate software engineer focused on building scalable web applications and distributed systems. I believe in writing clean, maintainable code and creating intuitive user experiences.",
    aboutTip: "Type",
    aboutSkillsCmd: "skills",
    aboutToSeeStack: "to see my technical stack, or",
    aboutExpCmd: "experience",
    aboutForHistory: "for work history.",

    // Skills
    skillsTitle: "// Technical Skills",
    skillsLearning: "Currently learning:",
    categories: {
      languages: "Languages",
      frontend: "Frontend",
      backend: "Backend",
      devops: "DevOps",
      tools: "Tools",
    },

    // Experience
    expTitle: "// Work Experience",
    expCertsTitle: "// Certifications",
    expRole1: "Senior Software Engineer",
    expRole2: "Software Engineer",
    expRole3: "Junior Developer",

    // Projects
    projectsTitle: "// Featured Projects",
    projectsTip: "Type",
    projectsSocialCmd: "social",
    projectsFindMore: "to find more on GitHub.",

    // Contact
    contactTitle: "// Contact Information",
    contactEmail: "Email:",
    contactLocation: "Location:",
    contactTimezone: "Timezone:",
    contactOpen: "Currently open to opportunities!",
    contactInterested: "I'm interested in full-time positions, freelance projects, and collaboration on open source.",
    contactTip: "Type",
    contactSocialCmd: "social",
    contactSeeLinks: "to see all my social links.",

    // Social
    socialTitle: "// Social Links",

    // Error
    errorNotFound: "command not found",
    errorTip: "Type",
    errorHelpCmd: "help",
    errorSeeCommands: "to see available commands.",

    // Whoami
    whoamiLine1: "You are a",
    whoamiLine2: "Welcome to my digital space!",
    whoamiLine3: "Feel free to explore using the terminal commands.",

    // Ls
    lsTitle: "// Available sections in ~/portfolio",

    // Resume
    resumeOpening: "Opening resume...",
    resumeNote: "(would open PDF in new tab)",

    // Neofetch
    neofetch: {
      user: "visitor@portfolio",
      os: "OS: ",
      host: "Host: ",
      kernel: "Kernel: ",
      uptime: "Uptime: ",
      uptimeValue: "since you arrived",
      shell: "Shell: ",
      resolution: "Resolution: ",
      theme: "Theme: ",
      terminal: "Terminal: ",
    },

    // Theme
    theme: {
      changed: "Theme changed to",
      invalid: "Invalid theme specified.",
      available: "Available themes:",
      current: "current",
      usage: "Usage: theme <mocha|latte|frappe|macchiato>",
    },

    // Misc
    pwd: "/home/visitor/portfolio",
    helloResponse: "Hello! 👋",
    sudoResponse: "Nice try! 😄 But you don't have sudo privileges here.",
    exitResponse: "Thanks for visiting! (This is a portfolio, you can't actually exit 😉)",
    editorResponse: "Editor wars? Let's not go there... 😅",
    langChanged: "Language changed to English",
    langInvalid: "Invalid language. Use: lang en | lang id",
  },
  id: {
    // Welcome
    welcomeTitle: "HALO",
    welcomeMessage: "Selamat datang di portfolio interaktif saya!",
    welcomeIntro: "Saya",
    welcomeName: "John Doe",
    welcomeRole: "Software Engineer",
    welcomeHelp: "Ketik",
    welcomeHelpCommand: "help",
    welcomeHelpSuffix: "untuk melihat perintah yang tersedia",
    lastLogin: "Login terakhir:",
    at: "pukul",

    // Help
    helpTitle: "Perintah yang tersedia:",
    helpTip: "Tips: Gunakan",
    helpTabKey: "Tab",
    helpToAutocomplete: "untuk autocomplete,",
    helpArrowKeys: "↑/↓",
    helpForHistory: "untuk riwayat",
    commands: {
      help: "Tampilkan perintah yang tersedia",
      about: "Tampilkan informasi tentang saya",
      skills: "Daftar keahlian teknis saya",
      experience: "Tampilkan pengalaman kerja",
      projects: "Lihat proyek saya",
      contact: "Dapatkan informasi kontak saya",
      social: "Tampilkan tautan media sosial",
      resume: "Buka resume/CV",
      whoami: "Siapa yang mengunjungi?",
      ls: "Daftar bagian yang tersedia",
      clear: "Bersihkan terminal",
      welcome: "Tampilkan layar selamat datang",
      lang: "Ubah bahasa (en/id)",
      neofetch: "Tampilkan info sistem dengan ASCII art",
      theme: "Ganti tema warna",
    },

    // About
    aboutName: "nama:",
    aboutRole: "peran:",
    aboutExperience: "pengalaman:",
    aboutLocation: "lokasi:",
    aboutBio: "bio:",
    aboutBioText: "Seorang software engineer yang bersemangat dalam membangun aplikasi web yang skalabel dan sistem terdistribusi. Saya percaya dalam menulis kode yang bersih, mudah dipelihara, dan menciptakan pengalaman pengguna yang intuitif.",
    aboutTip: "Ketik",
    aboutSkillsCmd: "skills",
    aboutToSeeStack: "untuk melihat stack teknis saya, atau",
    aboutExpCmd: "experience",
    aboutForHistory: "untuk riwayat kerja.",

    // Skills
    skillsTitle: "// Keahlian Teknis",
    skillsLearning: "Sedang mempelajari:",
    categories: {
      languages: "Bahasa Pemrograman",
      frontend: "Frontend",
      backend: "Backend",
      devops: "DevOps",
      tools: "Tools",
    },

    // Experience
    expTitle: "// Pengalaman Kerja",
    expCertsTitle: "// Sertifikasi",
    expRole1: "Senior Software Engineer",
    expRole2: "Software Engineer",
    expRole3: "Junior Developer",

    // Projects
    projectsTitle: "// Proyek Unggulan",
    projectsTip: "Ketik",
    projectsSocialCmd: "social",
    projectsFindMore: "untuk menemukan lebih banyak di GitHub.",

    // Contact
    contactTitle: "// Informasi Kontak",
    contactEmail: "Email:",
    contactLocation: "Lokasi:",
    contactTimezone: "Zona Waktu:",
    contactOpen: "Saat ini terbuka untuk peluang!",
    contactInterested: "Saya tertarik dengan posisi full-time, proyek freelance, dan kolaborasi open source.",
    contactTip: "Ketik",
    contactSocialCmd: "social",
    contactSeeLinks: "untuk melihat semua tautan sosial saya.",

    // Social
    socialTitle: "// Tautan Sosial",

    // Error
    errorNotFound: "perintah tidak ditemukan",
    errorTip: "Ketik",
    errorHelpCmd: "help",
    errorSeeCommands: "untuk melihat perintah yang tersedia.",

    // Whoami
    whoamiLine1: "Anda adalah seorang",
    whoamiLine2: "Selamat datang di ruang digital saya!",
    whoamiLine3: "Silakan jelajahi menggunakan perintah terminal.",

    // Ls
    lsTitle: "// Bagian yang tersedia di ~/portfolio",

    // Resume
    resumeOpening: "Membuka resume...",
    resumeNote: "(akan membuka PDF di tab baru)",

    // Neofetch
    neofetch: {
      user: "pengunjung@portfolio",
      os: "OS: ",
      host: "Host: ",
      kernel: "Kernel: ",
      uptime: "Uptime: ",
      uptimeValue: "sejak Anda tiba",
      shell: "Shell: ",
      resolution: "Resolusi: ",
      theme: "Tema: ",
      terminal: "Terminal: ",
    },

    // Theme
    theme: {
      changed: "Tema diubah ke",
      invalid: "Tema tidak valid.",
      available: "Tema yang tersedia:",
      current: "aktif",
      usage: "Penggunaan: theme <mocha|latte|frappe|macchiato>",
    },

    // Misc
    pwd: "/home/pengunjung/portfolio",
    helloResponse: "Halo! 👋",
    sudoResponse: "Bagus coba! 😄 Tapi kamu tidak punya akses sudo di sini.",
    exitResponse: "Terima kasih sudah berkunjung! (Ini portfolio, kamu tidak bisa keluar 😉)",
    editorResponse: "Perang editor? Jangan ke sana... 😅",
    langChanged: "Bahasa diubah ke Indonesia",
    langInvalid: "Bahasa tidak valid. Gunakan: lang en | lang id",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
