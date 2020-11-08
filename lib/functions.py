import os
import re
import time

from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer


def sanitize_posts(source):
    """Strips punctuation, numbers from posts, otherwise cleans, and lemmatizes text.

    Args:
        source (list-like): text
    """
    documents = []
    stemmer = WordNetLemmatizer()

    for sen in range(0, len(source)):
        # Remove all of the URL's
        document = re.sub(r'https*:\/\/[\w*\.]*[\w\-*\/]*[\.\w]*', ' ', str(source.iloc[sen]))

        # Remove all the special characters
        document = re.sub(r'\W', ' ', document)

        # remove all single characters
        document = re.sub(r'\s+[a-zA-Z]\s+', ' ', document)

        # Remove single characters from the start
        document = re.sub(r'\^[a-zA-Z]\s+', ' ', document)

        # Substituting multiple spaces with single space
        document = re.sub(r'\s+', ' ', document, flags=re.I)

        # Removing prefixed 'b'
        document = re.sub(r'^b\s+', '', document)

        # Converting to Lowercase
        document = document.lower()

        # Lemmatization
        document = document.split()

        document = [stemmer.lemmatize(word) for word in document]
        document = ' '.join(document)

        documents.append(document)

    return documents


def timer(f):
    def funct(*args, **kwargs):
        start_time = time.time()

        result = f(*args, **kwargs)

        stop_time = time.time() - start_time
        message = "The operation took "

        if stop_time < 0.001:
            message = "That was fast."
        elif stop_time < 0:
            message += str(int(stop_time * 1000)) + " m seconds."
        elif stop_time < 60:
            message += str(int(stop_time)) + " seconds."
        else:
            message += str(int(stop_time // 60)) + " minutes."

        os.system("say " + message)
        print(message)

        return result

    return funct
