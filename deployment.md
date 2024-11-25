# Upload Front/Backend

docker build -t aszas/drinkdomain-frontend ./frontend
docker build -t aszas/drinkdomain-backend ./backend

docker push aszas/drinkdomain-frontend
docker push aszas/drinkdomain-backend

# In Server:

## Saving Data
sudo docker exec -t postgres pg_dump -U postgres -F c -b -v -f /var/lib/postgresql/data/db_backup.dump postgres
sudo docker cp postgres:/var/lib/postgresql/data/db_backup.dump ./db_backup.dump

sudo docker cp backend:/storage ./storage

## Restart Docker
sudo docker compose pull frontend backend;
sudo docker compose down;
sudo docker compose up -d;

## Loading Data
sudo docker cp ./db_backup.dump postgres:/var/lib/postgresql/data/db_backup.dump;
sudo docker exec -t postgres pg_restore -U postgres -d postgres /var/lib/postgresql/data/db_backup.dump;

sudo docker cp ./storage backend:/storage;
