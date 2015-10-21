---
layout: page
title: Blogs
page-title: Information on data analytics for businesses
---


<div class="col-md-12 text-center">
    <ul class="post-list">
        {% for post in site.posts %}
        <li>
            <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

            <h2>
                <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
            </h2>
        </li>
        {% endfor %}
    </ul>
</div>

