import React from "react";

import NavbarPage from "../components/navbar";
import Main from "../components/main";
import FooterSection from "../components/footer";

export default function Home() {
  return (
    <main>
      <NavbarPage />
      <Main />
      <FooterSection />
    </main>
  );
}
