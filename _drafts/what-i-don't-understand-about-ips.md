---
layout: post
title: "What I don't understand about ips"
---

I always find myself having trouble connecting one computer to another, so I figured I'd make myself a troubleshooting guide that explains the various firewalls that need to be open in order for a mac to publicly display an ip address. The first wall that mac has built in can be accessed through the ipfw command. I found that if you want to display an ip that is only available at the computer generating it, assign the ip 127.0.0.1:xxxx because that is your computers 'loopback ip' and will always point to your own computer. However, if you set your ip to be 0.0.0.0:xxxx, this is the wildcard address for "all IPv4 addresses on the local machine," meaning that this address will be informed when any of the computer's ip addresses are accessed. 