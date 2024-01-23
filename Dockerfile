# pull official base image
FROM node:21.6.0

# set working directory
WORKDIR /azmi_oualid_site

# add `/app/node_modules/.bin` to $PATH
ENV PATH /azmi_oualid_site/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install 
RUN npm install react-scripts@3.4.1 -g

# add app
COPY . ./

EXPOSE 5173

# start app
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]