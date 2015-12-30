# noot
Smart thermostat software for 24/7 management and monitoring of central heating and lights.

## History (short version)
In june 2015 I purchased a new house which has community heating (stadsverwarming). Pretty soon I wanted a thermostat to regulate the temperature of the house. Basically you have three options: 1) Manually control the temperature by using themostatic valves on the radiators or 2) Use a zone valve to control the temperature of a complete floor or 3) regulate the radiators induvidually using wireless electric valves. Since I don't want to do the manual stuff and zone valves only partially solve the problem I chose to go with option 3 and use the eq-3 Max! system. This system contains of a central LAN gateway which wirelessly connects with the ratiator valves which get installed on each radiator. The system also contains a basic wall mounted thermostat with LCD screen, but as a developer I wanted more :-)

I started with reading up on the protocol used. eq-3 doesn't provide any documentation on the protocol, but apparently a GitHub user called Bouni already worked on writing down the protocol (https://github.com/Bouni/max-cube-protocol). I started writing a Python implementation which I made publicly available at https://github.com/danielterhorst/maxcube.

At that point I just wanted to try some new stuff, so I decided to take it further and start using React Native to write an interface for Android. I purchased the cheap Cube U27GTS China tablet below and started building something similiar to Eneco's Toon, which is also shown below

*Eneco Toon*

![Eneco Toon](http://ic.tweakimg.net/ext/i/imagenormal/2000549355.jpeg)

*Cube U27GTS*

![Cube U27GTS](http://g02.a.alicdn.com/kf/HTB1PJ.pIpXXXXbnXFXXq6xXFXXXF/8-inch-cube-u27gts-tablet-U27GT-S-wifi-Quad-Core-MTK8127-u27gts-1GB-8GB-IPS-1280.jpg)

## Work in progress
I recently switched from ES5 to ES6 which has it's own challenges. I am completely new to React, React Native and ES6. As soon as I have stuff working again, I will update this readme with screenshots.
