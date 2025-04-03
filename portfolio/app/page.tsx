import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header
        className="relative bg-cover bg-center h-[50vh]"
        style={{ backgroundImage: 'url("/mountain1.png")' }}
      >
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-white to-transparent pointer-events-none" />
        <h1 className="absolute left-10 top-32 text-4xl tracking-wider">
          Robbie Ho
        </h1>
        <h2 className="absolute left-20 top-40 text-2xl opacity-20">何耀康</h2>
        <h2 className="absolute right-5 top-60 text-2xl tracking-wider">
          Front End Engineer
        </h2>
        <h2 className="absolute right-5 top-66 text-xl opacity-20">
          前端工程師
        </h2>
      </header>
      <section className="flex flex-col justify-center items-center">
        <h2 className="text-3xl">About Me</h2>
        <h2 className="text-1xl opacity-20 -mt-2 pl-10">关于我</h2>
        <p className="p-5">
          As a passionate developer, I thrive on the challenge of bringing ideas
          and designs to life through code. My goal is to create websites that
          not only look great, but also provide an intuitive and seamless user
          experience. With a BSc in Computing and IT from Open University, I
          have a solid foundation in web development principles and best
          practices. When I'm not coding, you can usually find me exploring the
          great outdoors with my dog Ahri. Hiking and other outdoor activities
          help me recharge my batteries and stay inspired. I believe that a
          balanced lifestyle is essential for staying motivated and producing
          high-quality work
        </p>
      </section>
    </main>
  );
}
