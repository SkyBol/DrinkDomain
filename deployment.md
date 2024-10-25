# Upload Front/Backend

docker build -t aszas/drinkdomain-frontend ./frontend
docker build -t aszas/drinkdomain-backend ./backend

docker push aszas/drinkdomain-frontend
docker push aszas/drinkdomain-backend
