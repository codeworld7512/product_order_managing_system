
const mongoose = require("mongoose");
const Sales = mongoose.model("Sales");
const Casheirs = mongoose.model("Casheirs");
const Users = mongoose.model("Users");

require("dotenv").config({ path: ".variables.env" });

exports.create = async (req, res) => {
  try {

    let {customername, location, product,paid, unpaid} = req.body;

      const allSales = await Sales.find();
      const number = allSales.length+1;
      const altnum = number;
      var status='';

      if(paid && unpaid)
      status = 'partial';
      if(paid && !unpaid)
      status = "paid";
      if(!paid && unpaid)
      status = "unpaid";
      if(!paid && !unpaid)
      return res.status(400).json({
        message: "must exist paid or unpaid."
      });


    const newSales = new Sales({
      number,
      altnum,
      customerName:customername,
      customerLocation:location,
      product,
      status:status,
      paid,
      unpaid
    });

    const saveSales = await newSales.save();
    const casheir = await Casheirs.findOne();

    const updateCasheir = await Casheirs.findOneAndUpdate(
      { total: casheir.total },
      { total: casheir.total + paid },
      {
        new: true
      }
    );
      console.log(updateCasheir)
    const users = await Users.find();
      for(var k=0;k<users.length; k++ )
      {
         await Users.findOneAndUpdate(
          { _id: users[k]._id },
          { amount: updateCasheir.total * users[k].percentage/100 },
          {
            new: true
          }
        );
      }
    return res.status(200).json({
      success: true,
      message:"successfully created! Please check your sales list!"
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.list = async (req, res) => {
  try {

    const sales = await Sales.find();

    if (!sales)
      return res.status(400).json({
        message: "Sales doesn't exist."
      });

      return res.status(200).json({
        invoices:sales
       });

  } catch (err) {
     res.status(500).json({message: err.message });
  }
};


exports.delete = async (req, res) => {
  try {
    const id = req.params.id;

    const number = await Sales.findOne({ _id: id });
    const sales = await Sales.find();

    const i = number.number;

    const result = await Sales.findOneAndDelete({ _id: id });

    if (!result)
      return res.status(400).json({
        message: "It doesn't exist."
      });

    for(j=i+1 ; j<=sales.length ; j++)
    {
      const changenumber = await Sales.findOneAndUpdate(
        { altnum: j },
        { number: j-1 },
        {
          new: true
        }
      );
    }
    for(j=i ; j<sales.length ; j++)
    {
      const changealtnum = await Sales.findOneAndUpdate(
        { number: j },
        { altnum: j },
        {
          new: true
        }
      );
    }

      const newSales = await Sales.find();

      return res.status(200).json({
        sales:newSales
       });
  } catch (err) {
     res.status(500).json({message: err.message });
  }
};

exports.edit = async (req, res) => {
  try {

    const sales = await Sales.findOne({_id:req.body.id});

    if (!sales)
      return res.status(400).json({
        message: "Sales doesn't exist."
      });

      return res.status(200).json({
        invoices:sales
       });

  } catch (err) {
     res.status(500).json({message: err.message });
  }
};

exports.update = async (req, res) => {

  try {

    let { id, customername, location, product, paid, unpaid } = req.body;
    if (!id || !customername || !location || !product)
      return res.status(200).json({ success:false ,message: "Not all fields have been entered." });

      var status='';

      if(paid && unpaid)
      status = 'partial';
      if(paid && !unpaid)
      status = "paid";
      if(!paid && unpaid)
      status = "unpaid";
      if(!paid && !unpaid)
      return res.status(200).json({
        success:false,
        message: "must exist paid or unpaid."
      });

      const before = await Sales.findOne({_id: id});
  const updateData = await Sales.findOneAndUpdate(
      { _id: id },
      {
        customerName:customername,
        customerLocation:location,
        product,
        paid,
        unpaid,
        status
       },
      {
        new: true
      }
    ).exec();

    const casheir = await Casheirs.findOne();

    const updateCasheir = await Casheirs.findOneAndUpdate(
      { total: casheir.total },
      { total: casheir.total + paid - before.paid },
      {
        new: true
      }
    );

    const users = await Users.find();
      for(var k=0;k<users.length; k++ )
      {
         await Users.findOneAndUpdate(
          { _id: users[k]._id },
          { amount: updateCasheir.total * users[k].percentage/100 },
          {
            new: true
          }
        );
      }
    return res.status(200).json({
      success:true,
      message:"successfully updated!"
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};