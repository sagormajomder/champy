export default function ContestCategories({
  contests,
  selectedCategory,
  setSelectedCategory,
}) {
  const contestCategories = [
    ...new Set(contests.map(contest => contest.contestType)),
  ];

  return (
    <section className='flex justify-center items-center gap-2'>
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
        return (
          <div
            key={i}
            className={`badge cursor-pointer rounded-full ${
              selectedCategory === cate
                ? 'badge-primary'
                : 'badge-outline badge-primary'
            }`}
            onClick={() => setSelectedCategory(cate)}>
            {cate.split('_').join(' ').toUpperCase()}
          </div>
        );
      })}
    </section>
  );
}
