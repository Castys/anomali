let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'local host',
    user:  'root',
    password: '',
    database: 'db_express_mysql',

});

connection.connect(function(error){
    if(!!eror){
        console.log(error);
    }else{
        console.log('koneksi Berhasil!');
    }
})