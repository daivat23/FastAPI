import psycopg2

hostname = 'localhost'
database = 'demo'
username = 'postgres'
pwd = '123'
port_id = 5432
conn = None
cur = None
try:
  conn = psycopg2.connect(
    host = hostname,
    dbname = database,
    user = username,
    password = pwd,
    port = port_id)

  cur = conn.cursor()

  cur.execute('DROP TABLE IF EXISTS employee')
  create_script = ''' CREATE TABLE IF NOT EXISTS employee (
    id int PRIMARY KEY,
    name varchar(40) NOT NULL,
    salary int
    ) '''
  cur.execute(create_script)

  insert_script = 'INSERT INTO employee (id, name, salary) VALUES (%s, %s,%s)'
  insert_values = [(1,'daivat',200000), (2,'gargi',100000), (3,'hina',12000), (4,'vipul',20011)]
  for record in insert_values:
    cur.execute(insert_script, record)
  
  update_script = 'UPDATE employee SET salary = salary + (salary * 0.5)'
  cur.execute(update_script)

  delete_script = 'DELETE FROM employee WHERE name = %s'
  delete_record = ('vipul',)
  cur.execute(delete_script, delete_record)

  cur.execute('SELECT * FROM EMPLOYEE')
  print(cur.fetchall())


  conn.commit()

    
except Exception as error:
  print(error)
finally:
  if cur is not None:
    cur.close()
  if conn is not None:
    conn.close()