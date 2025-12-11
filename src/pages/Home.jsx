import { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

import Hero from "../components/Hero";
import About from "../components/About";
import Facilities from "../components/Facilities";
import News from "../components/News";
import Contact from "../components/Contact";
import Toast from "../components/Toast";

export default function Home() {
  useScrollAnimation();
  const [toastVisible, setToastVisible] = useState(false);

  function triggerToast() {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  }

  return (
    <>
      <Hero />
      <About />
      <Facilities />
      <News />
      <Contact onSubmit={triggerToast} />
      <Toast show={toastVisible} />
    </>
  );
}
