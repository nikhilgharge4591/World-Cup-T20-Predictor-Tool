import sys
from readFinalDataset import FinalT20DataSet

rfd = FinalT20DataSet()


class LabelledDataInputFormatter:
    def __init__(self):
        self.our_venues = {'Team1_Away': 129, 'Team1_Home': 130, 'Team1_Neutral': 131, 'Team2_Away': 132,
                           'Team2_Home': 133, 'Team2_Neutral': 134}
        self.our_innings = {'Team1_1Inning': 125, 'Team1_2Inning': 126, 'Team2_1Inning': 127, 'Team2_2Inning': 128}
        self.our_grounds = {}
        self.ourTeams_2 = {}
        self.our_teams_1 = {}

    def hash_all_inputs(self):
        self.hashing_team1()
        self.hashing_team2()
        self.hashing_grounds()
        self.hashing_innings()
        self.hashing_venue()

    def hashing_team1(self):
        rfd.read_t20_labelled_data_set()
        for i, teams in enumerate(list(rfd.t20_data_set.columns)):
            if i == 16:
                break
            team_name = str(teams)
            team_name = team_name.split("Team 1_", 1)[-1]
            self.our_teams_1[team_name] = i

    def hashing_team2(self):
        rfd.read_t20_labelled_data_set()
        for i, teams in enumerate(list(rfd.t20_data_set.columns)):
            if i < 16:
                continue
            if i == 32:
                break
            team_name = str(teams)
            team_name = team_name.split("Team 2_", 1)[-1]
            self.ourTeams_2[team_name] = i

    def hashing_grounds(self):
        rfd.read_t20_labelled_data_set()
        for i, grounds in enumerate(list(rfd.t20_data_set.columns)):
            if i < 32:
                continue
            if i == 125:
                break
            ground_name = str(grounds)
            ground_name = ground_name.split("Ground_", 1)[-1]
            self.our_grounds[ground_name] = i

    def hashing_innings(self):
        pass

    def hashing_venue(self):
        pass


class CategoricalDataInputFormatter:
    def __init__(self):
        self.winnerIndex = {}
        self.our_venues = {'Team1_Away': 129, 'Team1_Home': 130, 'Team1_Neutral': 131, 'Team2_Away': 132,
                           'Team2_Home': 133, 'Team2_Neutral': 134}
        self.our_innings = {'Team1_1Inning': 125, 'Team1_2Inning': 126, 'Team2_1Inning': 127, 'Team2_2Inning': 128}
        self.our_grounds = {}
        self.ourTeams_1 = {}
        self.ourTeams_2 = {}

    def hash_all(self):
        self.hashing_team1()
        self.hashing_team2()
        self.hashing_grounds()
        self.hashing_innings()
        self.hashing_venue()
        self.hashing_target_winners()

    def hashing_team1(self):
        rfd.read_t20_categorical_data_set()
        for i, teams in enumerate(list(rfd.t20_data_set.columns)):
            if i == 16:
                break
            team_name = str(teams)
            team_name = team_name.split("Team 1_", 1)[-1]
            self.ourTeams_1[team_name] = i

    def hashing_team2(self):
        rfd.read_t20_categorical_data_set()
        for i, teams in enumerate(list(rfd.t20_data_set.columns)):
            if i < 16:
                continue
            if i == 32:
                break
            team_name = str(teams)
            team_name = team_name.split("Team 2_", 1)[-1]
            self.ourTeams_2[team_name] = i

    def hashing_grounds(self):
        rfd.read_t20_categorical_data_set()
        for i, grounds in enumerate(list(rfd.t20_data_set.columns)):
            if i < 32:
                continue
            if i == 125:
                break
            ground_name = str(grounds)
            ground_name = ground_name.split("Ground_", 1)[-1]
            self.our_grounds[ground_name] = i

    def hashing_innings(self):
        pass

    def hashing_venue(self):
        pass

    def hashing_target_winners(self):
        rfd.read_t20_categorical_data_set()
        counter = 0
        for i, teams in enumerate(list(rfd.t20_data_set.columns)):
            if i < 135:
                continue

            team_name = str(teams)
            team_name = team_name.split("Winner_", 1)[-1]
            self.winnerIndex[team_name] = counter
            counter += 1
