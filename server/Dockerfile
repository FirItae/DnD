# Base python package
FROM python:3.6

# Working directory
WORKDIR /server

# Copy the dependencies
#COPY requirements.txt requirements.txt

# Install the dependencies
#RUN pip3 install -r requirements.txt

# Copy the files
#COPY . .
RUN pip3 install flask==2.0.2 flask_cors==3.0.10

EXPOSE 5000

# Executable commands
#CMD ["python", "app.py"]