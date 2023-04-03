FROM --platform=linux/amd64 continuumio/miniconda
EXPOSE 8888
WORKDIR /usr/analysis
COPY environment.yml ./
RUN conda env create -f environment.yml
ENV CONDA_DEFAULT_ENV analysis
