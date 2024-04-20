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
