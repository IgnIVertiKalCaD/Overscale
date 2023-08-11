import { io } from 'socket.io-client';
import store from '@/store';
export const monitoringSocket = io('https://api.phantomcms.org/servers/monitorings', {
  autoConnect: false,
  extraHeaders: {
    metadata: JSON.stringify({
      clientType: 'AcceptingMonitoring',
      socketId: 'Frontend'
    })
  },
});

monitoringSocket.on('disconnect', () => {
  setTimeout(() => {
    monitoringSocket.connect();
  }, 5000)
})

monitoringSocket.on('exception', (data) => {
  console.log(data)
})

monitoringSocket.on('ReceivingMonitoringInfo', (data) => {
  // console.log(data)
  store.commit('monitoringSocket/SET_SERVERS', data)
})

monitoringSocket.on('OutgoingMonitoringDisabled', (data) => {
  console.log(data)
})

