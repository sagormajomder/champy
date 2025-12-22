export default function HeroSection() {
  return (
    <section className=' py-10'>
      <div className='flex flex-col gap-10 md:gap-16 items-center'>
        <div className='text-center max-w-3xl flex flex-col gap-6'>
          <h1 className='text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]'>
            Empowering the{' '}
            <span className='text-primary'>World's Creators</span>
          </h1>
          <p className='text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal'>
            Where competition meets community. We are building the
            infrastructure for the next generation of creative challenges,
            connecting visionaries with opportunities.
          </p>
        </div>
        <div className='w-full relative aspect-video rounded-xl overflow-hidden shadow-2xl shadow-primary/20'>
          {/* Overlay Gradient */}
          <div className='absolute inset-0 bg-gradient-to-t from-[#101622]/80 to-transparent z-10'></div>
          <div
            className='w-full h-full bg-center bg-cover bg-no-repeat transform hover:scale-105 transition-transform duration-700'
            data-alt='A diverse group of creative professionals collaborating in a modern, brightly lit studio environment'
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCFQIzESKCsE-zVFUeNPtO74pZS7d-IqfSN7JIhMn3jwBH4OdqDHcLpv0WlYAI0MnBX6uRt7q0w851VrZq4Fmj1GUyG5W8U9QyRzgakYCtX6w3TFUz6vbGh0BAcjCbK1IZGt1R7P5jvgKAdrEnzcnmVpi5-5gNyeszUjdno9zzD0w6rPTn3kKYnqtTJHaQoUaM2klA31ZY90vYijFI5RDDef0hWw28XkNKOI98T_47LBoRDjclvUyCibsShUx3dNjB_fnzv3Lgr4Rk")',
            }}></div>
          <div className='absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 max-w-lg'>
            <p className='text-white font-bold text-xl md:text-2xl mb-2'>
              The journey began with a simple idea.
            </p>
            <button className='flex items-center gap-2 text-primary hover:text-white transition-colors font-bold'>
              <span>Read Our Story</span>
              <span className='material-symbols-outlined icon-sm'>
                arrow_downward
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
