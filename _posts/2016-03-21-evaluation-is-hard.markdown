---
layout: post
title_view:  "Evaluation is hard"
title:  "Evaluation is hard"
date:   2016-03-23 16:50:29
categories: evaluation
image: 16836447092_b664f9c6a9_z.jpg
image_attribution: https://www.flickr.com/photos/jakerust/16836447092/in/photolist-rDMc9y-4R4JgR-jcmRXj-jcjtuP-s7TqSL-drDqQG-drDqRA-kGj1uH-77cmv-6yLCza-hfsoC4-dYuqS-eiNALg-79RqZA-8VETBF-riEfDG-p9pa7T-6pgicY-61tZf1-s1Ucr9-sXVZzr-cNQQMu-BrUS6v-Cpinu8-wgYpAp-BXaHbQ-ssrP5h-ssrMzy-ssqM17-rfcQYY-rd1ir7-Cpinse-2WLSwU-fvd8h8-7weqDw-Dorpd7-DvGyh1-Dy1Myx-DorpcA-CAvsoL-DqKy7k-CACgRP-CAvsof-CACgPp-Dorpbd-CAvsmm-CACgPV-CACgQg-p72iBS-DqKy3H
---
<Title> Evaluation is hard </title>

A key part of any data analytics project is evaluating the end result.
Doing this effectively is hard, and can undermine the work done in the other stages of the project, especially if a bad evaluation framework results in the wrong model being chosen.

Evaluation is hard, so I highly recommend that significant thought is given to evaluation.
There is an adage "what gets measured gets managed", but this can be a double-edged sword.
What, exactly, is measured is what, exactly, is optimised for.
If your evaluation method misses the mark, your end results won't do what you expected, despite the "high performance" reported.

<h3> Evaluation Metrics </h3>
The most natural way to evaluate something is to count the average of the number of times it was right, also known as the accuracy.
If your system makes 100 predictions, and 70 were correct, your accuracy is 70%.

The accuracy is quite straight-forward to understand, but can't deal with what is known as "unbalanced classes".
For example, if you are building a system to find pictures of boats on the internet, you'll have much fewer images of boats compared to other things.
If you have 99% of images containing no boats, you can easily get 99% accuracy by just predicting "no boat" to every image.
This is a highly accurate system, but doesn't help us at all.
In this case, our evaluation metric has failed us.

There are a few ways to "balance" the accuracy, and the F-measure (also known as the F-score) is a commonly used method.
First, we answer two questions:

1. Of all the images that are of boats, what percentage did we classify as boats?
2. Of all the images that were classified as boats, what percentage actually were?

The first question gives us the *recall* of our system, while the second gives us the *precision*. 
Combining these two results gives us the F-score.
Our theoretical "never-boat" system would score very poorly on this score, leading us to choose a model that actually predicts boats effectively.

Another way of thinking about evaluation is through ranking.
If our system is predicting the outcome of a football season, we might assign a likelihood to each team winning the championship.
Our "prediction" for the winner is the one with the highest likelihood.

If the second-highest team wins instead, our prediction is wrong, in black-and-white terms.
However, our system did quite well!
For problems such as these, many evaluation methods work on ranking and likelihoods to compensate for this issue.


Other metrics apply for other problems.
For example, text segmentation is a task where we try to break up text based on some criteria.
An example is breaking a word into syllables.
If our syllables are "off by one" character, they are wrong, but we probably want our evaluation criteria to identify that they were at least close!

Choosing an evaluation metric is hard, and takes careful consideration.
As with any data analytics step, starting with the end in mind is the key - what is the goal you are trying to achieve?

From there, it is a task of critical thinking to ensure that this evaluation is effective.
How do we measure that? What aren't we measuring? How will that affect the results.

