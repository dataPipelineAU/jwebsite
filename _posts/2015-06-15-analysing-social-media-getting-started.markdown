---
layout: post
title_view:  "Analysing social media:<br>Getting Started"
title:  "Analysing social media: Getting Started"
date:   2015-06-15 16:49:29
categories: dataPipeline information
image_attribution: https://www.flickr.com/photos/83641890@N00/6109819439
image: social.jpg
api_endpoint: sentiment
---

Social media has taken the world by storm, and businesses are often eager to integrate it into their business. Analysing how a business is viewed on social media is an important task, and one that can be quite difficult to keep up with. Social media analysis involves searching for mentions of your business or sector, analysing the messages, and even resolving complaints online. For many businesses, this has been thrust upon them - even if they didn't want a social media presence, they do need to be aware of what people are saying about them. [Even small businesses can use data in big ways,]({% post_url 2015-06-01-small-business-using-data-analytics %}) and social media analysis is a great way to get started.

There are many businesses out there that can help with your social media presence. The most common form of assistance is to have someone run your social media for you - creating new content, responding to messages, and generally looking out for your business online. It can be hard work doing this type of analysis manually, and a little automation can go a long way. Many customers take to social media to voice their approval or complaints about different businesses. Some of these will be positive mentions, while some will be disgruntled customers who had a bad experience. If you don't work quickly to reply to poor social media mentions, the negative impact can reach many potential customers before you have had a chance to respond to it!

There are many ways to automate your social media analysis. The first step though, is to find mentions of your business (or broader sector) on these social media websites. You can do this manually - head to twitter, search for your business name and see what comes up. Regular searches like this can help you keep on top of social media, but most businesses are only mentioned rarely online. This means a lot of manual searching that have no results, and lots of wasted effort.

In addition, there are lots of sites out there, such as Twitter, Facebook, Yelp, Google Places and so on (see here for more!). Even if you have accounts on all these sites, it can take a long time to search each, and to do those searches regularly.

This is where automation comes in.

Many of these websites have an API, an Application Programming Interface, which allows programs to interact with the website to collect and process data. This allows us to write a program that can automatically perform searches, such as looking for mentions of your business on each of these websites. Best of all, it can be set to run at all hours of the day, so you never miss a tweet! We can then write a program that records these mentions, performs some analysis (see below!), and sends you an email digest every day. Or every hour. Or even in real-time as they occur.

We can also take it a step further, to see if these mentions are talking positively or negatively about the business. It can be helpful to respond to positive mentions online, but often not time-critical. Negative mentions often are more time critical though, and should probably be looked at with more urgency.

Determining whether a mention is positive or negative is called sentiment analysis. To do this, we look at the words in the text, and see which ones denote positive or negative emotions. The distribution of these words helps to determine if the overall text is positive or negative. This is a relatively new area of data mining, but one that is being increasingly used in analyses of this type.
Automated Sentiment Analysis tool

<div id="api_form" class="highlight_api">
</div>

Enter some text above to see if it is positive or negative.

Above, I've put a basic sentiment analysis model online. Type in a message, and see if the program correctly guesses whether it has positive or negative sentiment. This particular model is about 75% accurate, and is very fast- it can analyse thousands of messages a second. Other models also available that are a bit slower, but more accurate. Depending on the website, automated sentiment analysis techniques like this can reach over 90%.

Putting these together, we have a system that:

1. Automatically looks for social media mentions,
2. Determines if they are talking positively or negatively about the business, and
3. Alerts you when they are found.

Now, you can stay up to date with your social media presence, without the hassle of having to log into more than a dozen sites each day.

Next week, I'll talk about how to find trending topics online, getting a quick overview of what is happening in the news, on social media, or from your in-house documents. 

