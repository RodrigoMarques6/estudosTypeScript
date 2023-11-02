type UserId = string & { readonly brand: unique symbol };
type RetailerId = string & { readonly brand: unique symbol };

function createUserId(id: string) {
    return id as UserId;
}

function createRetailerId(id: string) {
    return id as RetailerId;
}


function test2(userId: UserId, retailerID: RetailerId) {}

test2(createUserId('123'), createRetailerId('123'));