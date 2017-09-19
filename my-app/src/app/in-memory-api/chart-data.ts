import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const users = [
            {
                id: 1,
                lastName: 'Mr. Nice',
                firstName: "gentil",
                password:"",
                roles: "Client",
                email: "nice@gmail.com",
                articles: ["test"]
            },
            {
                id: 2,
                lastName: 'Bombasto',
                firstName: "bombadier fou",
                password:"",
                roles: "Administrateur",
                email: "bombadier@gmail.com",
                articles: ["test"]
            },
            {
                id: 3,
                lastName: 'Magneta',
                firstName: "aimant vivant",
                password:"",
                roles: "Visiteur",
                email: "aimant@gmail.com",
                articles: ["test"]
            },
        ];
        return { users };
    }
}