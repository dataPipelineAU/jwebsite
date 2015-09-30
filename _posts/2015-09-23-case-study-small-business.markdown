---
layout: post
title_view:  "A Small Cafe<br>Predicting Future Demand"
title:  "A Small Cafe Predicting Future Demand"
date:   2015-09-28 14:49:29
categories: case_study case study cafe
image_attribution: https://www.flickr.com/photos/ben124/8256640709/in/photolist-dzBrCi-dWcYXQ-56P4E3-c8XkcS-9jJxG8-4rLoBN-f9xNuq-riVKL2-7khdoc-naY5im-a2N6ck-c8Xhfq-8W6kEp-hhZ8nb-qrracq-egg2S1-sstL1u-8cxGxH-nC3kSV-75QJPn-7X3Z79-cY3P75-4AG5gy-icF9c5-jvgBrt-hiqjA2-oDm4ji-bw4KmG-o7oy4T-a6XvCC-7ChKXN-n3p15t-sPm7AL-7tQs4f-a4kv9A-jSsHH6-eeZsCn-pHWLLT-8eujR7-a8V3bN-f9iyGk-dKWk7U-brQo1F-mfX34a-nfei1D-vp1k9M-ejXqzZ-9pu2Sn-8FpDy2-icyc6r
image: coffee.jpg
---

**Case Study**

Based in Ballarat, a small cafe is looking to have a bit more control over their operations.
The cafe is alternating between needing 2 or 3 staff on each day, depending on the number of customers that are coming in.
On days where they get this wrong, they are either too busy to keep up with demand, or paying for a staff member they don't need, hurting profitability.

After we had an initial consultation talking about the requirements, some possible reasons for the variability are listed:

* Weather - the cafe generally operates better in warmer weather, both generally per-season and specifically based on factors like rain.
* Day of the week - Some days are generally better than others, although this trend is not always reliable.
* Major events in region - the cafe is busiest when there is a local event. However non-local events can cause a reduction in the number of customers.
* Unknown causes - sometimes, large groups suddenly come in. These are difficult to manage properly and hard to predict.
* School holidays and long weekends - different public and school holidays affected the cafe demand differently.

In addition, the impact on work needed was discussed. The total sales for a day did not always accurately reflect the amount of work required.
Instead, the number of customers was a better indicator for overall work, based on the data we already had available.
We discussed that some customers were harder to serve than others.
While some customers came in for off-the-shelf goods, others wanted coffee and cooked meals, which require more work.

After taking the available data, where we used number of transactions to approximate the number of customers, we were able to come up with a predictive model that estimates the number of staff needed on a given day.
The model takes into account many of the possible reasons above, and we set up an alert service where the estimates for the next two weeks are predicted each week, and emailed to the client.
This lets the cafe owner plan ahead, and let staff know as early as possible what the roster is like.
The predictive model uses data from the business and external sources, such as weather and holiday information.

Evaluation of the model was performed by taking the previous roster and comparing the actual versus predicted staff numbers for those days.
Comparing the results, the predictive model we came up with saved around 20% of costs through better staff management, while reducing the number of days where demand was greater than staff.
The predictive model also has the capability to scale as the business grows.

We also set some goals for collecting more data for the next year, including collecting more specific data, such as the items ordered.
This would allow us to predict demand for each product type, and get a better estimate of the overall amount of work.
In addition, we can start surveying some customers to find out if there are other factors that impact on demand throughout the year that we are unaware of.
This surveying can be formal (by handing out paper-based surveys or providing a link to an online survey), or informal, where the staff simply ask and make a note of the answer.
