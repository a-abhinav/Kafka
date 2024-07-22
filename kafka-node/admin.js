const { kafka } = require('./client');

async function init(){
  const admin = kafka.admin();
  console.log('Admin connecting....');
  admin.connect();
  console.log('connection success');

  console.log('Topic creating....');
  await admin.createTopics({
    topics: [
      {
        topic: "ridder",
        numPartitions: 2,
      },
    ],
  });
  console.log('Topic created......');
  await admin.disconnect();
}

init();
