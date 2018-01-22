import {expect} from 'chai';
import {UserStore} from '../../src/models/userstore';

describe('UserStore', () => {

    var store;

    before(function() {
        store = new UserStore();
        store.setUsers(
            [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                    "address": {
                        "street": "Kulas Light",
                        "suite": "Apt. 556",
                        "city": "Gwenborough",
                        "zipcode": "92998-3874",
                        "geo": {
                            "lat": "-37.3159",
                            "lng": "81.1496"
                        }
                    },
                    "phone": "1-770-736-8031 x56442",
                    "website": "hildegard.org",
                    "company": {
                        "name": "Romaguera-Crona",
                        "catchPhrase": "Multi-layered client-server neural-net",
                        "bs": "harness real-time e-markets"
                    }
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                    "username": "Antonette",
                    "email": "Shanna@melissa.tv",
                    "address": {
                        "street": "Victor Plains",
                        "suite": "Suite 879",
                        "city": "Wisokyburgh",
                        "zipcode": "90566-7771",
                        "geo": {
                            "lat": "-43.9509",
                            "lng": "-34.4618"
                        }
                    },
                    "phone": "010-692-6593 x09125",
                    "website": "anastasia.net",
                    "company": {
                        "name": "Deckow-Crist",
                        "catchPhrase": "Proactive didactic contingency",
                        "bs": "synergize scalable supply-chains"
                    }
                }
            ]
        );
    });

    it('has data', () => {
        expect(store).to.not.be.undefined;
        expect(store.users).to.not.be.undefined;
        expect(store.users).to.have.length(2);
    });

    it('has data with valid format', () => {

        store.users.every(user => {
            expect(user).to.have.all.keys('id', 'name', 'username', 'email', 'address', 'phone', 'website', 'company');
            expect(user.address).to.have.all.keys( "street","suite","city","zipcode","geo");
            expect(user.address.geo).to.have.all.keys( "lat","lng");

            expect(user.name).to.be.a('string')
            expect(user.address).to.be.an('object');

            for(var key in user){
                expect(user[key]).not.to.be.empty;
            }

        })


    });

    it('has data with valid content', () => {

        expect(store.users[0]).to.not.have.property('userid');
        expect(store.users[0].id).to.equal(1);
        expect(store.users[1].id).to.equal(2);
        expect(store.users[0].address).to.deep.equal({
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        });
    });


});
