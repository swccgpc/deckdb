CREATE TABLE "public"."User"
(
  id SERIAL PRIMARY KEY NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(255)
);

CREATE TABLE "public"."Deck"
(
  id SERIAL PRIMARY KEY NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  title VARCHAR(255),
  side VARCHAR(255),
  description VARCHAR(8000),
  "authorId" INTEGER NOT NULL, FOREIGN KEY ("authorId") REFERENCES "public"."User"(id)
);