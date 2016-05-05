---
layout: post
title_view:  "The problme of the mean"
title:  "The problem of the mean"
date:   2016-05-05 11:32:29
categories: evaluation
image: 8698837600_e898ee31b9_z.jpg
image_attribution: https://www.flickr.com/photos/mikecogh/8698837600/in/photolist-efFPmC-e3oS1v-7BDwm7-e3ugwb-4iBVma-arjonn-m2s7Q-4w9zHP-khjpe-799Zt-bUWYkD-uES81-7zgeh8-4r6zAz-qQWacK-bnrbrs-cLbsaQ-bnraqU-bAm2n4-4Hab69-91YUFS-bAm3LT-bAm4ge-bAm4vV-bAm3fr-bnr9ZQ-aqhCH8-bAm2Jk-bnrchw-bAm4p8-bnr9SG-4qSujn-bnrbyS-bnraQ7-bAm3Ut-645rW7-bAm4ER-ottoNn-bnrazf-pTW2dC-bnraVW-bAm54p-bAm3Cg-bAm4VD-bnrcGh-9P47VM-7LnoZK-aCEzRP-qyvNKi-6ib1W5
---
The problem of the mean

The mean is the most used single measure for interpreting a dataset.
It is often the first question we ask when we get some new data - "what is the average?".
However, it has some major issues that need to be kept in mind when using it, otherwise it is quite easy to get the wrong impression.

Calculating the mean is quite simple. You add up all the things and divide by how many there are.
This simple formula can be found in nearly every piece of software that takes data, due to both its high use and its simplicity (is that cause and effect?).

The first major issue is that it is just a single statistic.
There has been a significant amount of work done on creating single statistics to represent complicated ideas.
This includes the mean to describe some data, the accuracy to evaluate the results, or the p-value to compare experiments.
Every time a complex result is evaluated by a single statistic, there is significant information that is lost in the process.

 <a href="http://www.datapipeline.com.au/evaluation/2016/03/24/evaluation-is-hard.html">the accuracy to evaluate the results</a>

After World War 2, pilots of air force planes from the United States had trouble controlling their planes.
Slight imbalances caused slight delays, causing catastrophic results in the loss of pilots.
It was quickly discovered that pilots never quite fit their cockpits, despite them being built to order for the average pilot.

What was less quickly discovered was that there was no such thing as an average pilot.
The Air Force was quite strict about selecting pilots that conform to a standard height, but even then it was found that no pilot fit the average range on the 10 attributes measured to design cockpits.
These were 10 attributes (such as height and arm length) that were studiously measured and used for design, but what was found was that this "average cockpit" actually served not a single pilot.
Even worse, only three in every one hundred pilots would be approximately average in at least three dimensions (here, "approximately average" was a broad "in the middle 30%").

For more information on this, see [this fantastic article](https://www.thestar.com/news/insight/2016/01/16/when-us-air-force-discovered-the-flaw-of-averages.html).
It outlines this finding in more depth and its ultimate solution of designing cockpits **to be customised** rather than trying to find average-sized pilots.


The second major issue of using the mean is outliers.
An outlier is a piece of data that is inconsistent with the rest of the dataset. 
It could be an anomaly that actually existed (such as an overly tall basketball player), a data input error (i.e. inserting 100 instead of 10.0), instrument failure (such as a malfunctioning temperature sensor), or any other of a variety of causes.

To give an example, consider the numbers [1, 2, 3, 4, 5].
This set of five numbers has a mean (3) that actually does a good job of representing the dataset.
However, if we add just one more point, an outlier due to a data input failure.
This new data point, which should have been 3, but was instead inputted as 30, changed the mean to a non-representative 7.5!
This "mean" isn't even in the realm of the possible values that we have seen so far!

Outliers are usually easily picked up by looking at distributions of data, rather than single statistics.
They can be removed if they appear erroneous, adjusted if the cause of the error can be identified (such as a missing decimal place), or otherwise adjusted using algorithmic means.

Luckily, there are solutions.
I recommend looking at distributions, rather than single statistics.
A distribution, such as a histogram, can give a visual on the dataset that no single statistic could hope to achieve.
Further, it is important that questions are asked of the data, and assumptions tested.
This, however, is a topic for another post.
