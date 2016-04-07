---
layout: post
title: "Some Useful Bash Commands"
---

I decided to learn some bash so that I could automate the process of deploying our app to a given server. 

Sequencing commands:
* &&  -  runs commands sequentially
* &  -  runs both commands in the background
* ;  -  runs both commands in the foreground simultaneously

Checking background jobs:
* jobs  -  prints the status of all the background jobs

Making the script look nice:
* \  -  allows you to extend a single command over multiple lines. Be wary of whitespace!
* #  -  makes the current line a comment
