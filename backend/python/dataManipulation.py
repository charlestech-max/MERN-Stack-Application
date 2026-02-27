
def filter_data(df, column, value):
    print("Script executed successfully")

    return df[df[column] > value].head(5)
