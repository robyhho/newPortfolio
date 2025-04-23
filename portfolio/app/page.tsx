import MainButton from "./components/mainButton";

export default function Home() {
  return (
    <main
      style={{
        backgroundImage: "url('/backgroundImg1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <h1>Hello, I'm Robbie</h1>
      <h2>Front End Engineer</h2>
      <section className="grid grid-cols-3 gap-3 justify-items-center items-center">
        <MainButton />
        <div className="size-[100px] bg-gray-500"></div>
        <div className="size-[100px] bg-gray-500"></div>
        <div className="size-[100px] bg-gray-500"></div>
        <div className="size-[100px] bg-gray-500"></div>
        <div className="size-[100px] bg-gray-500"></div>
        <div className="size-[100px] bg-gray-500"></div>
      </section>
    </main>
  );
}
