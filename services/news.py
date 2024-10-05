import requests
import logging 

# Set up basic logging configuration
logging.basicConfig(level=logging.INFO)

# Create a logger
logger = logging.getLogger(__name__)


def get_news():
    res = requests.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=7c539ced66bb43b1882d199cdaa5d24a")
    articles = res.json()["articles"]
    return articles
