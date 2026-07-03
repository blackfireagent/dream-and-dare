---
title: "D&E Insight (2): How to be productive?"
date: 2021-07-07 09:05:43
categories: Professional Engineering
header-img: /img/DnE/productivity_header.png
---
D&E (Design and Engineering) sector is a pillar in an enterprise. Almost all product developments and customer engagements go through the D&E sector. As an intersection point in a company's multi-business lines, the D&E integration cluster is responsible for identifying critical value and steering the direction of these engagements. The volume of information and workload is massive, and we must provide timely guidance to steer discussions properly. Therefore, productivity is essential. In my view, three key aspects enable a productive Way of Working (WoW) within a D&E organization.
<!--more-->

# Modular thinking
Modular thinking is the cognitive framework that allows us to organize massive amounts of information by identifying common patterns, thereby reducing brain overhead and processing time. This approach applies to both the **organization** and the **product**.

In the **organization**, daily requests often follow recurring patterns. For example, supplier requests regarding product specifications can be handled using established methodologies to estimate impact and provide feedback consistently. Similarly, customer inquiries often have existing solutions; by recognizing these patterns, we can adapt known solutions rather than reinventing the wheel.

Regarding the **product**, modular thinking helps us connect the dots between different functional clusters. A product improvement is rarely an isolated event; it might start with a customer request, require a performance prediction from D&E, and involve internal function clusters or even external suppliers. By viewing the product as a set of interconnected modules, we can quickly identify which change impacts which outcome, significantly speeding up the delivery process.

# Technical foundation
A robust technical foundation is what allows us to process information and deliver answers efficiently. This foundation is built upon three pillars: **common data formats**, **mathematical models**, and **batch simulations**.

By integrating these elements, we can efficiently provide answers to problems or requests coming from stakeholders. Standardized data formats act as the universal language, breaking down information silos, while mathematical models (digital twins) and batch simulations allow us to test scenarios at scale. 

Additionally, this technical foundation is not just for solving current problems; it is a powerful tool for discovering product improvement ideas for the **next generation**. By exploring the design space through simulation and data analysis, we can identify optimizations and innovations that would be impossible to find through manual engineering alone.

# Effective communication
Even with the best modular thinking and technical foundations, productivity can still stall without effective communication. Communication is the bridge that ensures alignment between what is requested and what is delivered.

First, communication is vital for understanding the **problem statement**. We must ensure that we are delivering exactly what is needed by others. This requires active listening and clarifying requirements before the work begins to avoid wasted effort and missed expectations.

Second, we must deliver our messages with absolute clarity. Stakeholders need to know:
*   **What help** we can offer.
*   **Whether or not** they can get the outcome they expect.
*   **When** that outcome will be available.

By managing expectations and providing transparent timelines, we build trust and ensure that the entire organization can move forward in sync.

# The Productive D&E WoW
The synergy between these three aspects creates a highly efficient engine for engineering excellence.

<div class="mermaid">
graph TD;
    subgraph MT [Modular Thinking]
        MT1[Common Pattern Identification] --> MT2[Can we reuse the existing solutions?]
    end
    subgraph TF [Technical Foundation]
        TF1[Data + Model + Sim] --> TF2[Efficient Problem Solving]
        TF2 --> TF3[Next-Gen Discovery]
    end
    subgraph EC [Effective Communication]
        EC1[Understand Problem Statement] --> EC2[Clear Delivery & Expectations]
    end
    MT --- WoW[Productive D&E WoW]
    TF --- WoW
    EC --- WoW
    style WoW fill:#f9f,stroke:#333,stroke-width:2px;
</div>
