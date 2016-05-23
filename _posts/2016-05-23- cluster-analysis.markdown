---
layout: post
title_view:  "Cluster analysis"
title:  "Cluster analysis"
date:   2016-05-23 11:32:29
categories: Clustering
image: clusterpic.jpg
image_attribution: https://www.flickr.com/photos/turkletom/4257993725/in/photolist-7ugkbV-5ViCri-qgcUR-4x2PEe-bdq5we-dRkVrA-g8Fhsd-g8F84z-6Xz5Ho-pxD8wf-g8F82w-g8Ffxb-g8FLNk-g8FcHA-g8F5Vg-g8F1Dk-g8FmS5-g8FQaF-8H83aW-dg5KFC-g8FduJ-8GyL1K-8pW8JK-cMjp4y-5E2mP8-8GyL8z-fnQ4cb-pzDBEJ-g8FEor-87LiCk-3hcuBA-bjTx95-47wR8r-f5mVzG-9J9PjU-8GyKTg-71MpQr-8H834d-8GBWoL-bFokq4-9J6Yg2-47wM5t-9J9NwG-poGiqp-4Yy1aQ-8H4UiR-5rdJF-47X7g5-9J6XMR-g8Fcwy
---


What is cluster analysis used for?

Clustering is a useful tool for exploring datasets.
It can be used for text, images, and many other datasets, providing a glimpse into the internal structure of the data.
Cluster analysis can be very useful when the data is hard to visualise, or for big data applications.

Cluster analysis is a type of *unsupervised learning*, which means we don't have a preconcived idea of what we want the resulting model to learn.
This is in contrast to *supervised learning*, such as learning which images are of cars versus trucks (useful for automated road toll billing).
In supervised learning, we give a training dataset of data that is already labelled.
The job of the analysis is to learn how to take the input to derive the given output.

For cluster analysis, exploring the data is the key.
This can back up existing knowledge, or it can find new structures.
For example, [this article](https://www.dataquest.io/blog/k-means-clustering-us-senators/) clusters US senators based on their voting habits.
When you split the data into two clusters, a clear Republican versus Democrat divide appears.
As you increase the clusters, it is seen that the Republican "voting block" stays quite rigid, while the Democrats are more prone to breaking into "sub-clusters".
Further, you can see which senators don't vote with the party and whether independents lean more towards one party or the other.

One of the main challenges with cluster analysis is that of choosing features.
For supervised learning, you can add new features - for example, Senator age could be added to the above-linked dataset.
The learning process will learn whether or not the feature is useful because it knows what it is looking for.
However for cluster analysis, adding new features can severely diminish the quality of the results as the clustering algorithm will gladly use any information, useful or not, that you give it.

Challenges aside, cluster analysis is a great way to get a viewpoint on a dataset.
Take, for instance, the [Whereabouts London project](http://whereaboutslondon.org/), which uses cluster analysis to show which areas of London are similar to each other, giving structure to London.
![alt text](/images/clustering.png) 

Analyses like this give insight into data and provide a view for future analysis.
In many cases, the cluster analysis can be used to determine the future questions that will be asked of the data.
