FROM nginx:1.15.2-alpine
COPY ./dist /var/www
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD sed -i "s/_APIENV_/${APIENV}/g"  /var/www/index.html ; nginx -g "daemon off;"