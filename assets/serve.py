import http.server, os
os.chdir("/Users/hendrikvangeertruyden/Desktop/HowardAI Website")

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate")
        super().end_headers()

http.server.test(HandlerClass=NoCacheHandler, port=8080, bind="127.0.0.1")
