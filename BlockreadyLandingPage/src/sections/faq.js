import { select,
    selectAll } from "../utils/dom.js";
    class FaqSection {
        constructor(container, options) {
            this.container = container;
            this.options = options;
            this.init();
        }

        
        init() {
            this.render();
            this.attachEventListeners();
            this.animateItems();
        }

        
        render() {
            const { items, contactInfo } = this.options;

            const html = `
                <section class="faq-section" id="faq">
                    <div class="container">
                        <div class="faq-items">
                            ${items.map((item, index) => this.renderFaqItem(item, index)).join('')}
                        </div>
                        ${contactInfo ? this.renderContactSection(contactInfo) : ''}
                    </div>
                </section>
            `;

            this.container.innerHTML = html;
        }

        renderFaqItem(item, index) {
            return `
                <div class="faq-item" data-index="${index}" style="animation-delay: ${index * 0.1}s">
                    <button class="faq-button" aria-expanded="false" aria-controls="answer-${index}">
                        <h3 class="faq-question">${item.question}</h3>
                        <div class="chevron-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m6 9 6 6 6-6"/>
                            </svg>
                        </div>
                    </button>
                    <div class="faq-answer" id="answer-${index}">
                        <div class="faq-answer-content">
                            <p>${item.answer}</p>
                        </div>
                    </div>
                </div>
            `;
        }

        renderContactSection(contactInfo) {
            return `
                <div class="contact-section">
                    <div class="contact-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect width="20" height="16" x="2" y="4" rx="2"/>
                            <path d="m22 7-10 5L2 7"/>
                        </svg>
                    </div>
                    <p class="contact-title">${contactInfo.title}</p>
                    <p class="contact-description">${contactInfo.description}</p>
                    <button class="btn" id="contact-btn">${contactInfo.buttonText}</button>
                </div>
            `;
        }

        attachEventListeners() {
            const faqButtons = selectAll(".faq-button", this.container);
            faqButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const faqItem = button.closest(".faq-item");
                      this.toggleFaqItem(faqItem);
                });
            });

            const contactBtn = this.container.querySelector('#contact-btn');
            if (contactBtn && this.options.contactInfo?.onContact) {
                contactBtn.addEventListener('click', this.options.contactInfo.onContact);
            }
        }

        toggleFaqItem(item) {

        const items =
            this.container.querySelectorAll(".faq-item");

        const isOpen =
            item.classList.contains("open");

        items.forEach(faq => {

            faq.classList.remove("open");

            faq.querySelector(".faq-button")
                ?.setAttribute(
                    "aria-expanded",
                    "false"
                );

    });

    if (!isOpen) {

        item.classList.add("open");

        item.querySelector(".faq-button")
            ?.setAttribute(
                "aria-expanded",
                "true"
            );

    }

}

        animateItems() {
            const items = this.container.querySelectorAll('.faq-item');
            items.forEach((item, index) => {
                item.style.animationDelay = `${index * 0.1}s`;
            });
        }
    }

    const DEMO_FAQS = [
        { question: "What is Blockready?", answer: "Blockready is an e-learning platform that provides educational content on Web3, blockchain and cryptocurrency. Our mission is to help individuals and companies of all industries and backgrounds navigate the overwhelming amount of information about this industry that exists on the internet. We provide curated, categorized, and accurate online learning through a revolutionary AI-assisted micro-learning platform that will educate, inspire and empower you to make informed decisions!" },
        { question: "What problems does Blockready solve?", answer: "Are you interested in learning about blockchain and crypto but don't know where to start? Whether you're a curious learner, looking for a career, or a professional trying to keep up, navigating this space can feel overwhelming. We've organized everything you need to know into a structured, easy-to-follow learning experience. No more bouncing between random YouTube videos or outdated articles. With Blockready, you'll save time, avoid confusion, and build real confidence in a fast-moving industry." },
        { question: "How are you different from other courses?", answer: "No other course or platform uses AI to collect so much knowledge into small bite-size format that allows you to learn everything you need in the fastest time possible. The typical feedback we receive is that we offer the most complete and 'logically' structured crypto learning platform available. Try us!" },
        { question: "I'm a complete beginner, will this be too hard?", answer: "There is no requirement for you to have any previous knowledge of blockchain or crypto. We will teach you everything you need to know to navigate the space safely and understand all aspects of the Web3 industry in record time!" },
        { question: "Can I learn on my own time?", answer: "Yes, this is an on-demand online learning platform, so you are truly in control of wherever and whenever you like to access the material. After checkout, you will receive instant access to the material, which will be made available under your personalized library, which you can access from any device using your login credentials." },
        { question: "How do you ensure the quality of your content?", answer: "Blockready follows a structured content development process that combines expert research, continuous updates, and rigorous quality checks. All lessons are curated from reliable sources, and reviewed for accuracy and clarity. This ensures that every topic is explained in a way that is current, trustworthy, and easy to understand." },
        { question: "How does Blockready use AI?", answer: "Blockready leverages the best AI tools available to analyze and organize vast amounts of blockchain and crypto research, turning it into well-structured, beginner-friendly learning material. AI assists in identifying key concepts, refining lesson flow, and ensuring the content stays relevant as the industry evolves. Every AI-assisted module is then reviewed by human experts to maintain accuracy, clarity, and educational quality." },
        { question: "Do you update your learning material?", answer: "We regularly review and update our content to keep it fresh and aligned with the latest developments. This includes adding new modules, lessons, and resources over time. The best part? All future updates are included at no extra cost for as long as you have access to the platform. It's a one-time investment that keeps delivering value - ensuring your learning stays up-to-date." },
        { question: "What does it cost to use the Blockready platform?", answer: "Blockready offers flexible pricing depending on how deep you want your learning journey to go. Our Pro plan gives you full access to the entire Blockready main learning content, with monthly and discounted longer-term options available. If you want an even more comprehensive learning experience, the Expert plan includes all Pro features plus additional curated resources designed to accelerate your understanding." },
        { question: "Do you offer certification?", answer: "Yes. Blockready offers an optional Final Exam that awards a CPD-accredited certificate upon successful completion. The exam consists of 100 multiple-choice questions and requires an 80% passing score. Learners can take the exam at any stage, and those who pass receive an instantly issued certificate worth 25 CPD hours." },
        { question: "Is your learning material mobile ready?", answer: "Yes! You are always on the go, and your learning can be too! Our platform is fully responsive and adapts seamlessly to every screen size and aspect ratio, so you can enjoy learning no matter where you are or what device you use. Additionally, our platform has been tested and is fully compatible with all major browsers!" },
        { question: "What is your refund policy?", answer: "We have full confidence that you will love our platform, but if you are not 100% satisfied in any way, we offer a 7-day, money-back guarantee! This allows you to try the learning experience risk-free, and if you don't find value in the provided learning materials, just email us, and we will refund your money, no questions asked! Note that we do not offer partial refunds if requested after the 7 days refund period." }
    ];

console.log("FAQ initialized");
    export function initFAQ() {
    

    const container = select("#faq-container");

    console.log(container);

    

        if (!container) {
            return;
        }

        new FaqSection(container, {

            items: DEMO_FAQS,

            contactInfo: {

                title: "Still have questions?",

                description:
                    "We're here to help you.",

                buttonText:
                    "Contact Support",

                onContact() {

                    window.location.href =
                        "https://www.blockready.com/contact";

                }

            }

        });

    }
    