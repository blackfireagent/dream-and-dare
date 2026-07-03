---
title: "D&E Insight (3): Integration Procedure and the Innovation Behind It"
date: 2026-05-04 10:00:00
categories: Professional Engineering
tags: [Integration, Lithography, Engineering]
header-img: "img/DnE/Integration_procedure_header.png"
---

Integration is the main work of the D&E (Design & Engineering) integration cluster. However, the exact nature of integration work is not always clear to everyone. Is it just running tests, or is there more to it? In this post, we'll dive into what integration really means, the different types of specifications we handle, and where the "design" element fits into the integration process.

<!--more-->

## What is Integration?

At its core, **Integration** is the process of testing and verifying the product design to ensure that its performance—both in the short-term and long-term—meets the requested specifications. 

For a complex system like a lithography machine, integration involves a wide array of critical tests. We need to verify:
*   **Illumination performance**
*   **Projection optics** (including aberrations and Jones calculus)
*   **Flare**
*   **Stage vibration**

Beyond initial performance, we also must test the system's stability over time. For example, we investigate whether conditions like **mirror heating** during long-term operation cause the system's performance to drift away from the required specifications.

## ATP vs. CSR: Understanding Specifications

When we talk about meeting "specifications," there are actually two distinct types we must consider:

1.  **ATP (Accepted Technical Performance):** This is the standard system performance defined by the company itself. it represents the baseline quality and capability that every machine of a certain model must achieve.
2.  **CSR (Customer Specific Request):** These are additional requirements that can be applied to any element used in the system. Every customer can add their own requests based on their specific processes or previous experience. They might want additional factors to be taken into account to ensure the machine fits perfectly into their unique environment.

In principle, the system must meet both types of specifications during the integration test phase to be considered successful.

## From Factory to Fab

Just like in many large-scale business organizations, the integration test is not a one-time event. It is performed twice:
*   **In the Factory:** Once the machine is fully assembled.
*   **At the Customer Fab:** After the machine has been shipped and installed at the customer's facility.

Testing at the customer site is crucial to ensure that the performance the customer receives is consistent with what was delivered at the factory, even when operating in a different environment.

## Where is the "Design" in Integration?

Some people question where "Design and Development" exists within integration work. The truth is, it is everywhere. 

Innovation is required at every step of the integration process:
*   **Test Method Innovation:** You often need to come up with creative ideas to test a specific module's performance when it is already buried deep inside a fully assembled system.
*   **Isolate Target:** A major challenge is figuring out how to exclude interference from other modules to get a "clean" reading of the module under test.
*   **Accuracy vs. Reality:** Improving test accuracy under these circumstances requires significant engineering ingenuity. 
*   **Practicality:** Designers must consider the reality of the field. How do we achieve high-accuracy results within a limited amount of test time? How can we ensure these tests are runnable when the machine is on the customer side?

In summary, integration is not just about checking boxes; it’s about designing the very framework that proves a complex system works as intended.
