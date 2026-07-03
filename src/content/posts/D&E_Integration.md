---
title: "D&E Insight (1): What do we do in integration competence?" 
date: 2021-07-04 10:21:48
categories: Professional Engineering
tags:
header-img: "img/DnE/integration_header.png"
---
Integration is part of a product design process where a fabricated product need to be tested and qualified. When the test is done, the result is fed back to the function design teams as a go/no go decision. As an member in the integration cluster, you are expected to have a broad view of understanding on the product knowledge, you are responsible for giving a thought about the product performance with supportive evidences, and last but not least you need to define a simple metric to trace the improvement of product performance. With these three skill sets, you are in a good shape to handle the integration work.   

![](/dream-and-dare/img/DnE/V_model.png)
<!--more-->

For the sake of explanation I would like to use my litho experience to explain how the above skill sets are implemented in the job. For the readers who are not familiar with lithography, this post could help understand more about the [lithography system](/complex-optical-system/). As a lithography machine manufacturer, a new machine will typically be released to the market every year. This machine, NXExxxx, could be just an upgraded version of the previously released one, which improves the imaging performance or the productivity. Since a new machine is already built in a factory, the integration groups need to test the machine according to a series of acceptance criteria to ensure the performance of this machine meets the specifications in the design sheet. 

# Knowledge Criteria
A standard integration test sequence starts from the basic machine operation, such as loading and unloading the reticle, gradually moving to the wafer qualification to check the pattern printing quality. The pattern printing quality are tested not only in the nominal condition but also in the marginal condition to ensure that the machine has a good process window as well. Besides, customer relevant patterns are typically included in the qualification to safeguard the customer requirements.  
As an imaging integration engineer, you need to have the litho knowledge covering from illumination, projection optics and wafer process. In each specific test, an imaging engineer should have a clear idea what is a good result and what is not. If something goes wrong, he or she needs to identify what should be the root-cause of the issue.

Another aspect is customer engagement. You can think that a lithography system is a 10 billion dollar working horse. Any customer who wants to jump into this pool would like to know whether this expensive consumption can be paid back in the future roadmap. Therefore, some exploratory work related to how lithography machines enable customer nodes also falls in the integration cluster's responsibility. For the integration team members who are involved in the customer-relevant work, they should well understand customer node direction and requirement to see what are the potential knobs we could tune along with the lithography system to achieve customer goals. These potential knobs could be pattern design, mask stack, resist and machine tuning.

![](/dream-and-dare/img/DnE/integration_context.png)

# Clear storyline
The importance of integration cluster is to share consolidated suggestion. When you are debugging a machine test, you find out what would be the root-cause of this issue, then the next step is to convince the corresponding function cluster to accept this feedback. In the feedback discussion, your storyline should be clear to pinpoint *what the issue your are investigating*, *how did you do your analysis* and *what are the simulation and experimental results*. Addressing these three bullet points can make your story concise and powerful to reach your goal. The same approach could also be used for the customer engagement in which you need to address *what the goal we would like to achieve*, *how do we plan to do the study* and *what are the simulation and experiment results*. Be aware that you always need to have data to support everything you say in the story.

# Simple metric
The integration cluster usually needs to involve different parties in the discussion. The first thing you could imagine is how to keep focus in the discussion with a group of people with various technical background. Furthermore, a general machine qualification report has already consisted of complicated test items. Presenting a complicated story to the audience with large variety is easy to make them exhausted and inefficient. To avoid this embarrassing scenario, a simple metric for each qualification item is suggested. As soon as the audience look at the value there, they know immediately if the qualification result is OK/NOK.  

To simplify the shown metrics from multiples to one is a high skill-required job. You first need to make a stepwise flow chart to explain how the initial metrics transform to the final metrics. In each step, a clear definition and meaning of a metric and a calculation should be clarified, then the final metric should cover the outlook of the performance. As an example, the exposure latitude and depth of focus used in lithography is a simple metric to quantify the process window of a litho machine to specific patterns. In the daily litho engineering, there are more metrics needed in the machine qualification and customer engagement work.

# Summary
The integration cluster serves as a final checking point of a product development. The integration team does not design any hardware and software specifically but rather develop relevant knowledge and share the consolidated feedback to the product design and customers. You are expected to give concise message and address the questions properly from different stakeholders.            