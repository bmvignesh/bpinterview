const {test, expect} = require('@playwright/test');

test("Get images",async ({request}) => {

    for (let index = 0; index < 3; index++) {
        const response = await request.get('https://dog.ceo/api/breed/hound/images/random')
        const message = await response.json()
        const status = response.status();
        expect(status).toBe(200)
        test.fail();
    }
});