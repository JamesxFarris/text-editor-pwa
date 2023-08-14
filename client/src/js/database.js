import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// PUT to database
export const putDb = async (content) => {
  console.log("PUT to the database");
  const db = await openDB("jate", 1);
  const tx = db.transaction("jate", "readwrite");
  const store = tx.objectStore("jate");
  const request = await store.put(content);
  const result = await request;
  console.log("PUT result", result);
};

// GET all from database
export const getDb = async () => {
  console.log("GET from the database");
  const db = await openDB("jate", 1);
  const tx = db.transaction("jate", "readonly");
  const store = tx.objectStore("jate");
  const request = await store.getAll();
  const result = await request;
  console.log("GET result", result);
  return result;
};

initdb();
