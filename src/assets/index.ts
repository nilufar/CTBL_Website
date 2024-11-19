// contact details - Footer, Contact Us
export const hotlineNumber = {
    title : 'Hotline',
    number : '+88 01713 556462'
}

export const infraLeadNumber = {
    title: 'Infrastructure',
    number: '+88 01777 765221'
}

export const softwareLeadNumber = {
    title: 'Software',
    number: '+88 01313 089376'
}

export const contactEmail = {
    title: 'It Continental Email',
    email: 'info@it-continental.com'
}

export const currentAddress = {
    part1: 'Level-5, E-149,',
    part2: 'Khurdughosh Para, Mizmiji,',
    part3: 'P.S.:Siddhirgonj,',
    part4: 'Dist:Narayangonj,Bangladesh'
}

export const googleMapAddress = {
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.486919907177!2d90.48527624045306!3d23.694299791015172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b71e296168a7%3A0xbefbd175b87b009d!2sMaheen%20Label%20Tex%20Limited!5e0!3m2!1sen!2sbd!4v1704229725692!5m2!1sen!2sbd'
}

// social media links - Header, Footer
export const socialMediaLinks = [
    {
        link: 'https://www.linkedin.com/company/continental-technologies-bd-ltd/about/',
        src: '/linkedin.png',
        alt: 'linkedin-logo'
    },
    {
        link: '/',
        src: '/github.png',
        alt: 'github-logo'
    },
    {
        link: '/',
        src: '/facebook.png',
        alt: 'facebook-logo'
    },
]

// hero section banner - HeroBanner
export const typewriteWordList : string[] = [
    ' Innovative Change!', 
    ' Next-level Solutions!', 
    ' Dynamic Improvements!'
]

// hero slider images - HeroSlider
export interface SliderImages {
    src: string;
    alt: string;
}

export const sliderImagesList : SliderImages[] = [
    {
        src: '/erp-software.png',
        alt: 'banner-slide-1'
    },
    {
        src: '/hr-software.png',
        alt: 'banner-slide-2'
    },
    {
        src: '/hrm-software.jpg',
        alt: 'banner-slide-3'
    },
    {
        src: '/slide-alt-4.png',
        alt: 'banner-slide-4'
    },
    {
        src: '/slide-alt-5.png',
        alt: 'banner-slide-5'
    },
    {
        src: '/slide-alt-6.png',
        alt: 'banner-slide-6'
    },
    {
        src: '/slide-alt-7.jpg',
        alt: 'banner-slide-7'
    },
    {
        src: '/slide-alt-8.png',
        alt: 'banner-slide-8'
    },
]

// feature section details - FeatureChart
export interface featureChart {
    src: string;
    alt: string;
    title: string;
    description: string;
}

export const featureChartData : featureChart[]= [
    {
        src: '/feature-1-alt.png',
        alt: 'system-analyst-icon',
        title: 'System Analyst',
        description: 'Our team of System and Data Analysts at CTBL works together to bring out the creativity in ERP solutions for garment factories, VDAP-based inventory management, HRM payroll services and machine maintenance as well.'
    },
    {
        src: '/feature-5-alt.png',
        alt: 'sqa-testing-icon',
        title: 'SQA Testing',
        description: 'CTBL expert SQA helps ensure that ERP system meet user expectations, comply with regulations and functions in a busniess environment. The key points - Requirement verification, Test planning, Automation testing, Data integrity checks and testing documents.'
    },
    {
        src: '/feature-3-alt.png',
        alt: 'documentation-icon',
        title: 'Well Documented',
        description: 'Our effective ERP documentation is essential for ensuring users understand the system and can utilize it efficiently. Our systems integrate all important processes into a single, centralized information system. This makes it easier to define and implement SOPs, and to ensure that the information needed for each process is met.'
    },
    {
        src: '/feature-4-alt.png',
        alt: 'expert-developers-icon',
        title: 'Expert Developers',
        description: 'They are staying updated with emerging technologies, frameworks and industry best practices to continually improve skills and apply innovative solutions to deliver high-quality software that meets user needs and project specifications. The key points, they are following like System Design, Code Review, Debugging, Version Control, Testing (unit, integration, and system).'
    },
    {
        src: '/network-infrastructure.png',
        alt: 'network-infrastructure-icon',
        title: 'Network Infrastructure',
        description: 'CTBL provide a full range of IT Support services for small and medium sized businesses.'
    },
    {
        src: '/feature-6-alt.png',
        alt: 'online-support-icon',
        title: '24/7 Support',
        description: "They are at the prompt to help organizations maximize the value of their ERP systems and ensure smooth operations by using client's mail responding Ticketing Systems. Their work duties are System Maintenance, Training and Documentation, Customization Support for various types of business, Data Management, Troubleshooting and User Management."
    },
]

// logo slider details - LogoSlider
export interface logoSlider {
    src: string;
    alt: string;
    link: string;
    title: string;
}

export const logoSliderDetails : logoSlider[] = [
    {
        src: '/maheen-logo-1.jpg',
        alt: 'maheen-label-limited-logo',
        link: 'https://maheenlabel.com/newsite/',
        title: 'Maheen Label Limited'
    },
    {
        src: '/maheen-logo-2.jpg',
        alt: 'maheen-dizayn-etiket-limited-logo',
        link: 'https://www.maheendizaynetiket.com/',
        title: 'Maheen Dizayn Etiket Limited'
    },
    {
        src: '/slide-alt-3.jpg',
        alt: 'maheen-accessories-logo',
        link: 'https://maheenaccessories.com/',
        title: 'Maheen Accessories'
    },
    {
        src: '/flex.jpeg',
        alt: 'flexible-accessories-limited-logo',
        link: 'https://zantaccessories.com/',
        title: 'Flexible Accessories Limited'
    },
]

// bottom banner details - BannerBottom
export interface bannerBottom {
    src: string;
    alt: string;
    title: string;
    description: string;
}

export const bannerBottomDetails : bannerBottom[] =[
    {
        src: '/erp-software.png',
        alt: 'ctbl-erp-image',
        title: 'CTBL ERP Software',
        description: 'It is a fully integrated solution. It is a complete management software for your company. Also works with inventory management.'
    },
    {
        src: '/hr-software.png',
        alt: 'ctbl-hrm-system-image',
        title: 'HRM System',
        description: 'It is a complete HRM solution. From the candidate selection to the employees leave management all can be done through this software'
    },
    {
        src: '/hrm-software.jpg',
        alt: 'app-store-image',
        title: 'App Store',
        description: 'Real time production monitoring is one of the key factor to boost your production. Canvas X provides the solution to get more production in time with 100% effeciency'
    },
]

// team member details - TeamSection
export interface teamSection {
    src: string;
    alt: string;
    name: string;
    post: string;
}

export const teamSectionDetails : teamSection[] = [
    {
        src: '/md-1.png',
        alt: 'managing-director-image',
        name: 'Jahangir Saiful Islam',
        post: 'Managing Director'
    },
    {
        src: '/md-3.png',
        alt: 'director-one-image',
        name: 'Nomayer Islam Taru',
        post: 'Director'
    },
    {
        src: '/md-2.png',
        alt: 'director-two-image',
        name: 'Zahidul Islam',
        post: 'Director'
    },
]

// review section details - ReviewSection
export interface reviews  {
    quote: string;
    name: string;
    role: string;
    company: string;
    imgSrc: string;
}

export const reviewDetails : reviews[] = [
    {
        quote:
            "CTBL HRM enriched our HR",
        name: "MD. Parvez Rana Bhuiyan",
        role: "Senior Manager (HR, Admin & Compliance)",
        company: "Maheen Dizayn Limited",
        imgSrc: "/review-1.jpeg",
    },
    {
        quote:
            "ERP enriched our financial health",
        name: "Kartik Chandra Sarkar",
        role: "Head of Accounts",
        company: "Maheen Dizayn Limited",
        imgSrc: "/review-2.jpeg",
    },
    {
        quote:
            "ERP enriched our accounts",
        name: "Masud Rana",
        role: "General Manager(Accounts)",
        company: "Maheen Accessories Limited",
        imgSrc: "/review-3.jpeg",
    },
    {
        quote:
            "CTBL HRM enriched our plan and production",
        name: "Shiba Narayan",
        role: "Factory Management",
        company: "Maheen Dizayn Etiket 2",
        imgSrc: "/review-4.jpeg",
    },
    {
        quote:
            "CTBL HRM enriched our HR",
        name: "Ayesha Siddiqua",
        role: "HR Manager",
        company: "Maheen Dizayn Etiket 2",
        imgSrc: "/review-5.jpeg",
    },
    {
        quote:
            "CTBL HRM enriched our HR",
        name: "MD. Mahmudul Hassan Moon",
        role: "HR Senior Executive",
        company: "Maheen Accessories Limited",
        imgSrc: "/review-6.jpeg",
    },
]

// footer product details - Footer
export interface footerProduct {
    title: string;
    link: string;
}

export const footerProductList : footerProduct[] = [
    {
        title : 'HRM Payroll',
        link: '/products'
    },
    {
        title : 'Maintenance Module',
        link: '/products'
    },
    {
        title : 'Real Estate',
        link: '/products'
    },
    {
        title : 'Financial Accounting',
        link: '/products'
    },
    {
        title : 'Label Industry ERP',
        link: '/products'
    },
]

// footer menu details - Footer
export interface footerMenu {
    page: string;
    link: string;
}

export const footerMenuList : footerMenu[] = [
    {
        page: 'Home',
        link: '/'
    },
    {
        page: 'About Us',
        link: '/about'
    },
    {
        page: 'Gallery',
        link: '/gallery'
    },
    {
        page: 'Products',
        link: '/products'
    },
    {
        page: 'Contact Us',
        link: '/contact'
    },
]