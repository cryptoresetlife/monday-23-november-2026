// Builds the front page from DAY (defined in page.html). Story numbers run 1.. across heroes, cards, then the list.
(function () {
  const d = DAY;
  const all = [...d.heroes, ...d.cards, ...d.also];
  all.forEach((s, i) => { s.n = i + 1; });

  // region tally, counted from the stories themselves so it can never disagree with the page
  const order = ['eu', 'me', 'as', 'af', 'am', 'oc', 'gl'];
  const counts = {};
  all.forEach((s) => { counts[s.region] = (counts[s.region] || 0) + 1; });
  const tally = order.filter((r) => counts[r]).map((r) => `${NAMES[r]} ${counts[r]}`).join(' · ');

  const num = (n) => `<span class="num">${n}</span>`;
  let h = '';
  h += `<div class="topbar"><span>THE WORLD ON ONE PAGE</span><span class="mid">${d.dayOfYear}</span><span>EVERY STORY DATED ${d.short}</span></div>`;
  h += `<h1>${esc(d.title)}</h1>`;
  h += `<div class="tally">${all.length} STORIES, ALL FROM ${d.short} · ${tally}</div>`;
  h += `<div class="lede">${d.lede.map(esc).join('<b>◆</b>')}</div>`;
  h += `<div class="stats">${d.stats.map(([n, l]) => `<div class="stat"><span class="n">${esc(n)}</span><span class="l">${esc(l)}</span></div>`).join('')}</div>`;

  h += '<div class="heroes">';
  for (const s of d.heroes) {
    h += `<div class="hero">${ART[s.art] ? ART[s.art](s) : ART.blank(s)}
      <div class="kicker"><span class="tag" style="background:${COLORS[s.region]}">${esc(s.tag)}</span>${num(s.n)}<span class="place">${esc(s.place)}</span></div>
      <h2>${esc(s.head)}</h2><p>${esc(s.text)}</p><div class="src">${esc(s.src)}</div></div>`;
  }
  h += '</div>';

  h += '<div class="cards">';
  for (const s of d.cards) {
    const icon = ICON[s.icon] ? ICON[s.icon](COLORS[s.region]) : '';
    h += `<div class="card" style="border-color:${COLORS[s.region]}">
      <div class="ic">${icon}<div class="big">${esc(s.big || '')}</div><div class="cap">${esc(s.cap || '')}</div></div>
      <div><div class="k" style="color:${COLORS[s.region]}">${num(s.n)}${esc(s.place)}</div>
      <h3>${esc(s.head)}</h3><p>${esc(s.text)}</p></div></div>`;
  }
  h += '</div>';

  h += '<div class="bottom"><div>';
  h += `<div class="boxhead"><span class="b">WHERE IT HAPPENED</span><span class="s">pins carry the story numbers</span></div>`;
  h += drawMap(all.filter((s) => s.lat !== undefined));
  h += '</div><div>';
  h += `<div class="boxhead"><span class="b">ALSO ON ${d.short}</span></div><div class="also">`;
  for (const s of d.also) h += `<div>${num(s.n)}<b>${esc(s.place)}</b> ${esc(s.line)}</div>`;
  h += '</div></div></div>';

  h += `<div class="datecheck"><b>DATE CHECK</b> ${d.dateCheck}</div>`;
  h += `<div class="foot">Every story here happened or was first reported on <b>${esc(d.title)}</b>, as the named outlets reported it. Maps and drawings are original vector art.</div>`;
  document.getElementById('page').innerHTML = h;
})();
