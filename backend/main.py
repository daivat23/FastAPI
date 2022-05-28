from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import psycopg2
hostname = 'localhost'
database = 'demo'
username = 'postgres'
pwd = '123'
port_id = 5432
conn = None
cur = None

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost:3000",
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Item(BaseModel):
  name: str
    
class Employee(BaseModel):
  id: int
  name: str
  salary: int

# @app.get("/")
# async def root():
#   return {"message": "Hello World!"}


# @app.post("/name/")
# async def create_name(item: Item):
#   print (item)
#   return item


@app.post("/employee/")
async def add_table(employee: Employee):
  conn = psycopg2.connect(
    host = hostname,
    dbname = database,
    user = username,
    password = pwd,
    port = port_id
  )
  cur = conn.cursor()
  insert_script = 'INSERT INTO employee (id, name, salary) VALUES (%s, %s, %s)'
  # insert_values = (1,'daivat',200000)
  insert_values = [(employee.id, employee.name, employee.salary)]
  for record in insert_values:
    cur.execute(insert_script, record)
  print(record)
  conn.commit()
  cur.close()
  conn.close()
  return employee

@app.get("/")
async def get_all_employee():
  conn = psycopg2.connect(
    host = hostname,
    dbname = database,
    user = username,
    password = pwd,
    port = port_id
  )
  cur = conn.cursor()
  cur.execute('SELECT * FROM EMPLOYEE')
  rows = cur.fetchall()
  print(cur.fetchall())
  data = []
  for row in rows:
    data.append(row)
  cur.close()
  conn.close()
  return data