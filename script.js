/* DICIONÁRIO DE TRADUÇÃO (PT / EN) */

const translations = {
    pt: {
        nav_inicio: "Início",
        nav_sobre: "Sobre",
        nav_projetos: "Projetos",
        nav_contato: "Contato",

        hero_title: 'Desenvolvedor <br /><span class="accent">Full Stack</span>',
        hero_lede: "Olá, sou o Vitor Costadela. Aqui você encontra projetos pessoais e acadêmicos em que venho trabalhando.",

        btn_ver_projetos: "Ver projetos",
        btn_falar_comigo: "Falar comigo",

        section_sobre_tag: "Sobre",
        section_sobre_title: "Por trás dos códigos",

        about_p1: 'Sou <strong>Vitor Costadela</strong>, atualmente estudante do curso de <strong>Sistemas de Informação</strong> na <strong>PUC Minas</strong>. Tenho paixão por tecnologia e por transformar conhecimento em algo que possa ser visto, usado e experimentado.',

        about_p2: 'Meus estudos têm como objetivo construir uma base sólida como desenvolvedor, através de projetos pessoais e acadêmicos, colocando em prática aquilo que aprendo ao longo do caminho.',

        about_p3: 'Ainda estou descobrindo quais caminhos quero seguir dentro da tecnologia, mas sei que quero continuar evoluindo e desenvolver aplicações capazes de solucionar problemas reais e transformar a vida das pessoas.',

        about_p4: 'Para mim, cada projeto é uma oportunidade de aprender algo novo e dar mais um passo nessa direção.',

        edu_title: "Formação",
        edu_course: "Sistemas de Informação",

        skills_title: "Tecnologias",
        skills_used: "JÁ UTILIZEI",
        skills_learning: "ESTUDANDO",

        section_proj_tag: "Projetos",
        section_proj_title: "Quando o conhecimento ganha forma",

        proj1_title: "Landing Page Viagem 🌎",
        proj1_desc: "Meu primeiro projeto web, criado para apresentar um roteiro de viagem de forma visual, organizada e responsiva.",
        proj2_desc: "Plataforma de gestão para concessionárias. Centraliza a preparação de veículos, transferências e fluxo de compras em um só lugar.",

        link_projeto: "Projeto",
        link_codigo: "Código",

        coming_soon: "Em breve...",
        coming_soon_title: "Em breve",
        coming_soon_desc: "Novo projeto em desenvolvimento.",

        section_contato_tag: "Contato",
        section_contato_title: "Vamos conversar?",
        contato_desc: "Aberto a oportunidades, novos projetos e boas conversas. <br />Entre em contato por um dos links abaixo.",

        footer_rights: "Todos os direitos reservados",
        footer_top: "Topo ↑"
    },

    en: {
        nav_inicio: "Home",
        nav_sobre: "About",
        nav_projetos: "Projects",
        nav_contato: "Contact",

        hero_title: 'Full Stack <br /><span class="accent">Developer</span>',
        hero_lede: "Hello, I'm Vitor Costadela. Here you can find personal and academic projects I've been working on.",

        btn_ver_projetos: "View projects",
        btn_falar_comigo: "Get in touch",

        section_sobre_tag: "About",
        section_sobre_title: "Behind the code",

        about_p1: 'I am <strong>Vitor Costadela</strong>, currently an <strong>Information Systems</strong> student at <strong>PUC Minas</strong>. I am passionate about technology and about turning knowledge into something visible, usable, and meaningful.',

        about_p2: 'My goal is to build a solid foundation as a developer through personal and academic projects, applying what I learn along the way.',

        about_p3: 'I am still exploring the paths I want to take within tech, but I know I want to keep evolving and building applications that solve real-world problems and make a positive impact.',

        about_p4: 'For me, every project is an opportunity to learn something new and take another step forward.',

        edu_title: "Education",
        edu_course: "Information Systems",

        skills_title: "Technologies",
        skills_used: "TECH STACK",
        skills_learning: "CURRENTLY LEARNING",

        section_proj_tag: "Projects",
        section_proj_title: "Where knowledge takes shape",

        proj1_title: "Travel Landing Page 🌎",
        proj1_desc: "My first web project, designed to present a travel itinerary in a visual, organized, and responsive layout.",
        proj2_desc: "Management platform for car dealerships. Centralizes vehicle preparation, transfers, and purchase requests in one place.",

        link_projeto: "Demo",
        link_codigo: "Code",

        coming_soon: "Coming soon...",
        coming_soon_title: "Coming Soon",
        coming_soon_desc: "New project under development.",

        section_contato_tag: "Contact",
        section_contato_title: "Let's talk!",
        contato_desc: "Open to opportunities, new projects, and meaningful conversations. <br />Reach out through one of the links below.",

        footer_rights: "All rights reserved",
        footer_top: "Back to top ↑"
    }
};
/* CONTROLE DE IDIOMA*/

const langToggleBtn = document.getElementById('lang-toggle');
const langText = langToggleBtn.querySelector('.lang-text');

function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    langText.textContent = lang === 'pt' ? 'EN' : 'PT';

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

const savedLang = localStorage.getItem('lang') || 'pt';
setLanguage(savedLang);

langToggleBtn.addEventListener('click', () => {
    const currentLang = localStorage.getItem('lang') || 'pt';
    const newLang = currentLang === 'pt' ? 'en' : 'pt';
    setLanguage(newLang);
});

/* CONTROLE DE DARK MODE */

const themeToggleBtn = document.getElementById('theme-toggle');
const themeText = themeToggleBtn ? themeToggleBtn.querySelector('.theme-text') : null;

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (themeText) {
        themeText.textContent = theme === 'dark' ? 'LIGHT' : 'DARK';
    }
}

// Verifica tema salvo ou preferência do sistema/navegador
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');


setTheme(savedTheme);

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
}