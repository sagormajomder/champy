export default function NormalDetails({ title = '', desc = '' }) {
  return (
    <div className=''>
      <h3 className='text-2xl font-bold mb-2'>{title}</h3>
      <p className='text-base-content/80 leading-relaxed text-base'>{desc}</p>
    </div>
  );
}
