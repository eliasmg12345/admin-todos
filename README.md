#depelopment

pasos para levantar la app en desarrollo


1. levantar la db
```
docker compose up -d
```

2. Crear y renombrar en .env.template a .env
3. reemplazar las variables de entorno


#Prisma commands
```
//npx prisma init
npx prisma migrate dev     luego(cualtuier nombre ej:'dev')
npx prisma generate  //para general el cliente de prisma
```
4. ejecutar el seed para crear la db local (local:3000/api/seed)

#prod


#stage