import pandas as pd

def read_path(file_name: str):
    data = pd.read_csv('../data/{file_name}', delimiter=';')
    return data