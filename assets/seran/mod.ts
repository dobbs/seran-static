export function randomId() {
  return Array.from({length:8})
    .map(_ => (((1+Math.random())*0x100)|0).toString(16).substring(1))
    .join('')
}

export function page(title: string, story: object[]=[]) {
  story = story.map(item => {
    const id = randomId();
    return {id, type:"paragraph", ...item};
  });
  const thePage = {title, story};
  return {
    ...thePage,
    journal: [{
      "type": "create",
      "item": thePage,
      "date": Math.round(new Date().getTime()/1000)
    }]
  };
}
