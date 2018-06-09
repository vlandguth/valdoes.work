---
title: Resume
date: 2018-06-07 18:29:00 Z
position: 1
layout: default
---

  <div class="left">
    <img class="profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1183167/ValerieLinkedIn-min%20(1-square).jpg" alt="Val">
    # Valerie Landguth
    <p class="bio">{{ data.basics.summary }}</p>
    <ul class="contact">
    {% for basics in data.resume %}
      <li>{{ basics.phone }}</li>
      <li>{{ basics.email }}</li>
      <li>{{ basics.address }}</li>
    {{% endfor %}}
    </ul>
    <ul class="findme">
    {% for profiles in data.resume %}
    <li><a href="{{ profiles.url }}"></a>{{ profiles.network }} : {{ profiles.username }}</li>
    {% endfor %}
    </ul>
    ### References
    Available Upon Request
  </div>

  <div class="right">
  
  <h2>Experience</h2>
       <article class="list-item">
      <div class="side-bar">
      {% for work in data.resume %}
        <h4>{{ work.company }}</h4>
        <h4>{{ work.startDate }} - {{ work.endDate }}</h4>
      </div>
      <div class="descrip">
        <h4>{{ work.position }}</h4>
        <p>{{ work.summary }</p>
      </div>
      {% endfor %}
    </article>
  </div>


