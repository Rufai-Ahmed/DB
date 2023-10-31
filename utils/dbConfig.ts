import { MongoClient } from "mongodb";

const URL = "mongodb://127.0.0.1:27017";

export const client = new MongoClient(URL);

const mainConnection = async () => {
  await client.connect();

  return "Database connected ⚡⛱";
};

mainConnection()
  .then((res) => {
    console.log(res);
  })
  .catch(() => {
    console.error();
  })
  .finally(() => {
    client.close();
  });

export const db = client.db("Class08").collection("Students");
