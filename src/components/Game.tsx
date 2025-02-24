"use client";

import Submarine from "../../public/assets/submarine.png";
import PlasticBag from '../../public/assets/plastic-bag.png';

import { ArrowRight, ArrowUp, House, Info, Play, Trash, ArrowDown } from 'phosphor-react';
import { useState } from 'react';
import Modal from '@/components/Modal';
import Link from 'next/link';
import Image from "next/image";

interface Points {
  x: number;
  y: number;
}

interface Props {
  gates: any[];
  topHit: number;
  leftHit: number;
  challenge: any;
  level: number;
  obstacle?: any;
  startPoints?: Points;
  obstaclePoints1?: Points;
  obstaclePoints2?: Points;
}

export default function Game({
  topHit,
  leftHit,
  challenge,
  level,
  obstacle,
  obstaclePoints1,
  obstaclePoints2,
  startPoints
}: Props) {
  const [top, setTop] = useState<number>(startPoints?.y || 0);
  const [left, setLeft] = useState<number>(startPoints?.x || 20);
  const [commands, setCommands] = useState<string[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [passedLevel, setPassedLevel] = useState<boolean>(false);
  const [plasticBagPosition, setPlasticBagPosition] = useState<Points>({
    x: level === 1 || level === 3 ? 560 : 280,
    y: level === 1 || level === 2 ? 130 : 0
  });
  
  const alterarNivelLocalStorage = (numeroDoNivel: string) => {
    try {
      const levelStatesString: any = localStorage.getItem('levelStates');
      const levelStates = JSON.parse(levelStatesString) || {};
      if (levelStates.hasOwnProperty(numeroDoNivel)) {
        levelStates[numeroDoNivel] = !levelStates[numeroDoNivel];
        localStorage.setItem('levelStates', JSON.stringify(levelStates));
      } else {
        console.log(`O nível ${numeroDoNivel} não foi encontrado.`);
      }
    } catch (error) {
      console.error('Erro ao alterar o nível no localStorage:', error);
    }
  };

  const delay = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms));
  const executeCommands = async () => {
    let [topTemp, leftTemp] = [0, 0];
    let moveCount = 0;

    for (const command of commands) {
      let nextTop = topTemp;
      let nextLeft = leftTemp;

      if (command === 'right') {
        nextLeft += 140;
      } else if (command === 'top') {
        nextTop -= 130;
      } else if (command === 'down') {
        nextTop += 130;
      }

      if (
        (obstaclePoints1 &&
          Math.abs(nextLeft - obstaclePoints1.x) <= 20 &&
          Math.abs(nextTop - obstaclePoints1.y) <= 20) ||
        (obstaclePoints2 &&
          Math.abs(nextLeft - obstaclePoints2.x) <= 20 &&
          Math.abs(nextTop - obstaclePoints2.y) <= 20)
      ) {
        setTop(nextTop);
        setLeft(nextLeft);
        await delay(1000); 
        setPassedLevel(false);
        setModalOpen(true);
        break;
      }

      topTemp = nextTop;
      leftTemp = nextLeft;
      setTop(topTemp);
      setLeft(leftTemp);

      moveCount++;

      if (level === 2 && moveCount % 2 === 0) {
        setPlasticBagPosition(prev => ({ ...prev, x: prev.x + 140 }));
      } else if (level === 3 && moveCount % 3 === 0) {
        setPlasticBagPosition(prev => ({ ...prev, y: prev.y + 130 }));
      }

      await delay(500);
    }

    if (topHit === topTemp && leftHit === leftTemp) {
      alterarNivelLocalStorage(level === 1 ? 'level2' : level === 2 ? 'level3' : '');
      setPassedLevel(true);
      setModalOpen(true);
    } else if (!modalOpen) {
      setPassedLevel(false);
      setModalOpen(true);
    }
  };

  const fullList = () => commands.length === 10;

  const divs = [];
  for (let i = 1; i < 16; i++) {
    if (i > 1 && i % 6 === 0) {
      divs.push(<div className="bg-blank border-2 border-dark-blue flex justify-center items-center"></div>);
    } else {
      divs.push(<div className="bg-blank border-2 border-dark-blue"></div>);
    }
  }

  return (
    <div className="bg-[url('../../public/assets/bg.png')] h-screen w-screen bg-center bg-no-repeat bg-cover flex items-center justify-center">
      <Modal open={modalOpen} passedLevel={passedLevel} />
      <main>
        <div className='flex justify-between items-center w-[700px]'>
          <h1 className="text-2xl text-white text-stroke-1 text-stroke-darkGray font-bold">Lv. {level}: {'  '} {challenge}</h1>
          <div className='flex gap-4'>
            <Link href='/instructions'>

              <Info size={30} weight='bold' color='white' />
            </Link>
            <Link href="/">
              <House size={30} weight="bold" color='white' />
            </Link>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-[700px] h-[400px] grid grid-cols-5 gap-0 border-dark-blue border-2 rounded-xl overflow-hidden relative">
            {divs}

            <div style={{ position: 'absolute', top: top, left: left, zIndex: 40 }}>
              <Image src={Submarine} width={100} alt="Submarino" />
            </div>

            <Image
              src={PlasticBag}
              alt=""
              width={140}
              height={95}
              style={{
                position: 'absolute',
                top: plasticBagPosition.y,
                left: plasticBagPosition.x,
              }}
            />

            <Image
              src={obstacle}
              alt=''
              width={140}
              style={{
                top: obstaclePoints1?.y,
                left: obstaclePoints1?.x,
                position: 'absolute'
              }}
            />

            {level === 2 && (
              <Image
                src={obstacle}
                alt=''
                width={140}
                style={{
                  top: obstaclePoints2?.y,
                  left: obstaclePoints2?.x,
                  position: 'absolute'
                }}
              />
            )}

            {level === 3 && (
              <Image
                src={obstacle}
                alt=''
                width={140}
                style={{
                  top: obstaclePoints2?.y,
                  left: obstaclePoints2?.x,
                  position: 'absolute'
                }}
              />
            )}
          </div>

          <div className="flex flex-col gap-3">
            <ArrowUp
              weight="bold"
              className="button-controls"
              onClick={() => {
                if (fullList()) {
                  alert('O limite de comandos é 10');
                  return;
                }
                setCommands([...commands, 'top']);
              }}
            />
            <ArrowRight
              weight="bold"
              className="button-controls"
              onClick={() => {
                if (fullList()) {
                  alert('O limite de comandos é 10');
                  return;
                }
                setCommands([...commands, 'right']);
              }}
            />
            <ArrowDown
              weight="bold"
              className="button-controls"
              onClick={() => {
                if (fullList()) {
                  alert('O limite de comandos é 10');
                  return;
                }
                setCommands([...commands, 'down']);
              }}
            />
            <Trash
              weight="bold"
              className="button-controls text-red-500"
              onClick={() => {
                const array = commands;
                array.pop();
                setCommands([...array]);
              }}
            />
          </div>
        </div>

        <div className="flex flex-row items-center gap-4 h-14 mt-2">
          <div className="bg-white h-full w-full pl-8 rounded-md border-4 border-[#004d59] flex flex-row gap-2 items-center">
            {commands?.map(command =>
              command === 'right' ? (
                <ArrowRight key={command} weight="bold" className="button-controls" />
              ) : command === 'down' ? (
                <ArrowDown key={command} weight="bold" className="button-controls" />
              ) : (
                <ArrowUp key={command} weight="bold" className="button-controls" />
              )
            )}
          </div>
          <Play
            weight="bold"
            className="button-controls text-green"
            onClick={() => {
              executeCommands();
            }}
          />
        </div>
      </main>
    </div>
  )}