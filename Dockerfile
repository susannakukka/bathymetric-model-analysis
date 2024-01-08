FROM --platform=linux/amd64 python:latest
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update -y && apt-get install -y fonts-liberation
EXPOSE 8888
WORKDIR /usr/analysis
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
