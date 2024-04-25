---
lang-ref: Project Output
layout: compose
klass: Project Output
title: Project Output
description:
background: /assets/images/placeholders/collections_small.jpg 
imageLicense: 
height: 60vh
composition: 
  - type: heroImage
  - type: media
    data: _data/project_output
---

{% for publication in site.data.project_output %}
- **Title:** {{ publication.title }}
  **Authors:** {{ publication.authors }}
  **Year:** {{ publication.year }}
  **Journal/Book Title:** {{ publication.journal }}
  {% if publication.volume %}
  **Volume:** {{ publication.volume }}
  {% endif %}
  {% if publication.page %}
  **Page:** {{ publication.page }}
  {% endif %}
  {% if publication.doi %}
  **DOI:** [{{ publication.doi }}]({{ publication.doi }})
  {% endif %}
{% endfor %}
