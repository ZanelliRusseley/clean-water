import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Submarine from "../../public/assets/submarine.png";
import Logo from "../../public/assets/logo.png";
import Link from "next/link";

export default function Home() {
  function saveLevelStates() {
    const initialState = {
      level2: false, // Nível 2 está bloqueado test
      level3: false, // Nível 2 está bloqueado
    };

    try {
      const stateJSON = JSON.stringify(initialState);
      localStorage.setItem("levelStates", stateJSON);
      console.log("Estado dos níveis salvo com sucesso.");
    } catch (error) {
      console.error("Erro ao salvar o estado dos níveis:", error);
    }
  }

  return (
    <div
      className={`bg-[url('../../public/assets/bg.png')] h-screen w-screen bg-center bg-no-repeat bg-cover flex items-center justify-center ${inter.className}`}
    >
      <main className="flex flex-col items-center gap-5 mt-32 ">
        <Image src={Submarine} height={64} width={64} alt={"Submarino"} />
        <Image src={Logo} width={250} height={250} alt={"Logo"} />
        <Link href="/levels">
          <button
            className="botao"
            onClick={saveLevelStates}
          >
            JOGAR
          </button>
        </Link>
        <Link href="/instructions">
          <button
            className="botao"
            onClick={saveLevelStates}
          >
            SOBRE
          </button>
        </Link>
      </main>
    </div>
  );
}
