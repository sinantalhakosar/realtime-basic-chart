# Basic Chart Data Representation (Junior Level)
In this project you will be ask to implement realtime and historical data representation using charts
## Things to do
We have provided you example EMG data inside data.json. Basically what you need to do is implementing implementing backend and frontend. You need to implement SPA, which will consist 2 buttons for showing historical or realtime line-chart and a button while representing historical chart which will request all data from server and load to the historical line-chart.
### Preferred tech
- Please use Socket.io while transferring the data
- Backend: Implement NodeJs server using ExpressJs
- Frontend: Implement client-side using ReactJs (usage of hooks are bonus)
- Frontend: Implement charts using ChartJs
## Flow
- Read data from data.json file in server
- Open socket and send data one by one using socket at each 250ms
- Read data from socket in client-side and represent in realtime line-chart
- Implement an endpoint in server which returns all data from data.json
- Represent all data in historical line-chart
## Submission
Create a feature branch and work on this. After completing, open merge request.
## Bonus Part
- Proving a document (ReadMe & comments in code)
- Good looking responsive design for mobile etc.
- Some cool usages in charts
- Good Git history
- Usage of preferred techs
