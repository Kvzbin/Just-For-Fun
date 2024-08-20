const io = require('socket.io')(4000, {
    cors: {
      origin: '*',
    },
  });
  
  io.on('connection', (socket) => {
    console.log('New client connected');
  
    setInterval(() => {
      const now = new Date();
      const data = {
        time: now.toLocaleTimeString(),
        value: Math.floor(Math.random() * 100), // Random data for demonstration
      };
  
      socket.emit('data', data);
    }, 1000); // Emit data every second
  
    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
  