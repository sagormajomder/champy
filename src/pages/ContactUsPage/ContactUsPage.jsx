import Container from '../../components/Container';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function ContactUsPage() {
  return (
    <section className='py-20'>
      <Container>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start'>
          <ContactInfo />
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
