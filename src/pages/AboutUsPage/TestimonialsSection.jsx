export default function TestimonialsSection() {
  return (
    <section className='w-full max-w-7xl px-4 md:px-10 py-20'>
      <h2 className='text-3xl font-bold text-center mb-16'>
        Voices of the Community
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* Card 1 */}
        <div className='p-8 rounded-xl bg-gray-50 dark:bg-gray-800/50 flex flex-col justify-between h-full border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-colors'>
          <div>
            <span className='material-symbols-outlined text-4xl text-primary/40 mb-4'>
              format_quote
            </span>
            <p className='text-lg font-medium leading-relaxed mb-6'>
              "I launched my design career through a contest here. The exposure
              I got from winning the 'Eco-Future' challenge landed me my first
              full-time job."
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <div
              className='size-12 rounded-full bg-cover bg-center'
              data-alt='Portrait of Sarah Jenkins, a smiling young graphic designer'
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBlDQ06LnYkPo1aTjRHo8DUFno7xiAkm3UwCW5rZ62B46GaqO8rZsJ962QzkbYbtgnqaHDG9ovYzx9EjkRvru4MlKlxbbxVIG866j5aOXKD1DViCZuHsGZu3OUSVNVwPbpObtPGeyi1ZQnChnOgPuIlz36kXYTiigHKQ2--eIAAJRp7_qUT5xU7JWY10frTf8S27_U0Ztp1Hwu19hoD_3YVStG5NurvljWUDB_jGEWlRtspe1gn62bu6xNnUzjCaZjIWmzbMAm5aY8")',
              }}></div>
            <div>
              <p className='font-bold text-sm'>Sarah Jenkins</p>
              <p className='text-slate-500 text-xs'>Graphic Designer</p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className='p-8 rounded-xl bg-gray-50 dark:bg-gray-800/50 flex flex-col justify-between h-full border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-colors'>
          <div>
            <span className='material-symbols-outlined text-4xl text-primary/40 mb-4'>
              format_quote
            </span>
            <p className='text-lg font-medium leading-relaxed mb-6'>
              "Hosting a coding hackathon on this platform was seamless. The
              built-in judging tools saved us weeks of manual review time."
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <div
              className='size-12 rounded-full bg-cover bg-center'
              data-alt='Portrait of David Chen, a tech entrepreneur in a casual office setting'
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBOIEnXwUS3f54Hd31Zwgtnok5cfH1UQeirSZR4JZ3tGyldc4spDl_hssK2TQhjxPEQ3rKaisqm60DLVmOubF4tHnamLoIN5Gk10HQzGcyCoj2zjg-d2S24oswQSaYqG7mkjC3V3wGQ5yVXtvX9bgpwwZS2qSPqizqdl7Jg_9cEFrTIzY_WmuqRf6toYDGNdGyuaZcpEaM_lSvKZymzgWhj4QD7LcyAW-p54mreJZxvQuK_d-_C6VLw35mueo_LJQ8k6AAMn48K1EE")',
              }}></div>
            <div>
              <p className='font-bold text-sm'>David Chen</p>
              <p className='text-slate-500 text-xs'>CTO at TechStart</p>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className='p-8 rounded-xl bg-gray-50 dark:bg-gray-800/50 flex flex-col justify-between h-full border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-colors md:hidden lg:flex'>
          <div>
            <span className='material-symbols-outlined text-4xl text-primary/40 mb-4'>
              format_quote
            </span>
            <p className='text-lg font-medium leading-relaxed mb-6'>
              "The community here is unlike any other. It's not just about
              winning; it's about feedback, growth, and pushing each other to be
              better."
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <div
              className='size-12 rounded-full bg-cover bg-center'
              data-alt='Portrait of Elena Rodriguez, an artist with paintbrushes in the background'
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBT2JkbeyZ06l9tbr5iNf7khGb2jx2UNgs3SpQyZB1KARQwnLYUyhDEDYG-06Wf_G6Vk7kQQ_R1xrPS6136RVyDDkyuVNnhHyK8vMeRuR_QhNK1MPVo-qnBkwqjv748J44J5nyn64tYJlLKFuSl9E6Xhu-XAaYkfvHWjBVU8F3Ny1T5M7j9K3Ep7gqv7UwHsNTlFpfXEKD0reLrYBogO2zo2AkNi4qw2tznOSlpoXQlQP74VTKq9y0Ew9vN7uL2s8-s-qB1jXn3D3U")',
              }}></div>
            <div>
              <p className='font-bold text-sm'>Elena Rodriguez</p>
              <p className='text-slate-500 text-xs'>Digital Artist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
