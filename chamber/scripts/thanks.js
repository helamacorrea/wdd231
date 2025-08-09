const urlGet = window.location.search;
console.log(urlGet);

const params = new URLSearchParams(urlGet);

// thanks.html?first=Helam%C3%A3&last=Corr%C3%AAa&org-title=Manager&email=helamacorrea%40gmail.com&phone=%2B5554996631332&organization=Landzy&membership=Bronze&org-description=lalaland&timestamp=2025-08-09T17%3A27%3A35.214Z

document.querySelector('#check-info').innerHTML = `
    <p>Application for ${params.get('first')} ${params.get('last')}</p>
    <p>Title: ${params.get('org-title')}</p>
    <p>Your Email: ${params.get('email')} </p>
    <p>Your Phone: ${params.get('phone')} </p>
    <p>Organization: ${params.get('organization')} </p>
    <p>Membership: ${params.get('membership')}</p>
    <p>Org. Description: ${params.get('org-description')}</p>
    <p>Date: ${params.get('timestamp')}</p>
`
