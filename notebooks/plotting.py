import matplotlib.pyplot as plt


def init_plot(figsize: tuple=(8,4), constrained_layout: bool=True):
    fig, ax = plt.subplots(figsize=figsize, constrained_layout=constrained_layout)
    return fig, ax


def save_plot(fig, name: str, dpi: int=300):
    fig.savefig(f'../plots/{name}.png', dpi=dpi)