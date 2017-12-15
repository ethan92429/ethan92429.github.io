---
layout: post
title: "Dual Booting El-Capitan and Ubuntu Trusty"
---

The first step is to [make a live USB or CD with Ubuntu Trusty](http://computers.tutsplus.com/tutorials/how-to-create-a-bootable-ubuntu-usb-drive-for-mac-in-os-x--cms-21253) by following the steps in that link.

Then make sure you have enough free or unallocated space on your harddrive by opening up disk utility and shrinking your main partition as needed to generate free space. This will be what we format into an ubuntu partition when we install ubuntu.

Now install ubuntu with your bootable usb by restarting your mac while holding cmd+r. Select the ubuntu boot option, and your mac should strt booting a live version of ubuntu. You should see an installer screen. Select that you would like to install alongside another operating system. Unfortunately, my mac's OS was not recognized so I had to select custom installation and choose to install in the free space I set aside earlier. Now walk through the rest of the installer.

The next step is to teach your computer that indeed it can boot onto something other than macOS! I used [reFind](http://www.rodsbooks.com/refind/) as my boot manager. It can recognize boot volumes on your machine, and provides a conveniant GUI at startup that lets you select which volume to boot onto. ReFind was very easy to install, just make sure you [disable mac's System Integrity Protection (SIP)](http://www.howtogeek.com/230424/how-to-disable-system-integrity-protection-on-a-mac-and-why-you-shouldnt/). If reFind successfully installed, then on the next restart, you should be presented with the option to boot onto Ubuntu, MacOS, recovery, and a couple more. 

After I booted into Ubuntu for the first time, all of the icons were very small due to the ultra-high resolution of my retina screen. I fixed this by opening "personalize and appearance" and scaling my icons and menu items up by 240%. Additionally, Ubuntu was not able to configure my wifi card. I spent about two hours attempting to find the right driver. In the end, I had to borrow a friend's usb wireless stick so I could let the ubuntu software center automatically find and download the correct wireless drivers.
