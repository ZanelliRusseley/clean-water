import AquaticBomb from "../../public/assets/aquatic-bomb.png";
import Game from '@/components/Game'

export default function LevelTwo() {

  return (
    <Game
      key={1}
      level={2}
      leftHit={560}
      topHit={130}
      challenge='A cada dois movimentos a sacola de lixo irá mover uma casa para direita'
      obstacle={AquaticBomb}
      obstaclePoints1={{x: 140, y: 130}}
      obstaclePoints2={{x: 0, y: 130}}
      
    />
  )
}
