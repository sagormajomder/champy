import { motion } from 'motion/react';
import { useState } from 'react';
import Container from '../../components/Container';
import SectionTitle from '../../components/SectionTitle';

const faqs = [
  {
    question: 'How do I join a contest?',
    answer:
      "Simply create an account, browse the available contests, and click 'Join Contest' on the one you like. Follow the instructions to submit your entry.",
  },
  {
    question: 'Is there a fee to participate?',
    answer:
      'Many contests are free to join, but some premium contests may require a small entry fee. The details are always clearly listed on the contest page.',
  },
  {
    question: 'How are winners selected?',
    answer:
      'Winners are selected based on the specific criteria of each contest. This can be through community voting, a panel of judges, or the contest organizer directly.',
  },
  // {
  //   question: 'Can I host my own contest?',
  //   answer:
  //     'Absolutely! Champy allows you to create and host your own contests. Just click on "Create Contest" to get started.',
  // },
  // {
  //   question: 'How do I get paid if I win?',
  //   answer:
  //     'Winnings are credited to your Champy wallet. You can withdraw your funds to your preferred payment method such as PayPal, Bank Transfer, or Mobile Money.',
  // },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className='py-20'>
      <Container>
        <div className='text-center mb-12'>
          <SectionTitle
            title='Frequently Asked Questions'
            desc='Got questions? We have got answers.'
          />
        </div>

        <div className='max-w-3xl mx-auto space-y-4'>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='collapse collapse-plus bg-base-200 border border-base-300 rounded-2xl'>
              <input
                type='radio'
                name='my-accordion-3'
                checked={activeIndex === index}
                onChange={() => toggleAccordion(index)}
              />
              <div className='collapse-title text-xl font-medium'>
                {faq.question}
              </div>
              <div className='collapse-content'>
                <p className='text-base-content/80'>{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
