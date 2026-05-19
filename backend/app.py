import http.server
import socketserver
import json

PORT = 8000

movies = [
    {
        "id": 1,
        "title": "Линчеватель",
        "year": "2023",
        "status": "СМОТРЮ",
        "rating": "★★★★★",
        "img": "https://0.soompi.io/wp-content/uploads/2023/10/16022854/vigilante-1.jpg"
    },
    {
        "id": 2,
        "title": "Дьявол носит Prada",
        "year": "2006",
        "status": "ОЦЕНЕНО",
        "rating": "★★★★★",
        "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/61e6f0e1-760d-4ff3-b434-beab6275c0bc/1920x"
    },
    {
        "id": 3,
        "title": "Зверополис",
        "year": "2016",
        "status": "ОЦЕНЕНО",
        "rating": "★★★★★",
        "img": "https://basket-05.wbbasket.ru/vol776/part77693/77693884/images/big/1.webp"
    }
]

next_id = 4

class MyHandler(http.server.SimpleHTTPRequestHandler):
    
    def do_GET(self):
        if self.path == '/api/movies':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps(movies).encode())
            return
        else:
            return super().do_GET()
    
    def do_POST(self):
        global movies, next_id
        
        if self.path == '/api/movies':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            new_movie = json.loads(post_data.decode())
            
            new_movie['id'] = next_id
            next_id += 1
            
            movies.append(new_movie)
            
            self.send_response(201)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({"message": "Фильм добавлен", "id": new_movie['id']}).encode())
            return
    
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
    print(f"Сервер запущен на http://localhost:{PORT}")
    httpd.serve_forever()