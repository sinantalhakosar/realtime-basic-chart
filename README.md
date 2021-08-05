# Basic Chart Data Representation (Junior Level)
Implemented realtime and historical data representation using charts
### Tech
- Socket.io while transferring the data
- Backend: NodeJs server using ExpressJs
- Frontend: Client-side using ReactJs and ChartJs
## Flow
- Read data from data.json file in server
- Open socket and send data one by one using socket at each 250ms
- Read data from socket in client-side and represent in realtime line-chart
- Implement an endpoint in server which returns all data from data.json
- Represent all data in historical line-chart
