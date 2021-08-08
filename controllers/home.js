
const fnGetHome = (req, res) => {
    const { q, name } = req.query;
    res.json({
        msj: 'Hello world -- get',
        q,
        name
    })
}

const fnPostHome = (req, res) => {
    const { id } = req.params;
    res.json({
        msj: 'Hello world -- post',
        CustomerMsj: req.body,
        id
    })
}

const fnPutHome = (req, res) => {
    res.json({
        msj: 'Hello world -- put',
    })
}

const fnDeleteHome = (req, res) => {
    res.json({
        msj: 'Hello world -- delete'
    })
}

const fnOthers = (req, res) => {
    res.send('Page | route not found')
}

module.exports = {
    fnGetHome,
    fnPostHome,
    fnPutHome,
    fnDeleteHome,
    fnOthers
}
