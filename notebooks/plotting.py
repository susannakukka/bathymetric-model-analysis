import matplotlib.pyplot as plt

def init_plot(figsize=(8,4), constrained_layout=True):
    fig, ax = plt.subplots(figsize=figsize, constrained_layout=constrained_layout)
    return fig, ax