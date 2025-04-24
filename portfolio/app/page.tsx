import MainButton from "./components/mainButton";
import WindowsModal from "./components/windowsModal";
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
      <WindowsModal />
      <section className="grid grid-cols-3 gap-3 justify-items-center items-center">
        <MainButton btnTitle="About" btnImg="about" />
        <MainButton btnTitle="Work" btnImg="work" />
        <MainButton btnTitle="FAQ" btnImg="faq" />
        <MainButton btnTitle="Ahri" btnImg="shiba" />
        <MainButton btnTitle="Links" btnImg="links" />
        <MainButton btnTitle="Contact" btnImg="email" />
      </section>
    </main>
  );
}
