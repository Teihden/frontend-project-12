lint-frontend:
	make -C frontend lint

ci:
	npm ci

start-frontend:
	make -C frontend start

start-backend:
	npx start-server

develop:
	make start-backend & make start-frontend

build:
	rm -rf frontend/build
	npm run build

server:
	npm run start
