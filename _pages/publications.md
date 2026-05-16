---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

Also available on [Google Scholar](https://scholar.google.nl/citations?user=TxLhvpcAAAAJ) and [ORCID](https://orcid.org/0000-0002-5447-4434).

{% assign sorted_pubs = site.publications | sort: 'date' | reverse %}

## Journal Articles

{% for post in sorted_pubs %}
  {% if post.pubtype == 'journal' %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

## Conference Papers

{% for post in sorted_pubs %}
  {% if post.pubtype == 'conference' %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

## Thesis

{% for post in sorted_pubs %}
  {% if post.pubtype == 'thesis' %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}
