---
layout: default
title: Astro-Grázl
---

## Abstrakt

*Když Bůh stvořila Vesmír, nejen že k němu nenapsala žádnou dokumentaci, ale ani se neobtěžovala zveřejnit jeho zdrojový kód. A tak je na nás &mdash; jeho uživatelích, přijít zpětným inženýrstvím na to, co tím vším vlastně zamýšlela...*


<div id="home">
  <h2>Journal</h2>
  <dl class="posts">
    {% for post in site.posts %}
      <dt><b><time datetime="{{ post.date }}">{{ post.date | date_to_long_string }}</time> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></b>
      </dt>
      <dd>{{ post.excerpt | markdownify }}</dd>
    {% endfor %}
  </dl>
</div>
