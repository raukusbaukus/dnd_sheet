dropdb dnd_sheet --if-exists

createdb dnd_sheet

knex migrate:latest --knexfile knexfile.js

knex seed:run --knexfile knexfile.js
