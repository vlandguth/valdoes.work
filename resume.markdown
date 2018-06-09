---
title: Resume
date: 2018-06-08 19:57:00 Z
permalink: "/resume/"
layout: default
---

<div class="resume">
  <div class="left">
    <img class="profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1183167/ValerieLinkedIn-min%20(1-square).jpg" alt="{{ site.data.basics.name }}">
    <h1>{{ site.data.basics.name }}</h1>
    <p class="bio">{{ site.data.basics.summary }}</p>
    <ul class="contact">
    {% for page in site.data.resume.basics %}
      <li>{{ basics.phone }}</li>
      <li>{{ basics.email }}</li>
      <li>{{ basics.address }}</li>
    {{% endfor %}}
    </ul>
    <ul class="findme">
    {% for page in site.data.resume.profiles %}
    <li><a href="{{ profiles.url }}"></a>{{ profiles.network }} : {{ profiles.username }}</li>
    {% endfor %}
    </ul>
    ### References
    Available Upon Request
  </div>

  <div class="right">
  
  <h2>Experience</h2>
    <article class="list-item">
      {% for page in site.data.resume.work %}
      <div class="side-bar">
        <h4>{{ work.company }}</h4>
        <h4>{{ work.startDate }} - {{ work.endDate }}</h4>
      </div>
      <div class="descrip">
        <h4>{{ work.position }}</h4>
        <p>{{ work.summary }}</p>
      </div>
      {% endfor %}
    </article>
  </div>
</div>