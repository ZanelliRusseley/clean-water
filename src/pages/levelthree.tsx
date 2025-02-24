import AquaticBomb from "../../public/assets/aquatic-bomb.png";
import Game from '@/components/Game'

export default function LevelThree() {
 
  return (
    <Game
      key={1}
      level={3}
      leftHit={560}
      topHit={260}
      challenge='A cada três movimentos a sacola de lixo irá mover uma casa para baixo'
      obstacle={AquaticBomb}
      obstaclePoints1={{ x: 420, y: 0 }}
      obstaclePoints2={{ x: 420, y: 130 }}
      gates={[]}    />
  )
}
