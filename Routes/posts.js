const express = require('express')
const router = express.Router()

// untuk import database
const koneksi = require('../config/database')

// import express validator
 const {body, validationResult} = require('express-validator')
 
// View
router.get('/', function(req,res){
    // isi data (query)
    koneksi.query('SELECT * FROM posts ORDER BY id desc', function (err, rows){
        if(err){
            return res.status(500).json({
                status:false,
                message: 'Serves gak nyambung bro',
            })
        }else{
            return res.status(200).json({
                status: true,
                message: 'Menampilkan data posts',
                Data: rows
            })
        }
    })
})

// INSERT
router.post('/store',[
    // untuk validasi
    body('namatokoh').notEmpty(),
    body('gender').notEmpty(),
    body('kekuatan').notEmpty(),
    body('karakter').notEmpty(),
    body('cirifisik').notEmpty(),

], (req,res)=> {
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(422).json({
            errors:errors.array()
        })
    }

    //definisi form data
    let formData = {
        namatokoh: req.body.namatokoh,
        gender: req.body.gender,
        kekuatan: req.body.kekuatan,
        karakter: req.body.karakter,
        cirifisik: req.body.cirifisik,
    }

    //memasukkan query / data
    koneksi.query(`INSERT INTO posts SET ?`, formData, function(err,rows){
        //untuk menampilkan error
        if(err){
            console.error('error SQL:' ,err);
            return res.status(500).json({
                status:false,
                message:'server error',
            })
        }else{
            return res.status(201).json({
                status:true,
                message:'berhasil masukkan data',
                data: rows[0]
            })
        }
    })

})

//detail data
router.get('/:id', function(req,res){
    let id = req.params.id

    koneksi.query(`SELECT * FROM posts WHERE ID=${id}`,
        function(error,rows){
            if(error){
                return res.status(500).json({
                    status:false,
                    message: 'Server mu error',
                })
            }

            //kalau post id nya belum ada / tidak ada
            if(rows.length <= 0){
                return res.status(404).json({
                    status:false,
                    message:'data belum ada',
                })
            } else {
                return res.status(200).json({
                    status:true,
                    message:'menampilkan data post berdasarkan id',
                    data: rows[0]
                })
            }
        }
    )
})

// update / edit data
router.patch('/update/:id',[
    body('namatokoh').notEmpty(),
    body('gender').notEmpty(),
    body('kekuatan').notEmpty(),
    body('karakter').notEmpty(),
    body('cirifisik').notEmpty(),
],(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(442).json({
            errors:errors.array()
        })
    }

    let id = req.params.id //untuk mengambil data id

    let formData={
        namatokoh: req.body.namatokoh,
        gender: req.body.gender,
        kekuatan: req.body.kekuatan,
        karakter: req.body.karakter,
        cirifisik: req.body.cirifisik,
    }

    //update query
    koneksi.query(`UPDATE posts set ? WHERE id=${id}`, formData,
        function(err,rows){
            if(err){
                return res.status(500).json({
                    status:false,
                    message: `Internal Server error`
                })
            }else{
                return res.status(200).json({
                    status: true,
                    message: 'update data berhasil'
                })

            }
        }
    )
})

// Delete
router.delete('/delete/(:id)',
    function(req,res){
        let id = req.params.id

        koneksi.query(`DELETE FROM posts WHERE id = ${id}`,
            function(error,rows){
                if(error){
                    return res.status(500).json({
                        status: false,
                        message: 'internal server error',
                    })
                }else{
                    return res.status(200).json({
                        status: true,
                        message: 'data telah dihapus'
                    })
                }
            }
        )
    }
)

module.exports = router