import Link from 'next/link'
import { ArrowUUpLeft, Backpack, KeyReturn, SkipBack } from 'phosphor-react'
import { useEffect, useState } from 'react'

interface Levels{
  level2?: boolean
  level3?: boolean
}

export default function Levels() {
  const [levelStates, setLevelStates] = useState<Levels>({})
  
  useEffect(()=>{
    recoverLevelStates()
  },[])
  
  function recoverLevelStates() {
    try {
      const stateJSON = localStorage.getItem('levelStates');
      if (stateJSON === null) {
        return null; 
      }
      const levelStates = JSON.parse(stateJSON);
      console.log('Estado dos níveis recuperado com sucesso.');
      setLevelStates(levelStates)
      return levelStates;
    } catch (error) {
      console.error('Erro ao recuperar o estado dos níveis:', error);
      return null;
    }
  }
  console.log(levelStates)
  return (
    <div className="bg-[url('../../public/assets/bg.png')] h-screen w-screen bg-center bg-no-repeat bg-cover flex items-center justify-center font-nerkoone">
      <main>
        <div className="flex justify-between">
        <h1 className="text-4xl text-white font-pt font-bold text-stroke-2 text-stroke-gray">Selecione um nível</h1>
        <Link href="/">
            <ArrowUUpLeft size={50} weight="regular" color='white' />
          </Link>
        </div>
        <div className="flex justify-center items-center gap-20 w-[500px] h-[300px] border-4 bg-mid-blue border-gray rounded-2xl text-4xl">
        <Link href="/levelone" className="level-styles">
                <span className="nivel">1</span>
        </Link>
        <Link href="/leveltwo" className={levelStates.level2? 'level-styles' : 'pointer-events-none level-styles-block'}>
          <span className="nivel">2</span>
        </Link>
        <Link href="/levelthree" className={levelStates.level3? 'level-styles' : 'pointer-events-none level-styles-block'}>
          <span className="nivel">3</span>
        </Link>
        </div>
      </main>
    </div>
  )
}
