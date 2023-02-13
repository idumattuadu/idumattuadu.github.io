---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Home
---

<div class="home text-center mt-3">
  <h4 class="page-heading fw-light"> <i>Idu Mattu Adu</i> means <i>This And That</i> in <i>Kannada</i></h4>

  {%- if site.posts.size > 0 -%}
    <div class="row g-5 mt-3">
    {% for post in site.posts %}
       {% include featuredbox.html %}
    {% endfor %}
    </div>

    <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | relative_url }}">via RSS</a></p>
  {%- endif -%}

</div>
