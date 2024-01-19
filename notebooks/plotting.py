import matplotlib.pyplot as plt

def init_plot(figsize=(8,4)):
    fig, ax = plt.subplots(figsize=figsize)
    plt.tight_layout()
    return fig, ax