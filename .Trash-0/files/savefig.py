import matplotlib.pyplot as plt

def plot_png(name: str, dpi: int=300):
    fig.savefig(f'../plots/{name}.png', dpi=dpi)