---
title: "MLOps: Phase Zero"
layout: page
---


# Phase Zero: “What is the business problem that we are trying to solve here?”

The most important phase in any software project is to understand the business problem and create requirements.
ML-based software is no different here.
The initial step includes a thorough study of business problems and requirements. 
These requirements are translated into the model objectives and the model outputs, possible errors and minimum success for launching need to be specified. The most useful question to continue working on the AI/ML solution is ***"how costly are wrong predictions?"*** Answering that question will define the feasibility of the ML project.

Concretely, in asking *how to implement AI/ML*, we follow the next guideline:

1. Should identify the concrete ***process*** that might be powered by AI/ML. 
2. Decompose that process into a directed graph of ***tasks***.
3. Identify where humans can be removed from the task, meaning, what task can be replaced by a prediction element such as ML model?
4. Estimating the ROI for implementing an AI/ML tool to perform each task.
5. Rank-order the AI/ML in terms of ROI
6. Start from the top of the list and implement the AI/ML.

Each prediction task of the entire process needs to be decomposed into its constituent elements in order to see where prediction (ML model) can be introduced. One convenient way to achieve such decomposition is to use the *AI Canvas*, which assists and helps to structure the breakdown process. It also helps to articulate exactly what is needed to predict, how we react on errors made by the prediction algorithm, and what are the outcome possibilities.

The *AI Canvas* was proposed by A. Agrawal et. al in their book *"Prediction Machines. The Simple Economics of Artificial Intelligence." 2018*, and "is an aid for contemplating, building, and assessing AI tools". The example of such canvas and the description of each component is provided below:

![AI Canvas by Agrawal et.al](img/AI-Canvas.png)

[Figure Source](https://hbr.org/2018/04/a-simple-tool-to-start-making-decisions-with-the-help-of-ai)


## Machine Learning Canvas

While the above AI canvas represents a high-level structure of the ML/AI implementation, at some point we would like to specify both the vision for the ML system and the specifics of the system. To achieve those goals there is another variant of the *Machine Learning Canvas*, as suggested by [Louis Dorard](https://www.louisdorard.com/). This canvas structures the ML project and helps to specify the core requirements to realise the project. Initially, we identify the objective by answering a question *what do we want to achieve for the end-users of the predictive system?* Next, we connect the business goal to the ML task. 

The central part of the canvas is the *Value Proposition* building block, which describes products or services that create some value for customers. Typically, we answer the following questions: *What* problems are we trying to solve? *Why* is it important? *Who* is the end-user of our system? What value does the ML project deliver to the end-user? How will they use your outputs/predictions? 

The remaining canvas is divided into three broad categories: *Learning, Prediction,* and *Evaluation*. The Learning category is responsible to specify how the ML model will be learned. The Prediction part describes how the prediction is performed. Finally, the Evaluation category contains methods and metrics for the ML model and the system evaluation. The following machine learning canvas is an example provided by [Louis Dorard](https://www.louisdorard.com/): 

![Machine Learning Canvas](img/machine-learning-canvas.jpeg)

In total, the Machine Learning Canvas is structured as ten compound blocks, each of which is focused on one aspect of the future ML application:

### Value Proposition
This is one of the crucial blocks in the whole canvas. Here we should answer three important questions:

1. *What* is the problem? What objective are we serving? What are we trying to do for the end-user? 
2. *Why* is it important?
3. *Who* is the end-user? Can we specify the *persona*?

[*Narrowing the domain*](https://cdixon.org/2015/02/01/the-ai-startup-idea-maze) of the problem could be useful for the next question regarding required data. For example, instead of creating an universal chat-bot, build a bot that helps with scheduling conference-calls. 

### Data Sources
In this block, we clarify all available and possible data sources to be used for ML task. As example, we might consider using:

 + Internal/external databases.
 + REST APIs to gather data.
 + Static files.
 + Web scraping.
 + Output of other (ML) systems.
 + Open source data sets.

Furthermore, we should clarify the *hidden costs* of machine learning application, such as:

 + How expensive could get the storage and processing for rich media like images, sound, or video?

### ML Task
After clarifying what data is avaiable, we brainstorm what type of ML should be used. Here are some examples:

 + Supervised or unsupervised learing.
 + If superwised, what type of ML task should be taken: classification, regression, or ranking?
 + If classification, will it be binary- or multiclass classification task.
 + What is the input for a prediction task? 
    + e.g. E-mail text.
 + What is the output of the prediction task?
    + e.g. "spam" and "regular"
 + How complex is our ML model could get?
    + e.g. is our model a combination of other ML models? Do we employ ensemble learning? How many hidden layers included in the deep learning model?
 + What is the complexity costs, such as training and inference time, for the above models?
     
### Features (Engineering)

As every ML algorithm requires input data in form of features, we should clarify how should the input data be represented. How do we extract features from raw sources. Consider to include domain experts to specify what data aspects are most important for the particular ML task.

### Offline Evaluation

Before any implementation of the ML model training, we would need to specify and set up the methods and metrics to evaluate the system prior to deployment. Here we would need to specify:

 + What evaluation metrics should be used?
    + Precision, Recall, F-1 measure.
    + Accuracy.
 + What is the meaning of model prediction errors such as *false positives* and *false negatives*?
 + What is our test data?
 + How big should be our test data to be confident that model performs well?

### Decisions

After specification the ML task, Feature engineering, and the evaluation details, the next is to specify: 

+ How are prediction used to make decisions?
+ How the end-user interacts with the model predictions?
    + e.g. What happens if the incoming e-mail is classified as "spam"?
+ Are there *hidden costs* in decision making, such as *human in the loop*?

Such information is required to decide later how to deploy the ML model.


### Making Predictions

This block includes the information about when we make prediction on new inputs. 

+ When predictions should be available? 
+ Are predictions made *on the fly* for each data point or on a *batch* of the input data?
+ How computationally complex could the *model inference* get in the application?
+ Is there *human in the loop* to support in making predictions?

For example:

+ New predictions are made each time when user opens the app, such as recommendations.
+ New predictions are made on request.
+ New predictions are made on schedule.

### Collecting Data

Related to the *Making Predictions*, the *Collecting Data* block gathers the information about the new data that should be collected in order to re-train the ML model. In this way, we specify how we prevent the *ML model decay* phenomena. Further questions to answer in this block are:

 + (If required,) How do we label the new data?
 + How expensive is to collect new data?
 + Is there *human in the loop* for the manual cleaning and labeling of the incoming data?

### Building Models
Tightly related to the previous block, the *Building Models* answers questions regarding the updating the ML models, because different ML tasks will require different frequency of model re-training:

 + How often the model should be retrained?
    + e.g. hourly, weekly, or with every new data point.
 + What is the *hidden costs* for model re-training?
    + e.g. do we use cloud resources to perform such tasks? 
 + What is the price policy of the cloud vendor?
 + How long will take to re-train the model?
 + How do we deal with the scaling issues of cloud operations as they can be more complex and costly?
 + Do we plan for change in the tech stack?
    + e.g. how can we deal with the tech stack evolution as new tools and development workflows are emerging in the modern AI?

### Live Evaluation and Monitoring
After deployment, the ML model should be evaluated and here we would need to specify both *model* and *business* metrics, which should correlate.

 + How do we track the system performance?
    + e.g. A/B Testing
 + How do we evaluate the value creation? 
    + e.g users spent less time on inbox.



The effort to fill out these canvas might initiate an existential discussion regarding the *real objective* and *hidden costs* for teh ML-software. Such discussion might result in decision not to implement AI/ML at all.

#### Further reading

 + ["What is THE main reason most ML projects fail?"](https://towardsdatascience.com/what-is-the-main-reason-most-ml-projects-fail-515d409a161f)
 + [The New Business of AI (and How It’s Different From Traditional Software)](https://a16z.com/2020/02/16/the-new-business-of-ai-and-how-its-different-from-traditional-software/)

