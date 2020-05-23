import pickle
import os
import keras
import numpy as np
import pandas as pd
import warnings
warnings.filterwarnings('ignore')
os.environ['KMP_DUPLICATE_LIB_OK']='True'


from sklearn.metrics import accuracy_score, classification_report, confusion_matrix, roc_curve
from sklearn.neural_network import MLPClassifier
from sklearn.svm import SVC
from sklearn.tree import DecisionTreeClassifier
from sklearn.linear_model import LogisticRegression
from keras.models import Sequential
from keras.layers import Dense
from keras import backend as K


from dataInputFormat import CategoricalDataInputFormatter, LabelledDataInputFormatter
from readFinalDataset import FinalT20DataSet

rfd = FinalT20DataSet()
dIFLabelled = LabelledDataInputFormatter()
dIFCategorical = CategoricalDataInputFormatter()


class SupportVectorMachineClassifier:
    def __init__(self):
        pass

    def train_svm_model(self):
        rfd.read_t20_labelled_data_set()
        self.trainedSVMClassifier = SVC(kernel="linear")
        self.trainedSVMClassifier.fit(rfd.X_train, rfd.Y_train)

    def dump_svm_pickle(self):
        svm_pickle_file = "Pickle_SVMClf.pkl"
        svm_pickled_model = open(svm_pickle_file, 'wb')
        pickle.dump(self.trainedSVMClassifier, svm_pickled_model)
        svm_pickled_model.close()

    def load_svm_pickle(self):
        svm_pickle_file = "Pickle_SVMClf.pkl"
        svm_pickled_model = open(svm_pickle_file, 'rb')
        self.svm_classifier = pickle.load(svm_pickled_model)

    def accuracy_check_for_t20_data_set(self):
        rfd.read_t20_labelled_data_set()
        print("\nSVM Classifier for T20 Data set:")
        test_predicted_for_t20_data_set = self.trainedSVMClassifier.predict(rfd.X_test)
        print("Accuracy for Testing T20 Data set: ", accuracy_score(rfd.Y_test, test_predicted_for_t20_data_set))
        train_predicted_for_t20_data_set = self.trainedSVMClassifier.predict(rfd.X_train)
        print("Accuracy for Training  T20 Data set:", accuracy_score(rfd.Y_train, train_predicted_for_t20_data_set))
        unique_label = np.unique([rfd.Y_test, test_predicted_for_t20_data_set])
        classes = ['Afghanistan', 'Australia', 'Bangladesh', 'England', 'India', 'Ireland', 'Namibia','Netherlands', 'New Zealand', 'Oman', 'P.N.G.', 'Pakistan', 'Scotland', 'South Africa','Sri Lanka', 'West Indies']
        print("Confusion Matrix for Support Vector Machine  :\n", confusion_matrix(rfd.Y_test, test_predicted_for_t20_data_set, labels=unique_label))
        print("Classification report for Training  T20 Data set:\n", classification_report(rfd.Y_test, test_predicted_for_t20_data_set))
        print("Accuracy score:\n", accuracy_score(rfd.Y_test, test_predicted_for_t20_data_set))

    def run_svm_model(self, input_data_prediction, t1, t2):
        winner_team = self.svm_classifier.predict([input_data_prediction])

        return winner_team[0]


class LogisticRegresssionClassifier:
    def __init__(self):
        pass

    def train_lr_model(self):
        rfd.read_t20_labelled_data_set()
        self.trainedLRClassifier = LogisticRegression(multi_class='ovr', random_state=0)
        self.trainedLRClassifier.fit(rfd.X_train, rfd.Y_train)

    def dump_lr_pickle(self):
        lr_pickle_file = "Pickle_LRClf.pkl"
        lr_pickled_model = open(lr_pickle_file, 'wb')
        pickle.dump(self.trainedLRClassifier, lr_pickled_model)
        lr_pickled_model.close()

    def load_lr_pickle(self):
        lr_pickle_file = "Pickle_LRClf.pkl"
        lr_pickled_model = open(lr_pickle_file, 'rb')
        self.lr_classifier = pickle.load(lr_pickled_model)

    def accuracy_check_for_t20_data_set(self):
        rfd.read_t20_labelled_data_set()
        print("\nLR Classifier for T20 Data set:")
        test_predicted_for_t20_data_set = self.trainedLRClassifier.predict(rfd.X_test)
        print("Accuracy for Testing T20 Data set: ", accuracy_score(rfd.Y_test, test_predicted_for_t20_data_set))
        train_predicted_for_t20_data_set = self.trainedLRClassifier.predict(rfd.X_train)
        print("Accuracy for Training  T20 Data set:", accuracy_score(rfd.Y_train, train_predicted_for_t20_data_set))
        print("Confusion Matrix for Logistic Regression:\n", confusion_matrix(rfd.Y_test, test_predicted_for_t20_data_set))
        print("Classification report for Training  T20 Data set:\n", classification_report(rfd.Y_test, test_predicted_for_t20_data_set))

    def run_lr_model(self, input_data_prediction, t1, t2):
        winner_team = self.lr_classifier.predict([input_data_prediction])

        return winner_team[0]


class MultilayerPerceptronClassifier:
    def __init__(self):
        self.trained_mlp_classifier = MLPClassifier(solver='lbfgs', alpha=1e-5, hidden_layer_sizes=(100, 32),
                                                    random_state=1)

    def train_mlp_model(self):
        rfd.read_t20_categorical_data_set()
        self.trained_mlp_classifier.fit(rfd.X_train, rfd.Y_train)

    def dump_mlp_pickle(self):
        mlp_pickle_file = "Pickle_MLPClf.pkl"
        mlp_pickled_model = open(mlp_pickle_file, 'wb')
        pickle.dump(self.trained_mlp_classifier, mlp_pickled_model)
        mlp_pickled_model.close()

    def load_mlp_pickle(self):
        mlp_pickle_file = "Pickle_MLPClf.pkl"
        mlp_pickled_model = open(mlp_pickle_file, 'rb')
        self.MLPClassifier = pickle.load(mlp_pickled_model)

    def accuracy_check_for_t20_data_set(self):
        rfd.read_t20_categorical_data_set()
        print("\nMultilayer Perceptron for T20 Data set:")
        test_predicted_for_t20_dataset = self.trained_mlp_classifier.predict(rfd.X_test)
        print("Accuracy forT 20 Testing  Data set:", accuracy_score(rfd.Y_test, test_predicted_for_t20_dataset))
        train_predicted_for_t20_dataset = self.trained_mlp_classifier.predict(rfd.X_train)
        print("Accuracy for Training  T20 Data set:", accuracy_score(rfd.Y_train, train_predicted_for_t20_dataset))
        #print("Confusion Matrix:", confusion_matrix(rfd.Y_test, test_predicted_for_t20_dataset))
        print("Classification report for Training  T20 Data set:\n", classification_report(rfd.Y_test, test_predicted_for_t20_dataset))


    def run_mlp_model(self, input_data_prediction, t1, t2):
        our_prediction = self.MLPClassifier.predict_proba([input_data_prediction])

        dIFCategorical.hashing_target_winners()

        total_prediction = our_prediction[0][dIFCategorical.winnerIndex[t1]] + our_prediction[0][
            dIFCategorical.winnerIndex[t2]]
        prediction_t1 = (our_prediction[0][dIFCategorical.winnerIndex[t1]] / total_prediction) * 100
        prediction_t2 = (our_prediction[0][dIFCategorical.winnerIndex[t2]] / total_prediction) * 100

        prediction_t1 = format(float(prediction_t1), '.4f')
        prediction_t2 = format(float(prediction_t2), '.4f')

        if dIFCategorical.winnerIndex[t1] in [1, 6, 8, 13, 15, 17, 18, 21] and float(prediction_t1) < 10.0:
            prediction_t1 = float(prediction_t1) + 20
            prediction_t2 = float(prediction_t2) - 20
        elif dIFCategorical.winnerIndex[t1] in [1, 6, 8, 13, 15, 17, 18, 21] and float(prediction_t1) < 20.0:
            prediction_t1 = float(prediction_t1) + 10
            prediction_t2 = float(prediction_t2) - 10

        if dIFCategorical.winnerIndex[t2] in [1, 6, 8, 13, 15, 17, 18, 21] and float(prediction_t2) < 10.0:
            prediction_t2 = float(prediction_t2) + 20
            prediction_t1 = float(prediction_t1) - 20
        elif dIFCategorical.winnerIndex[t2] in [1, 6, 8, 13, 15, 17, 18, 21] and float(prediction_t2) < 20.0:
            prediction_t2 = float(prediction_t2) + 10
            prediction_t1 = float(prediction_t1) - 10

        winner_team = ""
        if prediction_t1 > prediction_t2:
            winner_team = t1
        else:
            winner_team = t2

        return winner_team


class T20DTClassifier:
    def __init__(self):
        self.trainedDecisionTreeClassifier = DecisionTreeClassifier()

    def train_dt_model(self):
        rfd.read_t20_labelled_data_set()
        self.trainedDecisionTreeClassifier.fit(rfd.X_train, rfd.Y_train)

    def dump_dt_pickle(self):
        dt_pickle_file = "Pickle_DTClf.pkl"
        dt_pickled_model = open(dt_pickle_file, 'wb')
        pickle.dump(self.trainedDecisionTreeClassifier, dt_pickled_model)
        dt_pickled_model.close()

    def load_dt_pickle(self):
        dt_pickle_file = "Pickle_DTClf.pkl"
        dt_pickled_model = open(dt_pickle_file, 'rb')
        self.DecisionTreeClassifier = pickle.load(dt_pickled_model)

    def accuracy_check_for_t20_data_set(self):
        rfd.read_t20_labelled_data_set()
        print("\nDecision Tree Classifier for T20 Data set:")
        test_predicted_for_t20_dataset = self.trainedDecisionTreeClassifier.predict(rfd.X_test)
        print("Accuracy T20 Testing Data set:", accuracy_score(rfd.Y_test, test_predicted_for_t20_dataset))
        train_predicted_for_t20_dataset = self.trainedDecisionTreeClassifier.predict(rfd.X_train)
        print("Accuracy T20  Training Data set:", accuracy_score(rfd.Y_train, train_predicted_for_t20_dataset))
        print("Confusion Matrix for Decision Tree:\n", confusion_matrix(rfd.Y_test, test_predicted_for_t20_dataset))
        print("Classification report for Testing  T20 Data set:\n", classification_report(rfd.Y_test, test_predicted_for_t20_dataset))


    def run_dt_model(self, input_data_prediction, t1, t2):
        our_prediction = self.DecisionTreeClassifier.predict([input_data_prediction])

        dIFCategorical.hashing_target_winners()
        index_team1 = dIFCategorical.winnerIndex[t1]
        index_team2 = dIFCategorical.winnerIndex[t2]

        winner_team = ""
        if our_prediction[0][index_team1] == 1:
            winner_team = t1
        elif our_prediction[0][index_team2] == 1:
            winner_team = t2
        else:
            winner_team = "Decision Tree Classifier can not predict!"

        return winner_team


class ArtificialNeuralNetowrkClassifier:

    def __init__(self):
        self.trained_ann_classifier = None
        self.ann_classifier = Sequential()

    def train_ann_model(self):
        # Initialize the classifier
        rfd.read_t20_categorical_data_set_forANN()

        # Adding the input layer and first hidden layer
        self.ann_classifier.add(Dense(32, kernel_initializer="uniform", activation='relu', input_dim=135))

        # Adding the output layer
        self.ann_classifier.add(Dense(16, activation='softmax'))

        # Compiling the ANN
        self.ann_classifier.compile(optimizer='adam', loss='categorical_crossentropy', metrics=["accuracy"])

        # Fitting the ANN to the training set
        self.ann_classifier.fit(x=rfd.X_train, y=rfd.Y_train, batch_size=10, epochs=100)


    def dump_ann_pickle(self):
        ann_pickle_file = "Pickle_ANNClf.pkl"
        ann_pickled_model = open(ann_pickle_file, 'wb')
        pickle.dump(self.ann_classifier, ann_pickled_model)
        ann_pickled_model.close()

    def load_ann_pickle(self):
        ann_pickle_file = "Pickle_ANNClf.pkl"
        ann_pickled_model = open(ann_pickle_file, 'rb')
        self.ann_classifier = pickle.load(ann_pickled_model)

    def accuracy_check_for_t20_data_set(self):
        rfd.read_t20_categorical_data_set_forANN()
        print("\nArtificial Neural Network Classifier for T20 Data set:")
        test_predicted_for_t20_dataset = self.ann_classifier.predict(rfd.X_test)
        test_predicted_for_t20_dataset = (test_predicted_for_t20_dataset > 0.5)
        test_predicted_for_t20_dataset = np.argmax(test_predicted_for_t20_dataset, axis=1)
        print(test_predicted_for_t20_dataset)
        rfd.Y_test = (rfd.Y_test > 0.5)
        rfd.Y_test = np.argmax(rfd.Y_test, axis=1)
        print(rfd.Y_test)
        print("Accuracy T20 Testing Data set:", accuracy_score(rfd.Y_test, test_predicted_for_t20_dataset))
        train_predicted_for_t20_dataset = self.ann_classifier.predict(rfd.X_train)
        train_predicted_for_t20_dataset = (train_predicted_for_t20_dataset > 0.5)
        train_predicted_for_t20_dataset = np.argmax(train_predicted_for_t20_dataset, axis=1)
        rfd.Y_train = (rfd.Y_train > 0.5)
        rfd.Y_train = np.argmax(rfd.Y_train, axis=1)
        print("Accuracy T20  Training Data set:", accuracy_score(rfd.Y_train, train_predicted_for_t20_dataset))
        print("Confusion Matrix for Artificial Neural Network:\n", confusion_matrix(rfd.Y_test, test_predicted_for_t20_dataset))
        classes = ['Afghanistan', 'Australia', 'Bangladesh', 'England', 'India', 'Ireland', 'Namibia','Netherlands', 'New Zealand', 'Oman', 'P.N.G.', 'Pakistan', 'Scotland', 'South Africa','Sri Lanka', 'West Indies']
        print("Classification report for Testing  T20 Data set:\n", classification_report(rfd.Y_test, test_predicted_for_t20_dataset, target_names=classes))

    def run_ann_model(self, input_data_prediction, t1, t2):
        our_prediction = self.ann_classifier.predict_proba([input_data_prediction])
        K.clear_session()
        print(our_prediction)
        dIFCategorical.hashing_target_winners()

        total_prediction = our_prediction[0][dIFCategorical.winnerIndex[t1]] + our_prediction[0][
            dIFCategorical.winnerIndex[t2]]
        prediction_t1 = (our_prediction[0][dIFCategorical.winnerIndex[t1]] / total_prediction) * 100
        prediction_t2 = (our_prediction[0][dIFCategorical.winnerIndex[t2]] / total_prediction) * 100

        prediction_t1 = format(float(prediction_t1), '.4f')
        prediction_t2 = format(float(prediction_t2), '.4f')

        if dIFCategorical.winnerIndex[t1] in [1, 6, 8, 13, 15, 17, 18, 21] and float(prediction_t1) < 10.0:
            prediction_t1 = float(prediction_t1) + 20
            prediction_t2 = float(prediction_t2) - 20
        elif dIFCategorical.winnerIndex[t1] in [1, 6, 8, 13, 15, 17, 18, 21] and float(prediction_t1) < 20.0:
            prediction_t1 = float(prediction_t1) + 10
            prediction_t2 = float(prediction_t2) - 10

        if dIFCategorical.winnerIndex[t2] in [1, 6, 8, 13, 15, 17, 18, 21] and float(prediction_t2) < 10.0:
            prediction_t2 = float(prediction_t2) + 20
            prediction_t1 = float(prediction_t1) - 20
        elif dIFCategorical.winnerIndex[t2] in [1, 6, 8, 13, 15, 17, 18, 21] and float(prediction_t2) < 20.0:
            prediction_t2 = float(prediction_t2) + 10
            prediction_t1 = float(prediction_t1) - 10

        winner_team = ""
        if prediction_t1 > prediction_t2:
            winner_team = t1
        else:
            winner_team = t2

        return winner_team