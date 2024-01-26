# How to create a React App and dockerize it:

## Download Vite so you can create a react app:

    1. Open wsl terminal in VS CODE and run this command: npm create vite@latest.
    2. Type Y and press Enter.
    3. Name your react project and press enter.
    4. run this command in the terminal to run your react app: npm run dev

## Now we dockerize the app:

1. Create a Dockerfile in the react app folder.

2. Fill it up with the specific lines needed:
        -FROM: (the base image that the container will run on)
        -WORKDIR: (The working directory in which the subsequent commands will be run in)
        -ENV PATH: (add the node modules/PATH so that the modules can be installed without specifying the path)
        -COPY packages: (Copy packages so that we avoid reinstalltion of packages)
        -EXPOSE: (port number that) informs docker of what port to listen to.\
        -CMD: (This specifies the commands to execute when you run a container)

so an exmaple of this would be:

            FROM node:21.6.0
            WORKDIR /azmi_oualid_site
            ENV PATH /azmi_oualid_site/node_modules/.bin:$PATH
            COPY package.json ./
            COPY package-lock.json ./
            RUN npm install
            RUN npm install react-scripts@3.4.1 -g
            COPY . ./
            EXPOSE 5173
            CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

3. Now run this command in the terminal do build the image: "docker build -t (image_name) ."

4. now run this command in the terminal to run the container: "docker run -p 7775:5173 (image_name)".


## How to Run this dockerized React application.

1. Clone the repository by clicking on the "<> Code" green button, and following the instructions to clone the repository.
2. In vs code, go to the project directory and open a new terminal.
3. Build the docker image by executing this command : "docker build -t react .".
4. Run the docker container in the 7775 Port using this command : "docker run -p 7775:5173".
5. Open your browser and paste this link to go to the application : "http://127.0.0.1:7775".