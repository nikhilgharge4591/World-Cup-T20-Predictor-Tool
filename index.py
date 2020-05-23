import sys, os
from ClassificationModels import MultilayerPerceptronClassifier, T20DTClassifier, SupportVectorMachineClassifier, LogisticRegresssionClassifier, ArtificialNeuralNetowrkClassifier
import dataInputFormat
from flask import Flask, render_template, request

app = Flask(__name__)

# index page to the web application
@app.route('/')
def index_page():
    return render_template('index.html')


@app.route("/checkResults", methods=['POST'])
def check_winner():
    selected_team1 = request.form['team1']
    selected_team2 = request.form['team2']
    selected_innings_t1 = request.form['innings_t1']
    selected_venue_t1 = request.form['venue_t1']
    selected_ground = request.form['ground']
    selected_choice = request.form['choice']

    return get_model_results(selected_ground, int(selected_innings_t1), int(selected_venue_t1), selected_team1,
                             selected_team2, int(selected_choice))


def get_model_results(ground, innings, venue, team1, team2, choice):
    ground = ground[1:-1]
    team1 = team1[1:-1]
    team2 = team2[1:-1]

    svm_clf = SupportVectorMachineClassifier()
    mlp_clf = MultilayerPerceptronClassifier()
    dt_clf = T20DTClassifier()
    LRClassifier = LogisticRegresssionClassifier()
    ANNClassifier = ArtificialNeuralNetowrkClassifier()

    d_if = dataInputFormat.CategoricalDataInputFormatter()

    svm_clf.load_svm_pickle()
    dt_clf.load_dt_pickle()
    mlp_clf.load_mlp_pickle()
    LRClassifier.load_lr_pickle()
    #ANNClassifier.load_ann_pickle()

    d_if.hash_all()

    input_data = [0] * 135
    if innings == 1:
        innings_team1 = "Team1_1Inning"
        innings_team2 = "Team2_2Inning"
    elif innings == 2:
        innings_team1 = "Team1_2Inning"
        innings_team2 = "Team2_1Inning"

    if venue == 1:
        venue_team1 = "Team1_Home"
        venue_team2 = "Team2_Away"
    elif venue == 2:
        venue_team1 = "Team1_Away"
        venue_team2 = "Team2_Home"
    elif venue == 3:
        venue_team1 = "Team1_Neutral"
        venue_team2 = "Team2_Neutral"

    input_data[d_if.ourTeams_1[team1]] = 1
    input_data[d_if.ourTeams_2[team2]] = 1
    input_data[d_if.our_grounds[ground]] = 1
    input_data[d_if.our_innings[innings_team1]] = 1
    input_data[d_if.our_innings[innings_team2]] = 1
    input_data[d_if.our_venues[venue_team1]] = 1
    input_data[d_if.our_venues[venue_team2]] = 1

    if choice == 1:
        return svm_clf.run_svm_model(input_data, team1, team2)
    elif choice == 2:
        return dt_clf.run_dt_model(input_data, team1, team2)
    elif choice == 3:
        return mlp_clf.run_mlp_model(input_data, team1, team2)
    elif choice == 4:
        return LRClassifier.run_lr_model(input_data, team1, team2)
    elif choice == 5:
        return mlp_clf.run_mlp_model(input_data, team1, team2)


if __name__ == '__main__':
    app.run(debug=True)
    os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
