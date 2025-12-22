export default function TeamSection() {
  return (
    <section className='w-full max-w-7xl px-4 md:px-10 py-16 border-t border-gray-200 dark:border-gray-800'>
      <div className='flex flex-col items-center'>
        <h2 className='text-3xl font-bold text-center mb-12'>
          Meet the Visionaries
        </h2>
        <div className='flex flex-wrap justify-center gap-10'>
          <div className='flex flex-col items-center gap-3 group'>
            <div className='size-24 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-colors'>
              <div
                className='w-full h-full bg-cover bg-center'
                data-alt='Headshot of the CEO'
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWcIYR8BSyYgxHwu1Ce7nsZqnPR2FH3G5dDwnvD5ddMfT1wsmnzO4Zz1aJl1IYJBoJsIhxNp-boj8cm0tDT0DpUjWaimezhriXFc-wS73shG8KNEq0MI9zR1DURsZ847iRhNDGZDRQbzeCTHc9RdVZxyj8RI7S8axQ4tSDAlRnuu2i8LuuwPYpXSD4w9W8zoLsa5iQfFesdfqId-ayNXgZ2r3IK5a2H5cUwImZRgp_IoGUxYLuj2V2SMmKd99BlEE-ouLy8pMDOrA")',
                }}></div>
            </div>
            <div className='text-center'>
              <p className='font-bold'>James Carter</p>
              <p className='text-sm text-primary'>Co-Founder & CEO</p>
            </div>
          </div>
          <div className='flex flex-col items-center gap-3 group'>
            <div className='size-24 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-colors'>
              <div
                className='w-full h-full bg-cover bg-center'
                data-alt='Headshot of the Head of Product'
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB60b3c-FE2UPkmmYLQMLJ3WoZ1QY88gvO2KgXTSDS-B9hCAto-QuLa8VQjl2DMmFhzz9izS1c1DopBHmKa16fyoV_ImEAMxk8Seu6Az3k-WUWYBGXmSy-7FVld34VOKPm_XG7VtbGx6jNUYN56AyczOc6Cljy19M3VFv3MakQ3pLprX2DzwTTjt30lSRBMMsLIe6XjGSP3XqXkldojgdcMhQeW68HZHuh4ap51NQTAr8NAAMv0ER9uvPTVshFk-VEcZM0gkH8Y7I8")',
                }}></div>
            </div>
            <div className='text-center'>
              <p className='font-bold'>Alicia Vance</p>
              <p className='text-sm text-primary'>Head of Product</p>
            </div>
          </div>
          <div className='flex flex-col items-center gap-3 group'>
            <div className='size-24 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-colors'>
              <div
                className='w-full h-full bg-cover bg-center'
                data-alt='Headshot of the Lead Engineer'
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC8V9HEAzLBhKoUsg9yfEJwMtBAEP0aUeLRSLbzG7bBusVrk0R-1-rvmjkqF760yRdoKJBbTgbvZg7N_8_omyuaPis7VwFSU2-18Hxw11Zix5xGZloS2bjwmZxtrE8DfHur2rwaBgVGDgcb_USVkCsMl-IfMODHlp8G7S7HgF3pdJirVHw35TCcnShLg2pRHABfiMvpx2NgivGZRQ1xwMYfpKzYTqB7mEPRnXVRs1vfBvV44kbhf48OSVuoZgCmjszOzptsiOKvrOI")',
                }}></div>
            </div>
            <div className='text-center'>
              <p className='font-bold'>Marcus Reid</p>
              <p className='text-sm text-primary'>Lead Engineer</p>
            </div>
          </div>
          <div className='flex flex-col items-center gap-3 group'>
            <div className='size-24 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-colors'>
              <div
                className='w-full h-full bg-cover bg-center'
                data-alt='Headshot of the Community Manager'
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJeSSL3ElfH67oUoiLKG-zgBT6JYFr7ffp_IcI5tDX7WwGWax5QblRdWHLcFFeeNw2f9M8wGQbP-Lg4dwY9ISPGgm4cthk2NFWZnJWpN2vcvuB0LAJLs9E-gM44qDk1LtdFDxGePAKVw10s9ICYUzdqcClKR-mmcU8GypPeMhFhkvShVn56yHvVVuIj6PvcJmPLTblir_YFnOx_WIkS65zvk2yXS9cbZZQWpTOQTnsie9WSbOQ-o7pG4r1YyNOhIpwnBv6266yUo0")',
                }}></div>
            </div>
            <div className='text-center'>
              <p className='font-bold'>Sofia Davis</p>
              <p className='text-sm text-primary'>Community Lead</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
