const validateTitle = (req, res, next) => {

const {body} = req;

if(body.title === undefined) {
    return res.status(400).json({message: 'the title field is required'})
}

if(body.title === "") {
    return res.status(400).json({message: 'the title field is empty'})
}

next();
}

const validateStatus = (req, res, next) => {

    const {body} = req;
    
    if(body.status === undefined) {
        return res.status(400).json({message: 'the title field is required'})
    }
    
    if(body.status === "") {
        return res.status(400).json({message: 'the title field is empty'})
    }
    
    next();
    }

module.exports = {
    validateTitle,
    validateStatus,
}