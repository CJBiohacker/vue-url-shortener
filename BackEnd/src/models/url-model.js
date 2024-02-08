const urlObjectModel = (longURL, shortURL, shortUrlId) => {
  return {
    longURL,
    shortURL,
    shortUrlId,
    createdAt,
    updatedAt,
  };
};

module.exports = urlObjectModel;
