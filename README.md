
Pruebas realizadas en consola git BASH

Ejercicio 1.1:

docker pull nginx:alpine

docker run -d --name web-examen -p 8080:80 nginx:alpine

docker ps

docker logs web-examen

docker inspect web-examen

docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' web-examen

docker stop web-examen

docker rm web-examen

Evidencias:
<img src="https://i.imgur.com/lGajwn8.png">


Ejercicio 1.2:

docker volume create datos-examen

docker run -d \
  --name db-examen \
  -e POSTGRES_PASSWORD=examen123 \
  -e POSTGRES_DB=testdb \
  -v datos-examen:/var/lib/postgresql/data \
  -p 5432:5432 \
  postgres:15-alpine

docker exec -it db-examen psql -U postgres -d testdb

CREATE TABLE prueba(id SERIAL PRIMARY KEY, nombre TEXT);
INSERT INTO prueba(nombre) VALUES ('Andres'), ('Maria');
SELECT * FROM prueba;


docker ps

docker logs db-examen

docker stop db-examen

docker rm db-examen


docker run -d \
  --name db-examen \
  -e POSTGRES_PASSWORD=examen123 \
  -e POSTGRES_DB=testdb \
  -v datos-examen:/var/lib/postgresql/data \
  -p 5432:5432 \
  postgres:15-alpine


docker exec -it db-examen psql -U postgres -d testdb

SELECT * FROM prueba;


Evidencias:
<img src="https://i.imgur.com/77vETlK.png">

<img src="https://i.imgur.com/Xv7JE7e.png">

<img src="https://i.imgur.com/teJovR2.png">




Parte 2:


docker build -t mi-app-python:examen .

docker run -d --name app-examen -p 5000:5000 mi-app-python:examen

docker ps


# Probando ambos endpoints

curl http://localhost:5000/

curl http://localhost:5000/salud


Verificar Healthcheck

docker ps

docker inspect --format='{{json .State.Health}}' app-examen


Evidencias:

<img src="https://i.imgur.com/2MwpqIl.png">

<img src="https://i.imgur.com/2IeKrMj.png">

<img src="https://i.imgur.com/V7FqTRz.png">


Parte 3:

docker-compose up -d --build

docker-compose ps

Prueba API:
curl http://localhost:3000/

curl http://localhost:3000/salud


Prueba web:
curl http://localhost:8080/

Prueba Logs:
docker-compose logs

docker-compose logs -f api

docker-compose logs -f web

docker-compose logs -f db



docker-compose down

Evidencias:

<img src="https://i.imgur.com/ZTsdORn.png">

<img src="https://i.imgur.com/tXhifbL.png">