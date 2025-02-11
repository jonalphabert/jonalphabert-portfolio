const TECH_STACK = {
    nextjs: {
        title: 'Next.js',
        imgUrl: '/images/tech-stack/next_js.png'
    },
    bootstrap: {
        title: 'Bootstrap',
        imgUrl: '/images/tech-stack/bootstrap.png'
    },
    graphql: {
        title: 'GraphQL',
        imgUrl: '/images/tech-stack/graphql.png'
    },
    nuxtjs: {
        title: 'Nuxt',
        imgUrl: '/images/tech-stack/nuxt_js.png'
    },
    rest: {
        title: 'REST API',
        imgUrl: '/images/tech-stack/rest.png'
    },
    tailwindcss: {
        title: 'Tailwind CSS',
        imgUrl: '/images/tech-stack/tailwind_css.png'
    },
    postgresql:{
        title: 'PostgreSQL',
        imgUrl: '/images/tech-stack/postgresql.png'
    },
    flask:{
        title: 'Flask',
        imgUrl: '/images/tech-stack/flask.png'
    }
} as const;

export default TECH_STACK;

// Define a type for the keys of TECH_STACK
export type TechStackKey = keyof typeof TECH_STACK;