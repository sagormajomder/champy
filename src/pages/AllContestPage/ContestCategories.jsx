import { contestCategories } from '../../utils/utils';

export default function ContestCategories({
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <section className='flex flex-wrap justify-center items-center gap-2'>
      <div
        className={`badge cursor-pointer rounded-full ${
          selectedCategory === 'all'
            ? 'badge-primary'
            : 'badge-outline badge-primary'
        }`}
        onClick={() => setSelectedCategory('all')}>
        {'All'.toUpperCase()}
      </div>
      {contestCategories.map((cate, i) => {
        const value = cate.split(' ').join('_').toLowerCase();
        return (
          <div
            key={i}
            className={`badge cursor-pointer rounded-full ${
              selectedCategory === value
                ? 'badge-primary'
                : 'badge-outline badge-primary'
            }`}
            onClick={() => setSelectedCategory(value)}>
            {cate.toUpperCase()}
          </div>
        );
      })}
    </section>
  );
}
