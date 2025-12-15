export default function SectionTitle({ title = '', desc = '' }) {
  return (
    <section className='text-center'>
      <h1 className='mb-2'>{title}</h1>
      {desc && <p>{desc}</p>}
    </section>
  );
}
