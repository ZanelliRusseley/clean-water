"use client";

import Submarine from "../../public/assets/submarine.png";
import Logo from "../../public/assets/logo.png";import Image from 'next/image'
import AquaticBomb from "../../public/assets/aquatic-bomb.png"
import PlasticBag from "../../public/assets/plastic-bag.png"
import Link from 'next/link'
import { ArrowRight, ArrowUp, ArrowDown, Play, Trash } from "phosphor-react";


export default function Instructions() {
  return (
    <main
      className= "bg-[url('../../public/assets/bg.png')] h-screen w-screen bg-center bg-no-repeat bg-cover flex items-center justify-center"
    >
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center font-extrabold text-2xl">
          <span className="instrucao">Botões</span>
          <span className="instrucao">Instruções</span>
          <Image alt="submarino" src={Submarine} width={64} />
        </div>
        <ul className="flex flex-col gap-4 text-xl font-semibold">
          <li className="flex items-center gap-8">
            <ArrowUp style={{
                backgroundColor: "#D9D9D9",
                color: "black",
                padding: "4px",
                width: "48px",
                height: "48px",
                border: "3px solid #336C82",
                borderRadius: "12px"
                }}  
                weight="bold" />
            <p className="texto">
                Ao executar o comando, o submarino sobe uma casa no cenário
            </p>
          </li>
          <li className="flex items-center gap-8">
            <ArrowRight style={{
                backgroundColor: "#D9D9D9",
                color: "black",
                padding: "4px",
                width: "48px",
                height: "48px",
                border: "3px solid #336C82",
                borderRadius: "12px"
                }}   
                weight="bold" />
            <p className="texto">
                Ao executar o comando, o submarino avança uma casa no cenário
            </p>
          </li>
          <li className="flex items-center gap-8">
            <ArrowDown style={{
                backgroundColor: "#D9D9D9",
                color: "black",
                padding: "4px",
                width: "48px",
                height: "48px",
                border: "3px solid #336C82",
                borderRadius: "12px"
                }}  
                weight="bold"
            />
            <p className="texto">
                Remove o último comando da lista de comandos
            </p>
          </li>
          <li className="flex items-center gap-8">
            <Trash style={{
                 backgroundColor: "#D9D9D9",
                 color: "#EF4444",
                 padding: "4px",
                 width: "48px",
                 height: "48px",
                 border: "3px solid #336C82",
                 borderRadius: "12px"
                }}  
                weight="bold" />
            <p className="texto">
                Remove o último comando da lista de comandos
            </p>
          </li>
          <li className="flex items-center gap-8">
            <Play style={{
                 backgroundColor: "#D9D9D9",
                 color: "#02C602",
                 padding: "4px",
                 width: "48px",
                 height: "48px",
                 border: "3px solid #336C82",
                 borderRadius: "12px"
                }}   weight="bold" />
            <p className="texto">
                Executa a lista de comandos
            </p>
          </li>
        </ul>
       
            <span className="instrucao">Objetivos</span>
            <p className="text-2xl text-white text-stroke-1 text-stroke-darkGray font-pt font-bold flex items-center gap-4">
                O submarino deve coletar as sacolas plásticas no oceano:  
                <Image alt="" src={PlasticBag} width={50} />
            </p>
            <p className="text-2xl text-white text-stroke-1 text-stroke-darkGray font-pt font-bold flex items-center gap-4">
                O submarino não pode tocar nas bombas:  
                <Image alt="" src={AquaticBomb} width={50} />
            </p>
            <div className="absolute right-10 bottom-16">
                <div className="botao">
                    <Link href="/levels">
                    CONTINUAR
                    </Link>
                </div>
            </div>
        </div>

    </main>
  )
}
