import sys
import pickle
from ClassificationModels import MultilayerPerceptronClassifier, T20DTClassifier, SupportVectorMachineClassifier, LogisticRegresssionClassifier, ArtificialNeuralNetowrkClassifier

if __name__ == '__main__':

 SVMClassifier = SupportVectorMachineClassifier()
MLPClassifier = MultilayerPerceptronClassifier()
DTClassifier = T20DTClassifier()
LRClassifier = LogisticRegresssionClassifier()
ANNClassifier = ArtificialNeuralNetowrkClassifier()
	
SVMClassifier.train_svm_model()
SVMClassifier.accuracy_check_for_t20_data_set()
SVMClassifier.dump_svm_pickle()

MLPClassifier.train_mlp_model()
MLPClassifier.accuracy_check_for_t20_data_set()
MLPClassifier.dump_mlp_pickle()

DTClassifier.train_dt_model()
DTClassifier.accuracy_check_for_t20_data_set()
DTClassifier.dump_dt_pickle()

LRClassifier.train_lr_model()
LRClassifier.accuracy_check_for_t20_data_set()
LRClassifier.dump_lr_pickle()

ANNClassifier.train_ann_model()
ANNClassifier.accuracy_check_for_t20_data_set()
ANNClassifier.dump_ann_pickle()
	
