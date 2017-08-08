// Variable global usada para almacenar la propia referencia al juego y sus métodos
var game = new Phaser.Game(1024, 768, Phaser.AUTO, '');

// Agregamos cada estado de juego para modular la aplicación
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('options', optionsState);
game.state.add('score', scoreState);
game.state.add('level1', level1State);
game.state.add('levelUp', levelUp);
game.state.add('level2', level2State);
game.state.add('win', winState);
game.state.add('lose', loseState);

// Comenzamos inicialmente llamando al estado boot
game.state.start('boot');
