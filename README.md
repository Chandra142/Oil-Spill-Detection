# 🌊 Marine Oil Spill Detection using Machine Learning

## 📌 Project Overview
Marine oil spills pose a serious threat to ocean ecosystems, coastal regions, and marine life. Early and accurate detection is critical to minimize environmental damage and enable rapid response.

This project presents a **machine learning–based system** for detecting marine oil spills using **satellite imagery** and **Automatic Identification System (AIS)** vessel data. By combining image processing techniques with classification models, the system aims to automatically identify oil spills and distinguish them from similar surface anomalies such as algal blooms or ship wakes.

---

## 🎯 Objectives
- Develop an automated oil spill detection system using machine learning  
- Utilize satellite imagery and AIS data for improved accuracy  
- Implement classification algorithms such as **SVM** and **Random Forest**  
- Enable real-time or near real-time oil spill monitoring  
- Support environmental agencies in faster decision-making and response  

---

## 🧠 Methodology

### 1. Data Collection
- **Satellite Imagery**: Sentinel-1, MODIS, Landsat  
- **AIS Data**: Vessel movement and activity tracking  

### 2. Data Preprocessing
- Image enhancement (noise reduction, contrast adjustment)
- Feature extraction (texture, shape, spectral features)
- Data normalization
- Handling missing AIS data

### 3. Machine Learning Models
- **Support Vector Machine (SVM)**
- **Random Forest**
- *(Optional)* CNN for advanced image recognition
- K-Means clustering for anomaly detection

### 4. Model Evaluation
- Train-test split (80% training, 20% testing)
- Metrics used:
  - Accuracy
  - Precision
  - Recall
  - F1-score
  - False Positive Rate

---

## 🏗️ System Architecture
1. **Input Layer** – Satellite images and AIS data  
2. **Preprocessing Layer** – Image cleaning and feature extraction  
3. **ML Processing Layer** – Oil spill classification  
4. **Visualization Layer** – GIS-based map output  
5. **Alert System** – Notification for detected oil spills  

---

## 🛠️ Technologies Used

### Programming Language
- Python

### Libraries & Frameworks
- TensorFlow
- Scikit-learn
- OpenCV
- NumPy
- Pandas
- Matplotlib

### Tools & Platforms
- Google Earth Engine
- GDAL
- PostgreSQL / PostGIS
- Jupyter Notebook / VS Code

---

## 💻 Hardware & Software Requirements

### Software
- Windows / Linux
- Python 3.x
- Google Earth Engine API
- Sentinel Hub API

### Hardware
- Intel Core i5 or higher
- Minimum 8GB RAM (16GB recommended)
- NVIDIA GPU (for deep learning models)
- At least 100GB storage

---

## 📊 Expected Outcomes
- Accurate and automated oil spill detection
- Reduced false positives
- Faster response time for authorities
- Cost-effective alternative to manual monitoring
- Scalable system for other marine pollution detection

---

## ⚠️ Limitations & Challenges
- Limited availability of labeled oil spill datasets
- High computational requirements for satellite data processing
- Difficulty in differentiating oil spills from similar surface anomalies
- Real-time processing constraints

---

## 🚀 Future Enhancements
- Integrate deep learning models (CNNs)
- Improve real-time detection performance
- Reduce false positives using additional environmental data
- Expand system to detect other marine pollutants like plastic waste

---

## 👨‍💻 Project Contributors
- **Afzal Khan**
- **Ram Chandra Gupta**
- **Prabhushankar C**

Bachelor of Technology  
Computer Science and Engineering  
Lovely Professional University, Punjab  

---

## 📚 References
- ESA Sentinel-1 SAR Data for Oil Spill Detection  
- NASA Earth Observatory – Marine Pollution Monitoring  
- Bishop, C. M. *Pattern Recognition and Machine Learning*  
- Research papers on ML-based oil spill detection  

---

## 📄 License
This project is developed for academic purposes under Lovely Professional University guidelines.
