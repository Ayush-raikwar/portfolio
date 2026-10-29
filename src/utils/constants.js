import backgroundImage from '../assets/images/home_bg.jpg';
import comingSoonGif from '../assets/gif/work_in_progress.gif';

export const constants = {
    social_links: {
        github: 'https://github.com/Ayush-raikwar',
        linkedin: 'https://in.linkedin.com/in/ayush-raikwar-a7031a186',
        instagram: 'https://instagram.com/asr_o_g',
        mail: "mailto:ayushraikwar45@gmail.com?subject=Hello&body=How can I help you?",
        yt: 'https://youtube.com/@asr_og_?si=S4YSZ36MJAQAadt2',
        photography: 'https://www.instagram.com/capturer_asr'
    },
    images: {
        bg_image: backgroundImage,
        coming_soon: comingSoonGif,
        home_bg_2:require("../assets/images/home_bg_2.jpg")
    },
    // imgUrl: cover image (leave '' to show a generated cover using `cover` + optional `logo`)
    // logo: app icon shown on the generated cover; playStore / appStore: store links
    // tags: tech/feature chips shown on the card
    projects: [
        {
            title: 'TypTap',
            description: 'Policyholder app for TypTap Insurance (HCI Group): coverage limits, premiums and payment history, premium payments from the Billing tab, policy document downloads and agent contact details.',
            github: '',
            demo: '',
            imgUrl: '',
            cover: 'typtap',
            logo: 'https://play-lh.googleusercontent.com/9F7s4Pw5yqa2rbcTLdm5pUAvzjH8obflCFechxNP3zBH53BO2HKd2mTn3mqhwkHisPohvlJ2XGHGsH9PiZ58NA=w240-h480',
            playStore: 'https://play.google.com/store/apps/details?id=com.exzeo.typtap',
            appStore: 'https://apps.apple.com/app/id1610860087',
            tags: ['React Native', 'Android & iOS', 'Payments', 'Policy Documents']
        },
        {
            title: 'HCPCI (Homeowners Choice)',
            description: 'Mobile app for Homeowners Choice Property & Casualty Insurance (HCI Group) policyholders to manage their home insurance policy on the go.',
            github: '',
            demo: '',
            imgUrl: '',
            cover: 'hcpci',
            playStore: 'https://play.google.com/store/apps/details?id=com.exzeo.hcpci',
            tags: ['React Native', 'Policy Management']
        },
        {
            title: 'Tailrow',
            description: 'App for Tailrow policyholders (HCI Group): view coverage limits, premiums and payment history, find your agent\'s contact details and manage your policy anytime.',
            github: '',
            demo: '',
            imgUrl: '',
            cover: 'tailrow',
            logo: 'https://play-lh.googleusercontent.com/pJFFERA7_b8PrzozzOalDtMYj0l17LzGuL7p5BK0beDhgu-zNH7TudwEkzPJHqULE-wcRVrvZnQnYGHORlOQHg=w240-h480',
            playStore: 'https://play.google.com/store/apps/details?id=com.exzeo.tailrow',
            appStore: 'https://apps.apple.com/app/id6748823392',
            tags: ['React Native', 'Android & iOS', 'Policy Management']
        },
        {
            title: 'Praxis Reciprocal Exchange',
            description: 'Homeowners insurance app for Praxis, a new Florida property insurer: view policy details, make payments and access important documents from anywhere.',
            github: '',
            demo: '',
            imgUrl: '',
            cover: 'praxis',
            logo: 'https://play-lh.googleusercontent.com/xhOQBvzYXsqetUMXhF67wYItIcADBuWN5i30p0DefrUdPasROdgagSh3c844ET9uFyYhb9OhxYNknZ8DlGG4=w240-h480',
            playStore: 'https://play.google.com/store/apps/details?id=com.exzeo.praxis',
            appStore: 'https://apps.apple.com/app/id6761527023',
            tags: ['React Native', 'Android & iOS', 'Payments', 'Documents']
        },
        {
            title: 'CORE Home Insurance',
            description: 'App for CORE (Condo Owners Reciprocal Exchange, HCI Group): manage policy details, make secure premium payments, download policy documents and stay on top of coverage and billing.',
            github: '',
            demo: '',
            imgUrl: '',
            cover: 'core',
            logo: 'https://play-lh.googleusercontent.com/i7dN1f64DP8tbQ4c-6SP6vmIm3b86A0jSW48ulgVL_gF9YvjprFlYUm75jSRvAz4GALDWY3p-fO9Nvss-hxn9A=w240-h480',
            playStore: 'https://play.google.com/store/apps/details?id=com.exzeo.coreins',
            tags: ['React Native', 'Payments', 'Documents']
        },
        {
            title: 'ToneOp App',
            description: 'A health and fitness app featuring custom React Native packages, UI developed from scratch, and enhancements for bug fixes and new features.',
            github: '',
            demo: '',
            imgUrl: 'https://play-lh.googleusercontent.com/qHUTNaWNuA1UcojPHmfuh_Nprkk27vZCS6BOO_ka-clDLGDfgmV5l5YjdIBObbvenM4=w5120-h2880-rw',
            tags: ['React Native', 'Android & iOS', 'Native Bridging', 'Google ML Kit']
        },
        {
            title: 'Productivity App',
            description: 'A productivity app, highly beneficial for common users to organise their stuff.',
            personal: true,
            github: '',
            demo: '',
            imgUrl: '',
            cover: 'tasks'
        },
        {
            title: 'Tenant App',
            description: 'A tenant management app with multiple beneficial features for landlords and tenants.',
            personal: true,
            github: '',
            demo: '',
            imgUrl: '',
            cover: 'home'
        },
        {
            title: 'MaxLearn App',
            description: 'A quiz learning application with draggable elements, bottom sheets, video integration, and swipeable FlatLists.',
            github: '',
            demo: '',
            imgUrl: 'https://play-lh.googleusercontent.com/z93CI7YWzxOYzimke2ei6bbRbnKnWQ1Zt_UtMsCV-OfqFD-kpnEqVrfX8qNZOe7TEJ0=w5120-h2880-rw',
            tags: ['React Native', 'Bottom Sheets', 'Video', 'Drag & Drop']
        },
        {
            title: 'RelyOn App',
            description: 'This app is designed to provide students with access to their training records and certifications. It includes a user-friendly interface for viewing and managing training data.',
            github: '',
            demo: '',
            imgUrl: '',
            cover: 'learning',
            tags: ['React Native', 'iOS', 'Redux', 'SVG']
        },
        {
            title: 'Client Projects at Bytive Technologies',
            description: 'Web and app development projects for clients in the USA, Mexico, and Germany.',
            github: '',
            demo: '',
            imgUrl: '',
            cover: 'globe',
            tags: ['React.js', 'React Native', 'International Clients']
        },
        {
            title: 'React Web Apps at Oodles Technologies',
            description: 'ReactJS web applications with styled components and Ethereum wallet integration.',
            github: '',
            demo: '',
            imgUrl: 'https://cdn.prod.website-files.com/657938683c07d6ffdcc781b3/663bfaf2f7913278edf513c1_641a2978359737779257247a_Mobile-First-Design.jpeg',
            tags: ['React.js', 'Styled Components', 'Ethereum Wallet']
        },
    ]

}