module.exports = {
    unfavorite: function (req, res) {
        Userfavorited.destroy({
            where: {
                user: req.param('user'),
                book: req.param('book')
            }
        }
        ).exec(function (err) {
            if (err) {
                return res.serverError(err);
            }
            return res.ok();
        })
    },

    user: function (req, res) {
        Userfavorited
            .find({ user: req.param('id') })
            .populate('book')
            .exec(function(err, userFavorited) {
                let booksReturn = [];
                for (u in userFavorited) {
                    booksReturn.push(userFavorited[u].book) 
                } 
                return res.json(200, booksReturn);
            })
    }
};

