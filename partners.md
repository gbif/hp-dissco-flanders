---
lang-ref: Partners
layout: compose
klass: Partners
title: Partners
description: 
background: /assets/images/placeholders/PLANTENTUIN_KID_Foto_Martin_Corlazzoli.jpg
imageLicense: Photo by Martin Corlazzoli
height: 60vh
composition: 
  - type: heroImage
  - type: media
    data: partners.yml
---

# Partners

{% for section_name, section_data in site.data.partners %}
## {{ section_data.title }}

{% for feature in section_data.features %}
### {{ feature.title }}

{{ feature.description | markdownify }}

![Background]({{ feature.background }})

[Learn More]({{ feature.href }})

{% endfor %}
{% endfor %}
