import matplotlib.pyplot as plt
# set plot font to Arial
def setup_font():
    use_liberation_fonts = True
    if use_liberation_fonts:
        plt.rcParams.update({
            'font.family':'sans-serif',
            'font.sans-serif':['Liberation Sans'],
        })