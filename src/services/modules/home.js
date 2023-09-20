import requestHttp from ".."

export const fetchGoodPriceData = () => {
  return requestHttp.get({url: '/home/goodprice'})
}

export const fetchHighScoreData = () => {
  return requestHttp.get({url: '/home/highscore'})
}
