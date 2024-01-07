const { default: mongoose } = require('mongoose');

interface Connection {
  isConnected: boolean;
}

const connection: Connection = {
  isConnected: false,
};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log('Connection is already established');
      return;
    }
    const db = await mongoose.connect(process.env.MONGOURL);
    connection.isConnected = db.connections[0].readyState;
    if (process.env.MONGOURL) {
      await mongoose.connect(process.env.MONGOURL);
    } else {
      throw new Error('MONGOURL env variable not defined');
    }
  } catch (error) {
    console.log(error);
  }
};
