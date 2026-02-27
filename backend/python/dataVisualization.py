import pandas as pd
import matplotlib.pyplot as plt

def plot_age_distribution(file_path):
    df = pd.read_csv(file_path)
    df['age'].value_counts().plot(kind='bar')
    plt.title('Age Distribution')
    plt.xlabel('Age')
    plt.ylabel('Count')
    plt.savefig('age_distribution.png')
    print("Script executed successfully")
