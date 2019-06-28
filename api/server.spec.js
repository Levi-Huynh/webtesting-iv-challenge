const supertest = require('supertest');
const server= require('./server.js');

const db = require('../data/dbConfig.js');
const {insert} = require('../employees/employeeModel.js');

describe('server', () => {

    
it('should set enviornment to testing', () => {
    //DB_ENV is global
    expect(process.env.DB_ENV).toBe('testing');
});
    

    describe('GET/', () => {
        it('responds with 200', () => {
            return supertest(server)
            .get('/')
            .expect(200);
        });

        it('return 200 using async/await', async() => {
            const res = await supertest(server).get('/');
            expect(res.status).toBe(200);
        });

        it('returns using JSON', async ()=> {
            const res = await supertest(server).get('/');
        
            expect(res.type).toBe('application/json')
        });
        
        it('should return api:up', async() => {
            await supertest(server)
            .get('/')
            .then(res => {
                expect(res.body).toEqual({api: 'up'})
            });


        })
    })

  
})

