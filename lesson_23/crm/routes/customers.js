module.exports.all = (req, res) => {
  req.getConnection( (err, connection) => {
    connection.query('SELECT * FROM customers', (err, rows) => {
      if(err) throw new Error;
      res.render('customers', {title: 'IMT-CRM Пользователи', data: rows});
    });
  });
};

// module.exports.add = (req, res) => {
//   res.render('add_customer', {page_title: 'Добавить пользователя в CRM систему'});
// };