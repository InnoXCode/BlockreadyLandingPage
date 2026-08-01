
    import { select } from "../utils/dom.js";
        'use strict';
        
        // Testimonials data
        const testimonials = [


            {
                text: "I recently signed up for blockready.com for my quest to enhance my blockchain, crypto knowledge, and I have to say, I am thoroughly impressed. I recommend Blockready to anyone looking to gain a better understanding of blockchain technology.",
                image: "https://cdn.blockready.com/website/images/homepage/testimonials/clients/ImranUsmani.jpeg",
                name: "Imran Usmani",
                role: "Executive Leader at Microsoft",
                date: "February 4, 2023",
                linkedin: "https://www.linkedin.com/in/imranusmani",
                trustpilot: "https://www.trustpilot.com/users/63dc0ee5f0349a00126025b5"
            },


            {
                text: "Great course, really breaks down crypto and blockchain in simple terms. Made my learning experience super easy, also the content is always up-to-date and they keep adding more!",
                image: "https://cdn.blockready.com/website/images/homepage/testimonials/clients/AthinaStantzos.jpeg",
                name: "Athina Stantzos",
                role: "Solution Architect at Chainlink Labs",
                date: "December 10, 2023",
                linkedin: "https://www.linkedin.com/in/athinastantzos",
                trustpilot: "https://www.trustpilot.com/users/5e67b6354c154f590529c6a1"
            },

            {
                text: "A great resource to learn about crypto! The course is constantly updated with the latest information and technologies!",
                image: "https://cdn.blockready.com/website/images/homepage/testimonials/clients/MazenAloul.jpeg",
                name: "Mazen Aloul",
                role: "Founder at WebQuest SEO",
                date: "March 27, 2025",
                linkedin: "https://www.linkedin.com/in/mazen-aloul",
                trustpilot: "https://www.trustpilot.com/users/67e4601f05c902382e524a98"
            },



            {
                text: "I finished Blockready's crypto course and I feel that I grasped a lot about crypto and blockchain in one week. There's a well outlined learning path with knowledge check sections to aid in absorbing the material.",
                image: "https://cdn.blockready.com/website/images/homepage/testimonials/clients/MarwanDalle.jpeg",
                name: "Marwan Dalle",
                role: "Customer Success Executive at ServiceNow",
                date: "November 14, 2023",
                linkedin: "https://www.linkedin.com/in/marwandalle",
                trustpilot: "https://www.trustpilot.com/users/65539cb51053fa00123dd725"
            },

            {
                text: "I am only just starting to learn, and to be honest, I don’t even know the basics, but this course just answered every single question that I had! Excellent job!",
                image: "https://cdn.blockready.com/website/images/homepage/testimonials/clients/ApostolosTounas.jpeg",
                name: "Apostolos Tounas",
                role: "Digital Intelligence Strategist",
                date: "February 22, 2023",
                linkedin: "https://www.linkedin.com/in/apostolos-tounas-52995996",
                trustpilot: "https://www.trustpilot.com/users/63f5f0fe767a210013e20fd7"
            },



            {
                text: "The curriculum is very thorough & well constructed! If it were up to me, I'd overthink & research everything for days before giving up if I didn't come across Blockready.",
                image: "https://cdn.blockready.com/website/images/homepage/testimonials/clients/DilaraKarabey.jpeg",
                name: "Dilara Karabey",
                role: "Marketing Analytics Consultant",
                date: "February 2, 2024",
                linkedin: "https://www.linkedin.com/in/dilara-karabey",
                trustpilot: "https://www.trustpilot.com/users/65bd01ea1c4ced001266fabc"
            },


            {
                text: "It's not just a well curated educational platform for all Blockchain related trainings, but a copilot to navigate the rabbit hole it can be some times. Perfect for advanced roles to stay up to date and get in for the first time for more junior ones.",
                image: "https://cdn.blockready.com/website/images/homepage/testimonials/clients/VictorMadueno.jpeg",
                name: "Victor Madueno",
                role: "Senior Director at FTI Consulting",
                date: "June 12, 2023",
                linkedin: "https://www.linkedin.com/in/victormadueno",
                trustpilot: "https://www.trustpilot.com/users/6486e9544697080012aaf415"
            },


            {
                text: "I've recently entered the web3 recruitment field and I feel incredibly fortunate to have had the opportunity to learn from you. Your course has given me valuable knowledge and skills that I know will be beneficial in my work with both clients and candidates.",
                image: "https://cdn.blockready.com/website/images/homepage/testimonials/clients/GalyaMarinova.jpeg",
                name: "Galya Marinova",
                role: "Founder ar Recruitify Global",
                date: "March 24, 2023",
                linkedin: "https://www.linkedin.com/in/galya-marinova-a63007255",
                trustpilot: "https://www.trustpilot.com/users/642161bb33e0c20012986c56"
            },


            {
                text: "Vas and team very great in sharing recommendations and guidance on courses.",
                image: "https://cdn.blockready.com/website/images/homepage/testimonials/clients/GoranSafar.jpeg",
                name: "Goran Safar",
                role: "Head of Sales at Global Ledger",
                date: "April 29, 2025",
                linkedin: "https://www.linkedin.com/in/goransafar",
                trustpilot: "https://www.trustpilot.com/users/68106e1cbf768bad12e5c0bb"
            },


            {
                text: "This course offers a unique approach to learning crypto! It's packed with a variety of well-organized materials. I highly recommend it to anyone looking to demystify blockchain and crypto!",
                image: "https://cdn.blockready.com/website/images/homepage/testimonials/clients/TinkichtNassim.jpeg",
                name: "Tinkicht Nassim",
                role: "IT Lecturer at HCT",
                date: "July 24, 2024",
                linkedin: "https://www.linkedin.com/in/ntinkicht",
                trustpilot: "https://www.trustpilot.com/users/5bee949c5483f4b8a96dcca8"
            },

            {
                text: "The courses are up-to-date and practical, offering valuable insights for people at all levels. A must for anyone looking to stay ahead in their field!",
                image: "https://cdn.blockready.com/website/images/homepage/testimonials/clients/BerkPoyraz.jpeg",
                name: "Berk Poyraz",
                role: "CTO at Devotel",
                date: "March 24, 2024",
                linkedin: "https://www.linkedin.com/in/berk-poyraz-398a6b2b9",
                trustpilot: "https://www.trustpilot.com/users/65fd5a80432a090012c605f0"
            },

            {
                text: "I did a course with Blockready and it was a great experience. The content of the course was well thought and planned, it covers a vast majority of the important topics about Blockchain and crypto. I absolutely recommend.",
                image: "https://cdn.blockready.com/website/images/homepage/testimonials/clients/FilipaGoncalves.jpg",
                name: "Filipa Gonçalves",
                role: "Chief Operating Officer at xMoney",
                date: "December 7, 2021",
                linkedin: "https://www.linkedin.com/in/filipasfgoncalves",
                trustpilot: "https://www.trustpilot.com/users/61af5ba74f73080012ecf868"
            },
        ];

        // TestimonialsColumns Class
        class TestimonialsColumns {
            constructor(container, testimonials) {
                this.container = container;
                this.testimonials = testimonials;
                this.init();
                
                // Reinitialize on resize
                let resizeTimeout;
                window.addEventListener('resize', () => {
                    clearTimeout(resizeTimeout);
                    resizeTimeout = setTimeout(() => {
                        this.container.innerHTML = '';
                        this.init();
                    }, 250);
                });
            }

            init() {
                const screenWidth = window.innerWidth;
                
if (screenWidth <= 767) {
    // Mobile: 1 column with all 12 testimonials
    this.createColumn(this.testimonials, 'column-1', 25);
} else if (screenWidth <= 1023) {
    // Tablet: 2 columns with 6 testimonials each (12 total)
    const firstColumn = this.testimonials.slice(0, 6);
    const secondColumn = this.testimonials.slice(6, 12);
    this.createColumn(firstColumn, 'column-1', 20);
    this.createColumn(secondColumn, 'column-2', 24);
} else {
    // Desktop: 3 columns with 4 testimonials each (12 total)
    const firstColumn = this.testimonials.slice(0, 4);
    const secondColumn = this.testimonials.slice(4, 8);
    const thirdColumn = this.testimonials.slice(8, 12);
    this.createColumn(firstColumn, 'column-1', 15);
    this.createColumn(secondColumn, 'column-2', 19);
    this.createColumn(thirdColumn, 'column-3', 17);
}

            }

            createColumn(testimonials, className, duration) {
                const column = document.createElement('div');
                column.className = `testimonials-column ${className}`;

                const wrapper = document.createElement('div');
                wrapper.className = 'testimonials-column-wrapper';
                wrapper.style.animationDuration = `${duration}s`;
                
                // Create testimonials twice for seamless loop
                for (let i = 0; i < 2; i++) {
                    testimonials.forEach(testimonial => {
                        wrapper.appendChild(this.createTestimonialCard(testimonial));
                    });
                }

                column.appendChild(wrapper);
                this.container.appendChild(column);
            }

            createTestimonialCard(testimonial) {
                const card = document.createElement('div');
                card.className = 'testimonial-card';

                // Text
                const text = document.createElement('div');
                text.className = 'testimonial-text';
                text.textContent = testimonial.text;
                card.appendChild(text);

                // Author container
                const authorContainer = document.createElement('div');
                authorContainer.className = 'testimonial-author';

                // Author image
                const img = document.createElement('img');
                img.src = testimonial.image;
                img.alt = testimonial.name;
                img.className = 'author-image';
                img.loading = 'lazy';
                authorContainer.appendChild(img);

                // Author info
                const authorInfo = document.createElement('div');
                authorInfo.className = 'author-info';

                const nameContainer = document.createElement('div');
                nameContainer.className = 'author-name';
                
                const name = document.createElement('span');
                name.textContent = testimonial.name;
                nameContainer.appendChild(name);

                // LinkedIn icon
                if (testimonial.linkedin) {
                    const linkedinLink = document.createElement('a');
                    linkedinLink.href = testimonial.linkedin;
                    linkedinLink.target = '_blank';
                    linkedinLink.rel = 'noopener noreferrer';
                    linkedinLink.innerHTML = `<svg class="linkedin-icon" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>`;
                    nameContainer.appendChild(linkedinLink);
                }

                authorInfo.appendChild(nameContainer);

                const role = document.createElement('div');
                role.className = 'author-role';
                role.textContent = testimonial.role;
                authorInfo.appendChild(role);

                authorContainer.appendChild(authorInfo);
                card.appendChild(authorContainer);

                // Add date if it exists
                if (testimonial.date) {
                    const date = document.createElement('div');
                    date.className = 'testimonial-date';
                    date.textContent = testimonial.date;
                    card.appendChild(date);
                }

                // Trustpilot icon
                if (testimonial.trustpilot) {
                    const trustpilotLink = document.createElement('a');
                    trustpilotLink.href = testimonial.trustpilot;
                    trustpilotLink.target = '_blank';
                    trustpilotLink.rel = 'noopener noreferrer';
                    trustpilotLink.className = 'trustpilot-link'; // Add class for CSS targeting
                    
                    const trustpilotImg = document.createElement('img');
                    trustpilotImg.src = 'https://cdn.trustpilot.net/brand-assets/4.1.0/logo-black.svg';
                    trustpilotImg.alt = 'Trustpilot';
                    trustpilotImg.className = 'trustpilot-icon';
                    
                    trustpilotLink.appendChild(trustpilotImg);
                    card.appendChild(trustpilotLink);
                }

                return card;
            }
        }

        // Optional: Add intersection observer for animation restart when visible
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const columns = entry.target.querySelectorAll('.testimonials-column-wrapper');
                    columns.forEach(column => {
                        column.style.animationPlayState = 'running';
                    });
                } else {
                    const columns = entry.target.querySelectorAll('.testimonials-column-wrapper');
                    columns.forEach(column => {
                        column.style.animationPlayState = 'paused';
                    });
                }
            });
        }, observerOptions);

       export function initTestimonials() {

    const container =
        select("#testimonials-container")

    if (container) {
        new TestimonialsColumns(container, testimonials);
    }

    const section =
        select(".testimonials-section")

    if (section) {
        observer.observe(section);
    }

}
            
    
  