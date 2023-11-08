---
layout: page
title: Formalization and Practice of Governance in OSS
description: 
img: assets/img/CHI_flow.jpg
importance: 1
category: work
related_publications: chakraborti2023we
---

Working through thousands of Apache and Github communities, I was fascinated by the inventiveness and dedication of the developers. How are such splendid software developed and maintained for free? 

OSS projects stand apart from software companies in principle, and also how teams run themselves. Importantly, in how they coordinate, without a chain of management. Communities often set up their own policies and codes through democratic consensus. 

Formal governance systems are being increasingly adopted among communities, particularly through non-profit mentor foundations. The project looks at at the Apache Software Foundation Incubator (ASFI) program and 208 projects it supports. We assemble a scalable, semantic pipeline to discover the governance behavior of project developers from their mailing lists, particularly their routine <em>governed activities</em> and the <em>internalization of formal policies</em> among such activities. We then investigate their relationship to what the formal ASFI policies prescribe, and their concentration across different topics. Our findings indicate that a greater amount of policy over a governed topic doesn't elicit more governed activity (and hence governance effort) on that topic, but does predict greater internalization of the policies by community members. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/CHI_flow.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A semi surpervised pipeline for extracting routine practices ('governed activities') among developers and comparing them to ASFI policies.
</div>


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/topic_email_policy.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Distribution of ASFI policy extent across governance topics. Right: Distribution of governed activity of projects across different governance topics. Governed activity was not found to be significantly correlated to policy extent.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/topic_scores.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Distribution of ASFI policy extent across governance topics. Right: Distribution of internalization scores within topics. Red and Green markers indicate the median and mean respectively. Internalization is observed to be higher in governance topics which are more regulated.
</div>

Moreover our subsequent regression analysis of project behavior against incubator outcome shows that community governance, be it more governed routines or internalizing policy in practice along topics with more ASFI policy making, has limited association with their graduation odds. Consequently, we find limited support for the argument that projects embracing Apache's formalization indeed bolster their own operations and performance. Therefore, written formal policies from OSS communities may not be a comprehensive account of how their actual governance unfolds.

<!-- The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above: -->

<!-- {% raw %}
```html
<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
```
{% endraw %} -->
