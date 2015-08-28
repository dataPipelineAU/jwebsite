---
layout: post
title_view:  "Summary of PyCon AU 2015"
title:  "Summary of PyCon AU 2015"
date:   2015-08-03 16:49:29
categories: pyconau conferences python
image_attribution: https://www.flickr.com/photos/andiryan/8558548035/in/photolist-e3hNa2-nmHCy1-mivR9g-oLztbu-p2RasG-9a2ACh-am8UBn-cTUd6G-frJgMs-oPixPN-9aAr9w-oAcoac-dfjhvH-dbzJEt-kQYQy4-aJZaN2-paHFVr-99Dupu-8oKDtp-omE7RK-frkT3P-oYFDFk-cGbQjC-frAqXN-dWB9vv-985W2V-ec3er6-ohUH3R-nwYDoW-7BtXTi-9aBDDA-frtRzp-nGL6Tm-wCYpjt-e6dDqM-ftztCb-frBVkS-ncTreF-pqfTtb-985WqD-99YHYt-dThbAR-hc4oqr-dSKfXw-wCiuxg-frAso5-p6Mh7N-oCdgKY-daPhAq-duacAP
image: brisbane.jpg
---

I recently attended PyCon AU 2015, Australia's main Python conference (that's Python-the-programming-language).
The conference was a great success, with lots of great talks, and motivated me significantly to get started on some new projects.
Below are just some of the interesting talks I attended, and the outcomes from each.
Most of the talks will be available online in the near future.

#Data Science Miniconf

###Friday 31st July

###Custom Python Applications in Neuroscience
In this talk, Simon Salinas and Sharma Gagan spoke about their use of Python in developing packages for viewing brain scans.
Their project was highly successful, with great outcomes after only a small amount of coding, showing the power of the Python programming language.
Their code was able to view images in the widely used DICOM format (common in the medical industry).

### Adventures in scikit-learn's Random Forest
Greg Saunders spoke about random forests, a powerful data mining algorithm that requires little tuning to get good results in most datasets.
He spoke about what they were, and how to use them.
The explanation was a great summary of what can be a complex algorithm.
The talk also contains a great explanation of how to do some data preprocessing and managing to get the data into a nice easy to use format.

### Not Invented Here: Portng Scientific Software to Python
Getting code from academia to work can be a pain, and all to often there is a mentality to just rewrite it yourself.
In this talk, Andrew Walker spoke about the dangers of doing that, and some other options for interoperability, i.e. getting code from another language working in Python.
This talk was a great overview of the different techniques, and I'm going to be looking into a couple for my own projects.

###An End-to-End Machine Learning Ecosystem in a Quarter
Chris Hausler from Zendesk spoke about how they (almost) built an enterprise-grade system for machine learning from their vast amount of customer data in just a quarter (of a year).
The talk had lots of insights about the trade-offs needed to build a system well, but also quickly.
Their system already does a great job in working out if customers will have a good service experience, and has great scope for improvement (many of which Chris and his team are working on already).

###Predicting sports winners using data analytics with pandas and scikit-learn
This was my talk, in which I went through the material in chapter 3 of my new book (!) on how to predict the winner of an NBA match with Python's pandas and scikit-learn libraries.
The talk was well received, and I got lots of positive feedback.
After the talk, I received some help from Sean Malloy which allowed me to integrate betting odds into the computation.
My system doesn't make a profit (yet), but the loss is only small, especially compared to lesser systems.


#PyCon Day 1

###Saturday 1st August

###Designed for education: a Python solution
In this talk, Carrie Anne Philbin spoke about how to teach Python, particularly to kids.
Some of the problems were not so obvious, like having a text editor that is simple to use, rather than a full-featured version.
The talk was enjoyable and highlighted some of the assumptions technical people make about how teaching *should* happen, rather than how it *does* happen.

###Docker + Python
In this talk, Tim Butler outlined Docker, and how to use it with a Python system.
The talk was great. While I have been using docker for a while now, I never felt I was doing it *right*, but now I have some solid strategies for improving my usage of it.

###Python for less than $7
My favourite talk of the conference was Graeme Cross' overview of installing Python on microcontrollers that cost less than $15.
The talk was quite in-depth, easy to access, and had a good discussion of the advantages and disadvantages of each.
I'm currently investigating hardware programming of this type through the [Ballarat Hackerspace](http://ballarathackerspace.org.au), and I was madly making notes of nearly everything Graeme said to digest later!


#PyCon Day 2

###Sunday 2nd August

### Consequences of an Insightful Algorithm
In this talk, Carina C. Zona outlined the dangers of applying machine learning in situations where people are involved.
The take home message was to be aware of the limitations of the algorithms you employ in your organisation, what the impact is expected to be, and what the impact *may* be in error situations.
While I felt the language used was a bit of "blame the algorithm", I don't think this was the intent - it is the people using the algorithms that need to be aware of how they are using them, and exactly what they are doing.
For example, when trying to work out the memorable times in a person's year, a big social media site inadvertently showed very *negative* and painful memories to some people.
While these were the most impactful, they probably weren't the ones that the person most wanted to remember.

###Learn you a Flask
I loved this talk, as an introduction to Flask, which is a light-weight library for doing web services and websites.
Lachlan Blackhall overviews *normal* usage of Flask, rather than the very introductory usage you find on most tutorials.
I'll be using the lessons learnt here quite regularly in upcoming projects.

###Easy wins with Cython: fast and multi-core
While Python has a reputation of being a slow language to run, this usually isn't true, and Caleb Hattingh outlined how to use Cython to speed it up anyway.
Very little work needed to be done to get Cython working on some code, and the speed-up gains were over 8000% (I'm not joking!).
For code that has lots of computation to do, this may be one of the better options, instead of going to another language.