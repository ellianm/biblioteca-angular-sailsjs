module.exports = {
    index: function (req, res) {
        var userName = req.param('userName');
        var password = req.param('password');
        setTimeout(function () {
            if (!userName || !password) {
                return res.json(401, { message: 'Usuário e Senha requeridos' });
            }
            User.findOne({ userName: userName }, function (err, User) {
                if (!User) {
                    return res.json(401, { message: 'Senha ou usuário inválidos' });
                }
                User.verifyPassword(password, function (err, valid) {
                    if (err) {
                        return res.json(403, { message: 'forbidden' });
                    }
                    if (!valid) {
                        return res.json(401, { message: 'Senha ou usuário inválidos' });
                    } else {
                        res.set('Access-Control-Allow-Headers', 'content-type,token');
                        res.set('Access-Control-Expose-Headers', 'content-type,token');
                        res.set('token', sails.services.tokenauth.generateToken({ userId: User.id, userName: User.userName, name: User.name }));
                        res.json({ user: User });
                        if (req.isSocket) {
                            req.socket.User = User;
                        }
                    }
                });
            });
        }, 200);
    },
    authSocket: function (req, res) {
        if (!req.isSocket) {
            return res.json(400, 'This route is for socket connections only');
        }
        var token = req.param('token');
        if (!token) return res.json(401, 'token missing');

        sails.services.tokenauth.getUser(token, function (err, User) {
            if (err || !User) {
                return res.json(401, 'token invalid');
            }
            req.socket.User = User;
            res.json(200, User.toJSON());
        });
    },
    deauthSocket: function (req, res) {
        if (!req.isSocket) {
            return res.json(400, 'This route is for socket connections only');
        }
        delete req.socket.User;
        res.json(200, 'ok');
    }
};

