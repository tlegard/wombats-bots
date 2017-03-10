((state, timeLeftFn) => {
  const wildCard = (actions) => actions[Math.floor(Math.random() * actions.length)];

  const directions = ['right', 'left', 'about-face', 'smoke'];

  const shoot =  { action: 'shoot', metadata: {} };

  const turn = (direction) => {
      return {
            action: 'turn',
            metadata: {
                    direction: direction
              }
      };
  };

  const savedState = state['saved-state'];

  const command = savedState.lastCommand === 'shoot' ? turn(wildCard(directions)) : shoot;

 return {
     command: command,
     state: {
             lastCommand: command.action
     }
 }
});
