import http.server, os
os.chdir("/Users/hendrikvangeertruyden/Desktop/HowardAI Website")
http.server.test(HandlerClass=http.server.SimpleHTTPRequestHandler, port=8080, bind="127.0.0.1")
