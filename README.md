##Docker MongoDB Replica
#SI QUIERES TRABAJAR EN LOCAL CON MONGO TIENES QUE HACER LO SIGUIENTE:
docker pull prismagraphql/mongo-single-replica:5.0.3

docker run --name mongo \
 -p 27017:27017 \
 -e MONGO_INITDB_ROOT_USERNAME="usuario" \
 -e MONGO_INITDB_ROOT_PASSWORD="password" \
 -d prismagraphql/mongo-single-replica:5.0.3

#URL connection
DATABASE_URL="mongodb://monty:pass@localhost:27017/db_name?authSource=admin&directConnection=true"

## Conectar a mongo-express:

- Primero creamos una red.
- Luego levantamos el server de mongo con la red creada.
- Luego levantamos mongo-express con la misma red:

  ```bash
  docker run -it --rm -p 8081:8081 --network mongonet -e ME_CONFIG_MONGODB_URL="mongodb://usuario:password@172.18.0.2:27017/chatbot?authSource=admin&directConnection=true" mongo-express
  ```
