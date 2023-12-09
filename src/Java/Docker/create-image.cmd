docker build --no-cache -f SQL\Dockerfile.PostgreSql -t snezhana_11-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t snezhana_11-java/app ../../..
