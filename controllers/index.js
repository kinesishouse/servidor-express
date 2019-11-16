
const index = (req, res) => {
	res.render('index', {
        title: 'MyWebStore',
        tiTuloh1: 'polito polito'
	});
};

const quienessomos = (req, res) => {
	res.render('./quienes-somo', {
        title: 'MyWebStore',
        tiTuloh1: 'polito polito'
	});
};




module.exports = {
  index,
  quienessomos,
 };