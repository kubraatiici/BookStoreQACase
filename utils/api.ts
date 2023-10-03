/* eslint-disable quote-props */
import { APIRequestContext, Locator, Page, expect } from '@playwright/test'


export class api {
  readonly request: APIRequestContext
   headers_BasicAuth: string
   headers_AuthToken: string
  
  constructor(request: APIRequestContext) {
    this.request = request
    this.headers_BasicAuth = 'Basic a3VicmExOlRlc3QxMjMq'
    this.headers_AuthToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Imt1YnJhMSIsInBhc3N3b3JkIjoiVGVzdDEyMyoiLCJpYXQiOjE2OTYxODA0NzN9.bYEqifsEuUYjMlHwT-dsQBn_nzwfRsy-j0Fmbm2pjVo'
  }
  async addABook(_isbn: string) {
    const response = await this.request.post('https://demoqa.com/BookStore/v1/Books', {
      headers: {
        accept: 'application/json',
        authorization: this.headers_BasicAuth,
        Authorization: this.headers_AuthToken,
        'Content-Type': 'application/json'
      },
      data: {
        userId: "9a83bdc4-ce65-43fd-b16f-78243512c194",
        collectionOfIsbns: [
          {
            //   isbn: "9781449325862"
            isbn: _isbn
          }
        ]

      },

    });
    return response;
  }
  async deleteABook(_isbn: string , _userId: string) {
    const response = await this.request.post('https://demoqa.com/BookStore/v1/Book', {
      headers: {
        accept: 'application/json',
        authorization: 'Basic a3VicmExOlRlc3QxMjMq',
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Imt1YnJhMSIsInBhc3N3b3JkIjoiVGVzdDEyMyoiLCJpYXQiOjE2OTYxODA0NzN9.bYEqifsEuUYjMlHwT-dsQBn_nzwfRsy-j0Fmbm2pjVo',
        'Content-Type': 'application/json'
      },
      data: {
        isbn: _isbn,
        userId: _userId
    },

    });
    return response;
  }
}

