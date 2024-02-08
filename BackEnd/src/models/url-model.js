const urlObjectModel = (longURL, shortURL, shortUrlId, createdAt, updatedAt) => {
  return {
    longURL,
    shortURL,
    shortUrlId,
    createdAt,
    updatedAt,
  };
};

module.exports = urlObjectModel;
