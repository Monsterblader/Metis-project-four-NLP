# Topic Modeling of Wall Street Bets and other sub-Reddits
NLP topic modeling of Wall Street Bets, Investing, Options, and Security Analysis.

## Goal of this project

Wall Street Bets has caught the attention of Wall Street.  I want to find out if topic modeling will identify any trends useful for Wall Street.

## Source

The data was acquired from [Kaggle](https://www.kaggle.com/shergreen/wallstreetbets-subreddit-submissions), which was taken from [Wall Street Bets](https://www.reddit.com/r/wallstreetbets), [Investing](https://www.reddit.com/r/investing), [options](https://www.reddit.com/r/Options), and [Security Analysis](https://www.reddit.com/r/securityanalysis).

## Significant files

* Wall Street Bets.pdf - screenshots of the presentation.
* analysis/
  + nltk.ipynb - exploratory work including LDA, NMF, LSA, and CoreX.
  + nltk_corex.ipynb - more in-depth exploration of data using CoreX.
* HTML/ - the presentation files.

## Tools

Going in, I didn't know what results I might see and in which direction I might find, so I chose to try multiple topic-modeling tools to see what would happen.

 * Latent Semantic Analysis
 * Non-Negative Matrix Factorization
 * Latent Dirichlet Allocation
 * CoreX

## Takeaways

 * The different techniques drew similar conclusions.
 * Seeing how much similarity there was between CorexTopic's unsupervised topic generation and that of my anchor selections gave me a lot of confidence in CorexTopic as a foundation for further exploration.
 * While unsupervised topic modeling was able to identify some key themes of the documents, they were, not surprisingly quite braod, given the number of high number of documents and low number of topics.

## Future work

 * Identify stocks.
 * Add sentiment analysis.
 * Expand resolution of tool by adding time component.
 * Correlate to stock's performance.