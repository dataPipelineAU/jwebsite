---
layout: post
title:  "Discovering trends in text using topic modelling"
date:   2015-07-01 16:49:29
categories: dataPipeline information
image_attribution: https://www.flickr.com/photos/jplauriente/8469133401/in/photolist-dUowip-BBWpo-6i84XV-46EE3s-3gPkY-4GmSkp-txN62-7UQWSy-5YJs3b-BN8uD-bKFyWM-NzdWc-7ym4bS-4yBwuT-db2aKJ-6L1QmF-9jPCqA-9rmpz9-5KhzwQ-63DyMM-e2QVc5-9dvwYJ-5r8yh6-9khKH6-m13254-4wFkA1-aBsyNo-7NUn5t-aP3gAB-nscQ61-cKKrDq-6YhPqD-whBV4-gEP1e-kCdoWy-9wUEGJ-j9mHqN-81cLho-cmi89C-a5GaWi-o1SQsA-ebDxNE-oibvbS-oi5Reg-o1T3am-o1U4MX-8RTbUx-aVW4rt-mcuR3H-aZ1yhxs
image: words.jpg
api_endpoint: wordcount
---

You have developed a survey, got hundreds of people to fill it outand have started your analysis of the results. You find that most people ticked “Agree” or “Strongly Agree” to many of your questions, you got some numerical averages, like people visited your store 3.6 times on average each month. But how do you get useful information from the other field - “Additional Comments”?

Many surveys ask people to provide additional comments. In addition, many other ways of collecting information involve text-based data. It is hard to analyse effectively, but that doesn't mean you should ignore it. The data here can provide insight into what your customers or clients know that you don't – incredibly useful information!

Luckily there are lots of ways to analyse this data, although you won't find these options in Excel. The most straightforward way is to manually read them all yourself and take notes on the themes that you observe. There are even formal methods for doing these, such as Grounded Theory, which provides some rigor to this type of analysis. However it is time consumingand there are ways to automate the analysis, giving you a good view of the data, without having to read hundreds of responses.

A great option is to perform a word count. To do this, we take each document, split the text into words, and then count the frequency of each word. There are some nuances though, so a little processing is involved:

1. Remove common words, like “the”, “is” and other words like this.
2. Find word “stems”, so that “read” and “reading” are counted together, rather than as separate words.

The following code will take a document from you and provide a word count with these fixes applied. Note that because words are stemmed, words like "thinking" will be counted as the word "think".

<div id="api_form" class="highlight_api">
</div>

Enter some text above to count the words.

From here, you can put these counts into a word cloud builder to create a nice visualisation. Click this button to generate an example:

<div class="highlight">
    <div class="word_cloud" id="word_cloud">Click the button below to generate the word cloud</div>
    <a id="update-demo">Generate!</a>
</div>
<script>
    var cloud_created_once = false;
    $('#update-demo').on('click', function() {
          $('#word_cloud').html("");
          $('#word_cloud').css("height", "400px");
          if (cloud_created_once){
              $('#word_cloud').jQCloud('update', current_results['word_counts'], {autoResize: true});
          }else{
              $('#word_cloud').jQCloud(current_results['word_counts'], {autoResize: true});
              cloud_created_once = true;
          }
        });
</script>

There are also much more complex ways to extract more information:

* Merge frequently occurring word pairs, giving you the difference between “artificial intelligence” and “artificial” - quite a difference to your analysis!
* Flagging odd queries for manual analysis. For example, someone might put random text in, which can create odd word counts. Identifying this and removing it will improve the overall analysis.
* Semantic merging, where words that have similar meaning are combined. For instance, when asked about the weather, some people might say “rainy” and others “wet”, but they really mean the same thing, and could be counted together.
* Fix misspellings, so that you don't lose word frequencies (particularly for harder to spell words).

These types of analysis can also be combined with a topic analysis, where lower-level word meanings are combined to overall topics. For example, if we were analysing news articles, we might wish to split them into “sports” or “world news” articles. We could even combine it with last week's blog post on semantic analysis – see if your “additional comments” in your survey are positive or negative!

Overall, text based data can provide a huge insight into your business, but it does take a bit more to properly extract. If you need any assistance, we can help.
