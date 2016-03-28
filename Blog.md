---
layout: page
page-title: Information on data analytics for businesses
title: Blog
permalink: /Blogs/
---

<div class="row text-center">
  
        {% for post in site.posts %}
        <div class="blog-summary col-sm-2 col-md-6">

          <div class="panel panel-default">
           <h2>
                                  <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
                              </h2>
                              <span class="post-meta">{{ post.d | date: "%b %-d, %Y" }}</span>
                              <div class="centered2" onclick="location.href='{{ post.url | prepend: site.baseurl }}'">
                                <div id="header_background" class="jumbotron img-responsive" style=" background-repeat:no-repeat; width:100%;background-image:url(/images/{{ post`.image }});">
                                </div>
                                </div>

        </div>

        </div>
        {% endfor %}
   
</div>

