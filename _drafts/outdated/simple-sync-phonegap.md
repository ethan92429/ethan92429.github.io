---
layout: post
title: "A Simple Way to Sync Data with PhoneGap"
---

Our goal is to sync data weekly with a remote database so that users can use data while offline. We will do this by downloading all the data since last time we synced and inserting it into a WebSQL database. The structured WebSQL database will allow us to make complex queries to our dataset, enabling us to easily generate complex visualizations for our users.

The first step is to think about the generalized algorithm that you'd like to use to update the phone data DB (the webSQL DB). For our purposes, we'll have the initial API call retrieve all of the stored data. Subsequent calls will request only the data from the last date synced until the current date. 