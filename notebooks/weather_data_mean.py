import pandas as pd


def numeric_data(df: DataFrame, column_name: str):
    df.replace('-', np.nan)
    df[{column_name}] = pd.to_numeric(df[column_name], errors='coerce')
    mean = df[column_name].mean()
    return mean
    