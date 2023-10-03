import { test, expect, APIRequestContext } from '@playwright/test';
import { api } from '../utils/api';
import { equal } from 'assert';

test.describe('App wallet api test ', () => {
    let apiHelper: api;

    test.beforeEach(async ({ request }) => {
        apiHelper = new api(request);
    })


    test('add book success', async ({ request }) => {

        const response = await apiHelper.addABook('9781449325862');
        expect(response.ok());


    });
    test('add book fail 401 statüs', async ({ request }) => {

        apiHelper.headers_BasicAuth = 'Basic 1234'
        const response = await apiHelper.addABook('9781449325862');
        equal(response.status(), 401);
    });

    test('add book fail 400 statüs', async ({ request }) => {

        const response = await apiHelper.addABook('122324');
        equal(response.status(), 401);
    });

    test('delete book success', async ({ request }) => {
        const response = await apiHelper.deleteABook('9781449325862', '9a83bdc4-ce65-43fd-b16f-78243512c194');
        expect(response.ok());

    });

    test('delete book fail 401 statüs', async ({ request }) => {

        apiHelper.headers_BasicAuth = 'Basic 1234'
        const response = await apiHelper.deleteABook('9781449325862', '9a83bdc4-ce65-43fd-b16f-78243512c194');
        equal(response.status(), 404);
    });

    test('add and delete book', async ({ request }) => {
        const responseAdd = await apiHelper.addABook('9781449325862');
        expect(responseAdd.ok());

        const responseDelete = await apiHelper.deleteABook('9781449325862', '9a83bdc4-ce65-43fd-b16f-78243512c194');
        expect(responseDelete.ok());
    });

})