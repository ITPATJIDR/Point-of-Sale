FROM node:16-alpine
ENV MONGODB_URI mongodb+srv://admin:admin@pointofsale.y6vujfa.mongodb.net/?retryWrites=true&w=majority

RUN mkdir -p /usr/app/
WORKDIR /usr/app

COPY ./ ./ 
RUN npm install

EXPOSE 5000
CMD ["npm","run","server"]

