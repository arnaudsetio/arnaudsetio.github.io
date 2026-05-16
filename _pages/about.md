---
permalink: /
title: "Home"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Arnaud Arindra Adiyoso Setio is a staff research scientist at [Lunit Inc.](https://www.lunit.io/), focusing on deep learning, medical image analysis, and computer-aided diagnosis. Previously, he worked at [Siemens Healthineers](https://www.siemens-healthineers.com/).

During his PhD at the [Diagnostic Image Analysis Group](https://www.diagnijmegen.nl/), he worked on automatic lung nodule detection and classification in chest CT, supervised by [Bram van Ginneken](http://diagnijmegen.nl/index.php/Person?name=Bram_van_Ginneken). He holds a bachelor's degree in Electrical Engineering from [Institut Teknologi Bandung](http://www.itb.ac.id/en/) and a master's degree from [Eindhoven University of Technology](https://www.tue.nl/).

Outside of research, he is actively involved in music ensembles — orchestra and angklung. He was a conductor of Nusantara Student Ensemble (string) and [Angklung Eindhoven](https://www.youtube.com/@AngklungEindhoven).

**Research interests:** deep learning · medical image analysis · computer-aided diagnosis · computer vision · image processing

---

## Recent Publications

{% assign sorted_pubs = site.publications | sort: 'date' | reverse %}
{% for pub in sorted_pubs limit:5 %}
**[{{ pub.title }}]({{ pub.permalink }})**  
{{ pub.venue }}, {{ pub.date | date: "%Y" }}

{% endfor %}

[See all publications →](/publications/)
