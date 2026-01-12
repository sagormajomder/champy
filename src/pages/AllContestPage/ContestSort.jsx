export default function ContestSort({ sortOrder, setSortOrder }) {
  return (
    <select
      className='select select-bordered max-w-sm'
      value={sortOrder}
      onChange={e => setSortOrder(e.target.value)}>
      <option value='popular'>Most Popular</option>
      <option value='upcoming'>Upcoming Deadlines</option>
      <option value='price-asc'>Price: Low to High</option>
      <option value='price-desc'>Price: High to Low</option>
    </select>
  );
}
