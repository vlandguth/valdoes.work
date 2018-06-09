---
title: Resume
date: 2018-06-07 18:29:00 Z
position: 1
layout: default
---

  <div class="left">
    <img class="profile" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1183167/ValerieLinkedIn-min%20(1-square).jpg" alt="Val">
    <h1>Valerie Landguth</h1>
    <p class="bio">I am hard-working, flexible, and a fast learner who is enthusiastic about making beautiful and easy to use products. I am a senior at Eastern Washington University and I am dedicated to applying what I have learned, to creating great experiences for users.</p>
    <ul class="contact">
      <li>###.###.####</li>
      <li>my@email.com</li>
      <li>xxxxx xxth st</li>
    </ul>
    <ul class="findme">
      <li>Dribbble</li>
      <li>Behance</li>
      <li>Twitter</li>
    </ul>
    <h3>References</h3>
    <p>Available Upon Request</p>
  </div>

  <div class="right">
  
  <h2>Experience</h2>
       <article class="list-item">
      <div class="side-bar">
      {% for work in site.data.resume %}
        <h4>{{work.company}}</h4>
        <h4>{{work.startDate}} - {{work.endDate}}</h4>
      </div>
      <div class="descrip">
        <h4>{{work.position}}</h4>
        <p>{{work.summary}}</p>
      </div>
      {% endfor %}
    </article>
  </div>


