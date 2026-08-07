---
title: "Pulmonary nodules malignancy prediction in CT images"
collection: portfolio
order: 1
short_title: "Nodule malignancy prediction"
image: "/images/nodule_malignancy_thumb.jpg"
summary: "Deep learning for malignancy risk estimation of pulmonary nodules, validated against expert readers."
excerpt: "Deep learning for malignancy risk estimation of pulmonary nodules, validated against expert readers."
---

Early stage lung cancer manifests itself as focal abnormalities in the lung called pulmonary nodules. The vast majority of nodules found in screening participants are eventually benign. Follow-up of benign nodules can lead to unnecessary imaging or invasive follow-up procedures. A data-driven model that can accurately predict nodule malignancy from CT data may improve management decisions and increase the effectiveness of lung cancer screening programs.

<div class="figure-row">
  <img src="/images/nodule_malignancy_roc.jpg" alt="ROC curves comparing the deep learning algorithm with the PanCan 2b model and 11 clinicians on the DLCST cancer-enriched subset">
  <img src="/images/nodule_malignancy_example.jpg" alt="Axial CT slice with an arrow marking a spiculated nodule, scored 0.99 by the algorithm and 0.97 by the clinicians">
</div>

Within this project, we develop and validate a deep learning algorithm based on convolutional neural networks for pulmonary nodule malignancy prediction and to compare its performance against expert readers and an established multivariate prediction model. The results were summarized in my [PhD Thesis](https://hdl.handle.net/2066/191619). This study was further expanded by Kiran Venkadesh and was published in [Radiology](https://doi.org/10.1148/radiol.2021204433), and the approach was later benchmarked against established malignancy risk scores in a screening cohort in [Radiology Advances](https://doi.org/10.1093/radadv/umag003).

## Publications

1. E. J. Mortani Barbosa Jr., Y. Kim, Y. Zhang, A. A. A. Setio, F. Mellot, P. A. Grenier, M. Zimmermann, B. Georgescu, S. Grbic, and W. B. Gefter, "Deep learning-based pulmonary nodule risk assessment outperforms established malignancy risk scores in lung cancer screening," Radiology Advances, vol. 3, no. 1, umag003, 2026 [link](https://doi.org/10.1093/radadv/umag003)
2. K. V. Venkadesh, A. A. A. Setio, A. Schreuder, E. T. Scholten, K. Chung, M. M. W. Wille, Z. Saghir,B. van Ginneken, M. Prokop, and C. Jacobs, “Deep learning for malignancy risk estimation of pulmonary nodules detected at low-dose screening CT,” Radiology, vol. 300, no. 2, pp. 438–447, 2021 [link](https://doi.org/10.1148/radiol.2021204433)
3. A.A.A. Setio, ”Computer-aided diagnosis in thoracic CT scans for lung cancer screening”, 2018. [link](https://hdl.handle.net/2066/191619)
