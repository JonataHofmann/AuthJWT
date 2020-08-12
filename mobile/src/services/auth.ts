interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    };
}

export function signIn(): Promise<Response> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'ajsdfh6f8buhq78buh87ymncausdsdasdasdbkyukcn65148',
                user: {
                    name: 'Jonatã',
                    email: 'jonatahofmann@gmail.com',
                },
            });
        }, 2000);
    });
}
