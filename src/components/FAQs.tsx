'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "What is a Web3 Builder?",
    answer: "A Web3 builder is a person or group of people who work to develop a particular decentralized application (DApp) or contribute to a blockchain-based project. This can involve but not limited to project founders, devs, marketers, community managers, moderators, beta-testers, content creators, educators, and other web3 professionals. The role of a web3 builder is important because solid project with good value proposition can help drive the adoption and usage of a DApp or blockchain-based project, as well as provide valuable feedback and support for its development and evolution. Web3 builders play a crucial role in shaping a project's direction and culture and promoting its values and mission to the broader community."
  },
  {
    question: "What is web3?",
    answer: "Web3 refers to the third generation of the World Wide Web, which is focused on leveraging decentralized technologies such as blockchain and distributed ledger technologies (DLT) to create a more open, transparent, and secure internet. Web3 technologies are designed to enable decentralized applications (DApps) and other online platforms and services that are not controlled by a single entity or organization, but rather rely on a distributed network of nodes and users to function. This decentralized architecture allows for greater transparency, security, and autonomy, and has the potential to disrupt and transform various industries and sectors. Web3 technologies are often associated with the blockchain and cryptocurrency space, but they have the potential to be used in a wide range of applications and industries, including supply chain management, online identity, and reputation systems, peer-to-peer marketplaces, and much more."
  },
  {
    question: "Is FW3 exclusively for Filipinos?",
    answer: "A Filipino, in general, is a person who is a citizen of the Philippines, a Southeast Asian country located in the western Pacific Ocean. The Philippines is a diverse and multicultural country, with a population made up of many different ethnic groups and cultures. FW3 is open to partner or work with individuals, different projects and communities outside of the Philippines who share our ideals and vision of growing a better Web3 ecosystem. And foreigners who may or not reside in the country, and who have the heart to help out Filipinos in Web3 are most welcome to be part of the community."
  },
  {
    question: "Is FW3 an agency?",
    answer: "By definition, an agency is a business or organization that provides a specific service or fulfills a particular purpose on behalf of another company, individual, or group. Agencies can be found in many different sectors and industries and can take many different forms, such as advertising agencies, public relations agencies, staffing agencies, travel agencies, and more. In general, an agency is hired by a client to perform a specific task or set of tasks and is usually compensated for its services either through a fee or commission. The client may be a business, government agency, or individual, and the agency's services may be focused on a particular area of expertise or industry. Hence, Filipino Web3 is not an agency nor a business entity. Our main focus is to empower Filipinos who are willing to learn about Web3-related opportunities, either technical or non-technical, that are operating in building Web3 projects."
  },
  {
    question: "We want to help. How can we be part of FW3?",
    answer: "We appreciate the help that we can get to keep this organization in full operation. To set expectations, Filipino Web3 is a non-profit organization and all core members are doing their tasks voluntarily and without expectation of any monetary compensation or incentives. However, if you are willing to be an active member of the organization, reach out to the core members to be acknowledged."
  },
  {
    question: "Can a student or a dropout be a community builder?",
    answer: "In general, being a college student or a dropout does not necessarily mean that you will be at a disadvantage when it comes to working in the web3 industry. While a college education can certainly provide valuable knowledge and skills that can be helpful in this field, it is not a requirement for success. Many successful professionals in the web3 industry have come from a variety of educational and professional backgrounds, and have acquired the necessary knowledge and skills through other means, such as self-study, online courses, internships, and work experience. That being said, the web3 industry is a rapidly evolving field that requires a strong foundation in computer science, mathematics, and other technical disciplines. As such, having a strong educational background in these areas can be helpful in pursuing a career in this field. It is also important to stay up-to-date on the latest developments and trends in the industry, which can be achieved through ongoing learning and professional development."
  }
];

function FAQItem({ faq, index }: { faq: any, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className={`faq ${isOpen ? 'open' : ''}`} onClick={toggleFAQ}>
      <div className="faq__icon">
        <i className={`uil ${isOpen ? 'uil-minus' : 'uil-plus'}`}></i>
      </div>
      <div className="question__answer">
        <h4>{faq.question}</h4>
        <p>{faq.answer}</p>
      </div>
    </article>
  );
}

export default function FAQs() {
  return (
    <section id="faqs" className="faqs">
      <h2>Frequently Asked Questions</h2>
      <div className="container faqs__container">
        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} index={index} />
        ))}
      </div>
    </section>
  );
}
