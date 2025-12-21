export default function WinnerInfo({ winnerParticipator }) {
  const { participatorPhotoURL, participatorName } = winnerParticipator;

  console.log(winnerParticipator);
  return (
    <div className='bg-base-100 rounded-xl p-6 shadow-lg border border-base-300 flex flex-col items-center gap-8'>
      <h2>🎉 Contest Winner 🎉</h2>
      <div className='space-y-2'>
        <img
          className='rounded-full w-50 h-50 object-cover'
          src={participatorPhotoURL}
          alt={participatorName}
        />
        <h5 className='text-center'>
          <strong>{participatorName}</strong>
        </h5>
      </div>
    </div>
  );
}
