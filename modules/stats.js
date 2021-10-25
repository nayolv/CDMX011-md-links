const promiseStats = (validateUrl) => {
  return new Promise((res, rej) => {
    res(
      validateUrl.then((data) => {
        return stats(data);
      })
    );
    rej(
      validateUrl.catch((err) => {
        console.log(err);
      })
    );
  });
};

const stats = (objComp) => {
  let links = [];
  let broken = [];
  let unique = [];
  let array = [];

  objComp.map((item) => {
    if(item !== undefined){
      links.push(item.href);
    }
    if (item !== undefined && item.status == 404) {
      broken.push(item.href);
    }
  });

  const sortLinks = links.sort();
  for (let i = 0; i < sortLinks.length; i++) {
    if (sortLinks[i + 1] !== sortLinks[i]) {
      unique.push(sortLinks[i]);
    }
  }

  array.push({
    Type: 'Statistics.....................................',
    Total: links.length,
    Broken: broken.length,
    Unique: unique.length,
  });
  return array;
};

exports.promiseStats = promiseStats;