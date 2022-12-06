# Trimix-Test
### Para iniciar el front ejecutar en su directorio:
##### npm run start
### Para iniciar el back con node ejecutar en su directorio (predeterminado):
##### npm run dev
### Para iniciar el fakeServer ejecutar (alternativa):
##### Descomentar la linea 7 y comentar la linea 4 de:
##### .\frontend\src\services\personas.services.js
##### npm run servidor
### Para ejecutar el docker:
docker run --hostname=312b7828c4d1 --mac-address=02:42:ac:11:00:02 --env=PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin --env=NODE_VERSION=16.18.1 --env=YARN_VERSION=1.22.19 --workdir=/app -p 3000:3000 --runtime=runc -d trimixtest:latest
