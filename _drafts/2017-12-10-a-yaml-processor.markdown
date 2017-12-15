---
layout: "post"
title: "yamler"
date: "2017-12-10 17:33"
---

# What is YAMLer?

YAMLer intelligently converts YAML files. You define conversion types by overriding the YAMLer abstract base class in Python, and YAMLer will eat through whatever you feed it until the simplest form is achieved.

## Simple Example
For this example, assume the following YAMLers are defined:
* add.py: transform a list of numbers into its sum
* multiply.py transform a list of numbers into its product

Whatever value is within the corresponding YAMLer key will be passed to the
YAMLer to do with it whatever it likes. Here's an example:

```yml
my_number:
  add:
    -2
    -multiply:
      -2
      -5
```

YAMLer eats this YAML by calling the innermost scope for which a YAMLer-key is available. So in this case, YAMLer will perform a depth-first search to find the inner-most occurrence of either "multiply" or "add". This will resolve to "multiply". Now YAMLer calls on multiply with two arguments: the whole YAML as well as the path (given as a list of increasingly nested keys) to the current YAMLer key. This path would look like: ["my_number","add", "multiply"].

The YAMLer "multiply" returns the updated YAML. This would be:

```yml
my_number:
  add:
    -2
    -10
```

Now the depth-first search bumps up to the next outer level. This would be the "add" YAMLer-key. The same thing is repeated, and the following is returned:

```yml
my_number: 12
```

# Treatment Plant Example

YAMLer was built to be used with AIDE to provide a versatile, user friendly way to define input parameters for the design of a water treatment plant. Let's see a simple example of what this would look like:
```yml
plant:
  components:
    -entrance_tank:
      parameters:
        width: &FLOC_WIDTH 42 in
        length: &SED_FLOC_LENGTH 5 m
    -flocculator:
      parameters:
        <<: *CHANNEL_WIDTH
    -sedimentation_tank:
      parameters:
        <<: *SED_FLOC_LENGTH
        manifold_inlet_od: aide_

```


# Motivation

We wanted a computer program that could design an AguaClara drinking water treatment plant. These are large hydraulically-powered brick and mortar plants that AguaClara is designing for communities around the world. The new CAD-drawing system would have to accept user parameters, call external functions, and reference itself in order to define the design parameters that would be fed into the system.

AguaClara had been using an outdated parametric-design system written in LabView and MathCAD, two proprietary monolithic programs. Theoretically, for every set of initial conditions, there is one single three dimensional design

I needed an extensible system that would allow me to define a series of interrelated expressions that could resolve to a particular format.
