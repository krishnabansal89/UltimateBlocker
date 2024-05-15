# server.py
import http.server
import socketserver

PORT = 8008 

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at port {PORT}")
    #this will run the server indefinitely and echo the user request
    httpd.serve_forever()
    

