def calculate_statistics(df, column):
    mean = df[column].mean()
    median = df[column].median()
    std_dev = df[column].std()
    print("Script executed successfully")
    return mean, median, std_dev
