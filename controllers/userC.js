const { response } = require('express');



const userGet = (req,res = response) => {
    const parametros = req.query;
    res.json({
        msg: 'get API - controlador',
        parametros
    });
}


const userPost = (req,res = response ) => {
    const body = req.body;
     res.json({
         msg: 'Post api - c',
         body
     });
}

const userPut = (req,res = response) => {
    const id = req.params.id;

    res.json({
        msg: 'Put api - c',
        id
    });
}

const userPatch = (req , res = response ) => {
    res.json({
        msg: 'Patch api - c'
    });
}

const userDelete = ( req , res = response ) => {
    res.json({
        msg: 'Delete api - c'
    });
}








module.exports = {
    userGet,
    userPost,
    userPut,
    userPatch,
    userDelete
}