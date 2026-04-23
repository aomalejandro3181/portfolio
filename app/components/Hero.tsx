import Image from "next/image";
export default function Hero() {
  return (
    <section id="hero" className="min-h-screen">
        <div className="w-10/12 mx-auto px-6 py-20">
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-8">
                <div className='order-2 md:order-2 lg:order-1'>
                    <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 lg:text-left md:text-center xs:text-center">
                    Crafting 
                        <span className="block text-accent-blue font-extrabold">
                        Digital Experiences
                        </span>
                    </h1>
                    <div className='flex'>
                        <p className="text-lg font-medium ml-2 text-foreground/70 leading-relaxed">
                        I&apos;m  developer passionate about creating innovative and user-centric web applications. With a focus on clean code and efficient solutions, I bring
                        ideas to life.
                        </p>
                    </div>
                </div>
                <div className="order-1 md:order-1 lg:order-2 sm:mx-auto sm:rotate-0 lg:w-full lg:mx-auto lg:rotate-0 lg:-m-0 relative border-3 border-main p-1 shadow-neo-xl lg:rotate-3">
                    <div className="w-auto">
                        <Image width={800} height={800} src="/images/me.png" alt="me" loading="eager" className="aspect-square object-cover" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}