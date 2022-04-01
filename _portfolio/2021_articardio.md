---
title: "Deep Learning Based Centerline Aggregated Aortic Hemodynamics"
excerpt: "Automated assessment of hemodynamic parameters of aorta. <br/><img src='/images/articardio.PNG' width='750'>"
collection: portfolio
---

Image-based patient-specific modeling of hemodynamics is gaining increased popularity as a diagnosis and outcome prediction solution for various cardiovascular diseases. While their potential to improve diagnostic capabilities is widely recognized, these methods require considerable computational resources since they are mostly based on conventional numerical methods such as computational fluid dynamics (CFD). As an alternative to the numerical methods, we propose a machine learning (ML) approach to calculate patient-specific hemodynamic parameters. Compared to CFD-based methods, our approach holds the benefit of calculating a patient-specific hemodynamic outcome instantly with little need for computational power. In this proof-of-concept study, we present a deep artificial neural network (ANN) capable of computing hemodynamics for patients with aortic coarctation in a centerline aggregated (i.e., locally averaged) form. Considering the complex relation between vessels shape and hemodynamics on the one hand and the limited availability of suitable clinical data on the other, sufficient accuracy of the ANN may not be achieved with available data only. Therefore another key aspect of this study is the successful augmentation of available clinical data. Using a statistical shape model, additional training data was generated, which substantially increased the ANNs accuracy, showcasing ML-based methods' ability to perform in-silico modeling tasks previously requiring resource-intensive CFD simulations.

<p align='center'><img src='/images/articardio.PNG' width='700'></p>

## Publications

1. P. Yevtushenko, L. Goubergrits, L. Gundelwein, A.A.A. Setio, T. Heimann, H. Ramm, H. Lamecker, T. Kuehne, A. Meyer, and M. Schafstedde, “Deep Learning Based Centerline-Aggregated Aortic Hemodynamics: An Efficient Alternative to Numerical Modelling of Hemodynamics,”  IEEE Journal of Biomedical and Health Informatics, 2021 [link](https://doi.org/10.1109/JBHI.2021.3116764)
