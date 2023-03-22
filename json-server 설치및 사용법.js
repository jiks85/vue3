json-server 설치및 사용법 

npm i -g json-server 

{
    "data":
    [
        {"id":1, "name":"홍길동", "email":"hong1@hanmail.net"},
        {"id":2, "name":"임꺽정", "email":"hong2@hanmail.net"},
        {"id":3, "name":"장길산", "email":"hong3@hanmail.net"},
        {"id":4, "name":"김길동", "email":"hong4@hanmail.net"},
        {"id":5, "name":"이길동", "email":"hong5@hanmail.net"},
        {"id":5, "name":"장길동", "email":"hong6@hanmail.net"},
        {"id":6, "name":"박길동", "email":"hong7@hanmail.net"},
        {"id":7, "name":"유길동", "email":"hong8@hanmail.net"},
        {"id":8, "name":"고길동", "email":"hong9@hanmail.net"},
        {"id":9, "name":"최길동", "email":"hong10@hanmail.net"},
        {"id":10, "name":"백길동", "email":"hong11@hanmail.net"}
    ]
}


json-server ./db.json --port 4000  서버로 실행중 
http://localhost:4000/data
http://localhost:4000/data/2









