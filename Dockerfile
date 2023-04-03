FROM --platform=linux/amd64 python:latest
EXPOSE 8888
WORKDIR /usr/analysis
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
