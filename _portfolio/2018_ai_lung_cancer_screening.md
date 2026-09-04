---
title: "AI for lung cancer screening"
collection: portfolio
order: 0
short_title: "AI for lung cancer screening"
image: "/images/ai_lung_cancer_screening_result.png"
summary: "AI systems for lung nodule detection and segmentation in low-dose CT."
excerpt: "AI systems for lung nodule detection and segmentation in low-dose CT."
---

Lung cancer screening with low-dose CT can reduce lung cancer mortality by detecting the disease at an earlier stage. However, screening examinations contain hundreds of images and pulmonary nodules vary widely in size, appearance, and location. An AI system for lung cancer screening must therefore detect subtle nodules, limit false-positive findings, and characterize detected lesions.

Within this project, we developed a complete AI system for pulmonary nodule analysis. The system combines lung and organ segmentation, three-dimensional nodule detection, false-positive reduction, and nodule segmentation and measurement. We collected and annotated large CT datasets, defined detailed annotation protocols, and performed large-scale experiments to optimize the individual algorithms and the complete system.

<img src="/images/ai_lung_cancer_screening_result.png" alt="Illustrative AI assessment of a pulmonary nodule in chest CT" class="center">

To improve performance on rare and difficult cases, we developed an active-learning framework that combines uncertainty sampling, error analysis, and AI-assisted annotation. We also investigated synthetic nodule generation, adversarial training, and learning from noisy annotations. The resulting algorithms were evaluated on independent screening and oncology data, in reader studies, and as part of the regulatory evaluation of a clinical product. This work resulted in scientific publications and patents on deep-learning methods for pulmonary nodule and medical-image analysis.

## Selected publications and patents

1. E. J. Mortani Barbosa Jr. et al., “Deep learning-based pulmonary nodule risk assessment outperforms established malignancy risk scores in lung cancer screening,” *Radiology Advances*, 2026. [link](https://doi.org/10.1093/radadv/umag003)
2. S. Liu et al., “No Surprises: Training robust lung nodule detection for low-dose CT scans by augmenting with adversarial attacks,” *IEEE Transactions on Medical Imaging*, 2021. [link](https://doi.org/10.1109/TMI.2020.3026261)
3. Patents and patent applications on deep-learning methods for pulmonary nodule and medical-image analysis. [Espacenet](https://worldwide.espacenet.com/searchResults?submitted=true&locale=en_EP&DB=EPODOC&ST=advanced&TI=&AB=&PN=&AP=&PR=&PD=&IN=Arnaud+Arindra+Adiyoso&CPC=&IC=&Submit=Search)
