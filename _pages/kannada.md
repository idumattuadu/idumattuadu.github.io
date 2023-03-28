---
layout: default
title: ಕನ್ನಡ
permalink: /kannada
---

<div class="home text-center mt-3">
  <h2 class="page-heading fw-light"> ಕನ್ನಡ ಬರಹಗಳು </h2>

  {%- if site.posts.size > 0 -%}
    <div class="row g-5 mt-3">
    {% for post in site.kannada %}
       {% include featuredbox.html %}
    {% endfor %}
    </div>

    <!-- <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | relative_url }}">via RSS</a></p> -->
  {%- endif -%}

</div>
