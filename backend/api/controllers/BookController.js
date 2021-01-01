module.exports = {

    newBooks: function (req, res) {
        Book.find({ sort: 'createdAt DESC' })
            .limit(12)
            .exec(function (err, books) {
                if (err) res.serverError();
                if (!books) res.json(404, { err: "Nenhum livro encontrado" })
                res.json(200, books);
            });
    }
};

