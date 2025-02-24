import AquaticBomb from "../../public/assets/aquatic-bomb.png";
import Game from "@/components/Game";

export default function LevelOne() {

  return (
    <Game
      key={1}
      level={1}
      leftHit={560}
      topHit={130}
      obstacle={AquaticBomb}
      obstaclePoints1={{ x: 280, y: 130 }} 
      gates={[]} 
      challenge={undefined}    />
  );
}
