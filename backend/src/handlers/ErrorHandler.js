ErrorHandler = {} ;

ErrorHandler.handle = (err, req, res, next) => {
    switch (err.name){
        case 'BadRequest':
            res.status(400).json({error:err.message})
            break;
        case 'NotFound':
            res.status(404).json({error:err.message})
            break;
        default:
            res.status(500).json({error:err.message})
            break;
        }
}
module.exports = ErrorHandler