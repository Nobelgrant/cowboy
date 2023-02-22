import Phaser from "phaser";
import Boot from "./scenes/Boot.js";
import Preloader /*, { authEvents, AUTH }*/ from "./scenes/Preloader.js";
import MainMenu /*, { STARTGAME }*/ from "./scenes/MainMenu.js";
import MainGame from "./scenes/Game.js";
import { useState } from "react";

let game = null;

function App() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    setLoaded(true);
    const config = {
      type: Phaser.AUTO,
      gameTitle: "P2E Bank Panic | Phaser x Moralis",
      parent: "game-container",
      autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
      autoFocus: true,
      fps: {
        target: 60,
      },
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 200 },
          debug: false,
        },
      },
      backgroundColor: "#282c34",
      scale: {
        mode: Phaser.Scale.ScaleModes.NONE,
      },
      scene: [Boot, Preloader, MainMenu, MainGame],
    };
    // init 2d game (Phaser canvas element)
    if (game === null) {
      // init instance of phaser game as per config
      game = new Phaser.Game(config);
    }
  }
  return <> </>;
}

export default App;
