import math
from sklearn.metrics import mean_squared_error, mean_absolute_error, max_error, r2_score


def root_mean_sq_err(actual, predicted):
    mse = mean_squared_error(actual, predicted)
    rmse = math.sqrt(mse)
    return rmse


def mean_abs_err(actual, predicted):
    mae = mean_absolute_error(actual, predicted)
    return mae


def max_err(actual, predicted):
    max = max_error(actual, predicted)
    return max