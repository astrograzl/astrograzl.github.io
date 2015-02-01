---
layout: default
title: Astro-Grázl
---

## Abstrakt

*Když Bůh stvořila Vesmír, nejen že k němu nenapsala žádnou dokumentaci, ale ani se neobtěžovala zveřejnit jeho zdrojový kód. A tak je na nás -- jeho uživatelích, přijít zpětným inženýrstvím na to, co tím vším vlastně zamýšlela...*


<div id="home">
  <h2>Journal</h2>
  <ul class="posts">
    {% for post in site.posts %}
      <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
</div>
