---
title: "MLOps Stack Canvas"
layout: article
---
<img class="article__icon" src="/assets/icons/Icon__Principles.svg" alt="Icon">




**Machine Learning Operations** (MLOps) defines language-, framework-, platform-, and infrastructure-agnostic practices to design, develop, and maintain machine learning applications. However, getting ML in production implies many interplaying components. Moreover, with the currently exploding number of MLOps platforms and frameworks, it is challenging to keep up with the development pace. One of the main issues for ML-adopters is technology integration and compatibility. 

According to the [current surveys](https://info.algorithmia.com/tt-state-of-ml-2021), 49% of organizations experience challenges with integrating their ML tooling, frameworks, and languages technology stack. The reason for this challenge is that ML technology is still evolving and is in its early stages. Additionally, the development of MLOps tooling is happening at a fast pace, making the adoption of such a fast-developing infrastructure difficult for getting ML-system into production sustainably.  

**To specify an architecture and infrastructure stack for Machine Learning Operations, we suggest a general MLOps Stack Canvas framework designed to be application- and industry-neutral.** We align to the [CRISP-ML(Q) model](https://ml-ops.org/content/crisp-ml) and describe the eleven components of the MLOps stack and line them up along with the ML Lifecycle and the [“AI Readiness”](https://services.google.com/fh/files/misc/ai_adoption_framework_whitepaper.pdf) level to select the right amount of MLOps processes and technlogy components. 



## MLOps Stack Canvas

<img src="../img/mlops-stack.jpg" alt="MLOps Stack Canvas" width="800"/>
Figure 1. Mapping the CRISP-ML(Q) process model to the MLOps stack.

The CRISP-ML(Q) provides a process - a set of steps that we will perform during the machine learning development life cycle. Another aspect of ML development is infrastructure components, such as tools, platforms, and frameworks needed for successful ML model operations (see Figure 1).  

Hence, building the infrastructure stack for MLOps is the next important part of the ML project. However, given a lack of standardization in the ML development process model and operations and the ever-growing number of tools, creating an infrastructure stack is an overwhelming exercise for many ML aspiring teams. Given the hype around MLOps tools, small teams with a small amount of data are getting the impression that MLOps solutions would require significant infrastructure investment. 

According to the [recent survey conducted by Algorithmia](https://info.algorithmia.com/tt-state-of-ml-2021), *“the second greatest ML challenge is technology integration and compatibility,”* which indicates that many organizations are still at the beginning of the ML life cycle. To support the understanding of your requirements for the ML system and the audit process of the infrastructure components, we suggest an MLOps Stack Canvas framework (see Figure 2). 

We envision the MLOps Stack Canvas as help to architect the ML system. Similar to the canonical Business Model Canvas, our canvas condenses the main elements of a whole technology stack for an ML application into a single page. This framework guides the development teams through the MLOps building blocks and lets them answer the MLOps infrastructure-related questions and identify the necessary tools chain. 

The purpose of the MLOps Stack Canvas is to help you to structure workflows, architecture, and infrastructure components for the MLOps stack in the ML project. The scope of MLOps Stack Canvas is the following:
+ Ensuring that ML model solutions have a (business) impact.
+ Planning the cost of the infrastructure components for the MLOps stack by considering three main areas:
    + Data and code management
    + ML model management, and 
    + Metadata management
+ Planning the cost of the orchestration of the ML system to manage its life-cycle and maintainability by considering 
    + Continuous integration/training/delivery for ML assets
    + Monitoring to ensure the ML is achieving the business objectives
    + Alerting to deal with model failures.
+ Designing the ML system to fulfill:
    + Reproducibility: versioning, feature store, and pipelines,
    + Reliability: models should have few outages and safe failovers, and
    + Efficiency: model predictions are fast and as cost-effective as possible.

Generally, the MLOps Stack Canvas consists of three main areas: *Data and Code Management, Model Management,* and *Metadata Management*. Each of these areas contains its own building blocks. 

<img src="../img/mlops-canvas.jpg" alt="MLOps Stack Canvas" width="800"/>
Figure 2: MLOps Stack Canvas to identify the infrastructure components.

In the following, we explain each of these blocks.





## Acknowledgements

We would like to thank [Alexey Grigoriev](https://www.linkedin.com/in/agrigorev/) for insightful discussions and his valuable feedback for this chapter.

