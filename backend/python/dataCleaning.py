import pandas as pd

def clean_data(file_path):
    df = pd.read_csv(file_path)
    cleaned_df = df.dropna()
    cleaned_df.to_csv('cleaned_data.csv', index=False)
    print("Script executed successfully")

    return cleaned_df

if __name__ == "__main__":
    clean_data('your_data_file.csv')
