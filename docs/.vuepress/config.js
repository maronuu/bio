module.exports = {
    title: "Riguo",
    description: "Student at The University of Tokyo",
    locales: {
        "/": {
            lang: "ja",
        }
    },
    // base: "/bio/",
    // dest: "docs",
    meta: [
        {charset: "utf-8"},
        {name: "viewport", content: "width=device-width, initial-scale=1"},
    ],
    themeConfig: {
        logo: '/assets/img/logo-2.png',
        nav: [
            { text: "Home", link: "/" },
            { text: "About me", link: "/about/" },
            { text: "Skills", link: "/skills/" },
            { text: "Activities", link: "/activities/" },
            { text: "Links", link: "/links/" },
            // { text: "GitHub", link: "https://github.com/maronuu"},
        ],
        sidebar: {
            "/": [
                "/",
                "/about",
                "/skills",
                "/activities",
                "/links",
            ]
        }
    }
};