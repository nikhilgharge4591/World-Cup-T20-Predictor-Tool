import pandas as pd
from sklearn.model_selection import train_test_split
import keras
from keras.utils import to_categorical

class FinalT20DataSet:
    def __init__(self):
        pass

    def read_t20_categorical_data_set(self):
        self.t20_data_set = pd.read_csv('T20_Categorical_Dataset.csv')
        target_columns = self.t20_data_set.columns[135:151]
        feature_columns = self.t20_data_set.columns[0:135]
        target_variable = self.t20_data_set[target_columns]
        feature_variables = self.t20_data_set[feature_columns]
        X = feature_variables
        Y = target_variable
        self.X_train, self.X_test, self.Y_train, self.Y_test = train_test_split(X, Y, test_size=0.20, random_state=100)

    def read_t20_labelled_data_set(self):
        self.t20_data_set = pd.read_csv('T20_Labelled_Dataset.csv')
        target_columns = self.t20_data_set.columns[135]
        feature_columns = self.t20_data_set.columns[0:135]
        target_variable = self.t20_data_set[target_columns]
        feature_variables = self.t20_data_set[feature_columns]
        X = feature_variables
        Y = target_variable
        self.X_train, self.X_test, self.Y_train, self.Y_test = train_test_split(X, Y, test_size=0.20, random_state=100)


    def read_t20_categorical_data_set_forANN(self):

        self.t20_data_set = pd.read_csv('T20_Categorical_Dataset.csv')
        target_columns = self.t20_data_set.columns[135:151]
        feature_columns = self.t20_data_set.columns[0:135]
        target_variable = self.t20_data_set[target_columns]
        feature_variables = self.t20_data_set[feature_columns]
        X = feature_variables
        Y = target_variable
        self.X_train, self.X_test, self.Y_train, self.Y_test = train_test_split(X.values, Y.values, test_size=0.20, random_state=100)

