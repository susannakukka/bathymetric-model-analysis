from sklearn.linear_model import LinearRegression


def r_sq(model, x, y):
    r2_score = model.score(x, y)
    return r2_score


def interc(model):
    interc = float(model.intercept_)
    return interc


def coeff(model):
    coef = float(model.coef_)
    return coef
    