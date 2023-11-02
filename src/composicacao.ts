interface Database {
    connection(): boolean;
    get(): any[];
    delete(): boolean;
}

class Postgres implements Database {
    connection(): boolean {
        return true;
    }
    get(): any[] {
        return [
            {
                name: 'lucas',
            },
            {
                rodrigo: 'lucas',
            }
        ];
    }
    delete(): boolean {
        return true;
    }
}

class MongoDB implements Database {
    connection(): boolean {
        return true;
    }
    get(): any[] {
        return [
            {
                name: 'lucas',
            },
            {
                name: 'rodrigo',
            }
        ];
    }
    delete(): boolean {
        return true;
    }
}


class UsersRepository {
    constructor(private database: Database) {}

    public getUsers(): any[] {
        return this.database.get();
    }

    public deleteUser(): boolean {
        return this.database.delete();
    }
}

const postgres = new Postgres();
const mongo = new MongoDB();
const usersRepository = new UsersRepository(mongo);

console.log(usersRepository.getUsers());