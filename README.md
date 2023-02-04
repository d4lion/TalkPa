# TalkPa
It is a tool that Socket.io implements to create a chat in real time, what is sought with this micro project is to understand the operation of this package in
conjunction with React to create applications with data updates in real time

![broadcasting2-dark](https://user-images.githubusercontent.com/111100025/216786694-ba2feb6e-43d1-4258-88a7-ffbf9ddd3a78.png)

## Installation 
### Server
On the part of the server, use is made of the [Express](https://expressjs.com/es/) environment through which the main server is deployed 
and for the use of the tcp protocol, [Socket.io](https://socket.io/) is used.

```terminal
cd server
npm install
```

### Client
For the client, the same technology provided by [Socket.io](https://socket.io/) is used, in addition to using [React](reactjs.org) and some of its main hooks mainly.


```terminal
cd client
npm install
```




## Run
The deployment mode is done in development mode, the local network is used using the ipv4 network, the default server will take the address 
from it and it will be displayed in the console like this:

![Captura de pantalla 2023-02-04 145959](https://user-images.githubusercontent.com/111100025/216787344-4536588e-0866-4c89-972b-b1f5e6a4c5ac.png)

To change these types of specifications you can go to the config.js file

#### Server
```terminal
cd server
npm run dev
```

#### Client
On the client's side, they must go to the config.js file and change the ip to which the requests made to socket.io will be directed 
(It was not possible to automate this measure)
```terminal
cd client
npm run dev
```

# Pc display
![WhatsApp Image 2023-02-04 at 3 10 39 PM](https://user-images.githubusercontent.com/111100025/216787809-45584de2-7437-4571-bbc4-2b90ad8cedb0.jpeg)



# Mobile display

![WhatsApp Image 2023-02-04 at 3 10 23 PM](https://user-images.githubusercontent.com/111100025/216787791-24ad72af-4151-451c-90da-285d78c46cc0.jpeg)


