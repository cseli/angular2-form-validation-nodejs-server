const frisby = require('frisby');

frisby.create('Check if server is alive.')
    .get('http://localhost:8080')
    .expectStatus(200)
    .toss();

frisby.create('Check spaform endpoint with valid body.')
    .post('http://localhost:8080/v1/spaform', {
        name: 'abc',
        email: 'abc@dabc',
        birthday: '1991-02-02',
        occupation: 'Assistant'
    })
    .inspectRequest()
    .expectStatus(200)
    .toss();