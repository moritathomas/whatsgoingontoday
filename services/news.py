import requests



def get_news():
    res = requests.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=7c539ced66bb43b1882d199cdaa5d24a")
    articles = res.json()["articles"]
    return articles
