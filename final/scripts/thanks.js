const urlGet = window.location.search;
console.log(urlGet);

const params = new URLSearchParams(urlGet);

// thankyou.html?first=Helam%C3%A3&last=Corr%C3%AAa&email=helamacorrea%40gmail.com&phone=%2B5554996631332&invest-field=other&additional-comments=none&timestamp=

document.querySelector('#check-info').innerHTML = `
    <p>Application for ${params.get('first')} ${params.get('last')}</p>
    <p>Your Email: ${params.get('email')} </p>
    <p>Your Phone: ${params.get('phone')} </p>
    <p>Investment Field: ${params.get('invest-field')}</p>
    <p>Additional Comments: ${params.get('additional-comments')}</p>
    <p>Date: ${params.get('timestamp')}</p>
`
