module.exports = {
    title: "Maronu",
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
        logo: '/assets/img/logo.png',
        nav: [
            { text: "Home", link: "/" },
            { text: "About me", link: "/about/" },
            { text: "Records", link: "/records/" },
            { text: "Interest", link: "/interest/" },
            { text: "Contact/Links", link: "/links/" },
            // { text: "GitHub", link: "https://github.com/maronuu"},
        ],
        sidebar: {
            "/": [
                "/",
                "/about",
                "/records",
                "/interest",
                "/links",
            ]
        }
    }
};