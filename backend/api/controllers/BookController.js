module.exports = {

    newBooks: function (req, res) {
        Book.find({ sort: 'createdAt DESC' })
            .limit(12)
            .exec(async function (err, books) {
                if (err) res.serverError();
                if (!books) res.json(404, { err: "Nenhum livro encontrado" })
                let userfavorited = await Userfavorited.find({ user: req.param('id') });
                for (u in userfavorited) {
                    for (b in books) {
                        if (userfavorited[u].book == books[b].id) {
                            books[b].favorited = true
                        }
                    }
                }
                return res.json(200, books);
            });
    },
    userBooks: function (req, res) {
        Book.find({ user: req.param('id') })
            .exec(function (err, books) {
                if (err) res.serverError();
                if (!books) res.json(200, {})
                res.json(200, books);
            })
    }
};

