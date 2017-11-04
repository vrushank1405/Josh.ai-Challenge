# Josh.ai Challenge 

# Quickstart

### Install
 Following command will install all the required dependecies
 	
   	 $ npm install 
	 
### Back-end
 I use the simulator for update the data. You have to change your api regarding your username and bridgeIP.
 for install hue-simulator in your machine. Follow this link (https://www.npmjs.com/package/hue-simulator) or
 
 	$ sudo npm install -g hue-simulator
	
 installed globally by default, so you can start the simulator via command line, but to be sure we are adding the -g flag.
 	
	$ sudo hue-simulator
 	
        
### Run
	$  node index.js
  
### Output
[  
   {  
      "name":"Red Lamp",
      "id":"1",
      "on":true,
      "brightness":45
   },
   {  
      "name":"Green Lamp",
      "id":"2",
      "on":false,
      "brightness":100
   }
]

## Anything changes in the lights state show in below format.
 {  
   "id":"1",
   "on":false
}
