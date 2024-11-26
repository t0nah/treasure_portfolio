# Treasure Onah Portfolio

This repository contains the source code for Treasure's Portfolio website showcasing course work and projects. This project was built using react and was packaged and deployed using Docker

## Clone the Repository

`git clone https://github.com/t0nah/treasure_portfolio.git`
`cd treasure-portfolio `

## Build the Docker Image

Run the docker build in the project's directory

`docker build -t treasure_onah_coding_assignment_14`

## Run the container

Once the image is built, run the container on port 5575

`docker run -d -p 5575:5575 --name treasure_onah_coding_assignment14_container treasure_onah_coding_assignment_14`

## Access the Application

The website should be visible at `http://localhost:5575`
