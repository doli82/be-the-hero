const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });
    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: 'Ong de Teste',
            email: 'email@teste.com',
            whatsapp: 38991449720,
            city: 'Brasília de Minas',
            uf: 'MG'
        });
        
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });

    it('should be able to list 9 ONGs', async () => {
        for( let count=0; count < 9; count++) {
            const response = await request(app)
            .post('/ongs')
            .send({
                name: `Ong de Teste ${count + 1}`,
                email: `email${count}@teste.com`,
                whatsapp: parseInt(38991449720  + count),
                city: 'Brasília de Minas',
                uf: 'MG'
            });
        }
        
        const response = await request(app)
        .get('/ongs');

        expect(response.body).toHaveLength(9);
    });
});