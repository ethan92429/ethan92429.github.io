---
layout: "post"
title: "test_yml_data"
date: "2017-12-09 18:31"
---

<ul>
{% for member in site.data.members %}
  <li>
    <a href="https://github.com/{{ member.github }}">
      {{ member.name }}
    </a>
  </li>
{% endfor %}
</ul>

{{site.data.test_json.hi}}
