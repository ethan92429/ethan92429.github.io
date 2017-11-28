---
layout: post
title: "Proposed JSON Language For Automated Fusion 360 Design"
date: 2016-01-19
---

# When user parameters aren't enough, and the API is too much

It all started when I asked a student to design a Linear Flow Orifice Meter (LFOM) using the Fusion 360 API. If you don't know what an LFOM is, you're not alone. This is a highly specific type of pipe stub weir that we use in AguaClara water treatment plants. The system below, however, is designed to be applicable to any design in any industry.

Don't get me wrong, Fusion 360's API is a wonderfully in-depth API that would be any developer's dream, but it was a bit daunting for the budding Mechanical Engineer, let alone a brand new CS graduate. We wanted to develop a system on top of the API that could enable anyone with a bit of Fusion 360 experience to build a FULLY parametric design. By this, I mean our system would allow for an arbitrary number of part replications and joinery, user parameter definitions, and final drawing specifications, all without using the API. 

We will accomplish this by using parametric fusion ['templates'](local template definition link), in combination with a special JSON language to fully define a full-scale design as an assembly of smaller, individually-scaled components. The best way to understand how this might work is to walk through a JSON example. Below is the JSON for designing a water distribution box. These boxes are used to accurately divide flow rates amongst communities. 

```
![link to raw json](link to the raw json on GitHub)
```

The JSON has four parts that need some explaining. I'll do this by carefully defining each special word used within the JSON.

"template": The template entry specifies the name of a 'template' fusion design within a templates folder in your current project. A template is only special in that it has all the "parameters" specified defined as user parameters within the design, and all the various faces named to match the name of the joint faces under "joints".

"create": Think of this as a call to create a template from a specific python fusion api file. If the design is too complicated to perform all changes with simply altering the user parameters, you'll need to dig into the API and make the design dynamically. You will have the ability to pass the create file a particular template file if needed, and create will be called with the template as an input. There will eventually be more written about the spec of a given create file, and how the aide_draw package will call it. 

"parameters": Parameters specify the user parameters to change within the template used. If fewer than all of the user parameters defined in the model are set here, this will default to using whatever value/expression is set within the template model.

"joints": Joints provide a mechanism for gluing components together to form large assemblies. Define the origin and destination face and the Fusion API will do the gluing. This supports everything that the API naturally supports.

Once the draw function is called with the appropriate json as input, aide_draw steps through the following process to generate the design:
1. Set up the folder hierarchy to be the same as the component hierarchy. Such that within the gracias_distribution_box folder, there is an "lfom_piping_1" folder.
2. In a recursive, depth-first manner, call the following, starting with the base components:
	a. Call create_component and save the created component (with the component name) in the appropriate folder created in step 1.
	b. Pull up the template, adjust the user parameters as specified, and save the adjusted template with the correct name and in the correct folder. 
	c. Import the newly designed components into the larger components as linked designs.
	d. Assemble the joints by calling the Fusion joints API with the parameters specified.
3. Now the final, root component should be constructed, and all the smaller components are organized and within their own appropriate subfolders. If the design needs to change, just change the appropriate component, and update all the parent components. 

With this JSON-based design method, one can now use exclusively the Fusion UI to make complex designs, change templates, and build dynamic forms all defined within a JSON. This enables Fusion to be directly connected to another python package that can generate the JSON from additional parameters. To see our implementation of such a package that can generate aide_draw JSONs for whole drinking water treatment plants, please see aide_design. 