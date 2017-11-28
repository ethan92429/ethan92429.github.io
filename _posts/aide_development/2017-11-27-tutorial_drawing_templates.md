---
layout: post
title: "Tutorial: Drawing AIDE Templates"
date: 2017-11-19
tags: [aguaclara, aide, tutorial]
---
<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Learning Objectives](#learning-objectives)
	- [Summary](#summary)
	- [Time Required](#time-required)
	- [Pre-requisites](#pre-requisites)
	- ["I Can..." Statements](#i-can-statements)
- [Building an AIDE Parametric Pipe](#building-an-aide-parametric-pipe)
	- [Making an Assembly Folder](#making-an-assembly-folder)
- [Assembling an AIDE Assembly](#assembling-an-aide-assembly)
	- [Copying Parts Into Your Folder](#copying-parts-into-your-folder)
	- [Starting an Assembly design](#starting-an-assembly-design)
	- [Making an Assembly design](#making-an-assembly-design)
	- [Parameter Name Scoping](#parameter-name-scoping)

<!-- /TOC -->

# Learning Objectives

## Summary

Templates in AIDE are Fusion design files that the AIDE add-in can parametrize into various sizes and configurations. This tutorial provides a foundational understanding of how to design AIDE-compliant Fusion 360 templates. You'll be designing a small network of pipes in the shape of your initials that can change size parametrically. You'll build the pipe from scratch, and use pipe accessories from the shared component library. As you walk through the steps, you'll see motivations for AIDE's opinionated ways.

## Time Required

This should take roughly 2-3 hours, but be sure to give yourself enough time to play!

## Pre-requisites

This tutorial assumes you have no CAD/Fusion 360 experience, and have just installed and played around with Fusion for a few hours.

## "I Can..." Statements

 By the end of this tutorial, you should be able to say:

* I can design a Fusion 360 model that AIDE can parametrize
* I understand the difference between top-down and bottom-up CAD design and why AIDE uses the bottom-up approach
* I can effectively use scoping and namespaces within designs
* I understand why AIDE uses complex scoping
* I can copy components into an assembly and joint them and pattern them as needed

# Building an AIDE Parametric Pipe

Now let's build the first part, a pipe, and save it within your assembly folder. In the following video, I build a parametric AIDE pipe that we can use to make your initial. Make sure to first make the assembly folder, then follow along to make your own parametric pipe!

## Making an Assembly Folder

To begin putting together your assembly, you need to start copying the various components you would like to use into your folder on the Team Hub. For this tutorial, make a folder in aide_draw_tutorials/initial_pipe named [your name]\_assembly. For instance, my assembly folder is aide_draw_tutorials/initial_pipe/ethank_assembly.

<iframe width="640" height="400" src="https://screencast.autodesk.com/Embed/Timeline/82d21ffa-8d56-4023-bb64-e909a61b03ac" frameborder="0" allowfullscreen webkitallowfullscreen></iframe>

**If you need a fitting that is not designed, feel free to design it and add it to the shared_component_library experimental folder.**

# Assembling an AIDE Assembly

Fusion supports two assembly styles (assemblies are design files full of different components), bottom-up and top-down. Top-down defines all the various components within one single assembly design. AIDE uses a bottom-up design, where each component is defined within a different design file, and then connected by joints into a single assembly design file. This enables AIDE to mix and match pieces easily and makes for a cleaner, more modular separation between the various components.

## Copying Parts Into Your Folder

It would take too long and be unnecessary for you to design all your own fittings, so luckily, we can reference fittings that have already been defined. Before you ever endeavor to design something, be sure to look online and in the Cornell Hub in order to check if the design already exists. Now copy the various fittings and pipes you need to make your letter into your assembly folder. If you use 3 elbows, you only need to copy the elbow design once into your folder. The only time you might copy the same component twice is if you had two unique parametrizations of the same component, for instance two pipes of different sizes/lengths.

<iframe width="640" height="620" src="https://screencast.autodesk.com/Embed/Timeline/fdf19bd5-8706-4b41-a9f0-f8e479e8c915" frameborder="0" allowfullscreen webkitallowfullscreen></iframe>

## Starting an Assembly design

To work with AIDE, the assembly design needs to obey the following rules:

* ONLY contains insert component, joint and pattern (circular or rectangular) features
* ONLY contain components and bodies that are linked to design files within your assembly folder
* All the features in the timeline need to follow this order: insert_component > joint component > pattern component. You can drag features around until the order is correct

## Making an Assembly design

Now that your files are in the assembly folder, it's time to start putting the assembly design together. In this design, you'll be inserting the copied components, creating top-level parameters, joining the various components together, and adjusting components as needed. Follow along with the video to make your own letter!

<iframe width="640" height="400" src="https://screencast.autodesk.com/Embed/Timeline/85c72206-4183-47f3-a80f-07f703304065" frameborder="0" allowfullscreen webkitallowfullscreen></iframe>

## Parameter Name Scoping

One of AIDE's main functions is to provide an elegant way to modify all the parameters within a given design. Without AIDE, you would have to go into every child design yourself, and change all the parameters to match one another. AIDE does this automatically by utilizing the same scoping rules as Python variables do. To understand what this means, consider the following example directory structure:
* ethank_assembly design
	- parameters:
		- od: 3 in
		- h: 2 m
		- w: 1 m
* ethank_assembly folder
	- elbows
	- tee
	- horizontal pipe
	- vertical pipe

Because the ethank_assembly design and the ethank_assembly folder have the same name and are in the same folder, **AIDE will automatically apply any changes to the ethank_assembly design parameters to the parameters with the same name in all the designs within the ethank_assembly folder.** This means that if you set up your design correctly, AIDE will be able to change the size of all the pipes and fittings by simply changing the od at the ethank_assembly design level.

# Conclusion

AIDE, by connecting and modifying parameters to meet prescribed rules, can simplify the modification process and help with rapid design. However, AIDE also imposes strict rules on naming conventions and parameter creation. It is possible that these rules will help create standardized design standards that simplify design understanding.

# Survey

**Please fill out this anonymous survey once you have finished the tutorial so that we can make it better for future AIDE students!**

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeRiJBrs3wjCcgn__Ed4jhXheemeFBudydzXeT7XkE3YTvZjg/viewform?embedded=true" width="760" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
