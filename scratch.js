const search = async (word) => {
  const res = await fetch('https://html.duckduckgo.com/html/?q=site:flaticon.com/free-animated-icon+' + word, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120' } });
  const html = await res.text();
  const ids = html.match(new RegExp(`flaticon\\.com\\/free-animated-icon\\/[a-z0-9-]+_(\\d+)`, 'g'));
  console.log(word, ids ? [...new Set(ids)].slice(0, 3) : 'No ids found');
};

Promise.all([search('target'), search('idea'), search('growth'), search('users'), search('handshake')]);
