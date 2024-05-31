import insta from '../assets/icons/insta.svg';
import linkedin from '../assets/icons/linkedin.svg';
import mail from '../assets/icons/mail.svg';
import phone from '../assets/icons/phone.svg';
import map from '../assets/icons/map.svg';

const contactData = () => {
    return [
        {
            id: 1,
            title: "Correo", 
            description: "Puedes Contactarme por", 
            href: "mailto:liz.alvare@gmail.com", 
            hrefContent: "liz.alvare@gmail.com",
            icon: mail
        },
        {
            id: 2,
            title: "Telefono", 
            description: "Puedes Contactarme por", 
            href: "tel:+50377493748",
            hrefContent: "+503(77493748)",
            icon: phone
        },
        {
            id: 3,
            title:"Linkedin",
            description:"Agregame a tu red", 
            href:"https://www.linkedin.com/in/elizabeth-alvarenga-/",
            hrefContent:"Elizabeth Alvarenga",
            icon: linkedin
        },
        {
            id:4,
            title:"Instagram", 
            description:"Búscame como",
            href:"https://www.instagram.com/liz_alvare?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", 
            hrefContent:"@liz_alvare",
            icon: insta
        },
        {
            id:5,
            title:"Ubicacion",
            description:"Puedes encontrarme en",
            hrefContent:"Antiguo Cuscatlán, La Libertad, El Salvador.",
            icon: map
        }
    ];
}

const slidesData = () => {
    return [
        {
            id: 1,
            imgSrc: 'https://media.admagazine.com/photos/618a709a72049e253173ee7c/master/w_1600%2Cc_limit/56036.jpg',
            title: 'Diseño Arquitectónico',
            description: 'Con un enfoque centrado en el diseño innovador y la funcionalidad, creamos ambientes que se adaptan a tu estilo de vida y reflejan tu personalidad.' 
        },
        {
            id: 2,
            imgSrc: 'https://www.facilitymanagementservices.es/wp-content/uploads/sites/3/2023/08/naveindustrial.jpg',
            title: 'Desarrollo de Proyectos Industriales',
            description: 'Contamos con 10 años de experiencia en el desarrollo de proyectos industriales estamos capacitados para para cualquier tipo de trabajo de la rama de diseño y construcción de proyectos industriales como: Naves industriales, parques industriales o parques de servicios.'
        },
        {
            id: 3,
            imgSrc: 'https://i.pinimg.com/originals/3b/57/2d/3b572d0454acd0be60331f060e9c1743.webp',
            title: 'Elaboración de Planos Arquitectónicos',
            description: 'Nuestros servicios abarcan desde la arquitectura hasta el diseño de interiores, exteriores, planificación y mucho más. Nos apasiona transformar tus ideas en realidad y superar tus expectativas.'
        }
    ];
}

export {contactData, slidesData}

