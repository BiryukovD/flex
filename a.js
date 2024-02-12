fetch('http://192.168.0.106/test')
  .then(response => response.json())
  .then(commits => alert(commits[0].author.login));